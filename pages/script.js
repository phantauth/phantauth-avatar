var carousel;
var urlElement = document.getElementById("url");
var identifierElement = document.getElementById("identifier");
var carouselElement = document.querySelectorAll('.carousel');

document.addEventListener('DOMContentLoaded', function () {

    function getCurrentImg() {
        var index = 0;
        if (carousel) {
            index = (carousel.center % 25 + 25) % 25
        }
        return document.querySelector('.carousel').children[index].children[0]
    }

    function onCycleTo(item) {
        var img = getCurrentImg()
        identifierElement.value = img.src.slice(img.src.lastIndexOf('/') + 1)
        urlElement.value = img.src
    }

    carousel = M.Carousel.init(carouselElement, { onCycleTo: onCycleTo })[0];
    M.Parallax.init(document.querySelectorAll('.parallax'), {});

    var timeout = null;

    identifierElement.onkeyup = function (e) {
        clearTimeout(timeout);
        timeout = setTimeout(update, 750);
    }
    
    identifierElement.onchange = function (e) {
        update();
    }

    identifierElement.onpaste = function (e) {
        update();
    }

    identifierElement.oncut = function (e) {
        update();
    }

    function update() {
        var url = urlElement.dataset.prefix + identifierElement.value
        getCurrentImg().src = url;
        urlElement.value = url
    }

    new ClipboardJS(document.getElementById('clipboard-btn'));
});

