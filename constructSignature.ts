
type SomeObject = any;
type SomeConstructor={
    new(s:string):SomeObject;
}
function fn(ctor: SomeConstructor) {
    console.log( new ctor("hello"));
  }
 // fn({})
