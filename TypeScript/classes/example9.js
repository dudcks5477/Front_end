var ClassName = /** @class */ (function () {
    function ClassName() {
    }
    ClassName.getInstance = function () {
        // ClassName으로부터 만든 object가 없으면 만든다
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    };
    ClassName.instance = null;
    return ClassName;
}());
var c = ClassName.getInstance();
var d = ClassName.getInstance();
console.log(c === d);
