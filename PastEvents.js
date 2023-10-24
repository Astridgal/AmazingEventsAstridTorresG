const contenedor = document.getElementById("ContenedorCards")
const events = data.events
const fecha = data.currentDate


for (let Cards of events){
    if(Cards.date <= fecha){


const card1 = document.createElement("div")
card1.classList.add("card")
card1.innerHTML = `<img src="${Cards.image}" class="card-img-top" height="191" alt="...">
<div class="card-body gap-1 d-flex flex-column justify-content-center">
  <h4 class="card-title d-flex justify-content-center">${Cards.name}</h4>
  <p class="card-text d-flex text-truncate">${Cards.description}</p>
  
  <div class="d-flex justify-content-around">
    <h3> Price: $ ${Cards.price}</h3>
    <a href="./Details.html?id=${Cards._id}" class="btn BotonesDetails">Details</a>
</div>
</div>
</div>
</div>`

contenedor.appendChild(card1)

}}