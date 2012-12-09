## `setup()` and `loop()`

Two functions are **required** for every Arduino program: `setup()` and `loop()`.

You must define these two functions, otherwise you get a compiler error.

** This is the bare minimum Arduino sketch: **

```
void setup() {
  // automatically called once,
  // on power up or after a reset
}

void loop() {
  // automatically executes forever,
  // as long as there is power and no code errors
}
```


([arduino.cc Setup »](http://arduino.cc/en/Reference/Setup),
 [arduino.cc Loop »](http://arduino.cc/en/Reference/Loop))