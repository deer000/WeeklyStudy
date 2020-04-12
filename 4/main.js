var a = 18;
var b = 44;
var c = 10;

if(a > b){
    document.write('a가 b보다 크다');
} else if(b > c){
    document.write('b가 c보다 크다');
} else if(b < c){
    document.write('b가 c보다 작다');
} else {
    document.write('어쩌라구');
}
// 논리 연산자
var a = 10;
var b = 22;
var c = 48;

if(a<c || b>c){
    document.write('a가 c보다 작고 b가 c보다 작다');
}

// 조건문의 응용
var a = 90;
var b = 22;

if(a != b){
    if(a>b){
        document.write('a가 b보다 크다');
    } else{
        document.write('a가 b보다 작다');
    }
}

// 조건문의 축약
var a = 50;
var b = 20;

if(a>b) {
    document.write('a가 b보다 크다');
    } else {
    document.write('a가 b보다 작다');
    }
}

// 조건문의 축약
var a = 50;
var b = 20;

if(a>b)
    document.write('a가 b보다 크다');
else
    document.write('a가 b보다 작다');

// 조건문의 축약
var a = 50;
var b = 20;

if(a>b) ?
    document.write('a가 b보다 크다');
else
    document.write('a가 b보다 작다');