## `pinMode()` and `digitalWrite()` for output

To tell Arduino that you want to _send_ signals to a pin, you must set the `pinMode` first. 

The first parameter is a number representing a pin. (Note: if a pin is labeled "A0" type `A0` because it is different than pin "0".)

The second paramater is the constant `OUTPUT`. (Note: Yes, it's in ALL CAPS!)

```
pinMode( pin#, OUTPUT );
```

### Turn something on

To send an "on" signal to an output pin, pass in `HIGH` to `digitalWrite()`:

```
digitalWrite( pin#, HIGH );
```

**Example:** Turn an LED on

```
int ledPin = 13;

void setup() {
  pinMode( ledPin, OUTPUT );
  digitalWrite( ledPin, HIGH ); //turn on
}

void loop() {
  // nothing going on here
}
```


([arduino.cc Constants »](http://arduino.cc/en/Reference/Constants),
 [arduino.cc digitalWrite »](http://arduino.cc/en/Reference/digitalWrite))