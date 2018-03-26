const https = require('https');
const fs = require('fs');
const numberOfCoins = 50;
const top50CoinsURL = `https://chasing-coins.com/api/v1/top-coins/${numberOfCoins}`;
const topCoinsList = [];
https.get(url, function (res) {
    var body = '';
    console.log(`Obtaining top ${numberOfCoins} coins.` );
    res.on('data', function (chunk) {
        body += chunk;
    });

    res.on('end', function () {
        var response = JSON.parse(body);
        Object.keys(response).forEach(function(num) {
            topCoinsList.push(response[num]['symbol']);
        })

    });
}).on('error', function (e) {
    console.log("Got an error: ", e);
});
