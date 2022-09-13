const { Checkout } = require("./checkout");

describe('Cart', () => {
    it('should return 0 when getTotal()', () => {
        const cart = new Checkout();
        expect(cart.getTotal()).toEqual(0);
    });

    it('should multiply quantity and price', () => {
        const item = {
            product: {
                title: "item test title",
                price: 35388
            },
            quantity: 2,
        };
    });

    it('should ensure no more than on product exists at a time', () => {
        cart.add({
            product,
            quantity: 2,
        });
        cart.add({
            product,
            quantity: 1,
        });

        expect(checkout.getTotal()).toEqual(35388);
    });
});