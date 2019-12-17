$("a").prepend("↗")
$("a").attr("target", "_blank")
function eff1() {
  $("td").eq(0).animate({opacity: "0"})
  $("td").eq(0).animate({opacity: "1"})
}
function eff2() {
  $("td").eq(2).animate({padding: "30px"})
  $("td").eq(2).animate({padding: "1px"})
}
function eff3() {
  $("td").eq(4).animate({fontSize: "50px"})
  $("td").eq(4).animate({fontSize: "16px"})
}
function eff4() {
  $("td").eq(6).animate({letterSpacing: "10px"})
  $("td").eq(6).animate({letterSpacing: "0"})
}
function eff5() {
  $("td").eq(8).animate({wordSpacing: "200px"})
  $("td").eq(8).animate({wordSpacing: "0"})
}
function updatePage() {
  let p = document.createElement("p");
  $(p).load("https://inxaoc.github.io/example/ajax-1.html");
  document.body.appendChild(p);
}
$.getJSON("https://inxaoc.github.io/example/ajax.json", function(data) {
	let ulMain = document.createElement("ul");
	function jsonToList(obj,curUl) {
		for (let key in obj) {
			let li = document.createElement("li");
			let item = key + " : ";
			li.innerHTML = item;
			curUl.appendChild(li);
			if (typeof obj[key] == "object" && !Array.isArray(obj[key])) {
				let ul = document.createElement("ul");
				jsonToList(obj[key],ul);
				curUl.appendChild(ul);
			} else {
				item += obj[key];
				li.innerHTML = item;
			}
		}
	}
	jsonToList(data, ulMain);
	document.body.appendChild(ulMain);
});
