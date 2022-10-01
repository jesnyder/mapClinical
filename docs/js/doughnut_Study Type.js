

const config_Study Type = {
    "type": "doughnut",
    "data": {
        "labels": [
            "Interventional",
            "Observational"
        ],
        "datasets": [
            {
                "label": "all",
                "data": [
                    43048,
                    2650
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

const ctx_Study Type = document.getElementById("doughnut_Study Type").getContext('2d');

const myChart_Study Type = new Chart(ctx_Study Type , config_Study Type  );

