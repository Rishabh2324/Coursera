var rect = require('./rectangle')
function solveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + "and b = " + b);

    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("ERROR:", err.message);
        }
        else {
            console.log("The area of the rectangle having dimension than =" + l + "and b=" + b + "is" + rectangle.area(l, b));
            console.log("The area of the rectangle having dimension than =" + l + "and b=" + b + "is" + rectangle.perimeter(l, b));
        }
        console.log("This message is after the call")
    })
}
solveRect(2, 53123128378);
solveRect(5, 612312);
solveRect(3, 621312);
solveRect(3, 53223);
solveRect(53, 336);
solveRect(323, 623);