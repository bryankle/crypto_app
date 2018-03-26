const download = require('image-downloader');
const https = require('https');
const fs = require('fs');
const url = 'https://min-api.cryptocompare.com/data/all/coinlist';

https.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var response = JSON.parse(body);
        console.log("Got a response: ", response.data);
        console.log(response)
        fs.writeFile('./coin.json', body, function(err) {
            if (err) return console.log(err);
            console.log("File was successfully saved");
        })

    });


}).on('error', function(e){
      console.log("Got an error: ", e);
});
