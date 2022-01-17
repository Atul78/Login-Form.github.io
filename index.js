function validate(){
    const username = document.getElementById("Email").value;
    const pass = document.getElementById("password").value;
    if(username =="Atul" && pass == "password")
    {
        alert("Login Successfully");
    }
    else{
        if(username != 'Atul'){
            alert('Enter Valid Username "Atul"')
        }
        else{
            alert('Enter Valid Password "password"')
        }
        // alert("Login Failed");
    }
}

