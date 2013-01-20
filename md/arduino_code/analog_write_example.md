## `analogWrite()` example

**Example:** Increase the brightness of an LED when the light sensor detects less light.

```
int ledPin = 3;
int lightSensorPin = A0;

void setup() {
  pinMode( ledPin, OUTPUT );
  pinMode( lightSensorPin, INPUT ); //optional
}

void loop() {

  int lightLevel = analogRead( lightSensorPin );
  
  if ( lightLevel <= 341 ) {
    analogWrite( ledPin, 255 ); //bright
  }else if ( lightLevel > 341 && lightLevel < 682 ) {
    analogWrite( ledPin, 128 ); //mid-brightness
  }else{
    // lightLevel is equal to or greater than 682
    analogWrite( ledPin, 0 );   //off
  }
  
}
```

(Once again, remember that only _some_ arduinos pins can handle PWM so best to make sure that your LED is on pin 3, 5, 6, 9, 10, 0r 11!!!)