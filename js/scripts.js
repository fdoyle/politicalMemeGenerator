$(document).ready(function() {
	updateText();
  updateImageUrl();
  updateTextBackgroundColor();
  updateTextColor();
  updateStrongTextColor();

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
  });
}

function updateText() {
	$('.text').html(document.getElementById("newText").value);
  updateTextColor();
  updateStrongTextColor();
}

function updateImageUrl() {
	$('.background').attr("src",  document.getElementById("newImage").value);
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
