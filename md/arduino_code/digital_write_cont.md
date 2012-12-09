## `pinMode()` and `digitalWrite()` for output (cont'd)

### Turn something off

Similiar to previous, instead pass in `LOW` to `digitalWrite()`:

```
digitalWrite( pin#, LOW );
```

**Example:** Turn an LED on, then off

```
int ledPin = 13;

void setup() {
  pinMode( ledPin, OUTPUT );
}

void loop() {
  digitalWrite( ledPin, HIGH ); //turn on
  digitalWrite( ledPin, LOW );  //turn off
}
```

([arduino.cc Constants »](http://arduino.cc/en/Reference/Constants),
 [arduino.cc digitalWrite »](http://arduino.cc/en/Reference/digitalWrite))