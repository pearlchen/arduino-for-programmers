## ProtoSnap RGB LEDs are different...

**Gotcha!**

For the ProtoSnap, you need to actually send each RGB pin a LOW (not a HIGH) to turn them on because of how they are wired.

```
digitalWrite(3, LOW);
digitalWrite(5, LOW);
digitalWrite(6, LOW);
```