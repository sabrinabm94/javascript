const { Cart } = require("./cart");

let cart;
let product = {
  title: "Product 1",
  price: 35388,
};
let product2 = {
  title: "Product 2",
  price: 41872,
};

beforeEach(() => {
  cart = new cart();
});

describe("Total", () => {
  //agrupador de testes
  it("should return 0 when getTotal()", () => {
    const cart = new Cart();

    expect(cart.getTotal()).toEqual(0);
  });

  it("should multiply quantity and price", () => {
    const item = {
      product: {
        title: "item test title",
        price: 35388,
      },
      quantity: 2,
    };

    expect(cart.getTotal()).toEqual(70776);
  });

  it("should ensure no more than on product exists at a time", () => {
    cart.add({
      product,
      quantity: 2,
    });
    cart.add({
      product,
      quantity: 1,
    });

    expect(cart.getTotal()).toEqual(35388);
  });

  it("should update total", () => {
    cart.add({
      product,
      quantity: 2,
    });
    cart.add({
      product: product2,
      quantity: 1,
    });

    cart.remove(product);

    expect(cart.getTotal()).toEqual(41872);
  });
});

describe("Checkout", () => {
  it("should return a object with total and list of items", () => {
    cart.add({
      product,
      quantity: 2,
    });
    cart.add({
      product: product2,
      quantity: 3,
    });

    expect(cart.checkout()).toMatchInlineSnapshot();
  });

  it("should return a object when sumary is called", () => {
    cart.add({
      product,
      quantity: 5,
    });
    cart.add({
      product: product2,
      quantity: 3,
    });

    expect(cart.sumary()).toMatchInlineSnapshot();
    expect(cart.getTotal()).toBeGreaterThan(0);
  });

  it("should reset items", () => {
    cart.add({
      product: product2,
      quantity: 3,
    });

    cart.checkout();

    expect(cart.getTotal()).toBeEqual(0);
  });
});

describe("Special conditions", () => {
  it("should apply percentage discount above minimy is passed", () => {
    const condition = {
      percentage: 30,
      minimum: 2,
    };
    cart.add({
      product,
      condition,
      quantity: 3,
    });

    expect(cart.getTotal().getAmount()).toEqual(743148);
  });
});
