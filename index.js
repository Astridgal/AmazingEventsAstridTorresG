const contCheckbox = document.getElementById("contenedorCheckbox")
const categorias1 = data.events

const categorias = categorias1.map (categoria => categoria.category)
// console.log(categorias);

const categoriasSinDuplicado = [... new Set (categorias) ];
// console.log(categoriasSinDuplicado);


const arrayCategorias= Array.from(categoriasSinDuplicado)

function checkCategory(checkCategory) {
for(let category of checkCategory){
const checkbox = document.createElement("div")
checkbox.classList.add("form-check")
checkbox.innerHTML = `<input class="form-check-input" type="checkbox" value="${category}" id="${category}">
<label class="form-check-label" for="${category}">${category}</label>
`
contCheckbox.appendChild(checkbox)
}
}
checkCategory(arrayCategorias)


// Escuchar evento

contCheckbox.addEventListener("change", filtrar)
function filtrar(arrayFiltrados){
  const chequeados = document.querySelectorAll
  ("input[type=checkbox]:checked")
  const arrayChequeados = Array.from(chequeados)

  const arrayNuevo = arrayChequeados.map(checked => checked.value)

  console.log(arrayNuevo);
}

// Filtrado

let checksFilrados =[]
arrayFiltrados.forEach(check => {
  arrayNuevo.forEach(categoria => {
    if (categoria == check.category) {
      
    }
  })
});






//cards

const events = data.events
const contenedor = document.getElementById("ContenedorCards")



for(let Cards of events){
const card1 = document.createElement("div")
card1.classList.add("card")
card1.innerHTML = `<img src="${Cards.image}" class="card-img-top cardImg" height="191" alt="...">
<div class="card-body gap-1 d-flex flex-column justify-content-center">
  <h4 class="card-title d-flex justify-content-center">${Cards.name}</h4>
  <p class="card-text d-flex text-truncate ">${Cards.description}</p>
  <div class="d-flex justify-content-around">
    <h3> Price: $ ${Cards.price}</h3>
  <a href="./Details.html?id=${Cards._id}" class="btn BotonesDetails">Details</a>
</div>
</div>`

contenedor.appendChild(card1)

}

