// 1
// var nums = [100, 200, 300, 400, 500];
// nums.splice(3,2);
// console.log(nums);

// 2
// var arr = [200, 100, 300];
// arr.splice(2,1,10000,300);
// console.log(arr);

// 3
// 4) object

// 4
// 2, number 로 나와야 할걸

// 5
// 4) 16

// 6
// 2

// 7
// 5) 1age

// 8
// 78

// 9
// var year = '2019';
// var month = '04';
// var day = '26';
// var hour = '11';
// var minute = '34';
// var second = '27';

// // var result = year.concat('/', month).concat('/', day).concat(' ', hour).concat(':', minute).concat(':', second);
// // var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

// console.log(result);
// 둘 다 되네..

// 10
// for(var i=0; i<5; i++) {
//     var letter = '';
//     for(var j=0; j<4-i; j++) {
//         letter += ' ';
//     }
//     for(var j=0; j<2*i+1; j++) {
//         letter += '*';
//     }
//     console.log(letter);
// }
// console.log는 개행을 해주는구나..

// 11
// let s = 0;

// for(var i=1; i<101; i++) {
//     s += i;
// }

// console.log(s);

// 12
// class Wizard {
//     constructor() {
//         this.health = 545;
//         this.mana = 210;
//         this.armor = 10;
//     }
//     attack() {
//         console.log('파이어볼');
//     }
// }

// const x = new Wizard(545, 210, 10);
// console.log(x.health, x.mana, x.armor);
// x.attack();

// 13 못 품 어떻게 하는거야 아오
// var solarsys = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');
// console.log(solarsys.indexOf(input));

// 14
// 아니 입력을 또.. 답을 본다 이건
// const i = prompt('입력해.');
// if(i%3 == 0) {
//     console.log('짝');
// }
// else {
//     console.log(i);
// }
// prompt() is a method of the Global window object found in browsers. It's not part of the JavaScript language. If you don't run your code in a browser or an environment that supports the Browser Object Model, window won't be there and if window isn't there, neither will prompt() be. Run your code in a browser.
// prompt 안되네..

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
var n = Number(input); 
if(input%3 == 0) {
    console.log('짝');
}
else {
    console.log(i);
}

// 15
