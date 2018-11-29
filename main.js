let textField = document.getElementById('keypress-input');

textField.addEventListener("keyup", function(event) {
    article_1.innerHTML = event.target.value
    article_2.innerHTML = event.target.value
}) 

