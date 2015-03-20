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

google.setOnLoadCallback(drawVisualization3);
function drawVisualization3() {

  // dataset “Largest employers, San Diego County”
  var data = google.visualization.arrayToDataTable([
    ['Employer',                                    'Employees', { role: 'annotation' }, { role: 'style'}],
	['State of California',               {v:43300, f:'43,300'},  {v:43300, f:'43,300'},           'blue'],
	['On Port Tidelands',                 {v:33400, f:'33,400'},  {v:33400, f:'33,400'},           'gold'],
	['UC San Diego',                      {v:28672, f:'28,672'},  {v:28672, f:'28,672'},           'blue'],
	['Federal Government',                {v:24200, f:'24,200'},  {v:24200, f:'24,200'},           'blue'],
	['US Dept. of Defense',               {v:21500, f:'21,500'},  {v:21500, f:'21,500'},           'blue'],
	['County of San Diego',               {v:20100, f:'20,100'},  {v:20100, f:'20,100'},           'blue'],
	['City of San Diego',                 {v:18000, f:'18,000'},  {v:18000, f:'18,000'},           'blue'],
	['Sharp Healthcare',                  {v:15865, f:'15,865'},  {v:15865, f:'15,865'},           'blue'],
	['Scripps Health',                    {v:13750, f:'13,750'},  {v:13750, f:'13,750'},           'blue'],
	['San Diego Unified School District', {v:13559, f:'13,559'},  {v:13559, f:'13,559'},           'blue']
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
	bars: "horizontal",
	axes: {
	  	y: {
	  		0: { side: "right"}
	  	}
	},
	legend: {
		position: "none",
		textStyle: {
			color: "white"
		}
	},
    hAxis: {
		minValue: 0,
		maxValue: 40000,
		textStyle: {
			color: "white"
		}
	},
    vAxis: {
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
  
  var chart = new google.visualization.ColumnChart(document.getElementById('chart3_div'));
  
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