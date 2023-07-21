canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

greencar_height = 180;
greencar_width = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 0;
greencar_y = 310;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == 38) {
		up();
		console.log("up");
	}

	if (keyPressed == 40) {
		down();
		console.log("down");
	}

	if (keyPressed == 37) {
		left();
		console.log("left");
	}

	if (keyPressed == 39) {
		right();
		console.log("right");
	}
	
	console.log(greencar_x, greencar_y);
	document.getElementById("text2").innerHTML = "x = " + greencar_x + ", y =" + greencar_y;

	if (greencar_x == 420 && greencar_y == 110 || greencar_x == 700 && greencar_y == 110) {
		document.getElementById("text").innerHTML = "YOU FOUND A PARKING SPOT";
		document.getElementById("text").className = "text-success"
	}
		else {
			document.getElementById("text").innerHTML = "FIND A PARKING SPOT";
			document.getElementById("text").className = "text-danger"
		}
}

function up() {
	if (greencar_y >= 0) {
		greencar_y = greencar_y - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function down() {
	if (greencar_y <= 500) {
		greencar_y = greencar_y + 10;
		uploadBackground();
		uploadgreencar();
	}
}

function left() {
	if (greencar_x >= 0) {
		greencar_x = greencar_x - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function right() {
	if (greencar_x <= 700) {
		greencar_x = greencar_x + 10;
		uploadBackground();
		uploadgreencar();
	}
}