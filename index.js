const test = require('tape')
function compress(str){
    return compressAux(str.split(''),0,'',0);    
}

function compressAux(chars, i, compressedStr, acc){
    return i > (chars.length -1)?
        compressedStr+((acc>1)?acc:''):
        (i===0)?
            compressAux(chars,i+1,chars[i],1):
            chars[i]===chars[i-1]?
                compressAux(chars,i+1,compressedStr,acc+1):
                compressAux(chars,i+1,compressedStr+acc+chars[i],1)
}

function compress2(str){
    return compressAux2(str,0,'',0);    
}

function compressAux2(str, i, compressedStr, acc){
    return i > (str.length -1)?
        compressedStr+((acc>1)?acc:''):
        (i===0)?
            compressAux2(str,i+1,str.charAt(i),1):
            str.charAt(i)===str.charAt(i-1)?
                compressAux2(str,i+1,compressedStr,acc+1):
                compressAux2(str,i+1,compressedStr+acc+str.charAt(i),1)
}

test('compress should return a3 when aaa is passed',({equal,end})=>{
    const actual = compress('aaa')
    const expected = 'a3'
    equal(actual,expected)
    end()
})

test('compress should return a3b2 when aaabb is passed',({equal,end})=>{
    const actual = compress('aaabb')
    const expected = 'a3b2'
    equal(actual,expected)
    end()
})

test('compress should return a3b2c when aaabbc is passed',({equal,end})=>{
    const actual = compress('aaabbc')
    const expected = 'a3b2c'
    equal(actual,expected)
    end()
})

test('compress should return a when a is passed',({equal,end})=>{
    const actual = compress('a')
    const expected = 'a'
    equal(actual,expected)
    end()
})

test('compress should return \'\' when \'\' is passed',({equal,end})=>{
    const actual = compress('')
    const expected = ''
    equal(actual,expected)
    end()
})

test('compress2 should return a3 when aaa is passed',({equal,end})=>{
    const actual = compress2('aaa')
    const expected = 'a3'
    equal(actual,expected)
    end()
})

test('compress2 should return a3b2 when aaabb is passed',({equal,end})=>{
    const actual = compress2('aaabb')
    const expected = 'a3b2'
    equal(actual,expected)
    end()
})

test('compress2 should return a3b2c when aaabbc is passed',({equal,end})=>{
    const actual = compress2('aaabbc')
    const expected = 'a3b2c'
    equal(actual,expected)
    end()
})

test('compress2 should return a when a is passed',({equal,end})=>{
    const actual = compress2('a')
    const expected = 'a'
    equal(actual,expected)
    end()
})

test('compress2 should return \'\' when \'\' is passed',({equal,end})=>{
    const actual = compress2('')
    const expected = ''
    equal(actual,expected)
    end()
})