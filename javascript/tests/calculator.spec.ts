const { sum } = require("./calculator");

it('should return number 4', () => {
    expect(
        sun(2, 2).toBe(4);
    );
});

it('should return a error because is receiving a string', () => {
    expect(
        sun('2', '2').toThrowError();
    );
});

it('should return a error because is receiving a array', () => {
    expect(
        sun([2], [0, 2]).toThrowError();
    );
});