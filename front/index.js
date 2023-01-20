



async function allcontacts(){

  return await  fetch("http://127.0.0.1:5000/allcontacs", {
      
   
    
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Error al registar el usuario", error);
    });

}




    


