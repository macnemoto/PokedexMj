
var card_body       = document.getElementById("card-body");
var imagen_pokemon  = document.getElementById("imagenpokemon")
fetch('https://pokeapi.co/api/v2/pokemon/raichu/')
  .then(function(response) {
    return response.json();
  })
  .then(function(neko) {
    console.log(neko.abilities['0'].ability.name);
    console.log(neko.abilities['1'].ability.name);
    console.log(neko.sprites.front_default);
    console.log(neko.forms['0'].name);
    imagen_pokemon.src = neko.sprites.front_default;
    card_body.innerHTML= ' <h5 class="card-title">Pokemon: '+neko.forms['0'].name+'</h5><hr><p> Habilidad 1: '+neko.abilities['0'].ability.name+' <br>Habilidad 2: '+neko.abilities['1'].ability.name+' </p>';
  }); 

  
  
  
  
