let addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

let saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveToDoItem);

// let emptyButton = document.getElementById("empty-button");
// emptyButton = addEventListener("click", emptyToDoList);

if(!localStorage.getItem("item")){  //checking the localstorage for not defined
    localStorage.setItem("item",JSON.stringify([]));  // creating an empty value in the "item" key
   
  }

let list=JSON.parse(localStorage.getItem("item"));  //collecting values and parse into array
let ord_li="";

showToDoList(); //showing the list from localstorage when you open the page.
 
function addToDoItem() {  //adding items to the list but not yet saved to the localstorage
  if(document.getElementById("todo-entry-box").value == ""){
    alert("Enter a value to add !");
    document.getElementById("todo-entry-box").focus();
    return 0;
  }
  let todo=document.getElementById("todo-entry-box").value;
  list.push(todo);
  let ord_li="";
  
  for(let i=0;i<list.length;i++){
    ord_li = ord_li + "<li>" + list[i] + "<button onclick='removeItem(" + i + ")'>remove</button>" + "</li>"
  }
  document.getElementById("todo-list").innerHTML=ord_li;
  document.getElementById("todo-entry-box").value="";
  document.getElementById("todo-entry-box").focus();
  
}

function saveToDoItem() { //list saving to the localstorage when you press savelist button
  alert(list.length)
  localStorage.setItem("item",JSON.stringify(list));
  alert("saved to local storage");

}


function showToDoList(){
  list=JSON.parse(localStorage.getItem("item"));
  //alert("length" + list.length);
 
  for(let i=0;i<list.length;i++){
    ord_li = ord_li + "<li>" + list[i] + " " + "<button onclick='removeItem(" + i + ")'>remove</button>" + "</li>";
    }
  document.getElementById("todo-list").innerHTML=ord_li;

}

function removeItem(pos){
  let del_pos=pos;
  //alert(del_pos);
  //showToDoList();
  saveToDoItem();
  list=JSON.parse(localStorage.getItem("item"));
  //alert(list[del_pos]);
  let new_list=list.splice(del_pos,1);
  
  //alert(new_list);
  localStorage.setItem("item",JSON.stringify(new_list));
  list=new_list;
  showToDoList();

}
 // function emptyToDoList() {
    //localStorage.clear();
    // localStorage.setItem("item",JSON.stringify([]));  //initializing localStorage to an empty
    // //showToDoList(); 
    // document.getElementById("todo-entry-box").focus();
 //  alert("Items all are deleted");
  //}
  