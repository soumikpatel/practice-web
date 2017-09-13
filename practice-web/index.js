function changeIt() {

    var input = document.getElementById('firstTextBox').value;

    if (input == 0) {
        alert('Please type the new heading.');
        return;
    }

    var title = document.getElementById('title');
    title.innerHTML = input;

}