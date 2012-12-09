## `digitalRead()` example

**Example:** Turn an LED on when a _digital_ button is pushed.

```
int ledPin = 13;
int buttonPin = 2;

void setup() {
  pinMode( ledPin, OUTPUT );
  pinMode( buttonPin, INPUT_PULLUP );
}

void loop() {

  var buttonState = digitalRead( buttonPin );
  
  if ( buttonState == LOW ) {
    digitalWrite( ledPin, HIGH ); //turn on
  }else{
    digitalWrite( ledPin, LOW );  //turn off
  }
  
}
```