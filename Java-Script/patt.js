function printsquare(n) {
    for (i = 1; i <= n; i++) {
        line = '';
        for (j = 1; j <= n; j++) {
            line += '*';
        }
        console.log(line);
    }
}
printsquare(3);

console.log("-----------------------------");


function printtriangle(n) {
    for (i = 1; i <= n; i++) {
        line = '';
        for (j = 1; j <= i; j++) {
            line += '*';
        }
        console.log(line);
    }
}
printtriangle(9);

console.log("-----------------------------");

function printrectangle(x, m) {
    for (i = 1; i <= x; i++) {
        line = '';
        for (j = 1; j <= m; j++) {
            line += '*';
        }
        console.log(line);
    }
}
printrectangle(5, 9);

console.log("-----------------------------");

function printinvertedtriangle(n) {
    for (i = n; i >= 1; i--) {
        line = '';
        for (j = 1; j <= i; j++) {
            line += '*';
        }
        console.log(line);
    }
}
printinvertedtriangle(9);

console.log("-----------------------------");

function printpyramid(n) {
    for (i = 1; i <= n; i++) {
        line = '';
        for (j = 1; j <= n - i; j++) {
            line += ' ';
        }
        for (j = 1; j <= 2  * i - 1; j++) {
            line += '*';
        }
        console.log(line);
    }
}
printpyramid(5);

console.log("-----------------------------");

function printdiamond(n) {
    for (let i = 1; i <= n; i++) {
        let line = '';
        for (let j = 1; j <= n - i; j++) {
            line += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            line += '.';
        }
        console.log(line);
    }
    for (let i = n - 1; i >= 1; i--) {
        let line = '';
        for (let j = 1; j <= n - i; j++) {
            line += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            line += '.';
        }
        console.log(line);
    }
}

printdiamond(5);