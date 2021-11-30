// Se definen las variables




// Se declara las funciones

function registerStudent(){
    let nameStudent= document.getElementById("nameStudent").value;
    let numberDocument=document.getElementById("numberDocument").value;
    let campus= document.getElementById("campus").value;
    let workingDay= document.getElementById("workingDay").value;
    

    if (nameStudent == "") {
        alert("Debes llenar todos los campos");
    } else if(numberDocument== ""){   
        alert("Debes llenar todos los campos");
    }else if(campus==""){
        alert("Debes llenar todos los campos");
    }else if(workingDay==""){
        alert("Debes llenar todos los campos");
    }else{
        alert("Has agregado un estudiante");
    }
}

