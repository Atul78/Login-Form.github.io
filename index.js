function validate(){
    const username = document.getElementById("Email").value;
    const pass = document.getElementById("password").value;
    if(username =="admin" && pass == "user")
    {
        alert("Login Successfully");
    }
    else{
        if(username != 'admin'){
            alert('Enter Valid Username "admin"')
        }
        else{
            alert('Enter Valid Password "user"')
        }
        // alert("Login Failed");
    }
}

