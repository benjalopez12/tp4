var precios = [200, 230, 250, 300, 450, 500, 150, 175, 600, 100, 345, 460, 190, 275, 350];
var preciosAjustados = precios.map(function(precio) {
    return precio * 1.15;
});

var preciosMenores200 = preciosAjustados.filter(function(precio) {
    return precio < 200;
});
console.log("Precios menores a 200:", preciosMenores200);
