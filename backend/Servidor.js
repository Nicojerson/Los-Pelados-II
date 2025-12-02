import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
import fs from "fs";

startServer()
let sabores = JSON.parse(fs.readFileSync("../data/sabores.json", "utf-8"));
let productos = JSON.parse(fs.readFileSync("../data/productos.json", "utf-8"));
let pedidos = JSON.parse(fs.readFileSync("../data/pedidos.json", "utf-8"));

function mandarsabores (){
return sabores
}

function mandarproductos (){
return productos
}

function recibirpedidoyescribirlo (pedido) {
pedidos.push(pedido)
fs.writeFileSync("../data/pedidos.json", JSON.stringify(pedidos, null, 2))
return {ok: true}
}

subscribeGETEvent ("sabores", mandarsabores)
subscribeGETEvent ("productos", mandarproductos)
subscribePOSTEvent ("pedidos", recibirpedidoyescribirlo)


