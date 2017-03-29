var addStatement =(a,b) => {
    return a+b;
};

var addExpression = ((a,b) => console.log(a+b));

console.log(addStatement(5,3));
addExpression(9, 7);