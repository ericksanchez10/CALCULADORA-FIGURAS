function areaPerimeter() {
    const base = document.getElementById("base").value;
    const ancho = document.getElementById("ancho").value;

    const area = base * ancho;
    const perimeter = base ** 2 + ancho ** 2;

    const result_area = `el area es ${area}`;
    const result_perimeter = `el perimetro es ${perimeter}`

    document.getElementById("result_area").innerHTML = result_area;
    document.getElementById("result_perimeter").innerHTML = result_perimeter;
}