interface Printable {
    myName:string, 
    print:()=>string 
}

class MyCircle implements Printable {
    myName = 'circle';
    print(): string {return this.myName}
}

class MyEmployee implements Printable {
    myName = 'Reshma';
    print(): string {return this.myName}
}

const c2 = new MyCircle();
const emp2 = new MyEmployee();

const printAll = (...objs) => {
    objs.forEach((obj)=> {
        console.log(obj.print());
    });
}

printAll(c2, emp2)