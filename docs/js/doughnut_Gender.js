

const config_Gender = {
    "type": "doughnut",
    "data": {
        "labels": [
            "All",
            "Female",
            "Male"
        ],
        "datasets": [
            {
                "label": "all",
                "data": [
                    65318,
                    2337,
                    823
                ],
                "backgroundColor": [
                    "rgb(212,178,212)",
                    "rgb(255,105,140)",
                    "rgb(92,141,255)"
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

const ctx_Gender = document.getElementById("doughnut_Gender").getContext('2d');

const myChart_Gender = new Chart(ctx_Gender , config_Gender  );

