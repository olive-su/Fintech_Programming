let car = {
    name: "sonata",
    ph: "500ph",
    start: function () {
        console.log("engine start");
    },
    stop: function () {
        console.log("engine stop");
    },
};

let car2 = {
    name: "bmw",
    ph: "500ph",
    start: function () {
        console.log("engine start");
    },
    stop: function () {
        console.log("engine stop");
    },
};

let car3 = {
    name: "tico",
    ph: "500ph",
    start: function () {
        console.log("engine start");
    },
    stop: function () {
        console.log("engine stop");
    },
};

let cars = [car, car2, car3];
console.log(cars);

//#work �迭���� bmw ��� �ڵ����� ������ �õ��� �ɾ��ּ���
//array.map �Լ��� Ȱ���Ͽ� �ۼ� �ٶ��ϴ�.

cars.map((car) => {
    if (car.name === "bmw") {
        console.log(car.start);
    }
})