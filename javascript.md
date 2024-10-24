# Preguntas de entrevista sobre JavaScript y React

## Índice
1. [¿Cuál es la diferencia entre usar == y ===?](#1-cuál-es-la-diferencia-entre-usar--y-)
2. [¿Cuál es la diferencia entre usar var, let y const?](#2-cuál-es-la-diferencia-entre-usar-var-let-y-const)
3. [¿Qué es hoisting?](#3-qué-es-hoisting)
4. [¿Qué es un closure?](#4-qué-es-un-closure)
5. [¿Qué es un side effect?](#5-qué-es-un-side-effect)
6. [¿Cómo funciona la herencia en prototipos?](#6-cómo-funciona-la-herencia-en-prototipos)
7. [¿Cuáles son las diferencias entre callback, promesas y asyncawait?](#7-cuáles-son-las-diferencias-entre-callback-promesas-y-asyncawait)
8. [¿Qué es implicit coercion?](#8-qué-es-implicit-coercion)
9. [¿Cuáles son las características de una función pura?](#9-cuáles-son-las-características-de-una-función-pura)
10. [¿Cuál es la diferencia entre asignar un valor o una referencia a una variable?](#10-cuál-es-la-diferencia-entre-asignar-un-valor-o-una-referencia-a-una-variable)
11. [¿Qué es event delegation?](#11-qué-es-event-delegation)
12. [¿Qué es event bubbling?](#12-qué-es-event-bubbling)
13. [¿Qué es un polyfill?](#13-qué-es-un-polyfill)
14. [¿Cuáles son las diferencias entre una función y una función generadora?](#14-cuáles-son-las-diferencias-entre-una-función-y-una-función-generadora)
15. [¿Cuáles son las diferencias entre una función declaración y una función flecha?](#15-cuáles-son-las-diferencias-entre-una-función-declaración-y-una-función-flecha)
16. [¿Qué es el DOM?](#16-qué-es-el-dom)
17. [¿Qué son el sessionStorage y el localStorage?](#17-qué-son-el-sessionstorage-y-el-localstorage)
18. [¿Cuáles son las diferencias entre una fábrica de objetos y una función constructora?](#18-cuáles-son-las-diferencias-entre-una-fábrica-de-objetos-y-una-función-constructora)

---

### 1. ¿Cuál es la diferencia entre usar == y ===?

En JavaScript, `==` y `===` son operadores de comparación, pero funcionan de manera diferente:

- **`==` (operador de igualdad débil)**: compara dos valores permitiendo la **conversión de tipos** (coerción). Esto significa que si los tipos de los operandos son diferentes, JavaScript intentará convertir uno de ellos al tipo del otro antes de realizar la comparación.
  
- **`===` (operador de igualdad estricta)**: compara tanto el **valor** como el **tipo** de los operandos. No realiza coerción de tipos, por lo que ambos deben ser del mismo tipo y tener el mismo valor para que la comparación sea verdadera.

#### Coerción en JavaScript

La **coerción** es el proceso por el cual JavaScript convierte automáticamente un valor de un tipo de dato a otro para que la comparación o la operación pueda realizarse. Existen dos tipos de coerción:

- **Coerción implícita**: JavaScript realiza la conversión automáticamente sin que el desarrollador lo solicite.
- **Coerción explícita**: El desarrollador convierte manualmente un tipo de dato a otro.

#### Ejemplos de coerción implícita con `==`

~~~
javascript
5 == "5" // true, el número 5 es convertido a string "5" antes de la comparación
null == undefined // true, se consideran iguales en comparación débil
0 == false // true, el número 0 es convertido al booleano false
"0" == false // true, porque "0" se convierte a 0, y luego a false
~~~
#### Ejemplos de coerción implícita con `===`

~~~
javascript
5 === 5 // true, ambos son números con el mismo valor
5 === 10 // false, ambos son números, pero con diferentes valores
"hello" === "hello" // true, ambos son strings con el mismo valor
"hello" === "world" // false, ambos son strings, pero tienen valores diferentes
"5" === 5 // false, uno es string y el otro es número
~~~

### 2. ¿Cuál es la diferencia entre usar var, let y const?
- `var` tiene un alcance global o de función y permite la redeclaración.
- `let` tiene un alcance de bloque y no permite la redeclaración.
- `const` también tiene un alcance de bloque, pero además no permite reasignar el valor.

### 3. ¿Qué es hoisting?
Es un comportamiento en JavaScript donde las declaraciones de variables y funciones se "mueven" al principio de su contexto de ejecución antes de que el código sea ejecutado.

### 4. ¿Qué es un closure?
Un closure es una función que recuerda el entorno en el que fue creada, incluso después de que dicha función se haya ejecutado.

### 5. ¿Qué es un side effect?
Un side effect ocurre cuando una función modifica algún estado fuera de su alcance, como variables globales, el DOM o realizar llamadas a APIs externas.

### 6. ¿Cómo funciona la herencia en prototipos?
En JavaScript, la herencia se implementa a través de prototipos. Los objetos pueden "heredar" propiedades y métodos de otros objetos a través de la cadena de prototipos.

### 7. ¿Cuáles son las diferencias entre callback, promesas y async/await?
- Los **callbacks** son funciones que se pasan como argumento a otra función para ser ejecutadas después de que esta termine.
- Las **promesas** son objetos que representan el eventual resultado de una operación asíncrona.
- **async/await** es una sintaxis más simple para trabajar con promesas que permite escribir código asíncrono de forma más legible.
#### 1. **Callbacks**
Un **callback** es una función que se pasa como argumento a otra función y se ejecuta después de que se completa una operación. Este es uno de los primeros enfoques para manejar la asincronía en JavaScript.

##### Ejemplo de Callback
~~~
javascript
function fetchData(callback) {
  setTimeout(() => {
    console.log('Datos obtenidos');
    callback(); // Se llama al callback después de obtener los datos
  }, 1000);
}

fetchData(() => {
  console.log('Callback ejecutado');
});
~~~
Ventajas:
-Simples de implementar en funciones que ya aceptan callbacks.
-Permiten ejecutar código después de que una operación asíncrona se completa.

Desventajas:
-Callback Hell: Cuando tenemos varias operaciones asíncronas anidadas, el código se vuelve difícil de leer y mantener, conocido como "callback hell" o "pirámide de la perdición".
-Manejo de errores complicado, ya que se debe pasar manualmente al callback.
#### 2. **Promesas**
Las promesas son una forma más moderna de manejar asincronía en JavaScript. Representan un valor que estará disponible ahora, en el futuro o nunca. Una promesa puede tener tres estados:

-Pending (pendiente): cuando la operación asíncrona aún no ha terminado.
-Fulfilled (resuelta): cuando la operación se completa exitosamente.
-Rejected (rechazada): cuando la operación falla.

##### Ejemplo de Callback
~~~
javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Datos obtenidos');
      } else {
        reject('Error al obtener datos');
      }
    }, 1000);
  });
};

fetchData()
  .then(result => console.log(result))  // Manejo de éxito
  .catch(error => console.error(error)); // Manejo de error
~~~
Ventajas:
-Mejor legibilidad que los callbacks anidados.
-Soporta encadenamiento con .then() para operaciones secuenciales y .catch() para manejo de errores.
-Manejo de errores centralizado en el bloque .catch().

Desventajas:
-Puede volverse complejo si tenemos muchas promesas anidadas.
-Aunque mejora el callback hell, el encadenamiento extenso puede ser difícil de seguir
#### 3. **Async/Await**
Async/await es una mejora introducida en ES2017 para trabajar con promesas de manera más sencilla. async marca una función como asíncrona, permitiendo el uso de await dentro de ella. await pausa la ejecución de la función hasta que la promesa se resuelve o se rechaza.

##### Ejemplo de Callback
~~~
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Datos obtenidos');
      } else {
        reject('Error al obtener datos');
      }
    }, 1000);
  });
};

const getData = async () => {
  try {
    const result = await fetchData();
    console.log(result); // 'Datos obtenidos'
  } catch (error) {
    console.error(error); // Manejo de error
  }
};

getData();

~~~
Ventajas:
-Código más sencillo y legible, similar a código síncrono.
-Manejo de errores más limpio mediante try/catch.
-Facilita la secuenciación de varias operaciones asíncronas.

Desventajas:
-Aún depende de las promesas, por lo que una buena comprensión de ellas es importante.
-Las funciones asíncronas siempre devuelven una promesa, lo cual debe ser tenido en cuenta al invocarlas

#### Conclusión:
Callbacks son útiles en operaciones simples, pero se vuelven difíciles de manejar en casos complejos (callback hell).
Promesas ofrecen una mejor legibilidad y manejo de errores, pero aún pueden ser difíciles de encadenar.
Async/await es la forma más limpia y moderna de trabajar con código asíncrono en JavaScript, ya que hace que el código asíncrono se parezca más a código síncrono y mejora significativamente la legibilidad.

### 8. ¿Qué es implicit coercion?
Es la conversión automática de tipos que JavaScript realiza cuando encuentra una expresión con diferentes tipos de datos (por ejemplo, sumar un número y un string).

### 9. ¿Cuáles son las características de una función pura?
- No tiene efectos colaterales.
- Para los mismos inputs, siempre retorna el mismo output.
- No modifica su estado interno ni externo.

### 10. ¿Cuál es la diferencia entre asignar un valor o una referencia a una variable?
Asignar un valor copia el dato directamente (para tipos primitivos), mientras que asignar una referencia apunta a un objeto o arreglo en la memoria, permitiendo modificaciones indirectas del contenido original.

### 11. ¿Qué es event delegation?
Es una técnica en la que se aprovecha el event bubbling para manejar eventos en un ancestro común en lugar de asignar eventos a múltiples elementos hijos.

### 12. ¿Qué es event bubbling?
Es el proceso en el que un evento que ocurre en un elemento hijo "burbujea" hacia sus elementos ancestros, permitiendo que también reciban el evento.

### 13. ¿Qué es un polyfill?
Es un fragmento de código que proporciona compatibilidad con características que no están implementadas en navegadores más antiguos.

### 14. ¿Cuáles son las diferencias entre una función y una función generadora?
- Las **funciones normales** ejecutan su código de principio a fin.
- Las **funciones generadoras** pueden pausar su ejecución y reanudarla posteriormente mediante la palabra clave `yield`.

### 15. ¿Cuáles son las diferencias entre una función declaración y una función flecha?
- Las **funciones declaración** tienen su propio contexto `this` y son "hoisted".
- Las **funciones flecha** no tienen su propio `this`, por lo que toman el contexto `this` donde fueron creadas.

### 16. ¿Qué es el DOM?
El DOM (Document Object Model) es una representación estructurada del documento HTML que permite interactuar y modificar el contenido y la estructura del sitio web a través de JavaScript.

### 17. ¿Qué son el sessionStorage y el localStorage?
- **sessionStorage** almacena datos en el navegador para la duración de la sesión del usuario.
- **localStorage** almacena datos en el navegador sin fecha de expiración, hasta que se borren manualmente.

### 18. ¿Cuáles son las diferencias entre una fábrica de objetos y una función constructora?
- Las **fábricas de objetos** son funciones que retornan nuevos objetos sin usar `new`.
- Las **funciones constructoras** son funciones que, al ser invocadas con `new`, crean instancias de objetos.
