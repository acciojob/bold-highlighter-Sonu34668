const paragraph = document.getElementById("paragraph");
const link = document.getElementById("link");
function highlight() {
    let boldWords = paragraph.getElementByTagName("strong");
	 for(let i=0; i<boldWords.length; i++){
		 boldWords[i].style.color="green";
	 }
}
function return_normal() {
    let boldWords = paragraph.getElementByTagName("strong");
	for(let i=0; i<boldWords.length; i++){
		boldWords[i].style.color = "black";
	}
}
link.addEventListener("mouseover", highlight);
link.addEventListener("mouseout", normal);