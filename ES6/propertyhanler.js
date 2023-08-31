let key = 'abc';

let obj = {
    name: 'aaa',
    [key + 1]: 123,
    func: function() {
        console.log('hello')
    }
}

console.log(obj)