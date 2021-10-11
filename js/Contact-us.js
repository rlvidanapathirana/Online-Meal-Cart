function formValidation(){
    var fEmail = document.getElementById("email").value;
    var fMes = document.getElementById("mes").value;

    var fText = '';

    if(fEmail.length == 0){
        fText += "Email Error ! ";
    }

    if(fMes.length == 0){
        fText += "Message Error ! ";
    }

    if(fText != ''){
        alert(fText);
        document.getElementById("email").value = "";
        document.getElementById("mes").value = "";
        }
    else{
        alert("Successfuly Sent. Thank You For Your Feedback!")
    }
}