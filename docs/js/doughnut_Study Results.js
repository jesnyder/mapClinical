

const config_Study Results = {
    "type": "doughnut",
    "data": {
        "labels": [
            "No Results Available",
            "Has Results"
        ],
        "datasets": [
            {
                "label": "all",
                "data": [
                    44227,
                    1471
                ],
                "backgroundColor": [
                    "rgb(212,178,212)",
                    "rgb(255,105,140)"
                ]
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

