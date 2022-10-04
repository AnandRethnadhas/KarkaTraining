let addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

let saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveToDoItem);



if(!localStorage.getItem(item)){
  localStorage.getItem("item",JSON.stringify([]));
  let item=[];
}

let list=JSON.parse(localStorage.getItem[item]); 

function addToDoItem() {
    if(document.getElementById(todo-entry-box)==" "){
      alert("Enter an item");
      return 0;
    }
    alert("Add button clicked!");
    let todo=document.getElementById("todo-entry-box").value;
    //console.log(todo);
    list.push(todo);
    //console.log(list);
    //
    //console.log(list_str);
    
    document.getElementById("todo-entry-box").value="";
    document.getElementById("todo-entry-box").focus();
    //localStorage.setItem("item",list);
    show();
  }

function saveToDoItem(){
  let list_str=JSON.stringify(list);
  localStorage.setItem("item",list_str);
  alert("yes");

}
// showing list 
function show() {
  let list=[];
  list=localStorage.getItem(item);
  list_arr=JSON.parse(list);
  let ele="";

  for(let i=0;i<list_arr.length;i++ ){
    ele=ele+"<li>"+list_arr[i]+"</li>";
  }
document.getElementById("todo-list").innerHTML=ele; 

  //alert("list"+ item);
  //document.getElementById("ulid").innerHTML=ele;  //showing the list
}


//   function add(){
//     
//     let todo=document.getElementById("add-button").value;
//     list.push(todo);
//     let local_item=JSON.stringify(list);
//     localStorage.setItem("items",local_item);

//     show_list();
// }

// function show_list(){
//     let local_item=localStorage.getItem(items);
// }