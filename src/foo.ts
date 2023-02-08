export const foo = {}; 


type Foo = {
    a: string; 
    b: number; 
  }
  
  
  const foos : Array<Foo> = [
    {
      a: "a", 
      b: 1
    }, {
      a: "b", 
      b: 2
    }
  ]; 
  
  
  type SomeComponentProps<T> = {
    onChange: (value: T) => void; 
    availableValues: Array<T>; 
    selectedValue: T | null; 
    generateString: (value: T) => string; 
  }
  
  export const SomeComponent = <T,>(props: SomeComponentProps<T>) => {
  }
  
  
  SomeComponent({
    onChange: (value: Foo | null | string | number) => "hello!",
    availableValues: foos, 
    selectedValue: null, 
    generateString: (v) => v.a //(parameter) v: Foo
  
  })
  
  