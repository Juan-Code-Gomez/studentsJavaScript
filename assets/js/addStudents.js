// Se definen las variables




// Se declara las funciones

function registerStudent(){
    let nameStudent= document.getElementById("nameStudent").value;
    let lastName= document.getElementById("lastName").value;
    let numberDocument=document.getElementById("numberDocument").value;
    let campus= document.getElementById("campus").value;
    let workingDay= document.getElementById("workingDay").value;
    

    if (nameStudent == "" || lastName=="" || numberDocument== "" || campus=="" ||  workingDay=="" ) {
        alert("Debes llenar todos los campos");
    }else{
        document.getElementById('nameStud').innerHTML = nameStudent;
        document.getElementById('lastNameStud').innerHTML = nameStudent;
        document.getElementById('documentStud').innerHTML = numberDocument;
        document.getElementById('campusStud').innerHTML = campus;
        document.getElementById('workingDayStudent').innerHTML = workingDay;
    }

}

