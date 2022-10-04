let addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);


if(!localStorage.getItem("item")){
    localStorage.setItem("item",JSON.stringify([]));  
    alert("inside if condition");  
     
  }

let list=JSON.parse(localStorage.getItem("item")); 
  
  alert(typeof list);
  alert("JS file");


function addToDoItem() {
  
  let todo=document.getElementById("todo-entry-box").value;
  list.push(todo);
  let ord_li="";
  
  for(let i=0;i<list.length;i++){
    ord_li = ord_li + "<li>" + list[i] + "</li>"
  }
  document.getElementById("todo-list").innerHTML=ord_li;
  //localStorage.setItem("item",JSON.stringify(list));
  
  document.getElementById("todo-entry-box").value="";
  document.getElementById("todo-entry-box").focus();
    
    //localStorage.setItem("item",JSON.stringify(list));
   // show();
   //alert(list);
  }
  