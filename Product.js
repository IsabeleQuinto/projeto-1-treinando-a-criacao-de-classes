class Product {
    constructor(name, description, price, inStock){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quanti){
        this.inStock += quanti
    }

    calculateDiscount(discountPerc){
        const disAmount = (this.price * discountPerc) / 100
        return this.price - disAmount
    }
}

const product = new Product('Notebook', 'Notebook Nitro 5', '1000')
product.addToStock (20)

console.log(`Nome do Produto: ${product.name}`)
console.log(`Descrição do Produto: ${product.description}`)
console.log(`Valor do Produto ${product.price}`)
console.log(`Quantidade em Estoque: ${product.inStock}`)
console.log('='*15)

const discount = 15
const discounted = product.calculateDiscount(discount)

console.log(`Disconto do Produto: ${discount}%`)
console.log(`Novo Valor do Produto: R$${discounted},00`)
