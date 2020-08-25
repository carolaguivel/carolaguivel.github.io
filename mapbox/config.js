var config = {
    style: 'mapbox://styles/carolaguivel/cke16vgwf0aml19pl8ebyep5s',
    accessToken: 'pk.eyJ1IjoiY2Fyb2xhZ3VpdmVsIiwiYSI6ImNrZTE2cmc4dTU5ZHMyc3JvMzNzNHlmbnMifQ.tbQNotIEsbghdvPr4ymWJA',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Civil Society Innovation and Urban Inclusion in a Digital Era:',
    subtitle: 'A Collection of Case Studies',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'School areas road safety assessments and improvements (SARSAI) programme',
            image: './images/sample.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [39.2083, -6.7924],
                zoom: 10.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'waterfun',
                    opacity: 0,
                },
                {
                    layer: 'road',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'waterfun',
                    opacity: 0,
                },
                {
                    layer: 'road',
                    opacity: 0
                }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Operation Libero',
            image: './images/sample2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [8.2275, 46.8182],
                zoom: 6,
                pitch: 0,
                bearing: -42
            },
            onChapterEnter: [
                {
                    layer: 'waterfun',
                    opacity: 1,
                }
                // {
                //     layer: 'road',
                //     opacity: 0
                // }
            ],
            onChapterExit: [
                {
                    layer: 'waterfun',
                    opacity: 0,
                }
                // {
                //     layer: 'road',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier-2',
            title: 'The Together Project',
            image: './images/sample3.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-107.62683, 39.95771],
                zoom: 3.68,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'waterfun',
                    opacity: 0,
                }
            ],
            onChapterExit: [
                {
                    layer: 'waterfun',
                    opacity: 0,
                }
            ]
        }
    ]
};
