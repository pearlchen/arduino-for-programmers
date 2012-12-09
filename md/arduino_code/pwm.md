## Pulse Width Modulation (PWM)

![PWM](images/pwm.gif)

```
int ledPin = 9; // Note that pin 13 on the Uno doesn't support PWM!

void setup() {
  pinMode(ledPin, OUTPUT); // sets the pin as output
}

void loop() {
  analogWrite(ledPin, 0);   // 0% duty cycle
  delay(2000);
  analogWrite(ledPin, 64);  // 25% duty cycle
  delay(2000);
  analogWrite(ledPin, 127); // 50% duty cycle
  delay(2000);
  analogWrite(ledPin, 191); // 75% duty cycle
  delay(2000);
  analogWrite(ledPin, 255); // 100% duty cycle
  delay(2000);
}
```

([arduino.cc AnalogWrite »](http://arduino.cc/en/Reference/AnalogWrite),
 [arduino.cc PWM »](http://arduino.cc/en/Tutorial/PWM))