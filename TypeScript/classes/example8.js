var Person8 = /** @class */ (function () {
    function Person8() {
    }
    Person8.prototype.hello = function () {
        console.log('안녕하세요', Person8.CITY);
    };
    Person8.prototype.change = function () {
        Person8.CITY = "LA";
    };
    Person8.CITY = "Seoul";
    return Person8;
}());
var p8 = new Person8();
p8.hello();
var p81 = new Person8();
p81.hello();
p8.change();
p81.hello();
