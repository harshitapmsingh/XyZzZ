var endDate = new Date("Oct 29, 2020 00:00:00").getTime();
var timer = setInterval(function() {

    let now = new Date().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
    
        document.getElementById("timer-days").innerHTML = days + "<span class='label'>Days</span>";
    
        document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) + "<span class='label'>Hours</span>";
    
        document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) + "<span class='label'>Minutes</span>";
    
        document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) + "<span class='label'>Seconds</span>";
		document.getElementById("bottom").innerHTML = "<br>Until Palak's Birthday";
		
    } else {
        document.getElementById("timer").innerHTML = "Happy Birthday, Palak!";
		document.getElementById("botton").innerHTML = "";
    }
    
}, 1000);
