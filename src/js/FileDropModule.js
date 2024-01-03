function dragOverHandler(event) {
    event.preventDefault();
}

function dropHandler(event) {
    event.preventDefault();

    var files = event.dataTransfer.files;

    if (files.length > 0) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var fileContent = e.target.result;
            document.getElementById('fileContent').innerText = fileContent;
        };

        reader.readAsText(files[0]);
    }
}
