function ajax(){
    const http = new XMLHttpRequest();
    const url = 'https://marsarasola.github.io/JSON-MENU/main.js/';

    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
        }
    }

    http.open("GET",url);
    http.send();

}

document.getElementById("boton").addEventListener("click", function(){
    ajax();
});