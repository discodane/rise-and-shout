import { Component, ViewChild } from '@angular/core';

import { AlertController, App, ItemSliding, List, ModalController, NavController } from 'ionic-angular';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass } from "@angular/common";
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
    	type: 'bar',
    	data: {
        	labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        	datasets: [{
            	label: '# of Votes',
            	data: [12, 19, 3, 5, 2, 3],
            	backgroundColor: [
                	'rgba(255, 99, 132, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(255, 206, 86, 0.2)',
                	'rgba(75, 192, 192, 0.2)',
                	'rgba(153, 102, 255, 0.2)',
                	'rgba(255, 159, 64, 0.2)'
            	],
            	borderColor: [
                	'rgba(255,99,132,1)',
                	'rgba(54, 162, 235, 1)',
                	'rgba(255, 206, 86, 1)',
                	'rgba(75, 192, 192, 1)',
                	'rgba(153, 102, 255, 1)',
                	'rgba(255, 159, 64, 1)'
            	],
            	borderWidth: 1
        	}]
    	},
    	options: {
        	scales: {
            	yAxes: [{
                	ticks: {
                    	beginAtZero:true
                	}
            	}]
        	}
    	}
	});

@Component({
  templateUrl: 'build/pages/graph-page/graph-page.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class GraphPage {
	

	constructor () {

	}
	// eve
	chartClicked(e) {
		console.log(e);
	}

	chartHovered(e) {
		console.log(e);
	}
}