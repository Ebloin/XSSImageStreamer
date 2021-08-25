# XSSImageStreamer
An XSS payload that sends screenshot of the victim page using html2canvas to render page

To extract the image from the data received in post:
cat test | base64 -d | awk -F',' '{print $2}' | base64 -d > screen.png
