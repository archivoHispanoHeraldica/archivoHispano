window.addEventListener("load", () => {
  fetch("./json/imagenes.json")
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
      }
      return respuesta.json();
    })
    .then((respuesta) => {
      mostrarImagenes(respuesta);
    })
    .catch((error) => {
      alert("hubo un problema al cargar las imagenes " + error);
    });
});
function mostrarImagenes(imagenes) {
  console.log(imagenes);
  let galeriaImagenes = document.getElementById("galeriaImagenes");

  imagenes.forEach(imagenEnlace => {
    // Crear los elementos
    const article = document.createElement("article");
    const cabecera = document.createElement("div");
    const cuerpo = document.createElement("div");
    const titulo = document.createElement("h3");
    const texto = document.createElement("p");
    const imagen = document.createElement("div");
    const img = document.createElement("img");

    // Añadir las clases con classList
    article.classList.add("tarjeta");
    cabecera.classList.add("cabeceraTarjeta");
    cuerpo.classList.add("cuerpoTarjeta");
    titulo.classList.add("tituloTarjeta");
    texto.classList.add("textoTarjeta");
    imagen.classList.add("divImagenes");

    // Añadir el contenido de texto
    titulo.textContent = "Tags:";
    texto.textContent = "tag";
    img.src = "https://pub-99626c190f264c3495b63f955cc9b130.r2.dev/archivoHispano/" + imagenEnlace.enlace;

    // Montar la estructura (de dentro hacia fuera)
    imagen.appendChild(img);
    cuerpo.append(titulo, texto);
    article.append(cabecera, cuerpo,imagen);

    galeriaImagenes.append(article);
  });
}
