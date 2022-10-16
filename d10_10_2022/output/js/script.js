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
let user_id = "";
let username = "";
let userpass = "";
let user_detail = "";
document.getElementById("username").focus();

let loggedin = [];
let current_user = {
    userid : "",
    isActive : Boolean
};

let isLoggedIn = false;

user_detail = JSON.parse(localStorage.getItem("signup_users"));
loggedin = JSON.parse(localStorage.getItem("logged_in"));


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


//getting values from localstorage for logged-in users


//alert(loggedin[0].userid);
function signInValidation(){

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

        //checking for the current user
        //alert(user_detail.length);
        for(let i=0;i<user_detail.length;i++){
            if(username == user_detail[i].username){
                user_id = user_detail[i].userid;
                //alert(user_id);
            }
        }
            for(let i=0;i<loggedin.length;i++){
                if(user_id == loggedin[i].userid){
                    isLoggedIn = true;
                }

                
          //  alert(user_id);//if(user_detail.userid)
            }
        
        
        

        for(let i=0;i<user_detail.length;i++){
            //checking at logged in 
            //alert(isLoggedIN);
            if(username == user_detail[i].username && userpass == user_detail[i].pass && isLoggedIn == false){     //checking at signup
                
                current_user.userid = i;
                current_user.isActive = true;

                loggedin.push(current_user);    //store to local storage
                localStorage.setItem("logged_in",JSON.stringify(loggedin));
                
                document.getElementById("topname").innerHTML = "Hello " + username.toUpperCase();
                document.getElementById("login-box").hidden = true;
                document.getElementById("signout").hidden = false;
                //alert(user_detail[i].userid);
            
            }else{document.getElementById("topname").innerHTML = "Hello " + username.toUpperCase();
            document.getElementById("login-box").hidden = true;
            document.getElementById("signout").hidden = false;
            }
        }
    }
}


//sign-out function

function signOut(){
    //alert("yes");
    //loggedin = JSON.parse(localStorage.getItem("logged_in"));
    loggedin[user_detail]
    for(let i=0;i<loggedin.length;i++){         //checking for active user and make the user to isActive false
        if(loggedin[i].isActive == true){
            //loggedin[i].isActive = false;

           //loggedin.push(current_user);

            
            //current_user.userid = i;
            //current_user.isActive = false;
                        
            //loggedin[current_user.userid].user;    //store to local storage
            //loggedin.splice(i,1); //removing a logged-out user
            
        }
        
    }
   
  // localStorage.setItem("logged_in",JSON.stringify(loggedin));
    
}