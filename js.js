
class Car {

    constructor(brand, speed, weight) {
        this.brand = brand;
        this.speed = speed;
        this.weight = weight;


        console.log(("Это конструктор"));
    }


    showMarka() {

       console.log(("Марка: " + this.brend + "; Скорость: " + this.speed + "км/ч; Вес: " + this.weight + "кг;"));
    }
}


let car = new Car("ВАЗ", 150, 2000)