

const config_Funded Bys = {
    "type": "doughnut",
    "data": {
        "labels": [
            "OTHER",
            "INDUSTRY",
            "OTHER_GOV",
            "NETWORK",
            "NIH",
            "FED"
        ],
        "datasets": [
            {
                "label": "all",
                "data": [
                    41916,
                    22834,
                    3115,
                    385,
                    96,
                    64
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

const ctx_Funded Bys = document.getElementById("doughnut_Funded Bys").getContext('2d');

const myChart_Funded Bys = new Chart(ctx_Funded Bys , config_Funded Bys  );

