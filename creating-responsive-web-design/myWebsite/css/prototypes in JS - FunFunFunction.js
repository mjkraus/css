// You have "food" from "food" you want to make waffles and eggs. 

// Food is the prototype of waffles and carrots
	// they are like classes, but THEY ARE NOT THE SAMETHING

const food = {
	init: function (type){
		this.type = type
	},
	eat: function(){
		console.log('you ate this' + this.type)
	}
}

//this outputs "You ate this waffle"
food.init('waffle')
food.eat()

/////////////////////////////////	

// Now we are going to initiate a new waffle object
//const is immutable

const waffle = Object.create(food)
waffle.init('waffle')
waffle.eat()//you ate the waffle

const carrot = Object.create(food)
carrot.init('carrot')
carrot.eat()//you ate the carrot

////////////////////////////////

//from code above you might infer that Object.create creates a new object, let's see if that is true
//change position of the code then add new function for food

const food = {
	init: function (type){
		this.type = type
	},
	eat: function(){
		console.log('you ate this' + this.type)
	}
}

const waffle = Object.create(food)
const carrot = Object.create(food)

food.eat = function(){
	console.log('YOU TOTALLY ATE THE ' + this.type.toUpperCase())
}

waffle.init('waffle')
waffle.eat()

carrot.init('carrot')
carrot.eat()

//Outputs 'YOU TOTALLY ATE THE WAFFLE'
//'YOU TOTALLY ATE THE CARROT'

//This is weird, because waffle and carrot should be copies of the food object. BUT if that was the case, then they would not have overrided
//the eat function in the food object. So, what is happening?!?

//IT DOES NOT CREATE A COPY
//what is does is create a new empty object of 'carrot' and assigns food as backup. If we assign a function to the carrot, it will first 
//look inside carrot. If it doesn't see it, then it will look inside the prototype object 'food' to see if its inside it.

////////////////////////////////

//let's explain this further
const food = {
	init: function (type){
		this.type = type
	},
	eat: function(){
		console.log('you ate this' + this.type)
	}
}

const waffle = Object.create(food)
waffle.init('waffle')
waffle.eat()
food.type = 'nomnomnomnomnom'
waffle.eat()

//output is you ate this waffle
//but if you change it up a bit

const food = {
	init: function (type){
		this.type = type
	},
	eat: function(){
		console.log('you ate this' + this.type)
	}
}

const waffle = Object.create(food)
// waffle.init('waffle') - remove the init of the food 'type'
waffle.eat()
food.type = 'nomnomnomnomnom'
waffle.eat()

//output is you ate this 'undefined'
//output is you ate this nomnomnomnomnomnom

//looks at the first waffle.eat and there is nothing defined for type then it is defined for the second waffle.eat
//and is defined for the food prototype so output is nomnomnomnomnom

////////////////////////////////

//You can also check the type of an object using a prototype
const food = {
	init: function (type){
		this.type = type
	},
	eat: function(){
		console.log('you ate this' + this.type)
	}
}

const waffle = Object.create(food)
waffle.init('waffle')

const carrot = Object.create(food)
carrot.init('carrot')


console.log('waffle is food',
food.isPrototypeOf(waffle)) //output 'waffle is food' true

console.log('int is food',
food.isPrototypeOf(12345)) //output int is food false

console.log('carrot is food',
food.isPrototypeOf(carrot)) //carrot is food true

//this checks to see if this is used as a prototype of an object


















