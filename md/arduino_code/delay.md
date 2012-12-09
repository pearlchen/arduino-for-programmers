## Pro tip: Add in a `delay()`

So you can actually see something happen in your `loop()`! (Note: 1 second = 1000 miliseconds)

```
delay( 500 ); // wait half a second
```

**Example:** Turn an LED on, wait, then turn off, wait.

```
int ledPin = 13;

void setup() {
  pinMode( ledPin, OUTPUT );
}

void loop() {
  digitalWrite( ledPin, HIGH ); //turn on
  delay(1000);
  digitalWrite( ledPin, LOW );  //turn off
  delay(1000);
}
```

![LED example illustrated as volts](images/on_or_off.png)


([arduino.cc Delay »](http://arduino.cc/en/Reference/Delay))