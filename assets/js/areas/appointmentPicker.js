var AppointmentPicker = React.createClass({
  init: function() {
    var donutTitle = this.state.timePicked || "Pick A Time";
    var that = this;
    var chart = c3.generate({
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      data: {
        columns: [
          ['Welcome', 1]
        ],
        type : 'donut',
        // labels: "false",
        onclick: function (d, i) {
          // console.log("onclick", d, i);
        },
        onmouseover: function (d, i) {
          // console.log("onmouseover", d, i);
          // that.state.timePicked = d.id;
          // $('.c3-chart-arcs-title').text(d.id); Slow!!!
          document.getElementsByClassName("c3-chart-arcs-title")[0].innerHTML = d.id;
        },
        onmouseout: function (d, i) {
          // console.log("onmouseout", d, i);
        }
      },
      donut: {
        title: donutTitle,
        label: {
          format: function (value, ratio, id) {
            // return d3.format('$')(value);
            return id;
          }
        }
      },
      legend: {
        show: false
      },
      tooltip: {
        show: false
//         format: {
//             title: function (id) { return id; },
//             value: function (value, ratio, id) {
//                 // var format = id === 'data1' ? d3.format(',') : d3.format('$');
//                 // return format(value);
//                 return "";
//             }
// //            value: d3.format(',') // apply this format to both y and y2
//         }
      },
      // color: {
      //   pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
      // }
    });

    setTimeout(function() {
      chart.load({
        columns: [
          ['time1', 1],
          ['time2', 1],
          ['time3', 1],
          ['time4', 1],
          ['time5', 1],
          ['time6', 1],
          ['time7', 1],
          ['time8', 1],
          ['time9', 1],
          ['time10', 1],
          ['time11', 1],
          ['time12', 1],
          ['time13', 1],
          ['time14', 1],
          ['time15', 1]
        ]
      });
    }, 1000);

    setTimeout(function() {
      chart.unload({
        ids: "Welcome"
      });
    }, 1000);
  },

  getInitialState: function() {
    return {
      timePicked: null,
    };
  },

  componentDidMount: function() {
    this.init();
  },

  render: function() {
    return (
      <div id="chart">
      </div>
    );
  }
});

