let listaFilmes = ["Senhor dos anéis - A sociedade do anel", "Senhor dos anéis - As duas Torres",
"Senhor dos anéis - O retorno do rei"];

let capas = ["filme1.jpg", "filme2.jpg", "filme3.jpg", "filme4.jpg"];

listaFilmes.push("Truque de mestre");


for(indice = 0; indice < listaFilmes.length; indice++){
    document.write("<p>" + listaFilmes[indice] + "</p>");
    document.write("<img src=" + capas[indice] + ">");
}