$(document).ready(function() {
	updateText();
  updateImageUrl();
  updateTextBackgroundColor();
  updateTextColor();
  updateStrongTextColor();
	updateImageSaturation();
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
    console.log(e);
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
	$('.image').attr("src",  document.getElementById("newImage").value);
}

function updateImageSaturation(){
	var newValue = 100-document.getElementById("newImageSaturation").value
		$('.image').css("filter", "grayscale(" + newValue + "%)" );
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
	$('.text-background').css("background-color", newValue );
}
