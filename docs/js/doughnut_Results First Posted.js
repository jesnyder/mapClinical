

const config_Results First Posted = {
    "type": "doughnut",
    "data": {
        "labels": [
            "August 30, 2012",
            "December 6, 2021",
            "January 7, 2020",
            "July 9, 2021",
            "October 8, 2020",
            "August 24, 2015",
            "May 11, 2022",
            "March 22, 2022",
            "January 15, 2015",
            "July 30, 2021",
            "February 18, 2022",
            "March 29, 2019",
            "October 11, 2017",
            "July 19, 2019",
            "August 14, 2017",
            "December 29, 2015",
            "August 6, 2018",
            "March 30, 2015",
            "August 4, 2021",
            "June 30, 2021",
            "July 13, 2021",
            "March 17, 2022",
            "April 26, 2021",
            "January 18, 2022",
            "June 30, 2020",
            "February 17, 2021",
            "April 27, 2021",
            "December 14, 2015",
            "April 10, 2019",
            "November 5, 2020",
            "February 5, 2020",
            "February 15, 2018",
            "January 21, 2020",
            "January 2, 2019",
            "September 24, 2019",
            "March 16, 2022",
            "May 27, 2015",
            "November 6, 2014",
            "July 8, 2019"
        ],
        "datasets": [
            {
                "label": "all",
                "data": [
                    180,
                    24,
                    23,
                    21,
                    20,
                    20,
                    16,
                    15,
                    12,
                    12,
                    12,
                    12,
                    10,
                    10,
                    9,
                    8,
                    6,
                    5,
                    24,
                    24,
                    28,
                    55,
                    125,
                    106,
                    102,
                    91,
                    65,
                    65,
                    60,
                    46,
                    30,
                    37,
                    36,
                    35,
                    32,
                    32,
                    31,
                    30,
                    2
                ],
                "backgroundColor": [
                    "rgb(212,178,212)",
                    "rgb(255,105,140)",
                    "rgb(92,141,255)",
                    "rgb(127,212,85)",
                    "rgb(89,212,126)",
                    "rgb(85,212,212)",
                    "rgb(89,212,126)",
                    "rgb(212,81,177)",
                    "rgb(89,212,126)"
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

const ctx_Results First Posted = document.getElementById("doughnut_Results First Posted").getContext('2d');

const myChart_Results First Posted = new Chart(ctx_Results First Posted , config_Results First Posted  );

