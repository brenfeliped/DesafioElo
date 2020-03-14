let botaoEnviar = document.getElementById("enviar");
botaoEnviar.onclick = function () {

    let name = document.getElementById("nome").value;
    let phone = document.getElementById("telefone").value;
    let completeName = name.split(" ");
    let firstName = completeName[0];
    let lastName = completeName[1];

    // validation name
    if (name == "") {
        alert("Por favor informe seu nome!!");
    } else {
        if (lastName == "" || lastName == undefined) {
            alert("Informe um nome e sobrenome!!");
        }
    }
    // validation phone
    if (phone == "") {
        alert("Por favor informe seu telefone!!");
    } else {
        if (phone.match("[0-9]{2}-[0-9]{8}") != phone) {
            alert("O telefone dever seguir exatamente o padrão: 99-9999999\n2 números-8 números");
        }
    }

}

function ShowSocialMedia(divID) {
    let display = document.getElementById(divID).style.display;
    console.log(display);
    if (display != "block") {
        document.getElementById(divID).style.display = "block"
    } else {
        document.getElementById(divID).style.display = "none"
    }
}