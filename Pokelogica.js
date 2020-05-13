
var contenido = document.querySelector ('#contenido')

fetch('https://pokeapi.co/api/v2/pokemon/raichu/')
  .then(function(response) {
    return response.json();
  })
  .then(function(neko) {
    console.log(neko.abilities['0'].ability.name);
    console.log(neko.abilities['1'].ability.name);
    console.log(neko.sprites.front_default);
    console.log(neko.forms['0'].name);
    contenido.innerHTML= ' <div  class="card" style="width: 18rem;" > <img class="table table-dark" class="card-img-top" src='+neko.sprites.front_default+' alt=""Card image cap"">  <div  class="card-body"> <h5  class="card-title">Pokemon: '+neko.forms['0'].name+'</h5> <hr> <p> Habilidad 1:  '+neko.abilities['0'].ability.name+' <br> Habilidad 2:  '+neko.abilities['1'].ability.name+' </p>  </div> </div>';
  }); 

  
  
  
  
