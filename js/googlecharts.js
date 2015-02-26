google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawVisualization1);

function drawVisualization1() {

  // dataset “Economic Impacts, Jobs”
  var data = google.visualization.arrayToDataTable([
    ['Sector', 'Direct impact', { role: 'annotation' }, 'Combined indirect and induced impacts', { role: 'annotation' }],
    ['Industrial & Maritime Commerce', {v:12761, f:'12,761'}, {v:12761, f:'12,761'}, {v:10197, f:'10,197'}, {v:10197, f:'10,197'}],
    ['Travel & Commercial',            {v:20594, f:'20,594'}, {v:20594, f:'20,594'}, {v:14379, f:'14,379'}, {v:14379, f:'14,379'}],
    ['Total',                          {v:33356, f:'33,356'}, {v:33356, f:'33,356'}, {v:24575, f:'24,575'}, {v:24575, f:'24,575'}]
  ]);
  
  var view = new google.visualization.DataView(data);
      view.setColumns([0, {
          type: 'number',
          label: data.getColumnLabel(1),
          calc: function () {return 0;}
      }, {
          type: 'number',
          label: data.getColumnLabel(2),
          calc: function () {return 0;}
      }, {
          type: 'number',
          label: data.getColumnLabel(3),
          calc: function () {return 0;}
      }, {
          type: 'number',
          label: data.getColumnLabel(4),
          calc: function () {return 0;}
      }]);

  var options = {
    title : "Economic impacts of establishments by sector: Jobs",
	titlePosition: "none",
	legend: {
		position: "bottom",
		textStyle: {
			color: "white"
		}
	},
    vAxis: {
		title: "Jobs",
		titleTextStyle: {
			color: "white"
		},
		minValue: 0,
		maxValue: 45000,
		textStyle: {
			color: "white"
		}
	},
    hAxis: {
		title: "Sector",
		titleTextStyle: {
			color: "white"
		},
		textStyle: {
			color: "white"
		}
	},
    seriesType: "bars",
    series: {
		5: {
			type: "line",
			color: "white"
		}
	},
    isStacked: "true",
	backgroundColor: "transparent",
	  animation: {
		  startup: true,
		  duration: 2500,
		  easing: "out"
	  }
  };
  
  var chart = new google.visualization.ColumnChart(document.getElementById('chart2_div'));
  
  var runOnce = google.visualization.events.addListener(chart, 'ready', function () {
       google.visualization.events.removeListener(runOnce);
       chart.draw(data, options);
   });

   // Initialize animation
   chart.draw(data, options);

   // Redraw charts on window resize
   $(window).resize(function() {
       chart.draw(data, options);
   });

}