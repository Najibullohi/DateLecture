// Task1
function dateTime(h,m,s){
    let msec=s*1000
    let min=m*60*1000
    let hour=h*60*60*1000
    // return hour+" "+min+" "+msec
    if (hour>min && hour>msec)
    {
        return h
    }
    else if (min>hour && min>msec){
        return m
    }
    else if(msec>hour && msec>min){
        return s
    }
}
console.log(dateTime(15,955,59400));