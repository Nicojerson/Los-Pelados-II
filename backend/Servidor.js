import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
import fs from "fs";

function mandarsabores (){
const sabores = JSON.parse(fs.readFileSync("data/sabores.json", "utf-8"));
return sabores
}

subscribeGETEvent ("SABORES", mandarsabores)
