const ProductManager = require("./Entregable2/index.js");

const manager = new ProductManager("./data/Products.json")

const queries = async ()=>{


    try {
        console.log("Primera consulta")
        // let products = await manager.getProducts()
        // console.log(products);

        console.log("Nuevo usuario")
        const productDemo = {name: "Lionel", lastname: "Messi", age: 35, curse:"Argentina"};
        await manager.createProduct(productDemo)

        console.log("Segunda consulta")
        products = await manager.getProducts()
        console.log(products);

        console.log("Nuevo usuario")
        const productDemo2 = {name: "Angel", lastname: "Di Maria", age: 34, curse:"Argentina"};
        await manager.createProduct(productDemo2)

        console.log("Tercera consulta")
        products = await manager.getProducts()
        console.log(products);

        console.log("Actualizar usuario")
        const list = await manager.updateProduct(1,{age:24})
        console.log(list)

        
    } catch (error) {
        console.log(error)
    }
}

queries()