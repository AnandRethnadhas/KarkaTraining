let list=[];
        // function form_onload(){
        //     document.getElementById("no1").focus();
        // }
        function add(){
            let todo=document.getElementById("no1").value;

            if(!todo==""){
                list.push(todo);
                show(list);
            }

            document.getElementById("no1").value=""; //empty text box
            document.getElementById("no1").focus(); //set ocus to text box
        }
        // creating list 
        function show(list_arr) {
            let ele="";
            for(let i=0;i<list_arr.length;i++ ){
                ele=ele+"<li>"+list_arr[i]+"</li>";
            }
            document.getElementById("olid").innerHTML=ele;  //showing the list
        }