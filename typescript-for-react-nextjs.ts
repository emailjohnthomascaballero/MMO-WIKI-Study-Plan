

let variable = "hello world";
variable = "hi";

let age = 18;
age = 20;



// TypeScript is a statically-typed superset of JavaScript that can be incredibly useful when working with Next.js, a popular React framework. Here are some fundamental concepts in TypeScript that you can use in Next.js development:

// 1. Type Annotations and Inference: TypeScript allows you to specify the types of variables, function parameters, and return values. For example:

let message: string = "Hello, TypeScript!";

let number = 20;




// 2. Interfaces: Interfaces are used to define the structure of an object. They are widely used in Next.js to define the shape of props in React components.
interface User {
  name: string;
  age: number;
}



// 3. Type Aliases: Type aliases allow you to create custom types. They're similar to interfaces but can represent any type, not just objects.
type Point = { x: number; y: number };



// 4. Union Types: Union types allow you to specify that a value can have one of several types.
let result: string | number;



// 5. Generics: Generics provide a way to create reusable components, functions, and classes with different types. They are commonly used in Next.js when working with APIs and data fetching.
// function fetchAndParse<T>(url: string): Promise<T> {
//   // Fetch data from the URL and parse it as T
// }



// 6. Enums: Enums allow you to create a set of named constant values.
enum Color {
  Red,
  Green,
  Blue,
}



// 7. Type Assertion: Sometimes, you may need to tell TypeScript that you know the type of a value better than it does. You can use type assertions for this.
// let strLength: number = (someValue as string).length;




// 8. Modules: In TypeScript, you can use ES6 module syntax to organize your code into separate files. This is especially useful when working with Next.js to split your code into manageable parts.

// In one module
export function someFunction() {
  // ...
}

// In another module
// import { someFunction } from "./module";




// 9. TypeScript with React: When working with React and Next.js, you'll often use TypeScript to define the types of props for your components and to create custom React components.
