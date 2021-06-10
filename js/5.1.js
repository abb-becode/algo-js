const readlineSync = require("readline-sync");
const math = require("math");

/*using function*/

/*
    this function ask user to enter a TV Series informations
    and returns the data entered as an object 
*/
let tvSerie = {
    serieName: "",
    productionYear: "",
    castMembers: []
};
let pCastMembers = [];
let data = {};

const askTvSerie = () =>  {
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
    return tvSerie;
};

console.log("----------------------------------------------")
console.log("* This program return object as json file    *")
console.log("----------------------------------------------")

let tvSerieObj = askTvSerie();
console.log(JSON.stringify(tvSerieObj));


