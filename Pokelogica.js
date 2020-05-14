
  function searchPokemon()
  {
    var card_body       = document.getElementById("card-body");
    var imagen_pokemon  = document.getElementById("imagenpokemon");
    var namePokemon     = document.getElementById("namePokemon").value;
    var rowPokemon      = document.getElementById("rowPokemon");
    var alertPokemon    = document.getElementById("alertPokemon");
    var successPokemon  = document.getElementById("successPokemon");
    alertPokemon.innerHTML = "";
    successPokemon.innerHTML = "";
    namePokemon         = namePokemon.toLowerCase();
    fetch('https://pokeapi.co/api/v2/pokemon/'+namePokemon+'/')
      .then(function(response) {
        return response.json();
      })
      .then(function(neko) {
        console.log(neko.abilities['0'].ability.name);
        console.log(neko.abilities['1'].ability.name);
        console.log(neko.sprites.front_default);
        console.log(neko.forms['0'].name);
        rowPokemon.style = "display:block";
        alertPokemon.style= "display:none";

        successPokemon.style ="display:block";
        successPokemon.append('Se ha encontrado el pokemon. Su pokemon es: '+neko.forms['0'].name+'');
        setTimeout(() => {
          successPokemon.style = "display:none";
        }, 2000);
        
        
        imagen_pokemon.src = neko.sprites.front_default;
        card_body.innerHTML= ' <h5 class="card-title">Pokemon: '+neko.forms['0'].name+'</h5><hr><p> Habilidad 1: '+neko.abilities['0'].ability.name+' <br>Habilidad 2: '+neko.abilities['1'].ability.name+' </p>';
      }).catch(function(error){
        rowPokemon.style = "display:none";

        successPokemon.style = "display:none";

        alertPokemon.style = "display:block";
        alertPokemon.append("Ups! Se ha relizado una busqueda en nuestras base de datos y no se ha encontrado el pokemon. Por favor coloque un nombre valido.");

        setTimeout(() => {
          alertPokemon.style ="display:none";
        }, 2000);
      }); 
  }

  
  
  
  
