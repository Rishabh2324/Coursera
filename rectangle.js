module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        setTimeout(() =>
            callback(new Error("The rectangle should have dimension greater than =" + x + "and b=" + y), null)
            , 2000);
    }
    else {
        setTimeout(() => {
            callback(null, {
                perimeter: (x, y) => (2 * (x + y)),
                area: (x, y) => (x * y)
            })
        }, 2000);
    }
}







