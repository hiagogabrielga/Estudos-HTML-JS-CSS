function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getUTCHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = "img/manha.jpg"
        msg.innerHTML += `, Bom Dia`
        document.body.style.background = "rgb(224, 189, 71)"

    } else if (hora >= 12 && hora <= 18) {
        img.src = "img/tarde.jpg"
        msg.innerHTML += `, Boa Tarde`
        document.body.style.background = "rgb(255, 137, 26)"
    } else {
        img.src = "img/noite.jpg"
        msg.innerHTML += `, Boa Noite`
        document.body.style.background = "rgb(34, 73, 131)"
    }
}