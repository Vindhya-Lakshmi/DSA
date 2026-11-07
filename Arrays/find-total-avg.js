const marks = [30,20,40,50,66,79,91];

function calculate(marks){
    let total =0;
    let avg = 0;
    for(let i=0;i<marks.length;i++){
        total += marks[i]
    }
    avg = total/marks.length;
    return { total, avg };
}
const total = calculate(marks);
console.log("Total Marks:"+ total.total,"Average Marks:"+total.avg);