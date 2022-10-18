

const config_Study Documents = {
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
                    41612,
                    23186,
                    3135,
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

const ctx_Study Documents = document.getElementById("doughnut_Study Documents").getContext('2d');

const myChart_Study Documents = new Chart(ctx_Study Documents , config_Study Documents  );

