import { Component, ViewChild } from '@angular/core';

import { AlertController, App, ItemSliding, List, ModalController, NavController } from 'ionic-angular';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass } from "@angular/common";
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
  templateUrl: 'build/pages/graph-page/graph-page.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class GraphPage {
	
    dataList = [1, 0, 1, 1, 1, 0]
    averageList = [1, .5, .66, .75, .8, .66];
    public lineChartData = [
        {
            data: this.averageList,
            borderWidth: '1px', 
            fill: false
        }
    ];
    public lineChartLabels = ['', '', '', '', '', '', ''];
    public lineChartOptions = {
        animation: false,
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            display: false,
            yAxes: [{
                display: false,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    };
    public lineChartColors = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend = false;
    public lineChartType = 'line';

	constructor () {

	}
	// eve
	chartClicked(e) {
		console.log(e);
	}

	chartHovered(e) {
		console.log(e);
	}

    vote( v ){
        if(v == 'b'){
            this.dataList.push(0);
            this.calcAverage();
        }
        else {
            this.dataList.push(1);
            this.calcAverage();
        }
    }

    calcAverage() {
        var count = 0;
        this.dataList.forEach( function ( num ) {
            count += num;
        })
        var aveNum = count/this.dataList.length;
        this.averageList.push( aveNum );

        this.lineChartData = [{ data: this.averageList, borderWidth: '1px', fill: false }];
        var blankList = [];
        this.averageList.forEach( function ( dummy ) {
            blankList.push("");
        })
        this.lineChartLabels = blankList;
    }
}