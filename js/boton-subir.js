window.onscroll = function(){
	if(document.documentElement.scrollTop > 100){
		document.queriySelector(".go-top-container").classList.add("show")
	}
	else{
		if(document.documentElement.scrollTop > 100){
			document.queriySelector(".go-top-container").classList.remove("show")
		}
	}
}

document.querySelector(".go-top-container").addEventListener("click", () => {
	window.scrollTop({
		top: 0,
		behavior: "smooth"
	})
});