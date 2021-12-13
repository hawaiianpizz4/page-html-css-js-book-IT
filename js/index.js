//variables

//Header
const imagenHeader={
    src:["/TrabajoPractico/img/hamburguesa.svg"],
    alt:[""],
    class:["hamburger"]
}
const p1={
    href:["#inicio", "#servicio", "#portafolio", "#expertos", "#contacto"],
    name:["Inicio", "Servicio", "Portafolio", "Expertos", "Contacto"] 
}

const p2={
    class:["it", "titulo", "copy"],
    name:["IT", "Si Georgie, todos flotan... Y cuando estes aquí abajo, tu tambien flotaras.", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, velit maiores. Quia mollitia facere corrupti nulla cum harum obcaecati, velit temporibus hic distinctio sequi eos soluta vitae deleniti assumenda dicta!"] 
}

const p3={
    class:["service", "service", "service", "service", "service", "service", "service", ],
    class2:["n-service", "n-service", "n-service", "n-service", "n-service", "n-service", "n-service",],
    span:["number", "number", "number", "number", "number", "number", "number",], 
    spanname:["1", "2", "3", "4", "5", "6", "7"],
    tituloname:["William 'Bill' Denbrough", "Benjamin 'Ben' Hanscom", "Beverly 'Bev' Marsh", "Richard 'Richie' Tozier", "Edward 'Eddie' Kaspbrak", "Stanley 'Stan' Uris", "Michael 'Mike' Hanlon"], 
    pname:["Conocido como 'Bill el Tartaja' porque es tartamudo. Su hermano George fue asesinado por Eso en 1957. A partir de esa tragedia, sus padres lo ignoran y él desarrolla un gran complejo de culpa y por eso decide matar a Eso pensando que así no tendría que soportar más la muerte de su hermano", "Por causa de su sobrepeso se convierte en la frecuente víctima de Henry Bowers. Además, sufre la ausencia de su padre, muerto en la guerra de Corea. Él está locamente enamorado de Beverly Marsh, aunque guarda en secreto sus sentimientos por ella.", "La única chica del grupo. En 1958, Beverly vivía en la parte pobre de Derry y tenía un padre que abusaba a menudo de ella. Inicialmente, Beverly estaba enamorada de Bill Denbrough. Sus habilidades con el tirachinas constituyen el punto clave en la batalla contra Eso.", "Es el miembro más divertido del grupo; a veces hace grandes bromas o personificaciones y esto prueba ser un arma muy poderosa contra Eso. Su trauma de la niñez es que utiliza rápidamente los insultos cuando no debería hacerlo y sabe que está en peligro si lo hace, pero aun así los dice.", "Es el miembro, físicamente, más frágil del grupo; es un hipocondríaco y tiene asma (psicosomática). Educado por una madre dominante y sobreprotectora, desde la muerte de su padre.", "Conocido como 'Stan, el galán'. Es el último en aceptar la existencia de Eso y afirma que su existencia no tiene lógica. Stan, así como Mike, por motivos religiosos (es judío) fue perseguido por Henry Bowers. Cuando niño, era un boy-scout y su pasatiempo era observar pájaros.", "El último en unirse a «Los perdedores». Por ser afroamericano es perseguido muchas veces por Henry Bowers. Tras el primer enfrentamiento con Eso, Mike es el único que se queda en Derry y se convierte en bibliotecario."]
}



//Funciones 

function cargarContenedor1(){
    var texto=""; 
    for(var i=0; i<p1.href.length; i++){
        texto+=
        `<a href="${p1.href[i]}">${p1.name[i]}</a>`;
    }
    return texto;
};

function cargarContenedor2(){
    var texto="";
    for(var i=1; i<p2.class.length; i++){
        texto+=
        `<h1 class="${p2.class[i-1]}">${p2.name[i-1]}</h1>`;
    }
    for(var i=2; i<p2.class.length; i++){
        texto+=`<p class="${p2.class[i]}">${p2.name[i]}</p>`;
    }
    return texto;
}

function cargarContenedor3(){
    var texto="";
    for(var i=0; i<p3.class.length; i++){
        texto+=`<div class="${p3.class[i]}">
        <h3 class="${p3.class2[i]}"><span class="${p3.span[i]}">${p3.spanname[i]}</span>${p3.tituloname[i]}</h3>
        <p>${p3.pname[i]}</p>
        </div>`;
    }
    return texto;
}

    
    
// texto=`<img src="${imagenHeader.src[0]}" alt="${imagenHeader.alt[0]}" class="${imagenHeader.class[0]}"></img>`;
    

// document.getElementById("primeraParte").innerHTML=texto;
document.getElementById("parametrización1").innerHTML=cargarContenedor1();
document.getElementById("parametrización2").innerHTML=cargarContenedor2();
document.getElementById("parametrización3").innerHTML=cargarContenedor3();
// console.log(cargarContenedor2());