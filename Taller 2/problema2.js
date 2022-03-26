//todos los planos falsos tienen números de serie 
//consecutivos comenzando desde el #11. SOLO si 
//se obtiene un plano verdadero Chewbacca y Han pueden abordar su nave


//Configure la rutina necesaria para despegar la nave utilizando callbacks


//Declaro la funcion principal 
function recibirPlanos(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, callback) {
    //Proceso de la funcion pricipal 
    setTimeout(function () {
      let planos = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, ]
      let planosFiltrados = planos.filter(function(plano){
          return(plano>=1 && plano<=11)
      })
      callback(planosFiltrados)
    }, 10000)
  }
  
  //LLamado de la funcion pricipal 
  recibirPlanos(100,55,22,15,19,44,11,40,29,78, function(planosFiltrados){
      if(planosFiltrados.length>0){
          console.log("La Nave puede despegar  ")
      }else{
          console.log("La Nave no puede despegar asi")
      }
  })