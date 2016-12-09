function multimedia() {
    "use strict";

    function cogeElemento(id) {
        return document.getElementById(id);
    }

    var video = cogeElemento("video");


    function play() {
        video.play();
    }

    function pause() {
        video.pause();
    }

    function volumenMas() {
        if (video.volume <= 0.9) {
            video.volume += 0.1;
        }
    }

    function volumenMenos() {
        if (video.volume >= 0.1) {
            video.volume -= 0.1;
        }
    }

    cogeElemento("reproducir").onclick = play;
    cogeElemento("parar").onclick = pause;
    cogeElemento("subirvolumen").onclick = volumenMas;
    cogeElemento("bajarvolumen").onclick = volumenMenos;
}

window.onload = multimedia;
