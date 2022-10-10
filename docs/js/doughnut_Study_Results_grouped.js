

const config_Study_Results_grouped = {
    "type": "doughnut",
    "data": {
        "labels": [],
        "datasets": [
            {
                "label": "allo_count",
                "data": [],
                "backgroundColor": []
            },
            {
                "label": "auto_count",
                "data": [],
                "backgroundColor": []
            },
            {
                "label": "both_count",
                "data": [],
                "backgroundColor": []
            },
            {
                "label": "undeclared_count",
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

const ctx_Study_Results_grouped = document.getElementById("doughnut_Study_Results_grouped").getContext('2d');

const myChart_Study_Results_grouped = new Chart(ctx_Study_Results_grouped , config_Study_Results_grouped  );

