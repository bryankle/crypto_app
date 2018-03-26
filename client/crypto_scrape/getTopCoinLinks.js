var coinData = require('./coin.json')['Data'];

const links = [];
const baseLinkUrl = "https://www.cryptocompare.com";
const top50 = ['BTC',
    'ETH',
    'XRP',
    'BCH',
    'LTC',
    'EOS',
    'ADA',
    'XLM',
    'NEO',
    'IOT',
    'DASH',
    'XMR',
    'TRX',
    'XEM',
    'USDT',
    'ETC',
    'VEN',
    'QTUM',
    'ICX',
    'BNB',
    'LSK',
    'OMG',
    'BTG',
    'XRB',
    'ZEC',
    'DGD',
    'XVG',
    'PPT',
    'SC',
    'STEEM',
    'STRAT',
    'BCN',
    'WAVES',
    'BTS',
    'MKR',
    'VERI',
    'RHOC',
    'DOGE',
    'AE',
    'REP',
    'BTM',
    'DCR',
    'SNT',
    'ZIL',
    'ONT',
    'WTC',
    'AION',
    'KMD',
    'ZRX',
    'ARK']
Object.keys(coinData).forEach(function (coin) {
    // console.log(coin)
    if (top50.indexOf(coin) > -1) {
        const urlLink = baseLinkUrl + coinData[coin].ImageUrl;
        links.push([coin, urlLink]);
    }
 
})
console.log(links);
