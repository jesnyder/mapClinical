

const config_Acronym = {
    "type": "doughnut",
    "data": {
        "labels": [],
        "datasets": [
            {
                "label": "all",
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

const ctx_Acronym = document.getElementById("doughnut_Acronym").getContext('2d');

const myChart_Acronym = new Chart(ctx_Acronym , config_Acronym  );

