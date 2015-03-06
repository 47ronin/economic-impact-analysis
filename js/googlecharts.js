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
	  },
	chartArea: {
		width: "80%",
		height: "80%"
	}
  };
  
  var chart = new google.visualization.ColumnChart(document.getElementById('chart1_div'));
  
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

google.setOnLoadCallback(drawVisualization2);
function drawVisualization2() {

  // dataset “Direct Output, millions of $”
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Industrial & Maritime',   { role: 'annotation' }, 'Travel & Commercial',     { role: 'annotation' }, 'Total', { role: 'annotation' }],
    ['2011', {v:2.4, f:'$2.4 million'}, {v:2.4, f:'$2.4'},      {v:1.7, f:'$1.7 million'}, {v:1.7, f:'$1.7'},      {v:4.1, f:'$4.1 million'}, {v:4.1, f:'$4.1'}],
    ['2013', {v:2.5, f:'$2.5 million'}, {v:2.5, f:'$2.5'},      {v:1.9, f:'$1.9 million'}, {v:1.9, f:'$1.9'},   {v:4.4, f:'$4.4 million'}, {v:4.4, f:'$4.4'}]
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
      }]);

  var options = {
    title : "Direct economic output, millions of $",
	titlePosition: "none",
	legend: {
		position: "bottom",
		textStyle: {
			color: "white"
		}
	},
    vAxis: {
		title: "Economic output in millions of $",
		titleTextStyle: {
			color: "white"
		},
		minValue: 0,
		maxValue: 5.0,
		textStyle: {
			color: "white"
		}
	},
    hAxis: {
		textStyle: {
			color: "white"
		}
	},
	annotations: {
		highContrast: false,
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
	backgroundColor: "transparent",
	  animation: {
		  startup: true,
		  duration: 2500,
		  easing: "out"
	  },
	chartArea: {
		width: "80%",
		height: "80%"
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