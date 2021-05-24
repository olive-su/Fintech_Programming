var a = "data_a";
let b = "data_b";
const c = 11;
const obj = {
    name : "test",
    age : 99
}
const d = obj;
//데이터 타입에 영향 X, 어떠한 타입도 가능하다

var x = 10;

{
    const x = 2;
}

console.log(a);
console.log(b);
console.log(c);
console.log(obj);