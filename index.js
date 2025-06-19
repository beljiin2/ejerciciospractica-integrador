"use strict";
//Trabajo practico integrador prodevs Academy

//Implementá una función llamada minimo que reciba un array de números
//  y devuelva el valor numérico más bajo del array. No podés usar funciones
// como Math.min ni métodos como sort. Usá un bucle para comparar los elementos.

function minimo(arr) {
  if (arr.length === 0) return undefined;
  let menor = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < menor) {
      menor = arr[i];
    }
  }
  return menor;
}

//Creá una función llamada mayor que tome un array
// de números y retorne el número más grande dentro del mismo.
// No podés usar Math.max. Deberás recorrer el array manualmente y comparar los valores.

function mayor(arr) {
  if (arr.length === 0) return undefined;
  let maximo = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximo) {
      maximo = arr[i];
    }
  }
  return maximo;
}

//Definí una función llamada total que sume todos los valores de un array numérico usando el método .reduce. Retorná la suma total

function total(arr) {
  return arr.reduce((acum, val) => acum + val, 0);
}

//Implementá la misma funcionalidad que en el ejercicio anterior (total),
// pero sin usar .reduce. Esta vez, deberás usar un bucle for para recorrer el array y acumular el resultado.

function totalBis(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}

//Escribí una función llamada promedio que calcule el promedio (media) de los números en un array.
//  Debés hacerlo usando el método .reduce. El promedio es el total dividido por la cantidad de elementos.

function promedio(arr) {
  if (arr.length === 0) return 0;
  let suma = arr.reduce((acum, val) => acum + val, 0);
  return suma / arr.length;
}

//Reescribí la función anterior (promedio) sin usar .reduce.
//  Esta vez usá un bucle for para sumar los valores y calcular el promedio dividiendo por la cantidad de elementos.

function promedioBis(arr) {
  if (arr.length === 0) return 0;
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma / arr.length;
}

/* LISTAS ENLAZDAS */
//Implementá una estructura de datos llamada ListaEnlazada que funcione como una lista simplemente enlazada. Esta lista debe permitir:
//Agregar nodos al principio y al final.
//Insertar un nodo en una posición específica.
//Eliminar el primer y último nodo.
//Imprimir todos los elementos o un elemento específico.
//Buscar un nodo por valor.
//No podés usar Array ni sus métodos (push, pop, etc.) para almacenar los elementos. Cada nodo debe ser un objeto que contenga al menos una propiedad data y un puntero next.
//Importante: resolvé todo sin usar prototype, utilizando funciones constructoras y métodos directamente dentro del objeto ListaEnlazada.

// Nodo: representa un solo elemento en la lista
// Nodo: representa un solo elemento en la lista
// Nodo: representa un solo elemento en la lista
// Nodo: representa un solo elemento en la lista
// Nodo: representa un solo elemento en la lista
// Nodo: representa un solo elemento en la lista
// Nodo: representa un solo elemento en la lista
function Nodo(data) {
  return {
    data: data,
    next: null,
  };
}

// ListaEnlazada: estructura de datos que contiene nodos
function crearListaEnlazada() {
  const lista = {
    point: null,
    len: 0,

    // Agrega un nodo al final de la lista
    push(data) {
      const nuevoNodo = Nodo(data);
      if (!this.point) {
        this.point = nuevoNodo;
      } else {
        let actual = this.point
        while(actual.next){
          actual = actual.next 
        }
        actual.next = nuevoNodo
      }
      this.len++;
    },

    // Agrega un nodo al principio de la lista
    insertFirst(data) {
      const nuevoNodo = Nodo(data);
      if (!this.point) {
        this.point = nuevoNodo;
      } else {
        nuevoNodo.next = this.point;
        this.point = nuevoNodo;
      }
      this.len++;
    },

    // Inserta un nodo en una posición específica
    insert(pos, data) {
      if (pos > this.len ){
        this.push(data)
        return
      }
      const nuevo = Nodo(data)
      if (pos === 1){
        nuevo.next = this.point
        this.point = nuevo
      }else{
        let actual = this.point
        for(let i = 1; i < pos -1; i++){
          actual = actual.next
        }
        nuevo.next = actual.next;
        actual.next = nuevo
      }
      this.len++;
    },

    // Elimina el primer nodo de la lista
    deleteFirst() {
      if (!this.point)return console.log("lista vacia")
        this.point = this.point.next
        this.len--;
    },

    // Elimina el último nodo de la lista
    deleteLast() {
      if (!this.point)return console.log("lista vacia")
        if(!this.point.next){
          this.point = null
        }else{
          let actual = this.point
          while(actual.next.next){
            actual = actual.next
          }
          actual.next = null
        }
        this.len--;
    },

    print() {
      if (!this.point)return console.log("lista vacia")
        let actual = this.point
      while(actual){
        console.log(actual.data);
        actual = actual.next;
      }
      
    },


    find(valor) {
      let actual = this.point;
      while (actual) {
        if (actual.data === valor) return actual;
        actual = actual.next;
      }
      return undefined; // No encontrado
    }
  };

  return lista;
}



// var list = new Lista();

// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);

// list.print()

//MATRIZ
//Implementá una clase Matriz que permita representar matrices bidimensionales y realizar operaciones básicas con ellas. Debe contar con los siguientes métodos:
//buscar(valor): retorna las coordenadas [fila, columna] del valor si existe.
//sumar(otraMatriz): retorna una nueva matriz con la suma elemento a elemento.
//restar(otraMatriz): retorna una nueva matriz con la resta elemento a elemento.
//multiplicar(otraMatriz): retorna una nueva matriz con el producto matricial.
//print(): imprime la matriz en consola con formato visual.
//Debe usarse programación moderna (ES6+), incluyendo class, let, const, y buen manejo de errores (como tamaños incompatibles).
//No podés usar librerías externas.

class Matriz {
  constructor(filas, columnas) {
    this.filas = filas;
    this.columnas = columnas;
    this.data = Array.from({length: filas}, () => Array(columnas).fill(undefined));
  }

  buscar(valor) {
    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        if (this.data[i][j] === valor) {
          return [i, j];
        }
      }
    }
    return undefined;
  }

  sumar(otra) {
    if (this.filas !== otra.filas || this.columnas !== otra.columnas) {
      throw new Error("Las matrices deben tener las mismas dimensiones para sumar.");
    }
    let resultado = new Matriz(this.filas, this.columnas);
    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        resultado.data[i][j] = this.data[i][j] + otra.data[i][j];
      }
    }
    return resultado;
  }

  restar(otra) {
    if (this.filas !== otra.filas || this.columnas !== otra.columnas) {
      throw new Error("Las matrices deben tener el mismo tamaño.");
    }
    let resultado = new Matriz(this.filas, this.columnas);
    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        resultado.data[i][j] = this.data[i][j] - otra.data[i][j];
      }
    }
    return resultado;
  }

  multiplicar(otra) {
    if (this.columnas !== otra.filas) {
      throw new Error("Las dimensiones no son compatibles para multiplicación.");
    }
    let resultado = new Matriz(this.filas, otra.columnas);
    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < otra.columnas; j++) {
        let suma = 0
        for (let k = 0; k < this.columnas; k++) {
          suma += this.data[i][k] * otra.data[k][j];
        }
        resultado.data[i][j] = suma
      }
    }
    return resultado;
  }

  print() {
    console.table(this.data);
  }
}

//"Resolver la Torre de Hanoi para n discos, usando tres pilas que representan las torres.
//  Implementar la lógica para mover todos los discos desde la primera torre hasta la tercera,
//  respetando las reglas clásicas: sólo se puede mover un disco a la vez,
//  y nunca colocar un disco más grande sobre uno más pequeño."

class Pila {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  length() {
    return this.items.length;
  }

  toArray() {
    return [...this.items]; // Sin .reverse()
  }
}

class Torre {
  constructor() {
    this.torre1 = new Pila();
    this.torre2 = new Pila();
    this.torre3 = new Pila();
  }

  init(n) {
    for (let i = n; i >= 1; i--) {
      this.torre1.push(i);
    }
  }

  solve() {
    const mover = (n, origen, destino, auxiliar) => {
      if (n === 0) return;
      mover(n - 1, origen, auxiliar, destino);
      destino.push(origen.pop());
      mover(n - 1, auxiliar, destino, origen);
    };

    mover(this.torre1.length(), this.torre1, this.torre3, this.torre2);
  }

  getTorre1() {
    return this.torre1.toArray();
  }

  getTorre2() {
    return this.torre2.toArray();
  }

  getTorre3() {
    return this.torre3.toArray();
  }
}

module.exports = {
  minimo,
  mayor,
  total,
  totalBis,
  promedio,
  promedioBis,
  crearListaEnlazada,
  Matriz,
  Torre,
};
