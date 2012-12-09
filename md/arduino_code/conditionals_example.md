## Conditional example

This is a shortened version of the `digitalRead()` example next.

**Example:** Turn an LED on when a _digital_ button is pushed.

```
var buttonState = digitalRead( buttonPin );

if ( buttonState == LOW ) {
  // turn an LED on
}else{
  // turn an LED off
}
```

For your reference, here are some other comparision operators:

![Conditional operators](images/conditional_operators.png)