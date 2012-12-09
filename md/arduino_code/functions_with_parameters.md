## Functions with parameters

A _parameter_ is a temporary value "passed into" a function for use **only within** the function.

** To define a function that accepts a parameter named `number` that is a whole number (int): **

```
void printInteger(int number) {
  Serial.println(number);
}
```

** To define a function that accepts multiple values, seperate the parameters by commas: **

```
void printIntegerSum(int a, int b) {
  int sum = a + b;
  Serial.println(sum);
}
```

** To pass in parameter values: **

```
printInteger(3);
printIntegerSum(1,2);
```