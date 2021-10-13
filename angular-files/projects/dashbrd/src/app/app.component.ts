import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppServiceService } from './app-service.service';
import View from 'ol/View';
// import OSM from 'ol/source/OSM';
import { TileWMS, Cluster, Vector as VectorSource } from "ol/source";
import SourceOSM from 'ol/source/OSM';
import { XYZ } from 'ol/source';
import SourceStamen from 'ol/source/Stamen';
import { defaults, FullScreen, OverviewMap, Rotate, ScaleLine, Attribution, MousePosition } from "ol/control";
import { Vector as VectorLayer } from 'ol/layer';
import LayerGroup from 'ol/layer/Group';
import TileLayer from 'ol/layer/Tile';
import { createEmpty, extend, getWidth, getHeight } from "ol/extent";
import { transform } from "ol/proj";
import LayerSwitcher from 'ol-layerswitcher';
import { GeoJSON } from 'ol/format';
import { Style, Circle, Fill, Stroke, Text } from "ol/style";
import Feature from "ol/Feature";
import { BaseLayerOptions, GroupLayerOptions } from 'ol-layerswitcher';
import Geometry from 'ol/geom/Geometry';
import { MapBrowserEvent } from 'ol';
import {length,point,booleanPointInPolygon} from "@turf/turf";

import MapOL from 'ol/Map';
import { rand_color,beautify_numbers } from '../helpers';
import MultiPoint from 'ol/geom/MultiPoint';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy,OnInit {
    title = 'dashbrd';
    map: MapOL;
    communes: any[] = [];
    bacs_prov: any;
    itineraires_collecte: any[] = [];
    displayedColumns: string[] = [];
    destroy$: Subject<boolean> = new Subject<boolean>();
    constructor(private service:AppServiceService){}
    bases: TileLayer[] = [
        new TileLayer({
            title: 'OSM',
            type: 'base',
            visible: true,
            source: new SourceOSM({
                url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png", crossOrigin:"Anonymous",
                attributions: [
                    "&copy; Younes M'rabti SDMB"
                ]
            })
        } as BaseLayerOptions),
        new TileLayer({
            title: 'Satellite',
            type: 'base',
            visible: false, wrapX: false,
            source: new XYZ({
                attributions: null,
                attributionsCollapsible: false,
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                maxZoom: 23
            })
        } as BaseLayerOptions),
        new TileLayer({
            title: 'Water color',
            type: 'base',
            visible: false,
            source: new SourceStamen({
                layer: 'watercolor'
            })
        } as BaseLayerOptions),
        new TileLayer({
            title: 'Toner',
            type: 'base',
            visible: false,
            source: new SourceStamen({
                layer: 'toner'
            })
        } as BaseLayerOptions),
        new TileLayer({
            title: 'Terrain Labels',
            type: 'base',
            visible: false,
            source: new SourceStamen({
                layer: 'terrain-labels'
            })
        } as BaseLayerOptions),
        new TileLayer({
            title: 'Terrain',
            type: 'base',
            visible: false,
            source: new SourceStamen({
                layer: 'terrain'
            })
        } as BaseLayerOptions),
    ];
    private baseMaps: any = new LayerGroup({
        title: 'Fonts fe Cartes',
        layers: this.bases,
        fold: "close"
    } as GroupLayerOptions);
    // pdf = new jsPDF('landscape', undefined, "a3");
    vector: VectorLayer = new VectorLayer();

    currentResolution: number = 0;

    createClusterStyle = (feature: Feature): Style => {
        // var name = feature.get('name');
        // var magnitude = parseFloat(name.substr(2));
        var radius = 5 //+ 20 * (magnitude - 5);
        return new Style({
            geometry: feature.getGeometry(),
            image: new Circle({
                radius: radius,//feature.get('radius'),
                fill: new Fill({
                    color: [155, 0, 0]
                })
            })
        });
    }
    selectStyleFunction = (feature: Feature): Style[] => {
        var styles_ = [];
        var originalFeatures = feature.get('features');
        // console.log(originalFeatures);
        if (originalFeatures) {
            styles_.push(new Style({
                image: new Circle({
                    radius: feature.get('radius'),
                    fill: new Fill({
                        color: 'rgba(255, 0, 0, 0)'
                    })
                })
            }));
            originalFeatures.forEach((element: Feature<Geometry>) => {
                styles_.push(this.createClusterStyle(element));
            });
        }
        return styles_;
    }
    cluster2 = (url: string, distance: number, bgcolor: string): VectorLayer => {
        let styleFunction = (feature: Feature, resolution: number): Style => {
            if (resolution !== this.currentResolution) {
                calculateClusterInfo(resolution);
                this.currentResolution = resolution;
            }
            let style;
            let size = feature.get('features').length;
            if (size > 1) {
                style = new Style({
                    image: new Circle({
                        radius: 10,//feature.get('radius'),
                        fill: new Fill({
                            color: bgcolor
                        })
                    }),
                    text: new Text({
                        text: size.toString(),
                        fill: new Fill({
                            color: '#fff'
                        }),
                        stroke: new Stroke({
                            color: 'rgba(0, 0, 0, 1)',
                            width: 3
                        })
                    })
                });
            } else {
                let originalFeature = feature.get('features')[0];
                style = this.createClusterStyle(originalFeature);
            }
            return style;
        }

        var vectorSrc = new VectorSource({
            format: new GeoJSON(),
            url,
            /* loader: function (extent, resolution, projection) {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                var onError = function () {
                    console.log("Error xhr");
                }
                xhr.onerror = onError;
                xhr.onload = function () {
                    if (xhr.status == 200) {
                        let geo_json = JSON.parse(xhr.responseText);
                        console.log({geo_json});
                        const format = new GeoJSON();
                        let ftrs2Add = format.readFeatures(url, {  featureProjection: 'EPSG:3857' });
                        console.log({ftrs2Add,geo_json});
                        vectorSrc.addFeatures(ftrs2Add);
                    } else {
                        onError();
                    }
                }
                xhr.send();
            },
            strategy:bbox  */
        });
        let vector = new VectorLayer({
            title: 'BACS Référentiel',
            visible: true,
            source: new Cluster({
                distance,
                source: vectorSrc
            }),
            style: styleFunction
        } as BaseLayerOptions);
        let calculateClusterInfo = (resolution: number): void => {
            // maxFeatureCount;
            var features = vector.getSource().getFeatures();
            var radius: number;
            features.forEach(feature => {
                var originalFeatures = feature.get('features');
                var extent = createEmpty();
                var j = 0, jj = 0;
                for (j = 0, jj = originalFeatures.length; j < jj; ++j) {
                    extend(extent, originalFeatures[j].getGeometry().getExtent());
                }
                // maxFeatureCount = Math.max(maxFeatureCount, jj);
                radius = 0.25 * (getWidth(extent) + getHeight(extent)) /
                    resolution;
                feature.set('radius', radius);
            });
        };
        return vector;
    }
    // url_servey1: string = '/geoserver/dashboard/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dashboard%3Asurvey1&outputFormat=application%2Fjson';
    url_servey: string = '/geojson/fetch/bacs_province';
    commune_selected = new VectorLayer({
        source: new VectorSource(),
        style:new Style({
            stroke: new Stroke({
                color:"red",width:5
            })
        }),
        visible:true
    } as BaseLayerOptions);

    communes_berkane: TileLayer = new TileLayer({
        title: 'Communes de BERKANE',
        // type: 'Overlays',
        visible: true,
        opacity: 0.7,
        source: new TileWMS({
            url: "http://sigsrv:8080/geoserver/sdl/wms",
            params: {
                "LAYERS": "communes_berkane",
                "TRANSPARENT": "true",
                "WIDTH": 640,
                "HEIGHT": 480
            },
        }),
    } as BaseLayerOptions)
    couches: any = new LayerGroup({
        title: 'Couches',
        fold: "open",
        layers: [
            new TileLayer({
                title: 'Secteurs de berkane',
                // type: 'Overlays',
                visible: false,
                opacity: 0.35,
                source: new TileWMS({
                    url: "http://sigsrv:8080/geoserver/dashboard/wms",
                    params: {
                        "LAYERS": "secteurs_berkane",
                        "TRANSPARENT": "true",
                        "WIDTH": 640,
                        "HEIGHT": 480
                    }
                }),
            } as BaseLayerOptions),
            new TileLayer({
                title: 'Itineraires Collecte',
                // type: 'Overlays',
                visible: true,
                source: new TileWMS({
                    url: "http://sigsrv:8080/geoserver/dashboard/wms",
                    params: {
                        "LAYERS": "itineraires10",
                        "TRANSPARENT": "true",
                        "WIDTH": 640,
                        "HEIGHT": 480
                    },
                }),
            } as BaseLayerOptions),
            new TileLayer({
                title: 'Débardeurs',
                // type: 'Overlays',
                visible: true,
                opacity: 0.3,
                source: new TileWMS({
                    url: "http://sigsrv:8080/geoserver/dashboard/wms",
                    params: {
                        "LAYERS": "debardeurs_province",
                        "TRANSPARENT": "true",
                        "WIDTH": 640,
                        "HEIGHT": 480
                    },
                }),
            } as BaseLayerOptions),
            this.communes_berkane,
            new VectorLayer({

            }),
            this.cluster2('http://ymrabti:3080'+this.url_servey, 50, 'red'),
            this.commune_selected
        ]
    } as GroupLayerOptions);
    layerSwitcher: any = new LayerSwitcher({
        tipLabel: "Layer Switcher",
        reverse: true,
        groupSelectStyle: 'group'
    });

    distanceBOM: string;
    distanceBSAT: string;
    NBR_BACS: string="100";
    distanceBalMeca: string;
    distanceBalElec: string;
    distanceDEB: string;
    distanceNettoi: string;
    
    clickMap(): void {
        this.map
    }
    exportMap(evt): void {
        console.log(evt);
    }
    initView: View = new View({
        center: [-263091.64, 4144972.30],//transform([-270494.22186113556, 4146419.677142665], "EPSG:4326", "EPSG:3857"),
        zoom: 10.5
    });
    ngOnInit(): void {
        this.map = new MapOL({
            view: this.initView,
            controls: defaults({
                attribution: false, attributionOptions: {
                    render: () => false
                }
            }).extend([
                this.layerSwitcher,
                new ScaleLine({
                    bar: true,
                    minWidth: 120,
                    steps: 4, text: true
                }),
                new OverviewMap({
                    layers: [this.communes_berkane]
                }),
                new FullScreen({

                }), new Rotate({
                    duration: 500
                }),
                new Attribution({}), new MousePosition({})
            ]),
            layers: [
                this.baseMaps,
                this.couches
            ],
            target: 'ol-map'
        });
        let localmap:MapOL=this.map;
        this.map.on("singleclick", function (evt: MapBrowserEvent<UIEvent>) {
            console.log(localmap.getView().getCenter());
        });
        this.updateIndicateurs();
        this.getCommunes();
    }
    updateIndicateurs():void{
        this.service.getGeoJSONFetch("irineraire_mini_bal_meca").pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
            let global_dist = data.features.reduce((distance: number, feature: any) => {
                let longueur = length(feature, { units: 'meters' });
                let cumul = distance + longueur;
                this.distanceBalMeca = cumul.toString();
                return cumul;
            }, 0);
            this.distanceBalMeca = beautify_numbers(Math.ceil(global_dist));
            // this.distanceBalElec = k.valeur;
        });
        this.service.getGeoJSONFetch("irineraire_mini_bal_elct").pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
            let global_dist = data.features.reduce((distance: number, feature: any) => {
                let longueur = length(feature, { units: 'meters' });
                let cumul = distance + longueur;
                return cumul;
            }, 0);
            this.distanceBalElec = beautify_numbers(Math.ceil(global_dist));
            // this.distanceBalElec = k.valeur;
        });
        this.service.getGeoJSONFetch("irineraire_nettoiement").pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
            let global_dist = data.features.reduce((distance: number, feature: any) => {
                let longueur = length(feature, { units: 'meters' });
                let cumul = distance + longueur;
                return cumul;
            }, 0);
            this.distanceNettoi = beautify_numbers(Math.ceil(global_dist));
            // this.distanceBalElec = k.valeur;
        });
        this.service.getGeoJSONFetch("debardeurs_province").pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
            let global_dist = data.features.reduce((distance: number, feature: any) => {
                let longueur = length(feature, { units: 'meters' });
                let cumul = distance + longueur;
                return cumul;
            }, 0);
            this.distanceDEB = beautify_numbers(Math.ceil(global_dist));
            // this.distanceBalElec = k.valeur;
        });
        this.service.getGeoJSONFetch("itineraires10").pipe(takeUntil(this.destroy$)).subscribe((json: any) => {
            let bsat = beautify_numbers(json.features.filter((i: any) => i.properties.type == "BSAT").reduce((a: number, c: any) => {
                return a + length(c, { units: 'meters' });
            }, 0).toFixed(0))
            let bom = beautify_numbers(json.features.filter((i: any) => i.properties.type == "BOM").reduce((a: number, c: any) => {
                return a + length(c, { units: 'meters' });
            }, 0).toFixed(0));
            this.distanceBOM = bom;
            this.distanceBSAT = bsat;
            this.itineraires_collecte = json;
        });
        this.service.getGeoJSONFetch("survey1").pipe(takeUntil(this.destroy$)).subscribe((json: any) => {
            this.NBR_BACS = json.features.length;
            this.bacs_prov = json;
        });
    }
    getCommunes():void {
        this.service.getGeoJSONFetch("communes_berkane").pipe(takeUntil(this.destroy$)).subscribe((communes: any) => {
            this.communes = communes.features;
            this.displayedColumns = Object.keys(communes.features[0].properties).filter(i=>i!=="geom");
        });
    }
    
    SetInitView(contains:boolean):void{
        if (contains) {
            this.map.setView(new View({
                center: [-263091.64, 4144972.30],
                zoom: 10.75
            }));
            this.commune_selected.setSource(new VectorSource({ }));
        }
    }
    communeClickedPrnt(coordinates: any):void{
        let geojsonObject = {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": coordinates.map((i2: any) => {
                    return i2.map((i: any[]) => i.map(ii => transform(ii, "EPSG:4326", "EPSG:3857")));
                })
            }
        };
        let featres = (new GeoJSON()).readFeatures(geojsonObject);
        let srcc = new VectorSource({ features: featres });
        this.commune_selected.setSource(srcc);
        let width = 3;
        let random_style = (color:string) => new Style({
            stroke: new Stroke({
                color: color,
                width
            })
        });
        let ext1 = this.commune_selected.getSource().getExtent();
        let all_shapes = [];

        featres.forEach(ftre=>{
            // console.log(ftre.getGeometry());
        });
        coordinates[0].forEach(element => {
            all_shapes = all_shapes.concat(element);
        });
        all_shapes.push(all_shapes[0])
        let ext = [
            Math.min(...all_shapes.map(i => i[0])),
            Math.max(...all_shapes.map(i => i[0])),
            Math.min(...all_shapes.map(i => i[1])),
            Math.max(...all_shapes.map(i => i[1])),
        ];

        let min0 = ext[0];
        let max0 = ext[1];
        let min1 = ext[2];
        let max1 = ext[3];
        let x = (min0 + max0) / 2;
        let y = (min1 + max1) / 2;
        let resolution = Math.max(max0 - min0, max1 - min1) * 360;

        let centerCommunes = transform([x, y], "EPSG:4326", "EPSG:3857");
        this.map.getView().setCenter(centerCommunes);
        this.map.getView().setResolution(resolution);
        let mx = 5;
        for (let i = 0; i <= mx; i++) {
            if (i < mx) {
                setTimeout(() => {
                    this.commune_selected.setStyle(random_style(rand_color()));
                }, 100 * i)
            }
            else {
                setTimeout(() => {
                    this.commune_selected.setStyle(random_style("red"));
                }, 100 * i)
            }

        }

        /* let bacs_de_pv = this.bacs_prov.features.filter(feat => {
            let _point_ = point(feat.geometry.coordinates);
            return booleanPointInPolygon(_point_, srcc);
        });
        this.NBR_BACS = bacs_de_pv.length;
        let bacs_province = bacs_de_pv.map((i:any) => transform(i.geometry.coordinates, "EPSG:4326", "EPSG:3857"));
        var geom = new MultiPoint(bacs_province);
        var feature = new Feature(geom);
        source_bacs.clear();
        source_bacs.addFeature(feature);

        let liste_bacs = bacs_de_pv.map(u => u.properties);
        let map = new Map(liste_bacs.map(({ etat_du_ba }) => [etat_du_ba, { name: etat_du_ba, percent: 0, color: rand_color() }]));
        for (let { etat_du_ba } of liste_bacs) map.get(etat_du_ba).percent += 1;
        let result = Array.from(map.values());
        let pie = result.map(com => {
            let name = s(com.name);
            return {
                ...com,
                name,
                percent: (com.percent * 100 / result.reduce((a, c) => a + c.percent, 0)).toFixed(2)
            };
        });
        pieChart(pie, 0, pie_chart2, pie_chart_legend2, false); */
        // console.log(featres[0].getGeometry());
    }
    ngOnDestroy(): void {
    }
}

