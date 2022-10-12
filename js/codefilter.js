const codigo = document.getElementById("codigo")

const btnIngresar = document.getElementById("ingresar")

btnIngresar.addEventListener('click', calcular)

function calcular(){
    const henKode = codigo.value;
    
    if(henKode == "ABCD"){
        location.href="henk0Case1/login1.html"
    }else if(henKode == "EFG"){
        location.href="henk0Case2/login2.html"
    }else if(henKode == "HIJK"){
        location.href="henk0Case3/login3.html"
    }else if(henKode == "XPTCNIA"){
        location.href = "xptcnia/xptcnia.html"
    }

}
