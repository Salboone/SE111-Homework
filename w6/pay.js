var hp = Number(prompt("Enter Hourly Pay: "));
var hw = Number(prompt("Enter Hours Worked: "));
var tr = Number(prompt("Enter Tax Rate: "));

var gp = hp * hw * 2;
var uss = gp * tr;
var np = gp - uss;

var output = "Gross Pay: $" + gp + "\n" + "Uncle Sam's Share: $" + uss + "\n" + "Net Pay: $" + np;

alert(output);

console.log("Gross Pay: $" + gp);
console.log("\"Uncle Sam's Share: $" + uss);
console.log("Net Pay: $" + np);
