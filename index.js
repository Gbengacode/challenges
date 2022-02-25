function timeConversion(s) {
    // 12:00:00AM === 00:00:00
    // 1:00:00pm == 01:00:00
    // 12:0:00PM === 12:00:00
    
    // 1:00:00:PM === TIME + 12
    // 9:00:00AM === 09:00:00
    
    const timeArray = s.split(":")
    let hour = parseInt(timeArray[0])
    let minutes = timeArray[1]
    let seconds = timeArray[2].slice(0,2)
    const med = timeArray[2].slice(-2)
    
     if(med === "PM" && (hour < 12)){
        hour += 12
    }
    if(med === "AM" && (hour === 12)){
        hour = "00"
       
    }
    else if(hour < 10){
        hour = "0" + hour.toString()
    }
    else {
        hour = hour.toString()
    }
    
    return [hour, minutes, seconds].join(":")
 }
 