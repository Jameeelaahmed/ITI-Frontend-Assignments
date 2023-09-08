let arr=[60,100,10,15,85];

arr.sort(function(x,y){return y - x});
console.log(arr);

function high (num)
{
    return num<=100;
};

document.write(`highest student degree (first degree less than or equal to 100) ==> ${arr.find(high)}`);

function checkGrade(grade){
    return grade<60;
}

document.write(`<br> <br> grades below 60 are [${arr.filter(checkGrade)}]`);


