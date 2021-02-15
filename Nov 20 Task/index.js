let seconds = 0;
let minutes = 0;

let displaySeconds = 0;
let displayMinutes = 0;

let status = 'Stopped';
let interval = '';

function StartWatch()
{
	seconds++;

	if(seconds/60 == 1)  // if second value  divide by 60 and equal to 1 
	{
		seconds=0;
		minutes++;

		/*if(minutes/60 == 1)
		{
			minutes=0;
		}*/
	}

	if(seconds < 10 )               
	{
		displaySeconds = '0' + seconds;    // if digit is single then add 0 in prefix
	}
	else
	{
		displaySeconds = seconds;
	}

	if(minutes < 10 )
	{
		displayMinutes = '0' + minutes;
	}
	else
	{
		displayMinutes = minutes;
	}

	/*if(hours < 10 )
	{
		displayHours = '0' + hours;
	}
	else
	{
		displayHours = hours;
	}*/

	document.getElementById('display').innerHTML = displayMinutes + ":" + displaySeconds;
}

function startStop()
{
	if(status == 'Stopped')
	{
		interval = setInterval(StartWatch,1000);   // here we pass time in milisecond 1000 ,so it is call every second
		document.getElementById('handler').innerHTML = 'Stop';
		status = 'Started';
	}
	else if(status == 'Started')
	{
		clearInterval(interval);
		document.getElementById('handler').innerHTML = 'Start';
		status = 'Stopped';
	}
}

function Reset()
{
	seconds = 0;
	minutes = 0;
	clearInterval(interval);
	document.getElementById('display').innerHTML = '00:00';
	document.getElementById('handler').innerHTML = 'Start';
	status = 'Stopped';
}