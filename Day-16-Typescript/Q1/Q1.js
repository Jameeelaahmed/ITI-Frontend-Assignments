// ! A TYPES
var x = 3;
var y = "Jameela";
var z = true;
console.log("".concat(x, " \n").concat(y, "\n").concat(z));
//! B UNION TYPES
var arr;
arr = [1, 2, "jameela"];
//! C FUNCTION 
function test1(num1, num2) {
    return num1 + num2;
}
console.log(test1(1, 2));
//! D ENUM
var test;
(function (test) {
    test[test["admins"] = 10] = "admins";
    test[test["customer"] = 11] = "customer";
})(test || (test = {}));
console.log(test.customer);
//! F GENIRIC 
function arra(x) {
    return x;
}
var str = arra(["jameela", "ahmed"]);
console.log(str);
