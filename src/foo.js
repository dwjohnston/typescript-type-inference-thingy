"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeComponent = exports.foo = void 0;
exports.foo = {};
const foos = [
    {
        a: "a",
        b: 1
    }, {
        a: "b",
        b: 2
    }
];
const SomeComponent = (props) => {
};
exports.SomeComponent = SomeComponent;
(0, exports.SomeComponent)({
    onChange: (value) => "hello!",
    availableValues: foos,
    selectedValue: null,
    generateString: (v) => v.a //(parameter) v: Foo
});
