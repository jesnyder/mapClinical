

const config_Phases = {
    "type": "doughnut",
    "data": {
        "labels": [
            "Phase 1 Phase 2",
            "Phase 1",
            "Phase 2",
            "Not Applicable",
            "Phase 3",
            "Early Phase 1",
            "Phase 2 Phase 3",
            "Phase 4"
        ],
        "datasets": [
            {
                "label": "all",
                "data": [
                    21262,
                    7811,
                    15392,
                    6312,
                    8550,
                    972,
                    2233,
                    180
                ],
                "backgroundColor": [
                    "rgb(212,178,212)",
                    "rgb(255,105,140)",
                    "rgb(92,141,255)",
                    "rgb(127,212,85)",
                    "rgb(89,212,126)",
                    "rgb(85,212,212)",
                    "rgb(89,212,126)",
                    "rgb(212,81,177)"
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

const ctx_Phases = document.getElementById("doughnut_Phases").getContext('2d');

const myChart_Phases = new Chart(ctx_Phases , config_Phases  );

