let car = {
    name : "sonata",
    ph : "500ph",
    start : function () {
        console.log("engine start");
        return "started!";
    },

    stop : function () {
        console.log("engine stop");
    }
};

let carArray = ['bmw', 'sonata', 'sm6', 123, 12.23124,
car, 
myFunction => {return (x + y);} ];

console.log(carArray[0]);
console.log(carArray[1]);
console.log(carArray[2]);
console.log(carArray[3]);
console.log(carArray[4]);
console.log(carArray[5]);
console.log(carArray[6]);