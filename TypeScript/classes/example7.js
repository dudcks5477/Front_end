// class => object
// {chan: 'male', seock: 'male'}
// {joo: 'female', kim: 'male', park: 'female'}
var Students = /** @class */ (function () {
    function Students() {
    }
    return Students;
}());
var a = new Students();
a.chan = 'male';
a.seock = 'male';
console.log(a);
var b = new Students();
b.joo = 'female';
b.kim = 'male';
b.park = 'female';
console.log(b);
