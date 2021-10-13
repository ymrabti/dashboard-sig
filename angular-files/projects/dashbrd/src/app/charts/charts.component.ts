import { Component, Input, OnInit } from '@angular/core';
import { deg2rad, pt_cir, rand_color } from '../../helpers';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

    constructor() { }
    @Input() bacs_prov: any;
    length_swips:number=2;
    pie_prov:any[]=[];
    pie_prov_legend:any[]=[];
    pie_prov_txt:any[]=[];

    currentPage:number = 1;

    ngOnInit(): void {
        let pie_sti=setInterval(() => {
            console.log(this.bacs_prov);
            if (this.bacs_prov !== 0) {
                clearInterval(pie_sti);
                this.pie(this.bacs_prov);
            }
        }, 1000);
        // this.pie(this.bacs_prov);this.pieChart(pie, 0, 'pie_chart', 'pie_chart_legend', true);
    }
    
    increment():void{
        // let courbes = document.querySelectorAll(".courbe1");
        this.currentPage++;
        if (this.currentPage > this.length_swips) {
            this.currentPage = 1;
        }
    }
    decrement(): void {
        // let courbes = document.querySelectorAll(".courbe1");
        this.currentPage--;
        if (this.currentPage <= 0) {
            this.currentPage = this.length_swips;
        }
    }
    pie(json: any): void {
        let liste_bacs = json.features.map((u: any) => u.properties);
        let map: any = new Map(liste_bacs.map(({ Commune_Fr }) => [Commune_Fr, { name: Commune_Fr, percent: 0, color: rand_color() }]));
        for (let { Commune_Fr } of liste_bacs) map.get(Commune_Fr).percent += 1;
        let result = Array.from(map.values());
        let pie = result.map((com: any) => ({ ...com, percent: (com.percent * 100 / json.features.length).toFixed(2) }));
        this.pieChart(pie,0,'','',true);
    }
    pieChart(params: any, r: number, piechart: any, piechartlegend: any, province_chart: any): void {
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
        params.sort((a: { percent: number; }, b: { percent: number; }) => b.percent - a.percent)
            .forEach((chart: { percent: number; name: string; color: string; }, i: number) => {
                let angle = chart.percent * 3.6;
                let move = pt_cir(r, (angle_start + angle / 2));
                let pt_s = pt_cir(rayon, angle_start, move.x, move.y);
                let pt_e = pt_cir(rayon, angle_start + angle, move.x, move.y);
                let xs = pt_s.x + move.x; let ys = pt_s.x + move.y;
                let xe = pt_e.x + move.x; let ye = pt_e.x + move.y;
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
                let piechart:any;
                if (params.length == 1) {
                    piechart = { r: rayon, stroke: "red", fill: chart.color, style: "stroke-width:0;", title };
                } else {
                    piechart = { d: d2, stroke: "red", fill: chart.color, style: "stroke-width:0;", title };
                }
                addNs(piechart, "path", "piechart[0]");
                let pilegendrects = { d: `m${pl} ${(h + p) * i},${l} 0,0 ${h},${-l} 0,0 ${-h}z`, stroke: "red", fill: chart.color, style: "stroke-width:1;" };
                let pilegendtxt = { x, y, fill: 'white', stroke: "black", style: `font-size:22;font-family:"Arial";`,title };
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
function addNs(..._args:any) {
    
}