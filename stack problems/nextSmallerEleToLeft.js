// Nearest Smaller to Left
// i/p  4 5  2 10 8
// o/p -1 4 -1  2 2
//indx  0 1  2  3 4

var arr = [4,5,2,10,8];
let stack = [];
let ans = [];

for(let i = 0; i < arr.length; i++){
    if(stack.length == 0){
        ans.push(-1);
    }else if(stack.length > 0 && stack[stack.length-1] < arr[i]){
        ans.push(stack[stack.length-1]);
    }else if(stack.length > 0 && stack[stack.length-1] >= arr[i]){
        while(stack.length > 0 && stack[stack.length-1] >= arr[i]){
            stack.pop();
        }
        if(stack.length === 0){
            ans.push(-1);
        }else{
            ans.push(stack[stack.length-1]);
        }
    }
    stack.push(arr[i]);
}
console.log(ans.join(" "));
        

