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
        
        userDetail();    //storing username and password to a localStorage - calling a function
                             //userid, username, password, phone
       // let temp = JSON.parse(localStorage.getItem("signupdetail"));
        //alert(temp[0].username + " has signed up");
    }
}

let new_userid;

function userDetail(){
    let signupdetail = [{
        userid :"",
        username :"",
        pass :"",
        phone :""
    }];
    
    let temp = JSON.parse(localStorage.getItem("signupdetail"));
    alert(temp.length);
    //console.log(temp);
    //generating user id
    if(temp == null){
      //  alert("yes" + temp);
        new_userid = 0;
        alert("inside if");
        signupdetail[0].userid = new_userid;
        signupdetail[0].username = document.getElementById("username").value;
        signupdetail[0].pass = document.getElementById("pass1").value;
        signupdetail[0].phone = document.getElementById("phone").value;
    //alert("new_userid = " + new_userid);
    }
    else{
        alert("yesss" + temp);
        new_userid = temp.length;
        alert(new_userid);
        signupdetail[new_userid].userid = new_userid;
        signupdetail[new_userid].username = document.getElementById("username").value;
        signupdetail[new_userid].pass = document.getElementById("pass1").value;
        signupdetail[new_userid].phone = document.getElementById("phone").value;

        temp.push(signupdetail);
        localStorage.setItem("signupdetail",JSON.stringify(temp))  
        // for(let i=0;i<temp.length;i++){         //getting last userid from localstorage and increment for new user
            
        //     //  new_userid = temp[i].userid;
        // }
    }

    
    //
    localStorage.setItem("signupdetail",JSON.stringify(signupdetail));
   
    }
    alert(new_userid);
    
    //alert(signupdetail.username);
    //alert(signupdetail.pass);
    //alert(signupdetail.phone);
   // alert(typeof signupdetail);
