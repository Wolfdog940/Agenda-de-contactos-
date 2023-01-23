


async function allContacts() {

    return await fetch("http://127.0.0.1:5000/allcontacs", {



        headers: {

            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        },
    })
        .then((resp) => {
            return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
        })
        .then((data) => {

            let newData = data.data

            let contactos = newData.reverse().map(function (element) {

                let lista = document.createElement("li");
                let parrafo = document.createElement("p");
                let parrafo2 = document.createElement("p");
                let parrafo3 = document.createElement("p");
                let borrar = document.createElement("button");
                let edit = document.createElement("button");
                edit.setAttribute("type","button")
                edit.setAttribute("id","modal")

                edit.setAttribute("class","btn btn-primary")
                edit.setAttribute("data-bs-toggle","modal")
                edit.setAttribute("data-bs-target","#exampleModal")


                if(edit){

                    var modal = document.getElementById("myModal")
                    
                    var span = document.getElementsByClassName("close")[0]
                    var body= document.getElementsByTagName("body")
                    
                    edit.onclick = function(){
                    
                        modal.style.display ="block";
                        body.style.position="static";
                        body.style.height="100%";
                        body.style.overflow="hidden"
                    }
                    
                    span.onclick = function(){
                    
                        modal.style.display ="none";
                        body.style.position="inherit";
                        body.style.height="auto";
                        body.style.overflow="hidden"
                    }
                    
                    
                    
                    
                    }

                borrar.setAttribute("class","delete")
                borrar.setAttribute("id",element.id)
                let ul = document.getElementById("ul")
                borrar.addEventListener("click",deleteContact)

                lista.appendChild(parrafo)
                lista.appendChild(parrafo2)
                lista.appendChild(parrafo3)
                lista.appendChild(borrar)
                lista.appendChild(edit)

                

                parrafo.innerHTML = "Nombre" + " :" + " " + element.fullname
                parrafo2.innerHTML = "Email" + " :" + " " + element.email
                parrafo3.innerHTML = "Phone" + " :" + " " + element.phone
                

                let newelement = ul.appendChild(lista)

                return newelement
            });

        })

        .catch((error) => {
            console.log("Error al buscasr contactos", error);
        });




}

allContacts()

 function saveContact() {

    let save =document.getElementById("save")

    save.addEventListener("click",async function(evento){
        evento.preventDefault();
        let fullname = document.getElementById("fullname")
        let email = document.getElementById("email")
        let phone = document.getElementById("phone")
        console.log(fullname.value)
        return await fetch("http://127.0.0.1:5000/new", {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        
        body: JSON.stringify({
            fullname: fullname.value,
            email: email.value,
            phone: phone.value

        })
    })
        .then((resp) => {
            return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
        })
        .then((data) => {
            fullname.value=""
            email.value=""
            phone.value=""
            window.location.reload();
            
        })
         .catch((error) => {
            console.log("Error al registar contacto", error);
        });
        


    
    })

    


    

}

saveContact()




async function deleteContact(e) {
    e.preventDefault();
    await fetch("http://127.0.0.1:5000/delete/"+e.target.id, {


        method: "DELETE",
        headers: {

            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        },
    })
        .then((resp) => {
            return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
        })
        .then((data) => {

                console.log("contact has been deleted")
                window.location.reload();
            })

        

        .catch((error) => {
            console.log("Error al buscasr contactos", error);
        });

}

   





