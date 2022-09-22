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
            const amount = item.quantity * item.product.price;
            let discount = {
                amount: 0
            };
            if(item.condition && item.condition.percentage && item.quantity > item.condition.minimum) {
                discount = amount.percentage(item.condition.percentage);
            }
            
            return acc + (amount - discount);
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