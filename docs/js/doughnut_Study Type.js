

const config_Study Type = {
    "type": "doughnut",
    "data": {
        "labels": [
            "Interventional",
            "Observational",
            "Expanded Access",
            "OTHER",
            "INDUSTRY",
            "NIH"
        ],
        "datasets": [
            {
                "label": "all",
                "data": [
                    63245,
                    3495,
                    0,
                    537,
                    1136,
                    65
                ],
                "backgroundColor": [
                    "rgb(212,178,212)",
                    "rgb(255,105,140)",
                    "rgb(92,141,255)",
                    "rgb(127,212,85)",
                    "rgb(89,212,126)",
                    "rgb(85,212,212)"
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

const ctx_Study Type = document.getElementById("doughnut_Study Type").getContext('2d');

const myChart_Study Type = new Chart(ctx_Study Type , config_Study Type  );

