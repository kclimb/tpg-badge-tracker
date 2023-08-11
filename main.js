function update() {	
	for (var i = 0; i < badge_checkbox_ids.length; i++) {
		toggle_badge_image(document.getElementById(badge_checkbox_ids[i]), document.getElementById(badge_img_ids[i]));
	}
	for (var i = 0; i < trainer_button_ids.length; i++) {
		toggle_trainer_image(document.getElementById(trainer_button_ids[i]), document.getElementById(trainer_img_ids[i]));
	}
}
