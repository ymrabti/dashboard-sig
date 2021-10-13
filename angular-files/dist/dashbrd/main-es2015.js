(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-service.service.ts":
/*!****************************************!*\
  !*** ./src/app/app-service.service.ts ***!
  \****************************************/
/*! exports provided: AppServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServiceService", function() { return AppServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AppServiceService {
    constructor(http) {
        this.http = http;
        this.rootURL = '/geojson';
    }
    getGeoJSON(layer) {
        return this.http.get(this.rootURL + '/dashboard/' + layer);
    }
    getGeoJSONFetch(layer) {
        return this.http.get(this.rootURL + '/fetch/' + layer);
    }
}
AppServiceService.ɵfac = function AppServiceService_Factory(t) { return new (t || AppServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppServiceService, factory: AppServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/View */ "../../node_modules/ol/View.js");
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source */ "../../node_modules/ol/source.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/OSM */ "../../node_modules/ol/source/OSM.js");
/* harmony import */ var ol_source_Stamen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/Stamen */ "../../node_modules/ol/source/Stamen.js");
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/control */ "../../node_modules/ol/control.js");
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/layer */ "../../node_modules/ol/layer.js");
/* harmony import */ var ol_layer_Group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/layer/Group */ "../../node_modules/ol/layer/Group.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/layer/Tile */ "../../node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_extent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/extent */ "../../node_modules/ol/extent.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/proj */ "../../node_modules/ol/proj.js");
/* harmony import */ var ol_layerswitcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol-layerswitcher */ "../../node_modules/ol-layerswitcher/dist/ol-layerswitcher.js");
/* harmony import */ var ol_layerswitcher__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ol_layerswitcher__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ol_format__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/format */ "../../node_modules/ol/format.js");
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/style */ "../../node_modules/ol/style.js");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @turf/turf */ "../../node_modules/@turf/turf/turf.min.js");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_turf_turf__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/Map */ "../../node_modules/ol/Map.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-service.service */ "./src/app/app-service.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _indicateurs_indicateurs_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./indicateurs/indicateurs.component */ "./src/app/indicateurs/indicateurs.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _charts_charts_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./charts/charts.component */ "./src/app/charts/charts.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_list_select_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./select-list/select-list.component */ "./src/app/select-list/select-list.component.ts");




// import OSM from 'ol/source/OSM';



























function AppComponent_app_select_list_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-select-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("commune_click", function AppComponent_app_select_list_4_Template_app_select_list_commune_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.communeClickedPrnt($event); })("setView", function AppComponent_app_select_list_4_Template_app_select_list_setView_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.SetInitView($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("communes", ctx_r0.communes);
} }
function AppComponent_ng_container_13_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, col_r7), " ");
} }
function AppComponent_ng_container_13_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const col_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.properties[col_r7], " ");
} }
function AppComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_13_th_1_Template, 3, 3, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_container_13_td_2_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", col_r7);
} }
function AppComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
function AppComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
class AppComponent {
    constructor(service) {
        this.service = service;
        this.title = 'dashbrd';
        this.communes = [];
        this.itineraires_collecte = [];
        this.displayedColumns = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.bases = [
            new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__["default"]({
                title: 'OSM',
                type: 'base',
                visible: true,
                source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__["default"]({
                    // 
                    attributions: [
                        "@ Younes M'rabti SDMB"
                    ]
                })
            }),
            new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__["default"]({
                title: 'Satellite',
                type: 'base',
                visible: false, wrapX: false,
                source: new ol_source__WEBPACK_IMPORTED_MODULE_4__["XYZ"]({
                    attributions: null,
                    attributionsCollapsible: false,
                    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                    maxZoom: 23
                })
            }),
            new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__["default"]({
                title: 'Water color',
                type: 'base',
                visible: false,
                source: new ol_source_Stamen__WEBPACK_IMPORTED_MODULE_6__["default"]({
                    layer: 'watercolor'
                })
            }),
            new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__["default"]({
                title: 'Toner',
                type: 'base',
                visible: false,
                source: new ol_source_Stamen__WEBPACK_IMPORTED_MODULE_6__["default"]({
                    layer: 'toner'
                })
            }),
            new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__["default"]({
                title: 'Terrain Labels',
                type: 'base',
                visible: false,
                source: new ol_source_Stamen__WEBPACK_IMPORTED_MODULE_6__["default"]({
                    layer: 'terrain-labels'
                })
            }),
            new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__["default"]({
                title: 'Terrain',
                type: 'base',
                visible: false,
                source: new ol_source_Stamen__WEBPACK_IMPORTED_MODULE_6__["default"]({
                    layer: 'terrain'
                })
            }),
        ];
        this.baseMaps = new ol_layer_Group__WEBPACK_IMPORTED_MODULE_9__["default"]({
            title: 'Fonts fe Cartes',
            layers: this.bases,
            fold: "close"
        });
        // pdf = new jsPDF('landscape', undefined, "a3");
        this.vector = new ol_layer__WEBPACK_IMPORTED_MODULE_8__["Vector"]();
        this.currentResolution = 0;
        this.createClusterStyle = (feature) => {
            // var name = feature.get('name');
            // var magnitude = parseFloat(name.substr(2));
            var radius = 5; //+ 20 * (magnitude - 5);
            return new ol_style__WEBPACK_IMPORTED_MODULE_15__["Style"]({
                geometry: feature.getGeometry(),
                image: new ol_style__WEBPACK_IMPORTED_MODULE_15__["Circle"]({
                    radius: radius,
                    fill: new ol_style__WEBPACK_IMPORTED_MODULE_15__["Fill"]({
                        color: [155, 0, 0]
                    })
                })
            });
        };
        this.selectStyleFunction = (feature) => {
            var styles_ = [];
            var originalFeatures = feature.get('features');
            // console.log(originalFeatures);
            if (originalFeatures) {
                styles_.push(new ol_style__WEBPACK_IMPORTED_MODULE_15__["Style"]({
                    image: new ol_style__WEBPACK_IMPORTED_MODULE_15__["Circle"]({
                        radius: feature.get('radius'),
                        fill: new ol_style__WEBPACK_IMPORTED_MODULE_15__["Fill"]({
                            color: 'rgba(255, 0, 0, 0)'
                        })
                    })
                }));
                originalFeatures.forEach((element) => {
                    styles_.push(this.createClusterStyle(element));
                });
            }
            return styles_;
        };
        this.cluster2 = (url, distance, bgcolor) => {
            let styleFunction = (feature, resolution) => {
                if (resolution !== this.currentResolution) {
                    calculateClusterInfo(resolution);
                    this.currentResolution = resolution;
                }
                let style;
                let size = feature.get('features').length;
                if (size > 1) {
                    style = new ol_style__WEBPACK_IMPORTED_MODULE_15__["Style"]({
                        image: new ol_style__WEBPACK_IMPORTED_MODULE_15__["Circle"]({
                            radius: 10,
                            fill: new ol_style__WEBPACK_IMPORTED_MODULE_15__["Fill"]({
                                color: bgcolor
                            })
                        }),
                        text: new ol_style__WEBPACK_IMPORTED_MODULE_15__["Text"]({
                            text: size.toString(),
                            fill: new ol_style__WEBPACK_IMPORTED_MODULE_15__["Fill"]({
                                color: '#fff'
                            }),
                            stroke: new ol_style__WEBPACK_IMPORTED_MODULE_15__["Stroke"]({
                                color: 'rgba(0, 0, 0, 1)',
                                width: 3
                            })
                        })
                    });
                }
                else {
                    let originalFeature = feature.get('features')[0];
                    style = this.createClusterStyle(originalFeature);
                }
                return style;
            };
            var vectorSrc = new ol_source__WEBPACK_IMPORTED_MODULE_4__["Vector"]({
                format: new ol_format__WEBPACK_IMPORTED_MODULE_14__["GeoJSON"](),
                url,
            });
            let vector = new ol_layer__WEBPACK_IMPORTED_MODULE_8__["Vector"]({
                title: 'BACS Référentiel',
                visible: true,
                source: new ol_source__WEBPACK_IMPORTED_MODULE_4__["Cluster"]({
                    distance,
                    source: vectorSrc
                }),
                style: styleFunction
            });
            let calculateClusterInfo = (resolution) => {
                // maxFeatureCount;
                var features = vector.getSource().getFeatures();
                var feature, radius;
                for (var i = features.length - 1; i >= 0; --i) {
                    feature = features[i];
                    var originalFeatures = feature.get('features');
                    var extent = Object(ol_extent__WEBPACK_IMPORTED_MODULE_11__["createEmpty"])();
                    var j = 0, jj = 0;
                    for (j = 0, jj = originalFeatures.length; j < jj; ++j) {
                        Object(ol_extent__WEBPACK_IMPORTED_MODULE_11__["extend"])(extent, originalFeatures[j].getGeometry().getExtent());
                    }
                    // maxFeatureCount = Math.max(maxFeatureCount, jj);
                    radius = 0.25 * (Object(ol_extent__WEBPACK_IMPORTED_MODULE_11__["getWidth"])(extent) + Object(ol_extent__WEBPACK_IMPORTED_MODULE_11__["getHeight"])(extent)) /
                        resolution;
                    feature.set('radius', radius);
                }
            };
            return vector;
        };
        // url_servey1: string = '/geoserver/dashboard/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dashboard%3Asurvey1&outputFormat=application%2Fjson';
        this.url_servey = '/geojson/fetch/bacs_province';
        this.commune_selected = new ol_layer__WEBPACK_IMPORTED_MODULE_8__["Vector"]({
            source: new ol_source__WEBPACK_IMPORTED_MODULE_4__["Vector"](),
            style: new ol_style__WEBPACK_IMPORTED_MODULE_15__["Style"]({
                stroke: new ol_style__WEBPACK_IMPORTED_MODULE_15__["Stroke"]({
                    color: "red", width: 5
                })
            }),
            visible: true
        });
        this.communes_berkane = new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__["default"]({
            title: 'Communes de BERKANE',
            // type: 'Overlays',
            visible: true,
            opacity: 0.7,
            source: new ol_source__WEBPACK_IMPORTED_MODULE_4__["TileWMS"]({
                url: "http://sigsrv:8080/geoserver/dashboard/wms",
                params: {
                    "LAYERS": "communes_de_berkane",
                    "TRANSPARENT": "true",
                    "WIDTH": 640,
                    "HEIGHT": 480
                },
            }),
        });
        this.couches = new ol_layer_Group__WEBPACK_IMPORTED_MODULE_9__["default"]({
            title: 'Couches',
            fold: "open",
            layers: [
                new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__["default"]({
                    title: 'Secteurs de berkane',
                    // type: 'Overlays',
                    visible: false,
                    opacity: 0.35,
                    source: new ol_source__WEBPACK_IMPORTED_MODULE_4__["TileWMS"]({
                        url: "http://sigsrv:8080/geoserver/dashboard/wms",
                        params: {
                            "LAYERS": "secteurs_berkane",
                            "TRANSPARENT": "true",
                            "WIDTH": 640,
                            "HEIGHT": 480
                        }
                    }),
                }),
                new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__["default"]({
                    title: 'Itineraires Collecte',
                    // type: 'Overlays',
                    visible: true,
                    source: new ol_source__WEBPACK_IMPORTED_MODULE_4__["TileWMS"]({
                        url: "http://sigsrv:8080/geoserver/dashboard/wms",
                        params: {
                            "LAYERS": "itineraires10",
                            "TRANSPARENT": "true",
                            "WIDTH": 640,
                            "HEIGHT": 480
                        },
                    }),
                }),
                new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__["default"]({
                    title: 'Débardeurs',
                    // type: 'Overlays',
                    visible: true,
                    opacity: 0.3,
                    source: new ol_source__WEBPACK_IMPORTED_MODULE_4__["TileWMS"]({
                        url: "http://sigsrv:8080/geoserver/dashboard/wms",
                        params: {
                            "LAYERS": "debardeurs_province",
                            "TRANSPARENT": "true",
                            "WIDTH": 640,
                            "HEIGHT": 480
                        },
                    }),
                }),
                this.communes_berkane,
                new ol_layer__WEBPACK_IMPORTED_MODULE_8__["Vector"]({}),
                this.cluster2(this.url_servey, 50, 'red'),
                this.commune_selected
            ]
        });
        this.layerSwitcher = new ol_layerswitcher__WEBPACK_IMPORTED_MODULE_13___default.a({
            tipLabel: "Layer Switcher",
            reverse: true,
            groupSelectStyle: 'group'
        });
        this.NBR_BACS = "100";
        this.initView = new ol_View__WEBPACK_IMPORTED_MODULE_3__["default"]({
            center: [-263091.64, 4144972.30],
            zoom: 10.5
        });
    }
    clickMap() {
        this.map;
    }
    exportMap(evt) {
        console.log(evt);
    }
    ngOnInit() {
        this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_17__["default"]({
            view: this.initView,
            controls: Object(ol_control__WEBPACK_IMPORTED_MODULE_7__["defaults"])({
                attribution: false, attributionOptions: {
                    render: () => false
                }
            }).extend([
                this.layerSwitcher,
                new ol_control__WEBPACK_IMPORTED_MODULE_7__["ScaleLine"]({
                    bar: true,
                    minWidth: 120,
                    steps: 4, text: true
                }),
                new ol_control__WEBPACK_IMPORTED_MODULE_7__["OverviewMap"]({
                    layers: [this.communes_berkane]
                }),
                new ol_control__WEBPACK_IMPORTED_MODULE_7__["FullScreen"]({}), new ol_control__WEBPACK_IMPORTED_MODULE_7__["Rotate"]({
                    duration: 500
                }),
                new ol_control__WEBPACK_IMPORTED_MODULE_7__["Attribution"]({}), new ol_control__WEBPACK_IMPORTED_MODULE_7__["MousePosition"]({})
            ]),
            layers: [
                this.baseMaps,
                this.couches
            ],
            target: 'ol-map'
        });
        let localmap = this.map;
        this.map.on("singleclick", function (evt) {
            console.log(localmap.getView().getCenter());
        });
        this.updateIndicateurs();
        this.getCommunes();
    }
    updateIndicateurs() {
        this.service.getGeoJSONFetch("irineraire_mini_bal_meca").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((data) => {
            let global_dist = data.features.reduce((distance, feature) => {
                let longueur = Object(_turf_turf__WEBPACK_IMPORTED_MODULE_16__["length"])(feature, { units: 'meters' });
                let cumul = distance + longueur;
                this.distanceBalMeca = cumul.toString();
                return cumul;
            }, 0);
            this.distanceBalMeca = Object(_helpers__WEBPACK_IMPORTED_MODULE_18__["beautify_numbers"])(Math.ceil(global_dist));
            // this.distanceBalElec = k.valeur;
        });
        this.service.getGeoJSONFetch("irineraire_mini_bal_elct").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((data) => {
            let global_dist = data.features.reduce((distance, feature) => {
                let longueur = Object(_turf_turf__WEBPACK_IMPORTED_MODULE_16__["length"])(feature, { units: 'meters' });
                let cumul = distance + longueur;
                return cumul;
            }, 0);
            this.distanceBalElec = Object(_helpers__WEBPACK_IMPORTED_MODULE_18__["beautify_numbers"])(Math.ceil(global_dist));
            // this.distanceBalElec = k.valeur;
        });
        this.service.getGeoJSONFetch("irineraire_nettoiement").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((data) => {
            let global_dist = data.features.reduce((distance, feature) => {
                let longueur = Object(_turf_turf__WEBPACK_IMPORTED_MODULE_16__["length"])(feature, { units: 'meters' });
                let cumul = distance + longueur;
                return cumul;
            }, 0);
            this.distanceNettoi = Object(_helpers__WEBPACK_IMPORTED_MODULE_18__["beautify_numbers"])(Math.ceil(global_dist));
            // this.distanceBalElec = k.valeur;
        });
        this.service.getGeoJSONFetch("debardeurs_province").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((data) => {
            let global_dist = data.features.reduce((distance, feature) => {
                let longueur = Object(_turf_turf__WEBPACK_IMPORTED_MODULE_16__["length"])(feature, { units: 'meters' });
                let cumul = distance + longueur;
                return cumul;
            }, 0);
            this.distanceDEB = Object(_helpers__WEBPACK_IMPORTED_MODULE_18__["beautify_numbers"])(Math.ceil(global_dist));
            // this.distanceBalElec = k.valeur;
        });
        this.service.getGeoJSONFetch("itineraires10").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((json) => {
            let bsat = Object(_helpers__WEBPACK_IMPORTED_MODULE_18__["beautify_numbers"])(json.features.filter((i) => i.properties.type == "BSAT").reduce((a, c) => {
                return a + Object(_turf_turf__WEBPACK_IMPORTED_MODULE_16__["length"])(c, { units: 'meters' });
            }, 0).toFixed(0));
            let bom = Object(_helpers__WEBPACK_IMPORTED_MODULE_18__["beautify_numbers"])(json.features.filter((i) => i.properties.type == "BOM").reduce((a, c) => {
                return a + Object(_turf_turf__WEBPACK_IMPORTED_MODULE_16__["length"])(c, { units: 'meters' });
            }, 0).toFixed(0));
            this.distanceBOM = bom;
            this.distanceBSAT = bsat;
            this.itineraires_collecte = json;
        });
        this.service.getGeoJSONFetch("survey1").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((json) => {
            this.NBR_BACS = json.features.length;
            this.bacs_prov = json;
        });
    }
    getCommunes() {
        this.service.getGeoJSONFetch("communes_berkane").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((communes) => {
            this.communes = communes.features;
            this.displayedColumns = Object.keys(communes.features[0].properties).filter(i => i !== "geom");
        });
    }
    SetInitView(contains) {
        if (contains) {
            this.map.setView(new ol_View__WEBPACK_IMPORTED_MODULE_3__["default"]({
                center: [-263091.64, 4144972.30],
                zoom: 10.75
            }));
            this.commune_selected.setSource(new ol_source__WEBPACK_IMPORTED_MODULE_4__["Vector"]({}));
        }
    }
    communeClickedPrnt(coordinates) {
        let geojsonObject = {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": coordinates.map((i2) => {
                    return i2.map((i) => i.map(ii => Object(ol_proj__WEBPACK_IMPORTED_MODULE_12__["transform"])(ii, "EPSG:4326", "EPSG:3857")));
                })
            }
        };
        let featres = (new ol_format__WEBPACK_IMPORTED_MODULE_14__["GeoJSON"]()).readFeatures(geojsonObject);
        let srcc = new ol_source__WEBPACK_IMPORTED_MODULE_4__["Vector"]({ features: featres });
        this.commune_selected.setSource(srcc);
        let width = 3;
        let random_style = (color) => new ol_style__WEBPACK_IMPORTED_MODULE_15__["Style"]({
            stroke: new ol_style__WEBPACK_IMPORTED_MODULE_15__["Stroke"]({
                color: color,
                width
            })
        });
        let ext1 = this.commune_selected.getSource().getExtent();
        let all_shapes = [];
        featres.forEach(ftre => {
            // console.log(ftre.getGeometry());
        });
        coordinates[0].forEach(element => {
            all_shapes = all_shapes.concat(element);
        });
        all_shapes.push(all_shapes[0]);
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
        let centerCommunes = Object(ol_proj__WEBPACK_IMPORTED_MODULE_12__["transform"])([x, y], "EPSG:4326", "EPSG:3857");
        this.map.getView().setCenter(centerCommunes);
        this.map.getView().setResolution(resolution);
        let mx = 5;
        for (let i = 0; i <= mx; i++) {
            if (i < mx) {
                setTimeout(() => {
                    this.commune_selected.setStyle(random_style(Object(_helpers__WEBPACK_IMPORTED_MODULE_18__["rand_color"])()));
                }, 100 * i);
            }
            else {
                setTimeout(() => {
                    this.commune_selected.setStyle(random_style("red"));
                }, 100 * i);
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
    ngOnDestroy() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_19__["AppServiceService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 23, vars: 13, consts: [[3, "distanceDEB", "distanceNettoi", "distanceBalElec", "distanceBalMeca", "distanceBSAT", "distanceBOM", "NBR_BACS", "distanceDEBChange", "distanceNettoiChange", "distanceBalElecChange", "distanceBalMecaChange", "distanceBSATChange", "distanceBOMChange", "NBR_BACSChange"], [1, "row", "dark"], ["id", "communes_berkane", 1, "col-md-2", "division", 2, "color", "rgb(161, 161, 161)"], [3, "communes", "commune_click", "setView", 4, "ngIf"], ["id", "carte", 1, "col-lg-7"], [1, "col-md-3", "leftaside"], [3, "bacs_prov", "bacs_provChange"], ["id", "tabs"], ["label", "Communes"], ["mat-table", "", 1, "table", "table-hover", "table-dark", "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["label", "Itineraires de collecte"], ["label", "Bacs de R\u00E9ference"], ["label", "Bacs en temps r\u00E9el"], [3, "communes", "commune_click", "setView"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-indicateurs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("distanceDEBChange", function AppComponent_Template_app_indicateurs_distanceDEBChange_1_listener($event) { return ctx.distanceDEB = $event; })("distanceNettoiChange", function AppComponent_Template_app_indicateurs_distanceNettoiChange_1_listener($event) { return ctx.distanceNettoi = $event; })("distanceBalElecChange", function AppComponent_Template_app_indicateurs_distanceBalElecChange_1_listener($event) { return ctx.distanceBalElec = $event; })("distanceBalMecaChange", function AppComponent_Template_app_indicateurs_distanceBalMecaChange_1_listener($event) { return ctx.distanceBalMeca = $event; })("distanceBSATChange", function AppComponent_Template_app_indicateurs_distanceBSATChange_1_listener($event) { return ctx.distanceBSAT = $event; })("distanceBOMChange", function AppComponent_Template_app_indicateurs_distanceBOMChange_1_listener($event) { return ctx.distanceBOM = $event; })("NBR_BACSChange", function AppComponent_Template_app_indicateurs_NBR_BACSChange_1_listener($event) { return ctx.NBR_BACS = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_select_list_4_Template, 1, 1, "app-select-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-charts", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bacs_provChange", function AppComponent_Template_app_charts_bacs_provChange_8_listener($event) { return ctx.bacs_prov = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_ng_container_13_Template, 3, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_tr_14_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_tr_15_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Content 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Content 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-tab", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Content 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("distanceDEB", ctx.distanceDEB)("distanceNettoi", ctx.distanceNettoi)("distanceBalElec", ctx.distanceBalElec)("distanceBalMeca", ctx.distanceBalMeca)("distanceBSAT", ctx.distanceBSAT)("distanceBOM", ctx.distanceBOM)("NBR_BACS", ctx.NBR_BACS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.communes.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bacs_prov", ctx.bacs_prov);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.communes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"], _indicateurs_indicateurs_component__WEBPACK_IMPORTED_MODULE_21__["IndicateursComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _map_map_component__WEBPACK_IMPORTED_MODULE_23__["MapComponent"], _charts_charts_component__WEBPACK_IMPORTED_MODULE_24__["ChartsComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTab"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatRowDef"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterOutlet"], _select_list_select_list_component__WEBPACK_IMPORTED_MODULE_28__["SelectListComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__["UpperCasePipe"]], styles: [".mat-elevation-z8[_ngcontent-%COMP%]{\r\n    max-height: 350px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2Rhc2hicmQvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJwcm9qZWN0cy9kYXNoYnJkL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWVsZXZhdGlvbi16OHtcclxuICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _app_service_service__WEBPACK_IMPORTED_MODULE_19__["AppServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _charts_charts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charts/charts.component */ "./src/app/charts/charts.component.ts");
/* harmony import */ var _indicateurs_indicateurs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./indicateurs/indicateurs.component */ "./src/app/indicateurs/indicateurs.component.ts");
/* harmony import */ var _select_list_select_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./select-list/select-list.component */ "./src/app/select-list/select-list.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _charts_charts_component__WEBPACK_IMPORTED_MODULE_7__["ChartsComponent"],
        _indicateurs_indicateurs_component__WEBPACK_IMPORTED_MODULE_8__["IndicateursComponent"],
        _select_list_select_list_component__WEBPACK_IMPORTED_MODULE_9__["SelectListComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _charts_charts_component__WEBPACK_IMPORTED_MODULE_7__["ChartsComponent"],
                    _indicateurs_indicateurs_component__WEBPACK_IMPORTED_MODULE_8__["IndicateursComponent"],
                    _select_list_select_list_component__WEBPACK_IMPORTED_MODULE_9__["SelectListComponent"]
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/charts/charts.component.ts":
/*!********************************************!*\
  !*** ./src/app/charts/charts.component.ts ***!
  \********************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ChartsComponent_div_6__svg_svg_3__svg_path_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 14);
} if (rf & 2) {
    const chart_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", chart_r19.d)("stroke", chart_r19.stroke)("fill", chart_r19.fill);
} }
function ChartsComponent_div_6__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChartsComponent_div_6__svg_svg_3__svg_path_1_Template, 1, 3, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.pie_prov);
} }
function ChartsComponent_div_6__svg_svg_4__svg_path_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 14);
} if (rf & 2) {
    const chart_prv_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", chart_prv_r23.d)("stroke", chart_prv_r23.stroke)("fill", chart_prv_r23.fill);
} }
function ChartsComponent_div_6__svg_svg_4__svg_text_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chart_txt_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", chart_txt_r25.x)("y", chart_txt_r25.y)("fill", chart_txt_r25.fill);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chart_txt_r25.title);
} }
function ChartsComponent_div_6__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChartsComponent_div_6__svg_svg_4__svg_path_1_Template, 1, 3, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChartsComponent_div_6__svg_svg_4__svg_text_2_Template, 2, 4, "text", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.pie_prov_legend);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.pie_prov_txt);
} }
function ChartsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "R\u00E9partition des bacs par province");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChartsComponent_div_6__svg_svg_3_Template, 2, 1, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChartsComponent_div_6__svg_svg_4_Template, 3, 2, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "canvas", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "canvas", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.pie_prov);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.pie_prov_legend);
} }
function ChartsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00C9tats des bacs sur la commune");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChartsComponent {
    constructor() {
        this.length_swips = 2;
        this.pie_prov = [];
        this.pie_prov_legend = [];
        this.pie_prov_txt = [];
        this.currentPage = 1;
    }
    ngOnInit() {
        let pie_sti = setInterval(() => {
            console.log(this.bacs_prov);
            if (this.bacs_prov.length !== 0) {
                clearInterval(pie_sti);
                this.pie(this.bacs_prov);
            }
        }, 1000);
        // this.pie(this.bacs_prov);this.pieChart(pie, 0, 'pie_chart', 'pie_chart_legend', true);
    }
    increment() {
        // let courbes = document.querySelectorAll(".courbe1");
        this.currentPage++;
        if (this.currentPage > this.length_swips) {
            this.currentPage = 1;
        }
    }
    decrement() {
        // let courbes = document.querySelectorAll(".courbe1");
        this.currentPage--;
        if (this.currentPage <= 0) {
            this.currentPage = this.length_swips;
        }
    }
    pie(json) {
        let liste_bacs = json.features.map((u) => u.properties);
        let map = new Map(liste_bacs.map(({ Commune_Fr }) => [Commune_Fr, { name: Commune_Fr, percent: 0, color: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["rand_color"])() }]));
        for (let { Commune_Fr } of liste_bacs)
            map.get(Commune_Fr).percent += 1;
        let result = Array.from(map.values());
        let pie = result.map((com) => (Object.assign(Object.assign({}, com), { percent: (com.percent * 100 / json.features.length).toFixed(2) })));
        this.pieChart(pie, 0, '', '', true);
    }
    pieChart(params, r, piechart, piechartlegend, province_chart) {
        let rayon = 150;
        let angle_start = 90;
        /*
        piechart.empty();
        piechartlegend.empty();
        let seuil = 10;let chartsactif = params.sort((a, b) => b.percent - a.percent).filter((_u, i) => i <= seuil);
        let chartsinactif = params.sort((a, b) => b.percent - a.percent).filter((_u, i) => i > seuil);
        let autres_names = chartsinactif.reduce((a, c, i) => {
            return a + c.name + ", ";
        }, "").split('').reduce((a, c, i) => {
            let curr = i % 20 === 0 && i !== 0 ? c + "<br>" : c;
            return a + curr;
        }, "");
        let autres = {
            name: `Autres (${autres_names})`, color: rand_color(),
            percent: chartsinactif.reduce((a, c) => a + parseFloat(c.percent), 0).toFixed(2)
        } */
        /* canvas_charte.width = 400;
        canvas_charte.height = 400;
        canvas_legend.width = 400;
        canvas_legend.height = 800; */
        // console.log(province_chart);
        /* let ctx_charte = canvas_charte.getContext("2d");
        let ctx_legend = canvas_legend.getContext("2d");
        let canvas_charte_width = canvas_charte.width;
        let canvas_charte_height = canvas_charte.height;
        let canvas_legend_width = canvas_legend.width;
        let canvas_legend_height = canvas_legend.height;
        if (province_chart) {
            ctx_legend.clearRect(0, 0, canvas_legend_width, canvas_legend_height);
            ctx_charte.clearRect(0, 0, canvas_charte_width, canvas_charte_height);
            ctx_legend.fillStyle = "white";
            ctx_legend.fillRect(0, 0, canvas_legend_width, canvas_legend_height);
            ctx_charte.fillStyle = "white";
            ctx_charte.fillRect(0, 0, canvas_legend_width, canvas_legend_height);
        } */
        // chartsactif.concat(chartsinactif.length !== 0 ? autres : [])
        params.sort((a, b) => b.percent - a.percent)
            .forEach((chart, i) => {
            let angle = chart.percent * 3.6;
            let move = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["pt_cir"])(r, (angle_start + angle / 2));
            let pt_s = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["pt_cir"])(rayon, angle_start, move.x, move.y);
            let pt_e = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["pt_cir"])(rayon, angle_start + angle, move.x, move.y);
            let xs = pt_s.x + move.x;
            let ys = pt_s.x + move.y;
            let xe = pt_e.x + move.x;
            let ye = pt_e.x + move.y;
            let title = `${chart.name} (${chart.percent} %)`;
            let d1 = `M${xs + " " + ys},${move.p},${xe + " " + ye}A${rayon} ${rayon} 0 ${chart.percent >= 50 ? 1 : 0} 0 ${xs + " " + ys}`;
            let d2 = `M${pt_s.p},${move.p},${pt_e.p}A${rayon} ${rayon} 0 ${chart.percent >= 50 ? 1 : 0} 0 ${pt_s.p}`;
            let h = 40, p = 10, l = 40, pl = 10;
            let x = 2 * pl + l;
            let y = (h + p) * i + h;
            /* if (province_chart) {
                let l = 30, h = 30, p = 10, pl = 10;
                let x = 2 * pl + l;
                let y = (h + p) * i + h;
                ctx_legend.font = "20px Arial";
                ctx_charte.beginPath();
                ctx_charte.moveTo(canvas_charte_width / 2, canvas_charte_height / 2);
                ctx_charte.arc(
                    canvas_charte_width / 2, canvas_charte_height / 2,
                    0.95 * Math.min(canvas_charte_width / 2, canvas_charte_height / 2),
                    deg2rad(angle_start), deg2rad(angle_start + angle), false
                );
                ctx_charte.fillStyle = chart.color;
                ctx_charte.fill();
                ctx_charte.closePath();
                ctx_legend.fillStyle = chart.color;
                ctx_legend.fillRect(pl, (h + p) * i, l, h);
                ctx_legend.fillStyle = "black";
                ctx_legend.fillText(title, x, y);
            } */
            // ctx.stroke();
            let piechart;
            if (params.length == 1) {
                piechart = { r: rayon, stroke: "red", fill: chart.color, style: "stroke-width:0;", title };
            }
            else {
                piechart = { d: d2, stroke: "red", fill: chart.color, style: "stroke-width:0;", title };
            }
            addNs(piechart, "path", "piechart[0]");
            let pilegendrects = { d: `m${pl} ${(h + p) * i},${l} 0,0 ${h},${-l} 0,0 ${-h}z`, stroke: "red", fill: chart.color, style: "stroke-width:1;" };
            let pilegendtxt = { x, y, fill: 'white', stroke: "black", style: `font-size:22;font-family:"Arial";`, title };
            addNs(pilegendrects, "path", piechartlegend[0]);
            addNs(pilegendtxt, "text", piechartlegend[0], title);
            angle_start += angle;
            this.pie_prov.push(piechart);
            this.pie_prov_legend.push(pilegendrects);
            this.pie_prov_txt.push(pilegendtxt);
        });
        /* document.body.appendChild(canvas_charte);
        document.body.appendChild(canvas_legend);
        return params.sort((a, b) => a.percent - b.percent); */
    }
}
ChartsComponent.ɵfac = function ChartsComponent_Factory(t) { return new (t || ChartsComponent)(); };
ChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartsComponent, selectors: [["app-charts"]], inputs: { bacs_prov: "bacs_prov" }, decls: 8, vars: 2, consts: [["id", "courbe0"], [1, "btn", "btn-dark", "arrowbtnC1L", 2, "float", "left", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "btn", "btn-dark", "arrowbtnC1R", 2, "float", "right", "top", "0%", 3, "click"], [1, "fas", "fa-arrow-right"], ["class", "courbe1", "id", "courbe1-1", 4, "ngIf"], ["class", "courbe1", "id", "courbe1-2", 4, "ngIf"], ["id", "courbe1-1", 1, "courbe1"], ["width", "100%", "viewBox", "-200,-200,400,400", "id", "pie_chart", 4, "ngIf"], ["width", "100%", "viewBox", "0,0,600,800", "id", "pie_chart_legend", 4, "ngIf"], ["id", "pie_canv_ch", "width", "400", "height", "400", 2, "border", "1px solid #d3d3d3", "display", "none"], ["id", "pie_canv_lg", "width", "400", "height", "600", 2, "border", "1px solid #d3d3d3", "display", "none"], ["width", "100%", "viewBox", "-200,-200,400,400", "id", "pie_chart"], ["style", "stroke-width: 0;", 4, "ngFor", "ngForOf"], [2, "stroke-width", "0"], ["width", "100%", "viewBox", "0,0,600,800", "id", "pie_chart_legend"], ["style", "font-size: 22;font-family: 'Times New Roman', Times, serif;", 4, "ngFor", "ngForOf"], [2, "font-size", "22", "font-family", "'Times New Roman', Times, serif"], ["id", "courbe1-2", 1, "courbe1"], ["width", "100%", "viewBox", "-200,-200,400,400", "id", "pie_chart2"], ["width", "100%", "viewBox", "0,0,400,400", "id", "pie_chart_legend2"]], template: function ChartsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsComponent_Template_button_click_1_listener() { return ctx.decrement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsComponent_Template_button_click_3_listener() { return ctx.increment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChartsComponent_div_6_Template, 7, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChartsComponent_div_7_Template, 5, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage == 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kYXNoYnJkL3NyYy9hcHAvY2hhcnRzL2NoYXJ0cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-charts',
                templateUrl: './charts.component.html',
                styleUrls: ['./charts.component.css']
            }]
    }], function () { return []; }, { bacs_prov: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
function addNs(..._args) {
}


/***/ }),

/***/ "./src/app/indicateurs/indicateurs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/indicateurs/indicateurs.component.ts ***!
  \******************************************************/
/*! exports provided: IndicateursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicateursComponent", function() { return IndicateursComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IndicateursComponent {
    constructor() {
    }
    bacClicked() {
        console.log("bacClicked");
    }
    showConfig() {
        console.log("Config");
    }
    ngOnInit() {
    }
}
IndicateursComponent.ɵfac = function IndicateursComponent_Factory(t) { return new (t || IndicateursComponent)(); };
IndicateursComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndicateursComponent, selectors: [["app-indicateurs"]], inputs: { distanceBalMeca: "distanceBalMeca", distanceBalElec: "distanceBalElec", distanceNettoi: "distanceNettoi", distanceDEB: "distanceDEB", NBR_BACS: "NBR_BACS", distanceBOM: "distanceBOM", distanceBSAT: "distanceBSAT" }, decls: 75, vars: 7, consts: [[1, "row"], [1, "col-md-1"], [1, "col-md-2"], [1, "indicateur"], [1, "agenrem"], ["data-view", "Distance", 1, "logo-genre"], ["width", "50", "height", "50", "viewbox", "-50,-50,100,100"], ["x1", "-45", "y1", "-45", "x2", "45", "y2", "45", "stroke", "#987db7", "stroke-width", "5"], ["id", "distanceNettoi", 1, "logoaexc", 2, "margin-bottom", "36%", "font-size", "24px"], [1, "aexc"], [1, "logo"], ["x1", "-45", "y1", "-45", "x2", "45", "y2", "45", "stroke", "#eeee00", "stroke-width", "5"], ["id", "distanceBOM", 1, "logoaexc", 2, "margin-bottom", "36%", "font-size", "24px"], ["id", "distanceBSAT", 1, "logoaexc", 2, "margin-bottom", "36%", "font-size", "24px"], [1, "adec"], ["x1", "-45", "y1", "-45", "x2", "45", "y2", "45", "stroke", "#e77148", "stroke-width", "5"], ["id", "distanceBalMec", 1, "logoam", 2, "margin-bottom", "36%", "font-size", "24px"], [1, "ague"], ["x1", "-45", "y1", "-45", "x2", "45", "y2", "45", "stroke", "#b7484b", "stroke-width", "5"], ["id", "distanceBalElec", 1, "logoag", 2, "margin-bottom", "36%", "font-size", "24px"], [1, "col-md-4"], ["id", "distanceDebardeurs", 1, "logoag", 2, "margin-bottom", "36%", "font-size", "24px"], [1, "amoy"], ["src", "assets/bacicon.png", "alt", "bac icon", "width", "50px", 2, "display", "inline-block", 3, "click"], ["id", "nombre_de_bacs", 1, "logoaexc", 2, "margin-bottom", "36%", "font-size", "24px"]], template: function IndicateursComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Distance Nettoiement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "line", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Distance BOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "line", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Distance BSAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "line", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Distance Balayage m\u00E9canique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "line", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Distance Balayage \u00E9lectrique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "line", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Distance D\u00E9bardeurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "line", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Nombre de Bacs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicateursComponent_Template_img_click_70_listener() { return ctx.showConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.distanceNettoi, " m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.distanceBOM, " m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.distanceBSAT, " m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.distanceBalMeca, " m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.distanceBalElec, " m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.distanceDEB, " m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.NBR_BACS);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kYXNoYnJkL3NyYy9hcHAvaW5kaWNhdGV1cnMvaW5kaWNhdGV1cnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndicateursComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-indicateurs',
                templateUrl: './indicateurs.component.html',
                styleUrls: ['./indicateurs.component.css']
            }]
    }], function () { return []; }, { distanceBalMeca: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], distanceBalElec: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], distanceNettoi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], distanceDEB: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], NBR_BACS: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], distanceBOM: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], distanceBSAT: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MapComponent {
    constructor() {
    }
    ngOnInit() {
        // this.map.addControl(this.layerSwitcher);
        // console.log(this.communes_berkane);
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], inputs: { map: "map" }, decls: 6, vars: 0, consts: [["id", "ol-map", 1, "tanileft"], ["id", "popup", 1, "ol-popup"], ["href", "#", "id", "popup-closer", 1, "ol-popup-closer"], ["id", "titlehead", 1, "titlehead"], ["id", "popup-content"], ["id", "info"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
    } }, styles: ["#ol-map[_ngcontent-%COMP%] {\r\n    height: 80vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2Rhc2hicmQvc3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InByb2plY3RzL2Rhc2hicmQvc3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjb2wtbWFwIHtcclxuICAgIGhlaWdodDogODB2aDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], function () { return []; }, { map: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavbarComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 49, vars: 0, consts: [[1, "navbar", "sticky-top", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "dropdown"], [1, "dropbtn"], [1, "fas", "fa-bars"], [1, "dropdown-content"], ["href", "/province_berkane"], ["href", "/commune_berkane"], ["href", "/sdmb"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "#", "onclick", "()=>{return false;}", 1, "navbar-brand", "nav-link"], [1, "sr-only"], [1, "dropdown", "dropdown-right"], ["title", "Module d'Impression", 1, "dropbtn"], ["id", "export_dropdown", 1, "dropdown-content"], ["id", "export-png", "name", "exportpng", 1, "btn", "btn-default"], [1, "dropdown-divider"], ["id", "export-pdf", "name", "exportpdf", 1, "btn", "btn-default"], ["id", "format", "onchange", "typechange()", "data-role", "select-dropdown", "data-profile", "minimal", 1, "form-control"], ["value", "a0"], ["selected", "", "value", "a0"], ["value", "a1"], ["value", "a2"], ["value", "a3"], ["value", "a4", "selected", ""], ["value", "a5"], ["id", "type", "onchange", "typechange()", "data-role", "select-dropdown", "data-profile", "minimal", 1, "form-control"], ["value", "none"], ["value", "length"], ["value", "area"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Province de Berkane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Commune de berkane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SDMB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Platforme Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Imprimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Imprimer PNG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Imprimer PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Taille de page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "A0 (Lente)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "A2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "A3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "A4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "A5 (Rapide)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Mesurer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Trajet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Surface");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kYXNoYnJkL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/select-list/select-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/select-list/select-list.component.ts ***!
  \******************************************************/
/*! exports provided: SelectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectListComponent", function() { return SelectListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SelectListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectListComponent_div_2_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const commune_r28 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.communeClicked($event, commune_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const commune_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commune_r28.properties.commune_fr);
} }
class SelectListComponent {
    constructor() {
        this.commune_click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setView = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selected = "";
    }
    communeClicked(event, evt) {
        let correctTarget = event.target.nodeName == "DIV" ? event.target : event.target.parentElement;
        // console.log(correctTarget);
        // let hasClass = correctTarget.classList.contains('active_liste_select');
        // hasClass && correctTarget.classList.remove('active_liste_select')
        this.selected = evt.properties.commune_fr;
        this.commune_click.emit(evt.geometry.coordinates);
        document.querySelectorAll(".active_liste_select").forEach(i => {
            if (!i.innerHTML.includes(this.selected)) {
                i.classList.remove('active_liste_select');
            }
        });
        let contains = correctTarget.classList.contains('active_liste_select');
        this.setView.emit(contains);
        correctTarget.classList.toggle('active_liste_select');
    }
    ngOnInit() {
    }
}
SelectListComponent.ɵfac = function SelectListComponent_Factory(t) { return new (t || SelectListComponent)(); };
SelectListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectListComponent, selectors: [["app-select-list"]], inputs: { communes: "communes" }, outputs: { commune_click: "commune_click", setView: "setView" }, decls: 3, vars: 1, consts: [[1, "head-section"], [4, "ngFor", "ngForOf"], [1, "commune-selection", "link-commune", 3, "ngClass", "click"]], template: function SelectListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Communes de berkane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectListComponent_div_2_Template, 4, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.communes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".active_liste_select[_ngcontent-%COMP%] {\r\n    color: rgb(34, 34, 34);\r\n    background-color: rgb(194, 194, 194);\r\n}\r\n\r\n.commune-selection[_ngcontent-%COMP%] {\r\n    display: block;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    padding: 10px 0 15px 15px;\r\n    border: 1px white solid;\r\n}\r\n\r\n.head-section[_ngcontent-%COMP%]{\r\n    font-size: 1.2vw;\r\n    color: white;\r\n    margin: 5px;border: 2px solid;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2Rhc2hicmQvc3JjL2FwcC9zZWxlY3QtbGlzdC9zZWxlY3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVcsQ0FBQyxpQkFBaUI7QUFDakMiLCJmaWxlIjoicHJvamVjdHMvZGFzaGJyZC9zcmMvYXBwL3NlbGVjdC1saXN0L3NlbGVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlX2xpc3RlX3NlbGVjdCB7XHJcbiAgICBjb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xyXG59XHJcblxyXG4uY29tbXVuZS1zZWxlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAxNXB4IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcclxufVxyXG5cclxuLmhlYWQtc2VjdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMS4ydnc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDVweDtib3JkZXI6IDJweCBzb2xpZDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select-list',
                templateUrl: './select-list.component.html',
                styleUrls: ['./select-list.component.css']
            }]
    }], function () { return []; }, { communes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], commune_click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], setView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! exports provided: rand_color, beautify_numbers, pt_cir, deg2rad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rand_color", function() { return rand_color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beautify_numbers", function() { return beautify_numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pt_cir", function() { return pt_cir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return deg2rad; });
function rand_color() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}
function beautify_numbers(number) {
    const list = number.toString().split('').reverse();
    const reducer = (a, b, i) => i % 3 !== 0 || i === 0 ? b + a : b + ` ${a}`;
    return list.reduce(reducer, "");
}
function pt_cir(rayon, angle, dx = 0, dy = 0) {
    let x = rayon * Math.cos(deg2rad(angle)) + dx;
    let y = rayon * Math.sin(deg2rad(angle)) + dy;
    return { "p": x.toFixed(2) + " " + y.toFixed(2), x, y };
}
function deg2rad(deg) {
    return deg * Math.PI / 180;
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\y.mrabti\Desktop\angular-nodejs-native\angular-files\projects\dashbrd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map