## `pinMode()` for digital input

To use **digital pins** as input, you do need to use a "pullup resistor" or "pulldown resistor" in your circuit. The input will "float" and randomly return either HIGH or LOW without a resistor wired to ground in a circuit. 

Instead of using an physical external resistor, Arduino has a "[built-in pull-up resistor](http://arduino.cc/en/Tutorial/DigitalPins)" which can be activiated by passing in `INPUT_PULLUP` to `pinMode()`.

```
pinMode( pin#, INPUT_PULLUP );
```

(Note: we'll talk about **analog input** a bit later.)


([arduino.cc Constants »](http://arduino.cc/en/Reference/Constants),
 [arduino.cc digitalWrite »](http://arduino.cc/en/Reference/digitalWrite))