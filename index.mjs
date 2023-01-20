import fetch from "node-fetch"




    const resp =  fetch("http://127.0.0.1:5000", {
      
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
      
    });
    
console.log(resp)

