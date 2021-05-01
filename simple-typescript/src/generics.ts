
//generic functions
function genericFunction<T>(x:T):T {
    return x;
}
//arrow fn eg
const genericArrowFunction=<T>(x:T):T=>x;

//generic interface
interface GenericInterface<T>{
(a:T):T;
someProp:T;
}

interface GenericInterface2<T>{
<U>(a:U):U
someProp:T;
}
//Generic classes
class GenericClass<P>{
constructor(public props:P){}
    
getProps():P{
  return this.props
}
}
//can't use generic type to static method or properties
