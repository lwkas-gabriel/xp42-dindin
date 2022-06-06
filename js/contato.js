const btnEnviar = document.getElementById("btnEnviar");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
toastr.options.positionClass = "toast-top-right";


btnEnviar.onclick = () =>{

    if(!nome.value || !email.value ){
        return toastr.error("Dados inválidos!");
    }
    toastr.success("Dados enviados com sucesso!");
}

