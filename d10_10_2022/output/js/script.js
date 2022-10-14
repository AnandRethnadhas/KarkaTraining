//object model

// let product =[{
//     pid : 1,
//     pname : "nokia8090",
//     phone : 9876543210,
//     price : 5000
// }]

//let product = [];

// creating user object
// username,password,phone

// let user_detail = [{
//     username : "",
//     password : "",
//     phone : "",
//     logged_in : Boolean
// }]

document.title = "OLX - Home";

//setting the user signin checkup
let olxuser = "";
let username = "";
let userpass = "";
let user_detail = "";
document.getElementById("username").focus();

let loggedin = [];
let current_user = {
    userid : "",
    isActive : Boolean
}

//getting values from localstorage for logged-in users
//loggedin = JSON.parse(localStorage.getItem("logged_in"));


function checkLogIN(){
    alert("Sign-in to see the details");
    document.getElementById("username").focus();
}
 //checkLogIN();
//clearing texboxes
function signInClear(){
    //alert("signInClear");
    document.getElementById("username").value = "";    
    document.getElementById("password").value = "";
    document.getElementById("username").focus();
}


//validating signin page user content
function signIn(){
    if(!document.getElementById("username").value){
        alert("Enter User Name");
        document.getElementById("username").focus();
    }else if(!document.getElementById("password").value){
        alert("Enter Password");
        document.getElementById("password").focus();
    }else{
        //get the values of username and password
        username = document.getElementById("username").value;
        userpass = document.getElementById("password").value;

        //get all records from localStorage
        user_detail = JSON.parse(localStorage.getItem("signup_users"));

        //checking for the current user
        //alert(user_detail.length);
        for(let i=0;i<user_detail.length;i++){
            if(username == user_detail[i].username && userpass == user_detail[i].pass){
                current_user.userid = i;
                current_user.isActive = true;

                loggedin.push(current_user);    //store to local storage
                localStorage.setItem("logged_in",JSON.stringify(loggedin));
                
                document.getElementById("topname").innerHTML = "Hello " + username.toUpperCase();
                 document.getElementById("login-box").hidden = true;
                 document.getElementById("signout").hidden = false;
                //alert(user_detail[i].userid);
            }
        }
    }
}

