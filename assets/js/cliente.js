function saludar(){
    console.log("Diseño web 1");
    alert('WASAA')
    console.log(document);
    console.log(document.getElementById('parrafo1'));
    console.log(document.getElementById('parrafo1').innerHTML);
    console.log(document.getElementById('parrafo1').getAttribute('style'));

}

function cambiarParrafo2(){
    document.getElementById("parrafo2").innerHTML = 'FES ARAGOD XDXDXD'
    

}

function cambiarFondoBody(){
    const colores = ['#FFFFFFF','#33FF57','#22222FF','#22FF11','#ff2222']
    const colorArea = colores[Math.floor(Math.random() * 5)]
    console.log(colorArea)
    document.getElementById('cuerpo').style.backgroundColor = colorArea;
}