var Person5 = /** @class */ (function () {
    function Person5(_name, age) {
        this._name = _name;
        this.age = age;
    }
    Object.defineProperty(Person5.prototype, "name", {
        // get name() {
        //   return this._name + " Kim";
        // }
        set: function (n) {
            this._name = n;
        },
        enumerable: false,
        configurable: true
    });
    return Person5;
}());
var p6 = new Person5("Chan", 24);
console.log(p6.name); // get을 하는 함수 getter
p6.name = "Seockkim"; // set을 하는 함수 setter
console.log(p6.name);
