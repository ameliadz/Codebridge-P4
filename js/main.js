function move() {
	var element1 = document.getElementById('bar1');
	var element2 = document.getElementById('bar2');
	var element3 = document.getElementById('bar3');
	var element4 = document.getElementById('bar4');
	var element5 = document.getElementById('bar5');
	var element6 = document.getElementById('bar6');
	var element7 = document.getElementById('bar7');
	var element8 = document.getElementById('bar8');
	var element9 = document.getElementById('bar9');
	var element10 = document.getElementById('bar10');
	var width = 100;
	var id = setInterval(frame, 30);
	function frame() {
		if (width == 0) {
			clearInterval(id);
			width = 100;
			id = setInterval(frame2, 30);
		} else {
			width--;
			element1.style.width = width + '%'; 
		}
	}
	function frame2() {
		if (width == 0) {
			clearInterval(id);
			width = 100;
			id = setInterval(frame3, 30);
		} else {
			width--;
			element2.style.width = width + '%';
		}
	}
	function frame3() {
		if (width == 0) {
			clearInterval(id);
			width = 100;
			id = setInterval(frame4, 30);
		} else {
			width--;
			element3.style.width = width + '%';
		}
	}
	function frame4() {
		if (width == 0) {
			clearInterval(id);
			width = 100;
			id = setInterval(frame5, 30);
		} else {
			width--;
			element4.style.width = width + '%';
		}
	}
	function frame5() {
		if (width == 0) {
			clearInterval(id);
			width = 100;
			id = setInterval(frame6, 30);
		} else {
			width--;
			element5.style.width = width + '%';
		}
	}
	function frame6() {
		if (width == 0) {
			clearInterval(id);
			width = 100;
			id = setInterval(frame7, 30);
		} else {
			width--;
			element6.style.width = width + '%';
		}
	}
	function frame7() {
		if (width == 0) {
			clearInterval(id);
			width = 100;
			id = setInterval(frame8, 30);
		} else {
			width--;
			element7.style.width = width + '%';
		}
	}
	function frame8() {
		if (width == 0) {
			clearInterval(id);
			width = 100;
			id = setInterval(frame9, 30);
		} else {
			width--;
			element8.style.width = width + '%';
		}
	}
	function frame9() {
		if (width == 0) {
			clearInterval(id);
			width = 100;
			id = setInterval(frame10, 30);
		} else {
			width--;
			element9.style.width = width + '%';
		}
	}
	function frame10() {
		if (width == 0) {
			clearInterval(id);
			// width = 100;
			// id = setInterval(frame11, 30);
		} else {
			width--;
			element10.style.width = width + '%';
		}
	}
}

