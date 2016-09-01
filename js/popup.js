var search = document.querySelector(".search_btn");
var popup = document.querySelector(".search_form");
var form = popup.querySelector("form");
var date_arrival = popup.querySelector("#arrival");
var date_departure = popup.querySelector("#departure");
var count_adult = popup.querySelector("#adults");
var count_child = popup.querySelector("#children");
var storage_count_adult = localStorage.getItem("count_adult");
var storage_count_child = localStorage.getItem("count_child");

search.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.toggle("search_form_show");
	date_arrival.focus();
	popup.classList.remove("search_form_error");

	if (storage_count_adult, storage_count_child){
		count_adult.value = storage_count_adult;
		count_child.value = storage_count_child;
	}
});
	
	date_arrival.removeAttribute("required");
	date_departure.removeAttribute("required");
	count_adult.removeAttribute("required");
	count_child.removeAttribute("required");

form.addEventListener("submit", function(event){
	

	if (!date_arrival.value || !date_departure.value || !count_adult.value || !count_child.value){
		event.preventDefault();
		popup.classList.add("search_form_error");
		console.log("Нужно ввести дату и указать количество детей и взрослых");
	} else {
		event.preventDefault();
		localStorage.setItem("count_adult", count_adult.value);
		localStorage.setItem("count_child", count_child.value);
	}
});

window.addEventListener("keydown", function(event){
	if (event.keyCode === 27){
		if (popup.classList.contains("search_form_show")){
			popup.classList.remove("search_form_show");
		}
	}
});