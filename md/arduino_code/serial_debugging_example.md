## Serial debugging example

**Example:** Debug the light sensor reading

```
int lightSensorPin = A0;

void setup() {
  pinMode( lightSensorPin, INPUT ); //optional pinMode
  Serial.begin( 9600 );
}

void loop() {
  var lightLevel = analogRead( lightSensorPin );
  Serial.println( lightLevel );
}
```
