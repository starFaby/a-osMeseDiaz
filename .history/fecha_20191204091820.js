//Set the two dates
var currentTime   = new Date()
var currDate      = currentTime.getMonth() + 1 + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() //Todays Date - implement your own date here.
var iniPastedDate = "8/7/2012" //PassedDate - Implement your own date here.

//currDate = 8/17/12 and iniPastedDate = 8/7/12

function DateDiff(date1, date2) {
    var datediff = date1.getTime() - date2.getTime(); //store the getTime diff - or +
    return (datediff / (24*60*60*1000)); //Convert values to -/+ days and return value      
}

//Write out the returning value should be using this example equal -10 which means 
//it has passed by ten days. If its positive the date is coming +10.    
document.write (DateDiff(new Date(iniPastedDate),new Date(currDate))); //Print the results.