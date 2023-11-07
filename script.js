function toggleMode() {
  const html = document.documentElement

  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  html.classList.toggle(
    "light"
  ) /* O .toggle faz a mesma coisa que o if/else comentado acima */

  //Pegar a tag img
  const img = document.querySelector("#profile img")
  
  //Substituir a imagem
  if (html.classList.contains("light")) {
    //Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/husky-oculos.jpg")
  } else {
    //Se tiver ssem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/husky.jpg")
  }
}