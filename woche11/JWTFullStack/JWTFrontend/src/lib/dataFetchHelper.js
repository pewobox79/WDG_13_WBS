export const getAllProducts = async () => {

    try {
        const response = await fetch("http://localhost:3500/api/shop/products")
        return response
    } catch (err) {
        console.log("error happend", err)
    }

}