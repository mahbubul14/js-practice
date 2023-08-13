let address = {
    street: 'north 1st  strret',
    state: 'CA',
    country: 'USA',
    'building no' : 3960
}

console.log(address.street);
console.log(address['building no']);

address.state = 'FL'
console.log(address.state);

console.log('name' in address)
console.log('state' in address)