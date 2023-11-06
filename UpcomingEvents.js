const contCheckbox = document.getElementById("contenedorCheckbox")
const categorias1 = data.events

let arrayCategorias = []

arrayCategorias = Array.from(new Set(categorias1.map(categoria => categoria.category)))


//pintar checkbox

function checkCategory(catCheck){
catCheck.forEach(category => {
  const checkbox = document.createElement("div")
  checkbox.classList.add("form-check")
  checkbox.innerHTML = `<input class="form-check-input" type="checkbox" value="${category}" id="${category}">
  <label class="form-check-label" for="${category}">${category}</label>
  `
  contCheckbox.appendChild(checkbox)
}) 
}



checkCategory(arrayCategorias)


// Escuchar evento

contCheckbox.addEventListener("change", () => {

  superFiltro(categorias1)
})

function filtrar(arrayCartas){
  const chequeados = Array.from(document.querySelectorAll
  ("input[type=checkbox]:checked")).map(checkbox => checkbox.value)
  

  let filtrados = []

  arrayCartas.forEach(checked =>{
    chequeados.forEach(categoria => {
      if (categoria == checked.category) {
        filtrados.push(checked)
      }
    })
  })
  if(filtrados.length == 0){
    filtrados = arrayCartas
  }
  console.log(arrayCartas);
  console.log(filtrados);
return filtrados
}

function filtroTexto(arrayCartas){
  return arrayCartas.filter(categoria => categoria.category.toLowerCase().includes(buscador.value.toLowerCase()))
}

buscador.addEventListener("keyup",()=>{

  superFiltro(categorias1)
})

function superFiltro(arrayCartas){
  let filtro = filtrar(categorias1)
  let filtro2 = filtroTexto(filtro)
  crearCard(filtro2)
}


const contenedor = document.getElementById("ContenedorCards")
const fecha = data.currentDate


function crearCard(arrayCartas){
  if(arrayCartas.length == 0){
    contenedor.innerHTML = "<h2>Category not found</h2>"
  } else{
contenedor.innerHTML = ""
for(let Cards of arrayCartas){
  if(Cards.date >= fecha){
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

}}}}
 crearCard(categorias1)