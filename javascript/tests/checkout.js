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

    sumary() {
        const total = this.getTotal();
        const items = this.items;

        return {
            total,
            items
        };
    }

    checkout() {
        const { total, items } = this.sumary();

        this.items = [];

        return {
            total,
            items
        };
    }
}