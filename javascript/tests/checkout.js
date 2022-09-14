export default class Cart {
    items = [];

    add(item) {
        const itemToFind = { product: item.product };

        if(find(this.items, itemToFind)) {
            removeEventListener(this.items, itemToFind);
        }

        this.items.push(item);
    }

    remove(product) {
        remove(this.item, {product});
    }

    getTotal() {
        return this.items.reduce((acc, item) => {
            return acc + item.quantity * item.product.price;
        }, 0);
    }

    checkout() {
        return {
            total: this.getTotal(),
            items: this.items
        };
    }
}