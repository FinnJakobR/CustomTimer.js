# CustomTimer.js
A small Javascript Libary i´ve created during a art project at the university. Where you can Create and Manipulate your own Timer 

## install

```html
 <script src="path/to/timer.js"> </script>
 ```
  ## Basic Usage 
  ```javascript
  var timer = new EndlessYTtimer();
  timer.startTimer(); //will return a string: "0:00:00"
  ```
  
 ## Documentation
 
 ```javascript
  var timer = new EndlessYTtimer();
  timer.getCurrentSeconds(); //will return the expired Seconds of the timer:
  ```
  ```javascript
  var timer = new EndlessYTtimer();
  timer.getCurrentMinutes(); //will return the expired Minutes of the timer:
  ```
  ```javascript
  var timer = new EndlessYTtimer();
  timer.getCurrentHours(); //will return the expired Hours of the timer:
  ```
   ```javascript
  var timer = new EndlessYTtimer();
  timer.getCurrentDays(); //will return the expired Days of the timer:
  ```
  ```javascript
  var timer = new EndlessYTtimer();
  timer.getCurrentMonths(); //will return the expired Months of the timer:
  ```
   ```javascript
  var timer = new EndlessYTtimer();
  timer.getCurrentYears(); //will return the expired Years of the timer:
  ```
   ```javascript
  var timer = new EndlessYTtimer();
  timer.stop(); //will reset the Timer:
  ```
  ```javascript
  var timer = new EndlessYTtimer();
  timer.pauseTimer(); //will pause the Timer and dont reset the Timer
  ``` 
  ```javascript
  var timer = new EndlessYTtimer();
  timer.add(ms); //add value to the current State of the timer e.j. 0:00:05 + 5000 = 0:00:10 (value in milliseconds)
  ```
  ```javascript
  var timer = new EndlessYTtimer();
  timer.sub(ms); //sub value to the current State of the timer e.j. 0:00:05 - 5000 = 0:00:00 (value in milliseconds)
  ```
  ```javascript
  var timer = new EndlessYTtimer();
  timer.startAt("00:00:03"); //set a custom initial Start value to the timer
  ```
  ```javascript
  var timer = new EndlessYTtimer();
  timer.endAt("00:00:03"); //set a custom end value to the timer
  ```
  ```javascript
  var timer = new EndlessYTtimer();
  timer.STATE; //returns "RUNNING", "NOTRUNNING", "PAUSED", "STOPPED"
  ```
  
  ```javascript
  var timer = new EndlessYTtimer();
  timer.getCurrentValue(); 
  ```

  ## EventListener
  ```javascript
  var timer = new EndlessYTtimer();
  timer.on("SecondsChanged",callback()); //fired every Second when die timer state is running
  
  timer.on("MinutesChanged",callback()); //fired every Minute when die timer state is running
  
  timer.on("HoursChanged",callback()); //fired every Hour when die timer state is running
  
  timer.on("DaysChanged",callback()); //fired every Day when die timer state is running
   
  timer.on("MonthsChanged",callback()); //fired Month Second when die timer state is running
  ```
   ## Converting 
   the Libary can convert the current State of the timer 
   ```javascript
   var timer = new EndlessYTtimer();
   timer.convertIn(event)
   
    timer.convertIn("Seconds"); // will convert the State in seconds 
    timer.convertIn("Miuntes"); // will convert the State in Minutes 
    timer.convertIn("Days"); // will convert the State in Days 
   ```
   
   
  
  
  
