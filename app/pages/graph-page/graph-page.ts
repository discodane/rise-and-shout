import { Component, ViewChild } from '@angular/core';

import { AlertController, App, ItemSliding, List, ModalController, NavController } from 'ionic-angular';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass } from "@angular/common";
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
  templateUrl: 'build/pages/graph-page/graph-page.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class GraphPage {

	lineChartData = [
		{
			background: "#d8dee7",
			type: 'line',
			data: [10,20,30,40,50,60,10,20,30,40,50],
			fill: false
		}
	];
	lineChartOptions = {
		animation: false,
		responsive: true,

		legend: {
			display: false
		},
		scales: {
			xAxes: [{
				ticks: {
					stepSize: 0.5,
					fontSize: 0,
					min: 0,
					max: 20,
					beginAtZero: true
				},
				gridLines: {
					display: false,
					color:"rgba(255,255,255,1.0)",
					zeroLineColor: "rgba(255,255,255,1.0)",
				}
			}],
			yAxes:[{
				ticks: {
					fontSize: 0,
					beginAtZero: true
				},
				gridLines: {
					display: false,
					color:"rgba(255,255,255,1.0)",
					zeroLineColor: "rgba(255,255,255,1.0)",
				}
			}]
		}
	};
	lineChartColours = [
		{ 
			borderColor: '#4ea0e1'
		}
	];
	lineChartLegend = false;
	lineChartType = 'line';

	constructor ( ) {

	}

  // events
  chartClicked(e) {
    console.log(e);
  }

  chartHovered(e) {
    console.log(e);
  }
}