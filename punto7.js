var precios = [200, 230, 250, 300, 450, 500, 150, 175, 600, 100, 345, 460, 190, 275, 350];
var preciosAjustados = precios.map(function(precio) {
    return precio * 1.15;
});

var preciosMayores500OMenores200 = preciosAjustados.filter(function(precio) {
    return precio > 500 || precio < 200;
});
console.log("Precios mayores a 500 o menores a 200:", preciosMayores500OMenores200);
