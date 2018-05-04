"use strict";

const
	// DOM elements
	form = document.querySelector("form"),
	inputEmail = form.querySelector("#query"),
	list = document.querySelector("#list"),
	itemTemplate = document.querySelector("#itemTemplate"),

	// Data
	data = new Proxy([], {
		set(tar, id, val) {
			if (id === "length") {
				if (val < tar.length) {
					Array.from(list.children).forEach(
						(el, i) => i >= val && el.remove());
				}
			} else {
				if (id in tar) {
					list.children[id].querySelector("span").textContent = val;
				} else {
					const item = itemTemplate.cloneNode(true);

					item.querySelector("span").textContent = val;
					item.querySelector("a").onclick = () => {
						data.splice(id, 1);
						return false;
					};
					list.append(item);
				}
			}
			tar[id] = val;
			return true;
		}
	});

itemTemplate.remove();
form.onsubmit = () => {
	data.push(inputEmail.value);
	inputEmail.value = "";
	return false;
};

data.push("a", "b", "c");