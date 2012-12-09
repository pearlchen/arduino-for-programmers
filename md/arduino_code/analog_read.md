## `pinMode()` and `analogRead()` for analog input

If you are using an **analog input**, you only need to use `INPUT` with `pinMode()` but setting pinMode is actually optional in that case since that's the default state.

```
pinMode( pin#, INPUT);
```

Much like `digitalRead()`, use `analogRead()` to listen for input values on a pin.

```
int analogValue = analogRead( pin# );
```

Since it's an _analog_ signal, it will be an integer **value between 0 and 1023**.


([arduino.cc analogRead »](http://arduino.cc/en/Reference/analogRead),
 [arduino.cc Analog Input Pins »](http://arduino.cc/en/Tutorial/AnalogInputPins))