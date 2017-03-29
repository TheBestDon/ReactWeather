function getTempPromise(location) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        resolve(79);
        reject('City nera');
        }, 1000);
        
    });
}

getTempPromise('Philadelphia').then(function(temp) {
    console.log('promise success', temp);
}, function(err) {
    console.log('promise error', err)
})

function addPromise (a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a+b)} else {  
            reject('Enter valid numbers');
}
        
    });
}

addPromise(5,'d').then(function(number) {
    console.log('promise success', number);
}, function(err) {
    console.log('promise error', err)
})