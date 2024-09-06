window.addEventListener("DOMContentLoaded", (evento) => {
  let contendor = document.querySelector("#contenedor");
  contendor.innerHTML = 'Cargando...';

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      contendor.innerHTML = '';
      mostrar(contendor, json);
      console.log(json);
    })
    .catch((error) => console.log(error.message + " Error en la solicitud"));

  function mostrar(contendor, elemento) {
    elemento.forEach((element) => {
      let muestrame = `
    <article>
      <h2>${element.id}.- ${element.title}</h2>
      <p>${element.body}</p>
    </article>
    <hr>
    `;

      contendor.innerHTML += muestrame;
    });
  }
});

let nuevo_post = JSON.stringify({
  userId: 123,
  title: "ratione ex tenetur perferendis",
  body: "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui",
});

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: nuevo_post,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((datos) => console.log(datos));
