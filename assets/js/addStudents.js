// Se definen las variables

let data = [];





// Se declara las funciones

function registerStudent(){
    let nameStudent= document.getElementById("nameStudent").value;
    let lastName= document.getElementById("lastName").value;
    let numberDocument=document.getElementById("numberDocument").value;
    let campus= document.getElementById("campus").value;
    let workingDay= document.getElementById("workingDay").value;

    data.push(nameStudent, lastName, numberDocument, campus, workingDay);
    console.log(data);

    if (nameStudent == "" || lastName=="" || numberDocument== "" || campus=="" ||  workingDay=="" ) {
        alert("Debes llenar todos los campos");
    }else{
        document.getElementById('nameStud').innerHTML = data[0];
        document.getElementById('lastNameStud').innerHTML = data[1];
        document.getElementById('documentStud').innerHTML = data[2];
        document.getElementById('campusStud').innerHTML = data[3];
        document.getElementById('workingDayStudent').innerHTML = data[4];
    }

}

