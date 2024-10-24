# Preguntas de entrevista sobre JavaScript y React
## Índice
1. [¿Cuál es la diferencia entre usar == y ===?](#diferencia-entre-==--y-===)
2. [¿Cuál es la diferencia entre usar var, let y const?](#diferencia-entre-var-let-y-const)
3. [¿Qué es hoisting?](#que-es-hoisting)
4. [¿Qué es un closure?](#que-es-un-closure)
5. [¿Qué es un side effect?](#que-es-un-side-effect)
6. [¿Cómo funciona la herencia en prototipos?](#como-funciona-la-herencia-en-prototipos)
7. [¿Cuáles son las diferencias entre callback, promesas y async/await?](#diferencias-entre-callback-promesas-y-asyncawait)
8. [¿Qué es implicit coercion?](#que-es-implicit-coercion)
9. [¿Cuáles son las características de una función pura?](#caracteristicas-de-una-funcion-pura)
10. [¿Cuál es la diferencia entre asignar un valor o una referencia a una variable?](#diferencia-entre-asignar-un-valor-o-una-referencia-a-una-variable)
11. [¿Qué es event delegation?](#que-es-event-delegation)
12. [¿Qué es event bubbling?](#que-es-event-bubbling)
13. [¿Qué es un polyfill?](#que-es-un-polyfill)
14. [¿Cuáles son las diferencias entre una función y una función generadora?](#diferencias-entre-una-funcion-y-una-funcion-generadora)
15. [¿Cuáles son las diferencias entre una función declaración y una función flecha?](#diferencias-entre-una-funcion-declaracion-y-una-funcion-flecha)
16. [¿Qué es el DOM?](#que-es-el-dom)
17. [¿Qué son el sessionStorage y el localStorage?](#que-son-el-sessionstorage-y-el-localstorage)
18. [¿Cuáles son las diferencias entre una fábrica de objetos y una función constructora?](#diferencias-entre-una-fabrica-de-objetos-y-una-funcion-constructora)

---

### 1. ¿Cuál es la diferencia entre usar == y ===?
`==` compara dos valores permitiendo la conversión de tipos (coerción), mientras que `===` compara tanto el valor como el tipo, sin hacer coerción de tipos.

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
