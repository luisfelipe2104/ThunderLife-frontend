export const getDayOfWeek = (day) => {
    const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    const date = new Date(day)
    let n =  date.getDay();
    console.log(date.getDay());
    return daysOfWeek[n];
};

export function formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    date = yyyy+'-'+mm+'-'+dd;
    return date
}

export function getLast7Days () {
    var today = new Date();
    var oneDayAgo = new Date(today);
    var twoDaysAgo = new Date(today);
    var threeDaysAgo = new Date(today);
    var fourDaysAgo = new Date(today);
    var fiveDaysAgo = new Date(today);
    var sixDaysAgo = new Date(today);

    oneDayAgo.setDate(today.getDate() - 1);
    twoDaysAgo.setDate(today.getDate() - 2);
    threeDaysAgo.setDate(today.getDate() - 3);
    fourDaysAgo.setDate(today.getDate() - 4);
    fiveDaysAgo.setDate(today.getDate() - 5);
    sixDaysAgo.setDate(today.getDate() - 6);

    var result0 = formatDate(today);
    var result1 = formatDate(oneDayAgo);
    var result2 = formatDate(twoDaysAgo);
    var result3 = formatDate(threeDaysAgo);
    var result4 = formatDate(fourDaysAgo);
    var result5 = formatDate(fiveDaysAgo);
    var result6 = formatDate(sixDaysAgo);

    var result = result0+","+result1+","+result2+","+result3+","+result4+","+result5+","+result6;
    const last7DaysArray = []
    last7DaysArray.push(result0, result1, result2, result3, result4, result5, result6)
    last7DaysArray.reverse()
    console.log(result);
    return last7DaysArray;
}