/*
*This function calculates total price of a new order
*@param {array} products cartProduct: Array of Objects
*@returns {number} Total Price
*/

export const totalPrice = (product) => {
    let sum = 0;
    product.forEach(product => sum += product.price);
    
    return sum;
}