/* Function in JS */
/*
function savatchaniTekshir(uzatilganContainer=[78,"text",true]){


    if (uzatilganContainer.length == 0){

        document.write("Savatchamiz ichida" + uzatilganContainer.length +" ta ma'lumot bor!");
    }
    else {
        document.write("Savatchamiz ichida" + uzatilganContainer.length +" dona ma'lumot bor!");
    }
}


let container = [12,"javascript"];


savatchaniTekshir();*/

/* Date in JS */

let sana = new Date();

sana.setFullYear(2024);
sana.setDate(26)
sana.setHours(17)
sana.setMinutes(50)
sana.setMonth(4)
sana.setSeconds(15)
sana.setTime()
sana.set

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftakuni = sana.getDay();
let oylar = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentyabr","Oktyabr","Noyabr","Dekabr"];
let kunlar = ["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"];

let sekund = sana.getSeconds()
let soat = sana.getHours()
let minut = sana.getMinutes()
let timezona = sana.getTimezoneOffset()
let millisekund = sana.getMilliseconds()
let utssana = sana.getUTCDate()
let utskun = sana.getUTCDay()
let utstoliqyil = sana.getUTCFullYear()
let utssoat = sana.getUTCHours()
let utsoy = sana.getUTCMonth()
let utssekund = sana.getUTCSeconds()
let utsmillisekund = sana.getUTCMilliseconds()
let utsversana = sana.getVarDate

document.write(yil+"-yil"  + kun  + "-" + oylar[oy] +
    "- Haftaning " + kunlar[haftakuni] + "kuni");
