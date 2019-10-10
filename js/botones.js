function cambiar() {
    var pdrs = document.getElementById('foto').files[0].name;
    document.getElementById('info').innerHTML = pdrs;
}