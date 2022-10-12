

const config_Results First Posted = {
    "type": "doughnut",
    "data": {
        "labels": [
            "May 1, 2019",
            "July 13, 2021",
            "February 5, 2020",
            "November 4, 2020",
            "November 6, 2014",
            "May 27, 2015",
            "September 24, 2019",
            "January 2, 2019",
            "January 21, 2020",
            "February 15, 2018",
            "November 5, 2020",
            "March 17, 2022",
            "April 10, 2019",
            "April 27, 2021",
            "December 14, 2015",
            "June 24, 2022",
            "February 17, 2021",
            "June 30, 2020",
            "January 18, 2022",
            "May 12, 2015",
            "June 30, 2021",
            "December 6, 2021",
            "August 4, 2021",
            "April 2, 2015",
            "July 8, 2019",
            "October 12, 2021",
            "February 2, 2022",
            "March 30, 2015",
            "July 23, 2019",
            "August 6, 2018",
            "December 29, 2015",
            "August 14, 2017",
            "October 11, 2017",
            "January 7, 2020",
            "July 19, 2019",
            "March 29, 2019",
            "July 30, 2021",
            "January 15, 2015",
            "February 18, 2022",
            "March 22, 2022",
            "May 11, 2022",
            "July 9, 2021",
            "April 26, 2021"
        ],
        "datasets": [
            {
                "label": "all",
                "data": [
                    1,
                    28,
                    30,
                    30,
                    30,
                    31,
                    32,
                    35,
                    36,
                    37,
                    46,
                    55,
                    60,
                    65,
                    65,
                    68,
                    91,
                    102,
                    106,
                    110,
                    24,
                    24,
                    24,
                    9,
                    2,
                    3,
                    4,
                    5,
                    5,
                    6,
                    8,
                    9,
                    10,
                    23,
                    10,
                    12,
                    12,
                    12,
                    12,
                    15,
                    16,
                    21,
                    125
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

