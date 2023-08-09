function update() {	
	for (var i = 0; i < checkbox_ids.length; i++) {
		toggle_badge_image(document.getElementById(checkbox_ids[i]), document.getElementById(img_ids[i]));
	}
}
