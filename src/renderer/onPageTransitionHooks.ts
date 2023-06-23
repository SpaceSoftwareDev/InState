export function onPageTransitionStart() {
	document.querySelector(".content")!.classList.add("page-transition")
}
export function onPageTransitionEnd() {
	document.querySelector(".content")!.classList.remove("page-transition")
}
