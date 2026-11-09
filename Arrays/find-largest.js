
function findLargest(a, b){

        if(a>b){
            return a
        }else if(b>a) {
            return b
        }else {
            return "Both are equal"
        }
    }

console.log(findLargest(10, 20));
console.log(findLargest(50, 30));
console.log(findLargest(15, 15));