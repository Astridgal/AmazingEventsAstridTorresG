const urlParams = new URLSearchParams (window.location.search)
const id = urlParams.get ("id")
console.log(id);

const events = data.events
let idEncontrado = events.find(events => events._id == id)  
console.log(idEncontrado);

const detalleCartas = document.getElementById("detalleCartas")

function cardDetails(detalles) {
    const card = document.createElement("div")
card.classList.add("card", "cardDetails","row", "no-gutters")
card.innerHTML = `<img src="${detalles.image}" class="card-img h-100 img-fluid cardImge" alt="...">
<div class="card-body justify-content-center ">
  <h5 class="card-title TituloDetails  bg-dark d-flex justify-content-center">${detalles.name}</h5>
  <div class="card-body justify-content-center texto ">
  <p class="card-text d-flex"><strong> Date: </strong> ${ detalles.date}</p>
  <p class="card-text d-flex"><strong> Category:</strong> ${detalles.category}</h6>
  <p class="card-text d-flex"><strong> Place:</strong> ${detalles.place}</p>
  <p class="card-text d-flex"><strong> Capacity:</strong> ${detalles.capacity}</p>
  <p class="card-text d-flex"><strong> Estimate:</strong> ${detalles.estimate}</p>
  <div class="d-flex  precio">
    <h3><strong> Price:</strong> $ ${detalles.price}</h3>

</div>
</div>
</div>`

detalleCartas.appendChild(card)
}

cardDetails(idEncontrado)
