var rect = require('./rectangle')
function solveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + "and b = " + b);

    if (l <= 0 || b <= 0) {
        console.log("The rectangle should have dimension greater than 0");
    }
    else {
        console.log("The area of the rectangle is" + rect.area(l, b)),
            console.log("The Perimeter of the rectangle is" + rect.perimeter(l, b));
    }
}
solveRect(2, 53123128378);
solveRect(5, 612312);
solveRect(3, 621312);
solveRect(3, 53223);
solveRect(53, 336);
solveRect(323, 623);