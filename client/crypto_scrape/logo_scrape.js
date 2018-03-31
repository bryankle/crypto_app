const download = require('image-downloader');
const https = require('https');
const fs = require('fs');

// Promise that fetches API and returns an object in form of { coinName: { Symbol: 'coinSymbol', ... }}
let fetchAllCoins = new Promise((resolve, reject) => {
    // API query returns data from every single coin - used to get image of coin logo
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

// Promise that fetches API and returns an array of top coin symbols; ['BTC', 'ETH', 'LTC', ....]
let fetchTopCoins = new Promise((resolve, reject) => {
    const numberOfCoins = 50;
    const topCoinsList = [];
    // API used to gather top 50 coins
    https.get(`https://api.coinmarketcap.com/v1/ticker/?limit=${numberOfCoins}`, function (res) {
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
// Promise used to gather images of top 50 coins and download as COINSYMBOL.png format
Promise.all([fetchAllCoins, fetchTopCoins]).then((values) => {
    const [allCoins, topCoins] = values; // Separate result of fetchAllCoins and fetchTopCoins
    const baseLinkUrl = 'https://www.cryptocompare.com';
    const links = [];
    Object.keys(allCoins).forEach(function (coin) {
        // Verify if 
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
