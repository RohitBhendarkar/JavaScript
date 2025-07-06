// 1. Primitive
    // 7 data types:
    // 1. String
    // 2. Number
    // 3. Boolean
    // 4. null
    // 5. undefined
    // 6. symbol
    // 7. bigint

    const id = Symbol('123')
    const anotherId = Symbol('123')
    // console.log(id == anotherId);
    // console.log(id);
    // console.log(anotherId);

    const bigNumber = 236523486127349346753475748359493657675n
    // console.log(typeof bigNumber);
    
    
    
    

// 2. Non-primitive (reference data types):
    // 1. Array
    // 2. Objects
    // 3. Functions

    const heros = ["Shaktiman", "Hanuman", "Ram"];
    // console.log(typeof heros);
    let myObj = {
        name: "Rohit",
        age: 20
    }
    // console.log(typeof myObj)

    const myFunction = function() {
        console.log("Hello world!");
    }
    myFunction()


    console.log(typeof myFunction);
    