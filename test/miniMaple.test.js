import { MiniMaple } from "../src/miniMaple";

test('normal diff', () => {
    let counter = new MiniMaple()
    let f = counter.diff('4*x^3', 'x')
    expect(f).toBe('12*x^2')
})

test('normal diff 2', () => {
    let counter = new MiniMaple()
    let f = counter.diff('4*x^3-x^2', 'x')
    expect(f).toBe('12*x^2-2*x')
})

test('normal diff with 0', () => {
    let counter = new MiniMaple()
    let f = counter.diff('4*x^3-x^2+y', 'x')
    expect(f).toBe('12*x^2-2*x')
})

test('normal diff with no pow', () => {
    let counter = new MiniMaple()
    let f = counter.diff('4*x', 'x')
    expect(f).toBe('4')
})

test('normal diff with 0 in midle', () => {
    let counter = new MiniMaple()
    let f = counter.diff('4*x+5*y-10*x', 'x')
    expect(f).toBe('4-10')
})

test('diff of other variabe', () => {
    let counter = new MiniMaple()
    let f = counter.diff('4*x^3', 'y')
    expect(f).toBe('0')
})

test('diff of const', () => {
    let counter = new MiniMaple()
    let f = counter.diff('5', 'x')
    expect(f).toBe('0')
})

test('diff of just x', () => {
    let counter = new MiniMaple()
    let f = counter.diff('x', 'x')
    expect(f).toBe('1')
})

test('diff of just x on y', () => {
    let counter = new MiniMaple()
    let f = counter.diff('x', 'y')
    expect(f).toBe('0')
})