const download = require('image-downloader')

const imgLinks = [['ETH',
    'https://www.cryptocompare.com/media/20646/eth_logo.png'],
    ['XMR', 'https://www.cryptocompare.com/media/19969/xmr.png'],
    ['ETC', 'https://www.cryptocompare.com/media/20275/etc2.png'],
    ['DOGE', 'https://www.cryptocompare.com/media/19684/doge.png'],
    ['ZEC', 'https://www.cryptocompare.com/media/351360/zec.png'],
    ['BTS', 'https://www.cryptocompare.com/media/20705/bts.png'],
    ['BTM', 'https://www.cryptocompare.com/media/20084/btm.png'],
    ['XLM', 'https://www.cryptocompare.com/media/20696/str.png'],
    ['BCN',
        'https://www.cryptocompare.com/media/12318404/bcn.png'],
    ['XEM', 'https://www.cryptocompare.com/media/20490/xem.png'],
    ['DCR',
        'https://www.cryptocompare.com/media/1382607/decred.png'],
    ['REP',
        'https://www.cryptocompare.com/media/350815/augur-logo.png'],
    ['DGD', 'https://www.cryptocompare.com/media/350851/dgd.png'],
    ['WAVES',
        'https://www.cryptocompare.com/media/27010639/waves2.png'],
    ['STEEM',
        'https://www.cryptocompare.com/media/350907/steem.png'],
    ['STRAT',
        'https://www.cryptocompare.com/media/351303/stratis-logo.png'],
    ['KMD', 'https://www.cryptocompare.com/media/351408/kmd.png'],
    ['ARK', 'https://www.cryptocompare.com/media/351931/ark.png'],
    ['MKR', 'https://www.cryptocompare.com/media/1382296/mkr.png'],
    ['QTUM',
        'https://www.cryptocompare.com/media/1383382/qtum.png'],
    ['IOT',
        'https://www.cryptocompare.com/media/1383540/iota_logo.png'],
    ['VERI',
        'https://www.cryptocompare.com/media/1383562/veri.png'],
    ['SNT', 'https://www.cryptocompare.com/media/1383568/snt.png'],
    ['USDT',
        'https://www.cryptocompare.com/media/1383672/usdt.png'],
    ['XRB', 'https://www.cryptocompare.com/media/1383674/xrb.png'],
    ['PPT', 'https://www.cryptocompare.com/media/1383747/ppt.png'],
    ['ZRX', 'https://www.cryptocompare.com/media/1383799/zrx.png'],
    ['OMG',
        'https://www.cryptocompare.com/media/1383814/omisego.png'],
    ['AE', 'https://www.cryptocompare.com/media/1383836/ae.png'],
    ['BCH', 'https://www.cryptocompare.com/media/1383919/bch.jpg'],
    ['BNB', 'https://www.cryptocompare.com/media/1383947/bnb.png'],
    ['VEN',
        'https://www.cryptocompare.com/media/12318129/ven.png'],
    ['WTC',
        'https://www.cryptocompare.com/media/12317959/wtc.png'],
    ['TRX',
        'https://www.cryptocompare.com/media/12318089/trx.png'],
    ['ICX',
        'https://www.cryptocompare.com/media/12318192/icx.png'],
    ['AION',
        'https://www.cryptocompare.com/media/16746538/aion.png'],
    ['RHOC',
        'https://www.cryptocompare.com/media/16746544/rhoc.png'],
    ['ZIL',
        'https://www.cryptocompare.com/media/27010464/zil.png'],
    ['XVG',
        'https://www.cryptocompare.com/media/12318032/xvg.png'],
    ['DASH',
        'https://www.cryptocompare.com/media/20626/imageedit_27_4355944719.png'],
    ['LSK',
        'https://www.cryptocompare.com/media/27011060/lsk.png'],
    ['BTG',
        'https://www.cryptocompare.com/media/27011062/btg.png'],
    ['NEO', 'https://www.cryptocompare.com/media/1383858/neo.jpg'],
    ['BTC', 'https://www.cryptocompare.com/media/19633/btc.png'],
    ['ONT',
        'https://www.cryptocompare.com/media/30001663/ont.jpg'],
    ['XRP',
        'https://www.cryptocompare.com/media/19972/ripple.png'],
    ['LTC',
        'https://www.cryptocompare.com/media/19782/litecoin-logo.png'],
    ['SC',
        'https://www.cryptocompare.com/media/20726/siacon-logo.png'],
    ['ADA',
        'https://www.cryptocompare.com/media/12318177/ada.png'],
    ['EOS',
        'https://www.cryptocompare.com/media/1383652/eos_1.png']]


imgLinks.forEach(function (data, idx) {
    const [symbol, link] = data;
    // console.log("Symbol: ", symbol);
    // console.log("Link: ", link);
    const options = {
        url: link,
        dest: `../src/assets/images/logos/${symbol}.png`                // Save to /path/to/dest/image.jpg
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
