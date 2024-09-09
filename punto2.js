var precios = [200, 230, 250, 300, 450, 500, 150, 175, 600, 100, 345, 460, 190, 275, 350];
var preciosAjustados = precios.map(function(precio) {
    return precio * 1.15;
});

var preciosEntre300y500 = preciosAjustados.filter(function(precio) {
    return precio >= 300 && precio <= 500;
});
console.log("Precios entre 300 y 500:", preciosEntre300y500);
