document.getElementById("submit").addEventListener("click", function () {
    const date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    //   const exDate = document.getElementById("exDate").value;
    function randomNumber(min, max) {
        let minNumber = min; // Minimum number in the range
        let maxNumber = max; // Maximum number in the range
        let randonResult = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        let roundedNumber = parseFloat(randonResult.toFixed(2));
        return roundedNumber;
    }
    let firstPrizeChange = randomNumber(991, 1250);
    let secoundPrizeChange = randomNumber(95, 156);
    let thirdPrizeChange = randomNumber(300, 960);
    const subtotal = firstPrizeChange + secoundPrizeChange + thirdPrizeChange;
    let subTotalResult = parseFloat(subtotal.toFixed(2));
    const tax = (subtotal * 1.51) / 100;
    let taxresult = parseFloat(tax.toFixed(2));
    const total = subTotalResult + taxresult;
    let totalResult = parseFloat(total.toFixed(2));
    // document.getElementById("random14").innerHTML = Math.floor(Math.random() * 9999);
    document.getElementById('secoundPrizeUpdate').innerText = secoundPrizeChange;
    document.getElementById("firstPrizeChange").innerText = firstPrizeChange;
    document.getElementById("thirdPrizeChange").innerText = thirdPrizeChange;
    document.getElementById("dateChange").innerText = date;
    //   document.getElementById("exDateChange").innerText = exDate;
    document.getElementById("subTotalChange").innerText = subTotalResult;
    document.getElementById("taxChange").innerText = taxresult;
    document.getElementById("totalChange").innerText = totalResult;
    document.getElementById("cashUpdate").innerText = totalResult;
    // Event listener for the button click
});
// Function to update the displayed time
function updateNewTime(newTime) {
    // function formatTime(inputTime) {
    //     // Assuming inputTime is in the format HH:MM (24-hour format)
    //     let [hours, minutes] = inputTime.split(':').map(Number);
    
    //     // Check if hours is greater than or equal to 12
    //     if (hours >= 12) {
    //         // If hours is 12 or more, it's PM
    //         if (hours > 12) {
    //             hours -= 12; // Convert to 12-hour format
    //         }
    //         return `${hours}:${minutes} PM`;
    //     } else {
    //         // If hours is less than 12, it's AM
    //         if (hours === 0) {
    //             hours = 12; // Convert 0 to 12 for 12 AM
    //         }
    //         return `${hours}:${minutes} AM`;
    //     }
    // }
    // let formateTime = formatTime(newTime);
    document.getElementById("timeChange").innerText = newTime;
}

// Function to add minutes to a given time
function addMinutesToTime(timeString, minutesToAdd) {
    let [hours, minutes] = timeString.split(':').map(Number);
    minutes += minutesToAdd;
    hours += Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 24;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

// Event listener for input field value change
document.getElementById('timepress').addEventListener('change', function() {
    let userTime = document.getElementById("time").value;
    updateNewTime(userTime);
});

// Event listener for submit button click
document.getElementById('submit').addEventListener('click', function() {
    let userTime = document.getElementById("time").value;
    updateNewTime(userTime);
});

// Event listener for updating time by adding 3 minutes
document.getElementById('timepress').addEventListener('click', function() {
    let currentTime = document.getElementById("timeChange").innerText;
    let updatedTime = addMinutesToTime(currentTime, 3); // Add 3 minutes
   updateNewTime(updatedTime);
//    function formatTime(inputTime) {
//     // Assuming inputTime is in the format HH:MM (24-hour format)
//     let [hours, minutes] = inputTime.split(':').map(Number);

//     // Check if hours is greater than or equal to 12
//     if (hours >= 12) {
//         // If hours is 12 or more, it's PM
//         if (hours > 12) {
//             hours -= 12; // Convert to 12-hour format
//         }
//         return `${hours}:${minutes} PM`;
//     } else {
//         // If hours is less than 12, it's AM
//         if (hours === 0) {
//             hours = 12; // Convert 0 to 12 for 12 AM
//         }
//         return `${hours}:${minutes} AM`;
//     }
// }
document.getElementById("time").value = updatedTime;

});


