function createBook(){
    console.log('Create')
    let author = document.getElementById('author').value
    let name = document.getElementById('name').value

    fetch('/book', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'author': author || '', 'name': name || ' ', 'ready': false})
    })

}