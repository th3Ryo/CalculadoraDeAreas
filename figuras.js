//cuadrado

console.group ("cuadrado");
function perimetroCuadrado (baseCuadrado,alturaCuadrado) {
    return ((baseCuadrado+alturaCuadrado) * 2 )
    
    };
    
function areaCuadrado (baseCuadrado,alturaCuadrado) { 
    return baseCuadrado * alturaCuadrado ;
    }
console.groupEnd();

//triangulo
console.group("triangulo")
function perimetroTriangulo (ladoTriangulo1, ladoTriangulo2, ladoTriangulo3 )//el 3 es la base ;
    {
        return ladoTriangulo1*1 + ladoTriangulo2*1 + ladoTriangulo3*1 ;
    }

function calculoAlturaTriangulo(ladoTriangulo1,baseTriangulo) {
    return Math.sqrt(((ladoTriangulo1)**2)-((baseTriangulo/2)**2))
}


function AreaTriangulo (ladoTriangulo , alturaTriangulo) {
    return (ladoTriangulo * alturaTriangulo)/2
}
console.groupEnd();


//circulo
console.group("circulo")
const PI = Math.PI;
function perimetroCirculo (radioCirculo) {
    return  (PI*radioCirculo*2);
}
function areaCirculo (radioCirculo) {
    return Math.pow (radioCirculo,2)*PI;
}

console.groupEnd ();

// cuadrado
function calcularPerimetroCuadrado () {
    const input = document.getElementById('inputCuadrado');
    const value = parseInt(input.value);
    const input2 = document.getElementById('inputCuadrado2');
    const value2 = parseInt(input2.value);
    const perimetroC = perimetroCuadrado(value,value2);
    console.log(value);
    alert(perimetroC +" cm");
    var navView = document.getElementById("navViewC");
    return navView.innerHTML = "el perimetro es: "+perimetroC+" Cm"; 
    
}


function calcularAreaCuadrado () {
    const input = document.getElementById("inputCuadrado");
    const value = parseInt(input.value);
    const input2 = document.getElementById('inputCuadrado2');
    const value2 = parseInt(input2.value);
    const areaC = areaCuadrado (value,value2);
    alert(areaC + " cm2");
    var navView = document.getElementById("navViewC");
    return navView.innerHTML = "el Area es: "+areaC+" Cm2";
   
}
// triangulo
function calcularPerimetroTriangulo () {
    const inputt1 = document.getElementById("inputTriangulo1");
    const valuet1 = parseInt(inputt1.value);      
    const inputt2 = document.getElementById("inputTriangulo2");
    const valuet2 = parseInt(inputt2.value) ;
    const inputt3 = document.getElementById("inputTriangulo3");
    const valuet3 = parseInt(inputt3.value) ;
    if (valuet1 == valuet2 || valuet1 == valuet3 || valuet2 == valuet3) {
        const perimetroT = perimetroTriangulo(valuet1,valuet2,valuet3);
        alert(perimetroT +" cm");
        var navView = document.getElementById("navViewT");
        return navView.innerHTML = "el perimetro es: "+perimetroT.toFixed(2)+" Cm"; 
    }
    else {
        alert("no es un isoseles"); }
}

function calcularAreaTriangulo () {

    const inputt1 = document.getElementById("inputTriangulo1");
    const valuet1 = parseInt(inputt1.value);      
    const inputt2 = document.getElementById("inputTriangulo2");
    const valuet2 = parseInt(inputt2.value) ;
    const inputt3 = document.getElementById("inputTriangulo3");
    const valuet3 = parseInt(inputt3.value) ;
    
    const maxValue =Math.max (valuet1,valuet2,valuet3)
    const minValue =Math.min (valuet1,valuet2,valuet3)
    
    

    if (valuet1 == valuet2) {
        
        const alturaT = calculoAlturaTriangulo(valuet3,maxValue);
        const areaT = AreaTriangulo (valuet1,alturaT);
        alert(alturaT + " cm2 "+" base valor : "+valuet3);
        var navView = document.getElementById("navViewT");
        return navView.innerHTML = "el Area es: "+areaT.toFixed(2) +" Cm2";
    }
    
    if (valuet1 == valuet3) {
        
        const alturaT = calculoAlturaTriangulo(valuet2,maxValue);
        const areaT = AreaTriangulo (valuet1,alturaT);
        alert(alturaT + " cm2 "+" base valor : "+valuet2);
        var navView = document.getElementById("navViewT");
        return navView.innerHTML = "el Area es: "+areaT.toFixed(2)+" Cm2";
        }  
     
    if (valuet2 == valuet3) {
        
        const alturaT = calculoAlturaTriangulo(valuet1,maxValue);
        const areaT = AreaTriangulo (valuet1,alturaT);
        alert(alturaT + " cm2 "+" base valor : "+valuet1);
        var navView = document.getElementById("navViewT");
        return navView.innerHTML = "el Area es: "+areaT.toFixed(2)+" Cm2";
        }  
              
    else {
        alert("no es un isoseles"); }
    }
//circulo
function calcularPerimetroCirculo () {
    const input = document.getElementById("inputCirculo");
    const value = input.value ;
    const perimetroCi = perimetroCirculo (value);
    alert(perimetroCi + " cm2");
    var navView = document.getElementById("navViewCi");
    return navView.innerHTML = "el perimetro es: "+perimetroCi.toFixed(2)+" Cm"; 
   
}

function calcularAreaCirculo () {
    const input = document.getElementById("inputCirculo");
    const value = input.value ;
    const areaCi = areaCirculo (value);
    alert(areaCi + " cm2");
    var navView = document.getElementById("navViewCi");
    return navView.innerHTML = "el Area es: "+areaCi.toFixed(2)+" Cm2";
   
}
