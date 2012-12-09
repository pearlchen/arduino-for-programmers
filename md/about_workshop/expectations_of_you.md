## My expectations of you

- You're here because you want to be!

- _This workshop is best suited for:_ Anyone who has **heard** of an Arduino but hasn't spent much time working with one (maybe one is collecting dust somewhere…) and you have some experience programming. The following code should be a breeze:

```
int numMice = 3;
char type[6] = "blind";

void printMice() {
  for ( int i = 1; i <= numMice; i++ ) {
    if ( i == 1 ) { 
      Serial.print( i + " " + type + " mouse" );
    }else{
      Serial.print( i + " " + type + " mice" );
    }
  }
} 

printMice();
```