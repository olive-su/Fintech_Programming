function multi(p1, p2){
    return p1 * p2;
}

const plus = (p1, p2) => {
    return p1 + p2;
}

//#work1
//minus, div �� ������ �Լ��� �߰����ּ���!, minus function, div arrow function �ۼ� �ٶ��ϴ�.

function minus(p1, p2){
    return p1 - p2;
}

const div = (p1, p2) => {
    return p1 / p2;
}

let result = multi(2, 4);

console.log(multi(2, 6));
console.log(result);
console.log(plus(10, 60));
console.log(minus(3, 2));
console.log(div(4, 2));