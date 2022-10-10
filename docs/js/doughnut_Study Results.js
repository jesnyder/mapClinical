

const config_Study Results = {
    "type": "doughnut",
    "data": {
        "labels": [],
        "datasets": [
            {
                "label": "all",
                "data": [],
                "backgroundColor": []
            }
        ]
    },
    "options": {
        "responsive": true,
        "legend": {
            "position": "right"
        },
        "plugins": {
            "title": {
                "display": true,
                "text": "Chart.js Doughnut Chart"
            }
        }
    }
};

const ctx_Study Results = document.getElementById("doughnut_Study Results").getContext('2d');

const myChart_Study Results = new Chart(ctx_Study Results , config_Study Results  );

