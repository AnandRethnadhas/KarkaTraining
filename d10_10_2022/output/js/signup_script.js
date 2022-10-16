document.title = "OLX - SignUp";
document.getElementById("username").focus();


//clearing the username and password textboxes
function signUpClear(){
    //alert("signInClear");
    document.getElementById("username").value = "";    
    document.getElementById("pass1").value = "";
    document.getElementById("pass2").value = "";
    document.getElementById("phone").value = "";
    
    document.getElementById("username").focus();
}

//validating textboxes


//validating username and password
function signUp(){
    if(!document.getElementById("username").value){
        alert("Enter User Name"); 
        document.getElementById("username").focus();
    }else if(!document.getElementById("pass1").value || !document.getElementById("pass2").value){
        alert("Enter Password");
        if(!document.getElementById("pass1").value){
            document.getElementById("pass1").focus();
        }else{
            document.getElementById("pass2").focus();
        }
    }else if(!document.getElementById("phone").value){
        alert("Enter Contact Number !")
                document.getElementById("phone").focus();
    }else{
        
        userDetail();    //storing username and password to a localStorage - calling a function //values - userid, username, password, phone
       // let temp = JSON.parse(localStorage.getItem("signupdetail"));
        //alert(temp[0].username + " has signed up");
    }
}

let new_userid;
let signupdetail = [];  //array to store all user signup details

function userDetail(){
    let user_detail = {   //object to store user signup details
        userid :"",
        username :"",
        pass :"",
        phone :""
    };
    
    signupdetail = JSON.parse(localStorage.getItem("signup_users"));

    //generating user id
    if(signupdetail == null){
        //  alert("yes" + temp);
        new_userid = 0;
        // alert("inside if");
        user_detail.userid = new_userid;
        user_detail.username = document.getElementById("username").value;
        user_detail.pass = document.getElementById("pass1").value;
        user_detail.phone = document.getElementById("phone").value;
        // alert(user_detail.phone);
        signupdetail = [];
        signupdetail.push(user_detail);     //value to an array

        localStorage.setItem("signup_users",JSON.stringify(signupdetail));
        //alert("new_userid = " + new_userid);
    }
    else{
        //alert("yesss" + signupdetail);
        new_userid = signupdetail.length;
        //alert(new_userid);
        user_detail.userid = new_userid;
        user_detail.username = document.getElementById("username").value;
        user_detail.pass = document.getElementById("pass1").value;
        user_detail.phone = document.getElementById("phone").value;

        signupdetail.push(user_detail);
        localStorage.setItem("signup_users",JSON.stringify(signupdetail))  
        // for(let i=0;i<temp.length;i++){         //getting last userid from localstorage and increment for new user
            
        //     //  new_userid = temp[i].userid;
        // }
    }
    //
    localStorage.setItem("signup_users",JSON.stringify(signupdetail));
    alert("signed UP successful");

    //clearing the username and password textboxes
    signUpClear();
   
    }   // userDetail() function ends here