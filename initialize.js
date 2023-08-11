var badge_checkbox_ids = [
	"boulder_checkbox", "zephyr_checkbox", "cascade_checkbox", "hive_checkbox", "thunder_checkbox", "plain_checkbox",
	"rainbow_checkbox", "fog_checkbox", "soul_checkbox", "storm_checkbox", "mineral_checkbox", "marsh_checkbox", 
	"volcano_checkbox", "glacier_checkbox", "earth_checkbox", "rising_checkbox", "gary_checkbox",
]

var badge_img_ids = [
	"boulder_img", "zephyr_img", "cascade_img", "hive_img", "thunder_img", "plain_img",
	"rainbow_img", "fog_img", "soul_img", "storm_img", "mineral_img", "marsh_img", 
	"volcano_img", "glacier_img", "earth_img", "rising_img", "gary_img",
]

var trainer_button_ids = [
	"ash_radio", "brock_radio", "misty_radio",
]

var trainer_img_ids = [
	"ash_background_img", "brock_background_img", "misty_background_img",
]

function toggle_badge_image(badge_box, badge_image) {
	if (badge_box.checked) {
		badge_image.style.visibility = "visible";
	} else {
		badge_image.style.visibility = "hidden";
	}
}

function toggle_trainer_image(trainer_button, trainer_image) {
	if (trainer_button.checked) {
		trainer_image.style.visibility = "visible";
	} else {
		trainer_image.style.visibility = "hidden";
	}
}

setInterval(update,250); 
update();update();update();
