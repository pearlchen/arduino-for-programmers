## Serial for debugging

When you need to know what's going on with your sketch, you can debug over serial.

Use the built in `Serial` object and call `.begin()` on it with a baudrate such as 2400, 19200, or 115200.

```
Serial.begin( baudRate );
```

Then use `.print()` to output to your _Serial Monitor_, or use `.println()` add a linebreak after.

```
void setup(){
  Serial.begin( baudRate );
}

void loop() {
  Serial.print("Hello from ");
  Serial.println("Arduino");
}
```