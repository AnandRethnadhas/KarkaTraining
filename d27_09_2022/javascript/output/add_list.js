let list_1=[44,43,44,55,66];
        let list_2=[9,8,7,6,5,4];
        let result=0;

        function total_value(arr){
            var total=0;
            for(let i=0;i<arr.length;i++){
                total += arr[i];
            }
            return total;
        }

        result=total_value(list_1);
        console.log(result);
        result=total_value(list_2);
        console.log(result);