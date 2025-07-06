// 1. Stack Memory
    // Used for primitive data types.

    let myName = "Ramu"         //-->> Creates a space in stack memory
    let anotherName = myName    //-->> takes copy of variable "myName"
    myName = "Raju"             //-->> Takes another instance in stack

    console.log(myName)
    console.log(anotherName);
    



// 2. Heap Memory
    // Used for non-primitive data types.

    let user1 = {           //-->> Takes space in heap memory
        email: "user01@outlook.com",
        upi: "user01@ybl"
    }

    let user2 = user1     // This object is referred to object "user1"

    

    console.table(user1);
    console.table(user2)

    user2.email = "user02@gmail.com"

    console.log(user2.email);
    
    