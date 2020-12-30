function getInformation(x, y, r) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let data = xhr.responseText;
            drawTable(data);
        }
    }
    xhr.open('GET', 'Talkme.php?'+'x='+ x +'&y='+y+'&r='+r);
    xhr.send();
}