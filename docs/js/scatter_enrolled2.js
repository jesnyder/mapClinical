const data_scatter_enrolled = {
  datasets: [{
    label: 'First Dataset',
    data: [{
      x: 20,
      y: 30,
      r: 15
    }, {
      x: 40,
      y: 10,
      r: 10
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }]
};

const config_scatter_enrolled = {
    "type": "bubble",
    "data": data_scatter_enrolled,
    "options": {
        "scales": {}
    }
};

const ctx_scatter_enrolled = document.getElementById("scatter_enrolled").getContext('2d');

const myChart_scatter_enrolled = new Chart(ctx_scatter_enrolled , config_scatter_enrolled  );
