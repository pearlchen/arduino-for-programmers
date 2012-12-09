## `analogWrite()` for analog outputs

**Very important**: Not all pins can send analog signals. The pins that can are: 3, 5, 6, 9, 10, and 11. (See footnote*.)


Setting `pinMode` is optional for analog -- but it won't hurt.

```
pinMode( pin#, OUTPUT );
```

Output to a pin a **duty cycle between 0 (always off) and 255 (always on)**.

```
analogWrite( pin#, dutyCycle );
```

**Note:**
 
- On the Arduino Mega, it works on pins 2 through 13. 
- Older Arduino boards with an ATmega8 only support analogWrite() on pins 9, 10, and 11.
- The Arduino Due supports analogWrite() on pins 2 through 13, plus pins DAC0 and DAC1. Unlike the PWM pins, DAC0 and DAC1 are Digital to Analog converters, and act as true analog outputs.

([arduino.cc AnalogWrite »](http://arduino.cc/en/Reference/AnalogWrite))