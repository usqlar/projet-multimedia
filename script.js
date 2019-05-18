function showeditor(){
	document.getElementById("content_editor").style.display = "block";
	document.getElementById("resizable").style.display = "block";
	objeditor.init();
}

function capture(){
	var seconds = 4;
	var countdown = setInterval(function() 
	{
		seconds--;
		document.getElementById("btncapture").textContent = seconds;
		if (seconds <= 0)
		{
			clearInterval(countdown);
			objeditor.copy();
			document.getElementById("btncapture").textContent = "Capturer l'image";
		} 
	}, 1000);
}

const objeditor = {
	FPS: 30,
	imgFilter: null,
	init() {
		this.video = document.querySelector('#video')
		this.canvas = document.querySelector('#canvas')
		this.ctx = this.canvas.getContext('2d')
		this.w = this.canvas.width = this.video.width
		this.h = this.canvas.height = this.video.height
		imgFilter = this.img
		this.startCamera()
	},
	copy() {
		try {
			this.ctx.drawImage(this.video, 0, 0, this.w, this.h)
			this.img = document.createElement("img");
			this.img.src = this.canvas.toDataURL('image/jpeg', 1.0);
			this.canvas.prepend(this.img);
			imgFilter = this.img;
		} catch (error) {
			console.log(error)
		}
	},
	async startCamera() {
		this.video2 = document.querySelector('#video')
		let stream
		try {
			stream = await navigator.mediaDevices.getUserMedia({video: true})
			this.video2.srcObject = stream
		} catch (error) {
			console.log(error)
		}
	}
}

// Filters sur l'image
function filters(){
	var v_c = document.getElementById("v_c").value;
	var v_b = document.getElementById("v_b").value;
	var v_g = document.getElementById("v_g").value;
	var v_bl = document.getElementById("v_bl").value;
	var v_sa = document.getElementById("v_sa").value;
	document.getElementById("contraste_v").innerHTML = v_c + "%";
	document.getElementById("luminosite_v").innerHTML = v_b + "%";
	document.getElementById("teinte_v").innerHTML = v_g + "%";
	document.getElementById("blur_v").innerHTML = v_bl + "px";
	document.getElementById("saturate_v").innerHTML = v_sa + "%";
	objeditor.ctx.filter = "contrast("+v_c+"%) brightness("+v_b+"%) grayscale("+v_g+"%) blur("+v_bl+"px) saturate("+v_sa+"%)";
	objeditor.ctx.drawImage(objeditor.img, 0, 0, objeditor.w, objeditor.h);
}

// Telecharger l'image
function download(){
	var download = document.getElementById("download");
	var image = document.getElementById("canvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
	download.setAttribute("href", image);
}

// Trouvez la position X et Y
function getOffset( el ) {
	var _x = 0; 
	var _y = 0;
	while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
		_x += el.offsetLeft - el.scrollLeft;
		_y += el.offsetTop - el.scrollTop;
		el = el.offsetParent;
	}
	return { top: _y, left: _x };
}

function cropimage(){
	var destW = 430; var destH = 220; var destX = 0; var destY = 0;
	var sourceCanX = getOffset(document.getElementById('canvas')).left;
	var sourceCanY = getOffset(document.getElementById('canvas')).top;
	var sourceX = getOffset(document.getElementById('resizable')).left;
	var sourceY = getOffset(document.getElementById('resizable')).top;
	var sourceW = document.getElementById('resizable').offsetWidth;
	var sourceH = document.getElementById('resizable').offsetHeight;
	objeditor.ctx.clearRect(0, 0, objeditor.canvas.width, objeditor.canvas.height);
	objeditor.ctx.drawImage(objeditor.img, sourceX-sourceCanX, sourceY-sourceCanY, sourceW, sourceH, destX, destY, destW, destH);
	objeditor.img = document.createElement("img");
	objeditor.img.src = objeditor.canvas.toDataURL('image/jpeg', 1.0);
	objeditor.canvas.prepend(objeditor.img);
	objeditor.imgFilter = objeditor.img;
}
