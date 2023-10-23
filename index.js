const contCheckbox = document.getElementById("contenedorCheckbox")
const eventos = data.events

for(let Check of eventos){
const checkbox = document.createElement("div")
checkbox.classList.add("form-check")
checkbox.innerHTML = `<input class="form-check-input" type="checkbox" value="" id="category1">
<label class="form-check-label" for="category1">${Check.category}</label>
`
contCheckbox.appendChild(checkbox)
}


const events = data.events
const contenedor = document.getElementById("ContenedorCards")



for(let Cards of events){
const card1 = document.createElement("div")
card1.classList.add("card")
card1.innerHTML = `<img src="${Cards.image}" class="card-img-top cardImg" height="191" alt="...">
<div class="card-body gap-1 d-flex flex-column justify-content-center">
  <h2 class="card-title d-flex justify-content-center">${Cards.name}</h2>
  <p class="card-text d-flex">${Cards.description}</p>
  <div class="d-flex justify-content-around">
    <h3> Price: $ ${Cards.price}</h3>
  <a href="Details.html" class="btn BotonesDetails">Details</a>
</div>
</div>`

contenedor.appendChild(card1)

}

