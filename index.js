var rect = {
    perimeter: (x, y) => (2 * (x + y)),
    area: (x, y) => (x * y)
};
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
solveRect(2, 5);
solveRect(5, 6);
solveRect(3, 6);