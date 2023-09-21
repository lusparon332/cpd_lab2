import {MiniMaple} from "../src/miniMaple";

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