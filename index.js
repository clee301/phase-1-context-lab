/* Your Code Here */

function createEmployeeRecord(arr){

    const record = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return record
    }
   
    function createEmployeeRecords(arr){
        const mapThis = arr.map(function(x){
          return createEmployeeRecord(x)
      })
      return mapThis
    }
    
function createTimeInEvent(period){
   
    const dateExtract = period.substr(0, 10)
    const hourExtract = Number(period.substring(11))
    
    const timeInData = {
        type: 'TimeIn',
        date: dateExtract,
        hour: hourExtract
    }
    const timeIn = this.timeInEvents
     timeIn.push(timeInData)    
    return this
    }
    
function createTimeOutEvent(period){
    
    const dateExtract = period.substr(0, 10)
    const hourExtract = Number(period.substring(11))
    
    const timeOutData = {
        type: 'TimeOut',
        date: dateExtract,
        hour: hourExtract
    }
    const timeOut = this.timeOutEvents
        timeOut.push(timeOutData)
    
    return this
    }
    
function hoursWorkedOnDate(date){
    const timeEventDate = this.timeInEvents[0]['date']
    const timeEventIn = this.timeInEvents[0]['hour']
    const timeEventOut = this.timeOutEvents[0]['hour']
    
    if(timeEventDate == date){
    let hours = timeEventOut - timeEventIn
    return hours/100
    }
}
    
function wagesEarnedOnDate(date){
    
    const hoursWorked = hoursWorkedOnDate.call(this, date)
    const wageRate = this.payPerHour
   let amount = wageRate * hoursWorked
    return amount
    
}

// function wagesEarnedOnDate(date){
//     const timeEventDate = this.timeInEvents[0]['date']
//     const timeEventIn = this.timeInEvents[0]['hour']
//     const timeEventOut = this.timeOutEvents[0]['hour']
    
//     const wageRate = this.payPerHour
    
//     if(timeEventDate == date){
    
//    let hours = timeEventOut - timeEventIn
//    let hoursCount = hours/100
//    let amount = wageRate * hoursCount
//     return amount
//     }
// }
    
    






/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function findEmployeeByFirstName(srcArray, firstName){
    // const record = createEmployeeRecords(srcArray)
  
  const recordNext = srcArray.filter(function(x){
      if(x.firstName == firstName){
        return x
    }
  })
  const obj = recordNext[0]
  return obj
}

function calculatePayroll(emp){
    
    const allEmp = this.map(function(x){        
      return allWagesFor(x)
    })
    
    const totalMoney = allEmp.reduce(function(x, y){
        return x + y
    })
    
    return totalMoney   
    
  }