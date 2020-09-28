var dict = {
	000000: '0',
	031415: 'π',
	062830: 'τ'
}
function replace(h, m, s) {
	full=10000*h+100*m+s;
	if (full in dict) {
		clock.innerHTML = dict[full];
	} else {
		clock.innerHTML = `${h<10 ? `0${h}`:h}:${m<10 ? `0${m}`:m}:${s<10 ? `0${s}`:s}`
	}
}

var clock = document.querySelector('.h1-clock');

function getTime(){
  window.time = new Date();
  window.h = time.getHours();
  window.m = time.getMinutes();
  window.s = time.getSeconds();
  replace(h,m,s);
	//clock.innerHTML = `${h<10 ? `0${h}`:h}:${m<10 ? `0${m}`:m}:${s<10 ? `0${s}`:s}`
}

setInterval(getTime, 1000);

/*
function 
    var fso=new ActiveXObject("Scripting.FileSystemObject");
    var filename="C:\\book1.txt";
    function savefile() {
        if (!fso.FileExists(filename)) {
            fso.CreateTextFile(filename,true);
        }
        var f=fso.OpenTextFile(filename,2,true);
        f.Write(myarea.innerHTML);
        f.Close();
    }
   
    function loadfile() {
        if (!fso.FileExists(filename)) {
            fso.CreateTextFile(filename,true);
        }
        var f=fso.OpenTextFile(filename,1);
        r=f.ReadAll();
        f.Close();
        myarea.innerHTML=r;
    }
   
   
*/