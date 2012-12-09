## Controlling a Servo using Arduino

Like `analogWrite()`, Arduino’s libraries take care of all that hard work as long as you import the Servo class.

```
#include <Servo.h>
Servo myservo;  // create servo object to control a servo 
```

From the Arduino File menu: `Examples > Servo > Sweep`

### Using the servo on the breadboard

Insert header pins into the breadboard to prototype with the servo.

- Purple wire = ground
- Orange/red wire = power 5V
- Yellow/light orange = output pin on arduino to pin 9bre