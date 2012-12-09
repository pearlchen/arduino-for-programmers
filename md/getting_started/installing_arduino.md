## Download & install the Arduino IDE. 

### Download

If you haven't already, go to the [Download](http://arduino.cc/en/Main/Software) section of the _arduino.cc_ website.

Download the latest version (which, at the time of this writing, is **version 1.0.2**).

### Install

When you have downloaded this file, **go to the [Getting Started](http://arduino.cc/en/Guide/HomePage) section** of the _arduino.cc_ website.

Follow the tutorial for your specific platform (Windows, Mac, or Linux) to install the software, install any USB drivers (especially on Windows), and uploading the "Blink" sketch to make sure everything is working.

### Arduino buttons

Note that Arduino's screenshots are out of date and the buttons look like this now:

![IDE buttons: Verify and Upload](images/verify_and_upload.png)

The two most important buttons on Arduino are in the upper lefthand corner.

**Verify:** Makes sure that there are no errors in your code.

**Upload:** Compiles your sketch and writes the program to your microcontroller's memory.

### Select Arduino Uno as the Board

Remember to select the **Arduino Uno** option from the _Tools_ &raquo;  _Board_ drop down menu.

![Choose Uno](images/choose_uno.png)

### Re-iterating the Windows USB driver installation steps

1. Plug in your Arduino to your Windows computer
- Launch _Windows Device Manager_ (I usually click _Start_ menu then start typing "Device Manager" and find it in the filtered list.)
- Double click on _Arduino Uno_ (under _Other Devices_) 
	- While you're here, note the COM port used
- Click on _Update Driver_
- Click _Browse my computer for driver software_
- Choose _Let me pick from a list of device drivers on my computer_ 
  - **Resist the urge to use the _search_ option!**
- Keep default "Show All Devices option selected and click _Next_
- Click _Have Disk_
- Point it to where the Arduino drivers folder is (e.g. _<arduino_installation_root>\drivers_) and click OK.
- Select _Arduino Uno_ and click _Next_
- Click _Yes_ and ignore signature warning.
- Note the COM port assigned to the USB (e.g. COM6 for me)


### Re-terating the Serial Port setting

**On Windows:**

- Use the COM port you noted while installing the drivers to set the _Tools_ &raquo; _Serial Port_ drop down menu. If you've forgotten or even plugged the Arduino into a new USB port on your computer, launch _Windows Device Manager_ (I usually click _Start_ menu then start typing "Device Manager" and find it in the filtered list.)

**On Mac:**

- If your Mac can see the Arduino, it'll show up as something like _/dev/tty.usbmodemXXXX_ to set the _Tools_ &raquo; _Serial Port_ drop down menu.

### Re-terating installation of the FTDI drivers

Go to [http://www.ftdichip.com/Drivers/VCP.htm](http://www.ftdichip.com/Drivers/VCP.htm) to get the lastest FTDI drivers if you're still having trouble with your computer seeing the Arduino.

**On Windows:**

- To confirm if you're 32- or 64-bit, right-click on _My Computer_.

**On Mac:**

- If you're on any Mac that's less than 3 years old, you're most likely 64-bit. [2.2.18](http://www.ftdichip.com/Drivers/VCP/MacOSX/FTDIUSBSerialDriver_v2_2_18.dmg) is the latest FTDI driver for you.