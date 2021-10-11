function formValidation(){
    var fName = document.getElementById("name").value;
    var fEmail = document.getElementById("email").value;
    var fMes = document.getElementById("mes").value;

    var fText = '';

    if(fName.length > 20 || fName.length == 0){
        fText += "Name Error ! ";
    }

    if(fEmail.length == 0){
        fText += "Email Error ! ";
    }

    if(fMes.length == 0){
        fText += "Message Error ! ";
    }

    if(fText != ''){
        alert(fText);
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mes").value = "";
        }
    else{
        alert("Successfuly Sent. Oure Team Reply You Soon.. Thank You!")
    }
}