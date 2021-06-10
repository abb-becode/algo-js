const readlineSync = require("readline-sync");
const math = require("math");

/*using function*/

/*
    this program display a randomized list of the TV series 
*/

const askTvSerie = () =>  {
    let tvSerie = {
        serieName: "",
        productionYear: "",
        castMembers: []
    };
    let pCastMembers = [];
    let data = {};
    let pName = readlineSync.question('serie name? ');
    let pProductionYear = readlineSync.question('production year? ');
    let pCastNames = readlineSync.question('cast members(seperate values with comma if many) ? ');
    tvSerie.serieName = pName;
    tvSerie.productionYear = pProductionYear;
    pCastMembers = pCastNames.split(',');
    for (let i = 0; i < pCastMembers.length; i++) {
        data = {};
        data.castName = pCastMembers[i];
        tvSerie.castMembers.push(data);
    }
    console.log(tvSerie.castMembers);
    //let tvs = JSON.stringify(tvSerie);
    return tvSerie;
    //return JSON.stringify(tvs);
}

const randomizeCast = (tvSeries) => {
    //let tsJson =  JSON.stringify(tvSeries);
    console.log(tvSeries.sort(() => Math.random() - 0.5));
    //console.log(tsJson);
}

console.log("----------------------------------------------------------");
console.log("* This program display a randomized list of the TV series *");
console.log("-----------------------------------------------------------");

var tsArray = [];
var response = true;
while (response) {
    tsArray.push(askTvSerie());
    let resp = "";
    while (resp.toUpperCase() != "YES" && resp.toUpperCase() != "NO") {
        resp = readlineSync.question('more (yes/no)? ');
    }
    if (resp.toUpperCase() == "NO") { response = false};
}

//console.log(tsArray);
randomizeCast(tsArray);
//console.log(JSON.stringify(castObjs));


