fetch("https://scratchdb.lefty.one/v3/forum/user/info/god286").then((response) => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Something went wrong');
})
    .then((responseJson) => {
        return;
    })
    .catch((error) => {
        document.querySelector('#status').innerText = 'down!'
        document.getElementById('body').style.background = 'red';
        return;
    });