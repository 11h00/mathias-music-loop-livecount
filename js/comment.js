const CULER = new XMLHttpRequest();
var folo = 0;
var UPsound = new Audio("lesonn/save_up.mp3");
var DOWNsound = new Audio("lesonn/save_down.mp3");
var updatecount = 0
var hashtag
var oldcount = 0
var uissety = false
var sonHD = 'true'
var photo

let loop_count = 0;
let loop_start = 51.632;
let loop_end = 53.010 - loop_start

function soundtest() {
	if (oldcount < photo) {
		UPsound.cloneNode(true).play()
	}
	if (oldcount > photo) {
		DOWNsound.cloneNode(true).play()
	}
}
function milestonztest() {
	switch (photo.toString().length) {
		case 1:
			var milestonz = photo
			milestonz += 1
			break;
		case 2:
			var milestonz = parseInt((Math.floor(photo / 10)) + "0")
			milestonz += 10
			break;
		case 3:
			var milestonz = parseInt((Math.floor(photo / 100)) + "00")
			milestonz += 100
			break;
		case 4:
			var milestonz = parseInt((Math.floor(photo / 1000)) + "000")
			milestonz += 1000
			break;
		case 5:
			var milestonz = parseInt((Math.floor(photo / 10000)) + "0000")
			milestonz += 10000
			break;
		case 6:
			var milestonz = parseInt((Math.floor(photo / 100000)) + "00000")
			milestonz += 100000
			break;
		case 7:
			var milestonz = parseInt((Math.floor(photo / 1000000)) + "000000")
			milestonz += 1000000
			break;
		case 8:
			var milestonz = parseInt((Math.floor(photo / 10000000)) + "0000000")
			milestonz += 10000000
			break;
		case 9:
			var milestonz = parseInt((Math.floor(photo / 100000000)) + "00000000")
			milestonz += 100000000
			break;
	}

	if (milestonz == 100000000) {
		document.getElementById('milestona').innerHTML = 'before ' + milestonz + " ONG"
	} else {
		document.getElementById('milestona').innerHTML = 'before ' + milestonz;
	}
	odometer5.innerHTML = milestonz - photo
}
function sonsetting() {
	if (sonHD == true) {
		document.getElementById("soundstting").innerText = "sound : OFF"
		document.cookie = "son=false;expires=Thu, 18 Dec 2019 12:00:00 UTC"
		sonHD = false
		document.getElementById("soundstting").style.background = "#FF0000"
	} else {
		document.getElementById("soundstting").innerText = "sound : ON"
		document.cookie = "son=true;expires=Thu, 18 Dec 2019 12:00:00 UTC"
		document.getElementById("soundstting").style.background = "#00FF00"
		sonHD = true
	}
}

setInterval(() => {
	oldcount = loop_count
	loop_count++
	photo = loop_count;
	soundtest()
	odometer.innerHTML = photo;
	milestonztest()
	document.getElementById("coconu").innerHTML = "mathias777";
}, 5000);

setInterval(() => {
	
})