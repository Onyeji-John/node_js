class animals{
    constructor(species, color, age){
        this.species = species
        this.color = color
        this.age = age
    }
    getDetail(){
        return'The $(this.species) is $(this.color) and he/she is $(this.age)';
    }

}
const Animal = new animals("Zebra", "black and white", 2);
console.log(Animal.getDetail());