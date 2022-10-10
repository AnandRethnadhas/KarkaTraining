// let resume={
//     name:"anand",
//     email:"anand@gmail.com",
//     phone_no:9876543210,
//     role:"full stack developer",
//     objective:"smartworking",

//     education:[{
//         course:"be",
//         institute:"nipc",
//         percentage:100,
//         stream:"regular"
//         year:2000
//         }],

//         skills:["html","javascript","bootstrap","jquery"],
        
//         certiication:[{
    //                     course_name:"oracle",
//                         duration:"1year";
//                         institute:5
//                         }],
        
//         project:[{title:"",
//                 abstract:"",
//                 technical_details:""}],
        
//         experience:"2years",
//         area_of_interest:"client management",

//     personal_details:{
//         father_name:"Dhas",
//         dob:"03-06-1974",
//         marital_status:"y"
//          },
//        address:{
 //                hoouse_no:15,
//                 street_name:"palappallam",
//                 district:"kkdt",
//                 pin:629159
 //           },

//         language_known:["tamil","english","malayalam"],
//         
//         },
    
//     passport_details:{issue_date="01-01-2020",
//                         expiry_date="31-12-2028",
//                         place_of_issue="trichy"
//                     }
    
    
// };     





let resume={};

function add_detail(key,value,index=null,indexKey=null){

if(key == 'skills' || key == 'language_known'){
    if(!resume[key]){
        resume[key] = [];
    }
    
    resume[key][index] = value;

    } else if(key =='education' || key == 'certification' || key == 'projects' || key == 'personal_details'){
        if(!resume[key]){
            resume[key] = [];
        }
            if(!resume[key][index]){
            resume[key][index] = {};
            }
        resume[key][index][indexKey] = value;
} 

else{
    resume[key] = value;
}
    display();
    console.log(resume);
}


function display(){
    document.getElementById("resume_detail").innerHTML=JSON.stringify(resume);
}

function save_local() {
    localStorage.setItem("resume",JSON.stringify(resume));
    //sessionStorage.setItem("resume",JSON.stringify(resume));
}

function show(){
    let detail = {};
    //alert(typeof detail);

    // let person = {
    //     fname : "Dany",
    //     lname : "casper"
    // };
    detail = JSON.parse(localStorage.getItem("resume")); //locakstorage to detail object type
    // alert(typeof detail);
    // alert(detail.fname);
    
    document.getElementById("detail").innerHTML = JSON.stringify(detail.fname);
}