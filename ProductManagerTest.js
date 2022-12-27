const ProductManager = require("./Entregable2/index.js");

const manager = new ProductManager("./data/Users.json")

const queries = async ()=>{


    try {
        console.log("Primera consulta")
        let users = await manager.getUsers()
        console.log(users);

        console.log("Nuevo usuario")
        const userDemo = {name: "Lionel", lastname: "Messi", age: 35, curse:"Argentina"};
        await manager.createUser(userDemo)

        console.log("Segunda consulta")
        users = await manager.getUsers()
        console.log(users);

        console.log("Nuevo usuario")
        const userDemo2 = {name: "Angel", lastname: "Di Maria", age: 34, curse:"Argentina"};
        await manager.createUser(userDemo2)

        console.log("Tercera consulta")
        users = await manager.getUsers()
        console.log(users);

        console.log("Actualizar usuario")
        const list = await manager.updateUser(1,{age:24})
        console.log(list)

        
    } catch (error) {
        console.log(error)
    }
}

queries()