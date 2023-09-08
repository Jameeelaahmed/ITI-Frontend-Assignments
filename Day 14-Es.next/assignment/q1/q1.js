let arr=[1,2];

let [a1,a2]=arr;

let ind=a1;
a1=a2;
a2=ind;

console.log(a1,a2);

//*

let x=2;

let y=3;

[x,y]=[y,x];

console.log(x,y);