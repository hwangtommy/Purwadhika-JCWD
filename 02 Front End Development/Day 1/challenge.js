function timeConversion(s) {
    let timeArr = s.split(':')

    if (timeArr[0] === "12"){
        timeArr[0] = "00"
    }

    if (timeArr[2][2] == "P"){
        timeArr[0] = parseInt(timeArr[0]) + 12
    }
    
    timeArr[2] = timeArr[2][0] + timeArr[2][1]

    return timeArr.join(":")
}

console.log(timeConversion("12:05:45AM"))