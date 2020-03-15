let botaoEnviar = document.getElementById("enviar");

botaoEnviar.onclick = function () {

    let name = document.getElementById("nome").value;
    let phone = document.getElementById("telefone").value;
    let completeName = name.split(" ");
    let firstName = completeName[0];
    let lastName = completeName[1];
    let obj;
    let redesocial = "";
    let ValidForm = true;
    let firstContant = document.getElementById("primeiro_contato").value;


    // validation name
    if (name == "") {

        alert("Por favor informe seu nome!!");
        ValidForm = false;

    } else {

        if (lastName == "" || lastName == undefined) {
            alert("Informe um nome e sobrenome!!");
            ValidForm = false;
        }
    }
    // validation phone
    if (phone == "") {
        alert("Por favor informe seu telefone!!");
        ValidForm = false;
    } else {

        if (phone.match("[0-9]{2}-[0-9]{8}") != phone) { // teste se telefone segue o padrão 99-99999999

            alert("O telefone dever seguir exatamente o padrão: 99-99999999\n2 números-8 números");
            ValidForm = false;
        }
    }

    if (document.getElementById("sim").checked) {
        let medias = [];
        if (document.getElementById("facebook").checked) {
            medias.push("Facebook");
        }
        if (document.getElementById("linkedln").checked) {
            medias.push("Linkedln");
        }
        if (document.getElementById("instagram").checked) {
            medias.push("Instagram")
        }
        obj = {
            nome: name,
            telefone: phone,
            primeiro_contato: firstContant,
            possui_rede_social: "sim",
            redes_sociais: medias

        }
    } else {
        if (document.getElementById("nao").checked) {
            redesocial = "não"
        }
        obj = {
            nome: name,
            telefone: phone,
            primeiro_contato: firstContant,
            possui_rede_social: redesocial,
        }
    }


    if (ValidForm) {
        sendJson(obj);
        alert("Formulário enviado com sucesso!");
        document.getElementById("enviar").disabled = true;
    }
}


function sendJson(obj) {
    let myJson = JSON.stringify(obj);
    console.log(myJson);
    const connection = new XMLHttpRequest();

    connection.open("POST", "http://localhost:8080");
    connection.setRequestHeader("Content-Type", "application/json");
    connection.send(myJson);
}


function ShowSocialMedia(opt) {
    if (opt == "sim") {
        document.getElementById("rede-social-div").style.display = "block"
    } else {
        document.getElementById("rede-social-div").style.display = "none"
    }
}