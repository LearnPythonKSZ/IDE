function Question(name){
	var elements = document.getElementsByName(name);
	var bool = elements[0].getAttribute( 'id' );
	if (bool=="true"){
		document.getElementById("next").className="nextunlocked";
		document.getElementById("next").value="Nächstes Kapitel";
		document.getElementById("buttonhref").href="/Aufbau";
	}
}
function rightanswer2(){
		document.getElementById("next").className="nextunlocked";
		document.getElementById("next").value="Nächstes Kapitel";
		document.getElementById("buttonhref").href="/Aufbau";
}
