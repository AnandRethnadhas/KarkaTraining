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
let olxuser

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
        alert("ok");
    }
}