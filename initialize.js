/*
for (var i = 0; i < Locations.length; i++) {
	if (i == AreaIndexes[5]) { parent = document.getElementById("normalColumn2"); }
	else if (i == AreaIndexes[8]) { parent = document.getElementById("normalColumn3"); }
	else if (i == AreaIndexes[14]) { parent = document.getElementById("normalColumn4"); }
	else if (i == AreaIndexes[19]) { parent = document.getElementById("normalColumn5"); }
	else if (i == AreaIndexes[25]) { parent = document.getElementById("normalColumn6"); }
	else if (i == AreaIndexes[32]) { parent = document.getElementById("normalColumn7"); }
	else if (i == AreaIndexes[35]) { parent = document.getElementById("normalColumn8"); }
	else if (i == AreaIndexes[36]) { parent = document.getElementById("songdiv"); }
	
	for(var j = 1; j < AreaIndexes.length; j++) {
		if(i == AreaIndexes[j]) {
			var elem = document.createElement("small"); 
			elem.innerHTML = AreaNames[j+1]; 
			elem.className = "area_name"; 
			if(j == 32) {
				elem.id = "title_wft";
				elem.className = "area_titles";
			}
			else if(j == 33) {
				elem.id = "title_sht";
				elem.className = "area_titles";
			}
			else if(j == 34) {
				elem.id = "title_gbt";
				elem.className = "area_titles";
			}
			else if(j == 35) {
				elem.id = "title_stt";
				elem.className = "area_titles";
			}
			else if(j == 36) {
				elem.id = "song_title";
				elem.className = "area_titles";
			}
			
			if(j < 32)
				background = "url('./images/areas/"+AreaImages[j]+"')";
			else
				background = "";
			
			parent.appendChild(elem); 
			parent.appendChild(document.createElement("br")); 
			break;
		}
	}
	
	if(i == AreaIndexes[35]+16) {
		var elem = document.createElement("small"); 
		elem.innerHTML = "ISTT"; 
		elem.className = "area_name";
		elem.id = "title_stt";
		elem.className = "area_titles";
		
		background = "";
		
		parent.appendChild(elem); 
		parent.appendChild(document.createElement("br")); 
	}
	
	var elem = document.createElement("input"); 
	elem.id = Locations[i]; 
	if(parent != document.getElementById("normalColumn7") && parent != document.getElementById("normalColumn8") && parent != document.getElementById("songdiv"))
		elem.className = "picture_input"; 
	else
		elem.className = "other_input"; 
	elem.style.backgroundImage = background;
	parent.appendChild(elem);

	var elem = document.createElement("small"); 
	elem.id = "text_" + Locations[i]; 
	elem.className = "check_text"; 
	if(SongItems.indexOf(Locations[i]) < 0)
		elem.onmousedown = junk; 
	else
		elem.onmousedown = function() {clickSummary(this);};
	elem.innerHTML = Names[i]; 
	parent.appendChild(elem);
	
	var elem = document.createElement("br"); 
	elem.id = "br_" + Locations[i]; 
	parent.appendChild(elem);
}

var hintbox = document.getElementById("hintInput");
if (document.getElementById("settings_option").value == "S3")
	hintbox.innerHTML = "swa \noce \nali \ncre \nbut \nboa \ndam \n";

var Logic = {};
var Game = {};
var CouldHave={};
var Location_Logic = {};
var Location_Access = {};
var Location_Obtain = {};
var Location_Could_Obtain={};
var Location_Could_Peek={};
var lastCheck = ["start"];
var forcedDisplay = new Array(1024).fill(false);

for (var i = 0; i < Items.length; i++) {
	Logic[Items[i]] = false;
	Game[Items[i]] = false;
	CouldHave[Items[i]] = false;
	Known[Items[i]] = false;
}

var simActive = false;
var SpoilerLines = [];
var SpoilerLocToItem = {};
var SpoilerHintDict = {};
var simWothsEntered = {};
var simWothCounter = 1;
var simBarrensEntered = {};
var simBarrenCounter = 1;

for (var i = 0; i < Locations.length; i++) {
	Location_Logic[Locations[i]] = false;
	Location_Access[Locations[i]] = false;
	Check[Locations[i]] = "unknown";
	backUp.push(document.getElementById("text_" + Locations[i]).innerHTML);
}

Game.sword1_img = "./images/Kokiri Sword.png";
Game.sword2_img = "./images/Razor Sword.png";
Game.sword3_img = "./images/Gilded Sword.png";
Game.shield1_img = "./images/Hero's Shield.png";
Game.shield2_img = "./images/Mirror Shield.png";
Game.wallet1_img = "./images/Adult's Wallet.png";
Game.wallet2_img = "./images/Giant's Wallet.png";
Game.magic1_img = "./images/Magic.png";
Game.magic2_img = "./images/Magic2.png";

Game.checks_remaining = 0;
Game.logically_accessible = 0;

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
	modal.style.display = "none";
  }
}

window.onbeforeunload = popup;
function popup() {
  return '';
}
*/

function toggle_badge_image(badge_box, badge_image) {
	if (badge_box.checked == true) {
		badge_image.style.visibility = "visible";
	} else {
		badge_image.style.visibility = "hidden";
	}
}

setInterval(update,250); 
update();update();update();
