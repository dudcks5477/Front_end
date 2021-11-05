var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent = /** @class */ (function () {
    function Parent(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Parent.prototype.print = function () {
        console.log("\uC774\uB984\uC740 " + this._name + " \uC774\uACE0, \uB098\uC774\uB294 " + this._age + " \uC785\uB2C8\uB2E4.");
    };
    Parent.prototype.printName = function () {
        console.log(this._name, this._age);
    };
    return Parent;
}());
// const p = new Parent('Chan', 24);
// p.print();
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(age) {
        var _this = _super.call(this, 'Chan Jr.', age) || this;
        _this.gender = 'male';
        _this.printName();
        return _this;
    }
    return Child;
}(Parent));
var e = new Child(0);
e.print();
