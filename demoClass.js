class Car {

    constructor(modelno, color) {
     console.log("modelno",modelno)
     console.log("color",color)
    }
    start() {

        console.log("starting car")
    }

}

class SuperCar extends Car{

    superPower(){

        console.log("super power")
    }
}

let s1=new SuperCar()
s1.superPower()

// let c1= new Car(102,'maruti')

// c1.start()