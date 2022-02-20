//¿Como funcionan los arreglos sin los métodos que nos da por defecto JS?

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  //obtener un elemento del arreglo
  get(index) {
    return this.data[index];
  }

  //agregar un elemento al arreglo
  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }

  //obtener y eliminar el último elemento del arreglo
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shiftItems(index) {
    delete this.data[index];

    let tempArray = this.data;
    this.data = {};
    let count = 0;

    for (let i = 0; i < this.length; i++) {
      if (tempArray[i] !== undefined) {
        this.data[count] = tempArray[i];
        count++;
      }
    }

    this.length--;
  }

  deleteAtIndex(index) {
    const itemDeleted = this.data[index];
    this.shiftItems(index);
    return itemDeleted;
  }
}

const newArray = new MyArray();

newArray.push('Luigi');
newArray.push('Borrar');
newArray.push('Mario');

//newArray.shiftItems(1);
console.log(newArray.deleteAtIndex(1));
console.log(newArray.data);
