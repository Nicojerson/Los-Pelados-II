import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
import fs from "fs";

startServer()
let sabores = JSON.parse(fs.readFileSync("data/sabores.json", "utf-8"));
let productos = JSON.parse(fs.readFileSync("data/productos.json", "utf-8"));
let pedidos = JSON.parse(fs.readFileSync("data/pedidos.json", "utf-8"));

function mandarsabores (){
return sabores
}

function mandarproductos (){
return productos
}

function recibirpedido (pedido) {
pedidos.push(pedido)

}



subscribeGETEvent ("sabores", mandarsabores)
subscribePOSTEvent ("productos")


