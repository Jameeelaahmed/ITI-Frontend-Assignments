class LengthBetween2Points{
    numone:number;
    numtwo:number;
    constructor(num1:number,num2:number)
    {
        this.numone=num1;
        this.numtwo=num2;
    }

    calculatelength(){
        return Math.sqrt(Math.pow(this.numone,2)+Math.pow(this.numtwo,2));
    }
}

//! Q3
class threeDpoint extends LengthBetween2Points{
    numthree:number;
    constructor(num1:number,num2:number,num3:number)
    {
        super(num1,num2);
        this.numthree=num1;
    }
    calculatelength(){
        return Math.sqrt(Math.pow(this.numone,2)+Math.pow(this.numtwo,2)+Math.pow(this.numthree,2));
    }
}

var obj=new LengthBetween2Points(5,10);

console.log(obj.calculatelength());

var ob2= new threeDpoint(5,10,5)

console.log(ob2.calculatelength());