const normalPerson={
    firstName:'Indrajit',
    lastName: 'Chandra',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName)
    },
    chargeBill: function(amount){
        console.log(this)
        this.salary=this.salary-amount;
        return this.salary;
    },
    chargeBill2: function(amount,tax,tips){
        console.log(this);
        this.salary= this.salary - amount - tax- tips;
        return this.salary;
    }
}
// console.log(normalPerson.firstName,normalPerson.lastName)
// normalPerson.chargeBill(500)
// console.log(normalPerson.salary)

const heroPerson={
    firstName:'Mohon',
    lastName: 'Chandra',
    salary: 25400,
}
const heroPerson2={
    firstName:'Joydip',
    lastName: 'Paul',
    salary: 20000,
}
/////////////////////////Start Bind Method/////////////////

const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
heroBillCharge(400);
heroBillCharge(5000)
console.log(heroPerson.salary)
console.log(normalPerson.salary)

const hero2BillCharge = normalPerson.chargeBill.bind(heroPerson2);
hero2BillCharge(500)
console.log(heroPerson2.salary) 

/////////////////////////End Bind Method/////////////////

/////////////////////////Start Call Method////////////////

const heroBillCharge = normalPerson.chargeBill.call(heroPerson,500);
console.log(heroPerson.salary)
const hero2BillCharge = normalPerson.chargeBill2.call(heroPerson2,500,400,50);
console.log(heroPerson2.salary)

/////////////////////////End Call Method////////////////
/////////////////////////Start apply Method////////////////

const hero2BillCharge= normalPerson.chargeBill2.apply(heroPerson2,[300,200,100])
console.log(heroPerson.salary)
const heroBillCharge = normalPerson.chargeBill2.apply(heroPerson,[500,450,50])
console.log(heroPerson.salary)

/////////////////////////End apply Method////////////////