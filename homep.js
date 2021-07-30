//let cacheName = 'userData';

//caches.open('myage').then( cache => {} );

//let myAge = [1992, 06, 06, 17, 30];

//caches.open(cacheName).then(cache => {
//	cache.addAll(myAge).then( () => {
//		console.log("Data cached")
//	});
//});

//console.log(caches.keys());


var born = new Date("July 6, 1992 17:30:00");
var dobms = born.getTime();

function age() {
	setInterval(function(){
		var d = new Date();
		ctime = d.getTime();

		var tmsecs = (ctime - dobms)/31536000000;
		document.getElementById("myage").innerHTML =  tmsecs;
	}, 1);
	
}