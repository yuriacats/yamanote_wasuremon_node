var express = require('express');
var router = express.Router();
const yamanoteStations = [
    'tokyo',
    'kanda',
    'akihabara',
    'okachimachi',
    'uoeno',
    'uguisudani',
    'nippori',
    'nishinippori',
    'tabata',
    'komagee',
    'sugamo',
    'otsuka',
    'ikebukuro',
    'mejiro',
    'takadanobaba',
    'sinjuku',
    'shinokubo',
    'yoyogi',
    'harajuku',
    'shibuya',
    'ebisu',
    'meguro',
    'gotanda',
    'osaki',
    'shinagawa',
    'takanawa-gateway',
    'tamachi',
    'hamamatucho',
    'shinbashi',
    'yurakucho'
]
/* GET home page. */
router.get("/:line/:station", function (req, res, next) {
    if (req.params.id != "in" || "out") {
        //error を投げる
    }
    if (!yamanoteStations.includes(req.params.station)) {
        //error　を投げる
    }
    res.status(200).json({
        status: "sucsess",
        message: {
            targetStation: "新宿",
            arrivalTrains: [
                {
                    arrivelStation: "新宿",
                    arrivelTime: "21:04",
                },
                {
                    arrivelStation: "新宿",
                    arrivelTime: "20:59",
                },
                {
                    arrivelStation: "新宿",
                    arrivelTime: "20:55",
                },
            ]
        }
    })
})
router.get('/*', function (req, res, next) {
    res.status(404).json({
        status: '404 not found'
    });
});
router.get('/', function (req, res, next) {
    res.status(404).json({
        status: '404 not found'
    });
});

module.exports = router;
