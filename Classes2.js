class vehicle{
    constructor(brand, year, model){
        this.brand = brand;
        this.year = year;
        this.model = model;
    }

    getInfo(){
        return"${this.year} ${this.brand} ${this.model}";
    }
}
class car extends vehicle {
    constructor(brand, model, year, ){
        super(brand,model,year);
        this.doors = doors;
    }
        getInfo(){
        return "${super.getInfo()} with ${this.doors}doors";
        }
    }
const vehicle =[
    new vehicle("Dynamic", "Model", 2012),
    new car("BMW", "X5", 2019, 4)
];
vehicles.forEach(vehicle => console.log(vehicle.getInfo()));