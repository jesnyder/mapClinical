

const config_Study Designs = {
    "type": "doughnut",
    "data": {
        "labels": [
            " "
        ],
        "datasets": [
            {
                "label": "all",
                "data": [
                    68410
                ],
                "backgroundColor": [
                    "rgb(212,178,212)"
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

const ctx_Study Designs = document.getElementById("doughnut_Study Designs").getContext('2d');

const myChart_Study Designs = new Chart(ctx_Study Designs , config_Study Designs  );

