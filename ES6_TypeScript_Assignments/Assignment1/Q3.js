// Object.assign(): used to clone the properties

let order = {
    id : '456',
    title : "F.R.I.E.N.D.S",
    price : 500000,
    printOrder: function () {
        alert(`Oder Details are: \n Id: ${this.id} \n Title: ${this.title} \n Price: ${this.price}`);
    },
    getPrice: function () {
        alert(`Price is: ${this.price}`);
    }
};

let myOrder =  Object.assign({}, order);
console.log(myOrder);