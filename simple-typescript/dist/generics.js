"use strict";
//generic functions
function genericFunction(x) {
    return x;
}
//arrow fn eg
const genericArrowFunction = (x) => x;
//Generic classes
class GenericClass {
    constructor(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
}
//can't use generic type to static method or properties
