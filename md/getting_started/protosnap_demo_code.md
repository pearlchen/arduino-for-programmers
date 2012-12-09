## Uploading the ProtoSnap demo sketch

Create a new sketch using this code and upload to the ProtoSnap: 

- If you press the button you'll hear the buzzer make a tone.

- If you cover the light sensor, you get a Tri-color light sequence (red, green, blue blinks). Alternatively, if it's dark, aim a flashlight at the light sensor to get it to stop.

```
/*
ProtoSnap Pro Mini 
SparkFun Electronics 2011
*/
 
int button = 7;
int buzzer = 2;
int light = A0;
int red = 3;
int blue = 6;
int green = 5;

void setup()  {

  Serial.begin(9600);
    
  pinMode(buzzer, OUTPUT);  
  pinMode(red, OUTPUT);  
  pinMode(green, OUTPUT);  
  pinMode(blue, OUTPUT);

  pinMode(button, INPUT);
  Serial.println("I am a protosnap, waiting to hear space bar:");

}

void loop() {
 
  if(Serial.available() > 0) {
  
    if(Serial.read() == 32)
      Serial.println("I HEARD THAT, OH SNAP!");
  
  }
    
  while (digitalRead(button) == LOW) {
  
    digitalWrite(buzzer, HIGH);
    delayMicroseconds(400);
    digitalWrite(buzzer, LOW);
    delayMicroseconds(400);
  
  }

  int temp = analogRead(light);
  
  if(temp > 100){

    digitalWrite(red, HIGH);
    digitalWrite(green, HIGH);
    digitalWrite(blue, HIGH);

  } else {
    
    digitalWrite(red, LOW);
    digitalWrite(green, HIGH);
    digitalWrite(blue, HIGH);
    delay(500);
    
    digitalWrite(red, HIGH);
    digitalWrite(green, LOW);
    digitalWrite(blue, HIGH);
    delay(500);
    
    digitalWrite(red, HIGH);
    digitalWrite(green, HIGH);
    digitalWrite(blue, LOW);
    delay(500);

  }   
}

```