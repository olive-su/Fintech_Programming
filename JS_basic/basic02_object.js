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

console.log(car.name);
console.log(car.ph);
car.start();