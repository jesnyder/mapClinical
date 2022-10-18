

const config_Other IDs = {
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

const ctx_Other IDs = document.getElementById("doughnut_Other IDs").getContext('2d');

const myChart_Other IDs = new Chart(ctx_Other IDs , config_Other IDs  );

