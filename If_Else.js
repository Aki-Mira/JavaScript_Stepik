// DECRIPTION:
// В этом задании вам нужно вписать в указанное место код, который будет присваивать переменной "х" значение суммы переменных "a" и "b" в случае если  a > b или их произведение в остальных случаях.

// Sample Input:

// 3 7
// Sample Output:

// 21

// SOLUTION:

function testIf(a, b) {
    var x;
    if ( a > b ) {
        x = a + b;
    } else {
        x = a * b;
    }
    return x;
}
console.log(testIf(3, 7));