$(document).ready(function() {
	updateSize();
	updateText();
  updateImageUrl();
  updateTextBackgroundColor();
  updateTextColor();
  updateStrongTextColor();
	updateImageFilters();
})

function downloadImage() {
  console.log("clicking");
}

function downloadItem(id) {
console.log("downloading " + id);
  domtoimage.toPng(document.getElementById(id), { quality: 1})
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'politics.jpeg';
    link.href = dataUrl;
    link.click();
  }).catch(e => {
		alert(e);
});
}

function updateText() {
	var newContent = document.getElementById("newText").value;
	console.log(newContent)
	$('.text').html(newContent);
  updateTextColor();
	updateTextSize();
  updateStrongTextColor();
}

function updateTextSize(){
	var newValue = document.getElementById("newTextSize").value + "px";
	$(".text").css("fontSize", newValue);
}

function updateImageUrl() {
	//$('.image').attr("src",  document.getElementById("newImage").value); //this is the original code

	//this implementation proxies via crossorigin.me to allow access to more images
	//this should be replaced with a locally hosted proxy, for better performance and stability
	var xhr = new XMLHttpRequest();
	xhr.responseType = 'blob'; //so you can access the response like a normal URL
	xhr.onreadystatechange = function () {
	    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
					$('.image').attr("src",  URL.createObjectURL(xhr.response));
			} else if(xhr.readyState == XMLHttpRequest.DONE && xhr.status==413){
				alert("image must be less than 2mb (hopefully that'll be fixed soon)");
			} else if(xhr.readyState == XMLHttpRequest.DONE){
				console.log(xhr);
			}
	};
	var imageUrl = "https://crossorigin.me/" + document.getElementById("newImage").value
	xhr.open('GET', imageUrl, true);
	// xhr.setRequestHeader('Origin', 'something cool');
	xhr.send();

}

function updateImageFilters(){
	var newSaturation = 100-document.getElementById("newImageSaturation").value
	var newBrightness = document.getElementById("newImageBrightness").value
		$('.image').css("filter", "grayscale(" + newSaturation + "%) brightness("+newBrightness+"%)" );
}

function updateTextColor() {
	var newValue = document.getElementById("newTextColor").value;
	$('.text').css("color", newValue);
}

function updateStrongTextColor() {
		var newValue = document.getElementById("newStrongTextColor").value;
	$('.text strong').css("color", newValue);
}

function updateTextBackgroundColor() {
var newValue = document.getElementById("newTextBackground").value;
console.log(newValue);
	$('.text-background').css("background", newValue );
}

function updateLogoColor(){
	var newValue = document.getElementById("newLogoColor").value;
	console.log(newValue);
		$('.logo').css("background", newValue );
}

function updateSize(){
	var newSizeX = document.getElementById("newSizeX").value;
	var newSizeY = document.getElementById("newSizeY").value;
	$('.content').css("width", newSizeX);
	$('.content').css("height", newSizeY);
}

function setSize(newSizeX, newSizeY){
	document.getElementById("newSizeX").value = newSizeX;
	document.getElementById("newSizeY").value = newSizeY;
	updateSize();
}
