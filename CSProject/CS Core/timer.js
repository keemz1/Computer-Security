const startTime = 10;
let totalTimeInSeconds = startTime * 60;


const countdownElement = document.getElementById("countdown");




function updateCountdown()
{
	const minutes = Math.floor(totalTimeInSeconds / 60);
	let seconds = totalTimeInSeconds % 60;
	
	seconds = seconds < 10 ? '0' + seconds : seconds;
	
	countdownElement.innerHTML = `${minutes}:${seconds}`;
	totalTimeInSeconds--;
	
	totalTimeInSeconds = totalTimeInSeconds < 0 ? 0 : totalTimeInSeconds; 
	
	localStorage.setItem('endTime', totalTimeInSeconds);
	
	/*if (totalTimeInSeconds === 0)
	{
		window.location.href = "loser.html";
	}*/
	
}


setInterval(updateCountdown, 1000);
