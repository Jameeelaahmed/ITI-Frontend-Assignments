let temperature=prompt("enter temprature");
let result = temp(temperature);

function temp(x)
{
    x>30?document.write("HOT"):document.write("Cold");
}