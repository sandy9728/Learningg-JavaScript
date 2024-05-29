// Q.No.1)Write a JavaScript program to display the current day and time in the following format.
          // Today is : Tuesday.
         // Current time is : 10 PM : 30 : 38

         let Today = new Date();
         var day = Today.getDay();
         var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
         console.log("Today is " + weekDays[day] + " . ");
         
         var hour = Today.getHours()
         var minute = Today.getMinutes()
         var second = Today.getSeconds()
         var morEve = (day >= 12) ? "PM" : "Am";
         hour = (hour >= 12) ? hour - 12 : hour;

         if (hour === 0 && morEve === 'PM'){
            if(minute === 0 && second === 0){
                hour = 12;
                morEve = 'Noon'
            } else{
                hour = 12;
                morEve = 'PM';
            }
         } 

         if (hour === 0 && morEve === 'AM'){
            if(minute === 0 && second === 0){
                hour = 12;
                morEve = 'Midnight';
            } else{
                hour = 12;
                morEve = 'AM';
            }
         } 

         console.log("Current time is : " + hour + morEve + ":" + minute + ":" + second);