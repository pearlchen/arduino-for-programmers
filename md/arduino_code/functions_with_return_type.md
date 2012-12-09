## Functions with return types

Like _variables_, functions have a datatype. 

When a function acts like a black hole (stuff goes in, nothing comes out) it has a _return datatype_ of `void`.

```
void printIntegerSum(int a, int b) {
  int sum = a + b;
  Serial.println(sum);
}
```

** If the function acts more like a vending machine (stuff goes in, stuff comes out), use the _return_ keyword and make sure to give it the proper datatype: **

```
int addIntegers(int a, int b) {
  int sum = a + b;
  return sum;
}
```

** Save the returned value in a variable: **

```
int sum = addIntegers(1,2);
```