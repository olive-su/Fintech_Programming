var a = "data_a";
let b = "data_b";
const c = 11;
const obj = {
    name : "test",
    age : 99
}
const d = obj;
//������ Ÿ�Կ� ���� X, ��� Ÿ�Ե� �����ϴ�

var x = 10;

{
    const x = 2;
}

console.log(a);
console.log(b);
console.log(c);
console.log(obj);