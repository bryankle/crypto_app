const download = require('image-downloader');
const https = require('https');
const fs = require('fs');

let fetchAllCoins = new Promise((resolve, reject) => {
    https.get('https://min-api.cryptocompare.com/data/all/coinlist', function (res) {
        var body = '';
        res.on('data', function (chunk) {
            body += chunk;
        });
        res.on('end', function () {
            var response = JSON.parse(body);

            resolve(response.Data);
            console.log("Successfully retrieved coin list");
        });
    }).on('error', function (e) {
        console.log("Got an error: ", e);
        reject(e);
    });
})
// Return array
let fetchTopCoins = new Promise((resolve, reject) => {
    const numberOfCoins = 50;
    const topCoinsList = [];
    https.get(`https://chasing-coins.com/api/v1/top-coins/${numberOfCoins}`, function (res) {
        var body = '';
        console.log(`Obtaining top ${numberOfCoins} coins.`);
        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('end', function () {
            var response = JSON.parse(body);
            Object.keys(response).forEach(function (num) {
                topCoinsList.push(response[num]['symbol']);
            })
            resolve(topCoinsList);
        });
    }).on('error', function (e) {
        console.log("Got an error: ", e);
        reject(e);
    });
})

Promise.all([fetchAllCoins, fetchTopCoins]).then((values) => {
    const [allCoins, topCoins] = values;
    const baseLinkUrl = 'https://www.cryptocompare.com';
    const links = [];
    // console.log("All coins: ", allCoins);
    // console.log("Top coins: ", topCoins);
    Object.keys(allCoins).forEach(function (coin) {
        if (topCoins.indexOf(coin) > -1) {
            const urlLink = baseLinkUrl + allCoins[coin].ImageUrl;
            links.push([coin, urlLink]);
        }
    })
    return links;
}).then(pair => {
    pair.forEach(function (data, idx) {
        const [symbol, link] = data;
        const options = {
            url: link,
            dest: `../src/assets/images/logos/${symbol}.png`
        }
        async function downloadIMG() {
            try {
                const { filename, image } = await download.image(options)
                console.log(filename) // => /path/to/dest/image.jpg 
            } catch (e) {
                throw e
            }
        }
        downloadIMG()
    })

})

// fetchTopCoins.then(data => console.log(data))
// /* getTopCoinsLink.js */

// var coinData = require('./coin.json')['Data'];

// const links = [];
// const baseLinkUrl = "https://www.cryptocompare.com";

// Object.keys(coinData).forEach(function (coin) {
//     // console.log(coin)
//     if (top50.indexOf(coin) > -1) {
//         const urlLink = baseLinkUrl + coinData[coin].ImageUrl;
//         links.push([coin, urlLink]);
//     }

// })
// console.log(links);
