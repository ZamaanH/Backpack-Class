class Backpack {
    constructor(color, size,){
        this.color = color
        this.size = size
        this.items = []
        this.open = false
    }
    // Methods
    openBag(){
        if(this.open == false){
        this.open = true;
        console.log("The backpack has been opened")
    }
    else{
        console.log("The backpack is already open")
    }
    }
    closeBag(){
    if(this.open == true){
        this.open = false;
        console.log("The backpack has been closed")
    }
    else{
        console.log("The backpack is already closed")
    }
    }
    putin(item){
        if(this.open == true){
             this.items.push(item)
             console.log("item has been placed in backpack")
        }
        else{
            console.log("The backpack is closed")
        }
    }
    takeout(item){
        if(this.open == true && this.items.includes(item)){
            this.items.pop()
            console.log("Item has been removed from backpack")
        }
    }
}

let Backpack1 = new Backpack("blue","small")
let Backpack2 = new Backpack("red","medium")
let Backpack3 = new Backpack("green","large")

console.log(Backpack1)
Backpack1.openBag()
Backpack1.putin("lunch")
Backpack1.putin("jacket")
Backpack1.closeBag()
Backpack1.openBag()
Backpack1.takeout("jacket")
Backpack1.closeBag()
console.log(Backpack1)
