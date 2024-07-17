// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
	// Getting current time and date
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();

//     hour =
//     hour < 10 ? "0" + hour : hour;
// min = min < 10 ? "0" + min : min;
// sec = sec < 10 ? "0" + sec : sec;

if(hour<10){ hour = "0"+hour; }
if(min<10){ min = "0"+min; }
if(sec<10){ sec = "0"+sec; }

	let currentTime =
		hour +
		": " +
		min +
		": " +
		sec

	// Displaying the time
	document.getElementById(
		"clock"
	).innerHTML = currentTime;
}

showTime();

function dateFormate(){
	var fullDate = new Date();
	var date = fullDate.getDate();
	var mnt = fullDate.getMonth();
	var year = fullDate.getFullYear();
			
	var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
			
	document.getElementById('date-formate').innerHTML =date+" "+ month[mnt]+", "+year;
			}
	dateFormate()