function multimedia() {
    "use strict";

    function cogeElemento(id) {
        return document.getElementById(id);
    }

    var video = cogeElemento("video");


    function reproducir() {
        video.play();
    }

    function parar() {
        video.currentTime = 0;
        video.pause();
    }

    function pausar() {
        video.pause();
    }

    function silenciar() {
        video.volume = 0.0;
    }

    function sonido() {
        video.volume = 0.7;
    }

    function masVolumen() {
        if (video.volume < 1.0) {
            video.volume += 0.1;
        } else {
            video.volume = 1.0;
        }
    }

    function menosVolumen() {
        if (video.volume > 0.0) {
            video.volume -= 0.1;
        } else {
            video.volume = 0.0;
        }
    }

    function avanzar() {
        if (video.currentTime < 10) {
            video.currentTime += 3;
        } else {
            video.currentTime = 10;
        }
    }

    function retroceder() {
        if (video.currentTime > 0) {
            video.currentTime -= 3;
        } else {
            video.currentTime = 0;
        }
    }

    function reempezar() {
        video.currentTime = 0;
        video.play();
    }

    cogeElemento("reproducir").onclick = reproducir;
    cogeElemento("pausar").onclick = pausar;
    cogeElemento("parar").onclick = parar;
    cogeElemento("sonido").onclick = sonido;
    cogeElemento("silenciar").onclick = silenciar;
    cogeElemento("subirvolumen").onclick = masVolumen;
    cogeElemento("bajarvolumen").onclick = menosVolumen;
    cogeElemento("avanzar").onclick = avanzar;
    cogeElemento("retroceder").onclick = retroceder;
    cogeElemento("reempezar").onclick = reempezar;
}

window.onload = multimedia;
