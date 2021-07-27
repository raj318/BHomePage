//let cacheName = 'userData';

//caches.open('myage').then( cache => {} );

//let myAge = [1992, 06, 06, 17, 30];

//caches.open(cacheName).then(cache => {
//	cache.addAll(myAge).then( () => {
//		console.log("Data cached")
//	});
//});

//console.log(caches.keys());


var born = new Date("July 7, 1992 07:30:00");
var dob = born.getTime();

function age() {
	sdob = [1992, 06, 6, 17, 30];
	dob = [1992, 06, 06, 17, 30];
	dob = sdob;
	console.log(dob);
	setInterval(function(){
		var d = new Date();
		ctime = d.getTime();
		var minus = 0;	
		sec = d.getSeconds() - 0;
		mils = d.getMilliseconds();
		min = d.getMinutes() - dob[4];
		if (min < 0){
			minus = 1;
			min = 60 + min;
		}
		hh = d.getHours() - dob[3]- minus;
		if (hh < 0){ 
			minus = 1;
			hh = 24 + hh;
		}else{
			minus = 0;
		}
		day = d.getDate() - dob[2] - minus;
		if (day < 0){ 
			minus = 1;
			total_days =  new Date(d.getFullYear(), d.getMonth(), 0).getDate();
			day = total_days + day;
		}else{
			minus = 0;
		}
		months = d.getMonth() - dob[1] - minus;
		if (months < 0) {
			minus = 1;
			months = 12 + months;
		}else{
			minus = 0;
		}
		years = d.getFullYear() - dob[0]- minus;
		
		document.getElementById("myage").innerHTML = years + " years "+ months + " months " + day +" days "+ hh + " hours " + min + " minutes "+ sec + " seconds "+ d.getMilliseconds();
	}, 1);
	
}