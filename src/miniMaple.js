class MiniMaple{
    constructor() { }

    diff(func, d) {
        let elem = ''
        let res = ''
        let sign = ''
        for (let i = 0; i < func.length; i++) {
            if (func[i] != '+' && func[i] != '-')
                elem += func[i]
            else {
                let r = this.simple_dif(elem, d)
                if (r != '0')
                    res += sign + r
                sign = func[i]
                elem = ''
            }
        }
        let r = this.simple_dif(elem, d)
        if (r != '0')
            res += sign + r
        if (r === '0' & res === '')
            res += r
        return res
    }

    simple_dif(sf, d) {
        let res = ''
        let num = 1
        let pow = 0
        let things = sf.split('*')
        if (things.length === 1) {
            if (things[0].includes('^') && things[0].includes(d)) {
                let a = (things[0].split('^'))[1]
                pow =  a - 1
                num *= a
            }
            else if (things[0].includes(d)) {
                pow = 0
                num *= 1
            }
            else {
                pow = -1
            }
        }
        else {
            num = parseInt(things[0])
            if (things[1].includes('^') && things[1].includes(d)) {
                let a = (things[1].split('^'))[1]
                pow =  a - 1
                num *= a
            }
            else if (things[1].includes(d)) {
                pow = 0
                num *= 1
            }
            else {
                pow = -1
            }
        }
        if (pow === -1)
            res = '0'
        else if (pow === 0)
            res += num
        else if (pow === 1)
            res += num + '*' + d
        else 
            res += num + '*' + d + '^' + pow
        return res
    }
}

export {MiniMaple}