exports.action = function(data, callback){

	let client = setClient(data);
	info("Presentation from:", data.client, "To:", client);
	sePresente (data, client);
	callback();
}



function sePresente (data, client) {
	
	Avatar.speak("Je suis avatar, une intélligence artificielle cybernétique, créer par l'ingenieur en informatique stéphane bascherr et dédié à la conception d'une maison intelligente et à l'internet des objets.", data.client, function(){
	Avatar.Speech.end(data.client);
        });
}


function setClient (data) {
	var client = data.client;
	if (data.action.room)
	client = (data.action.room != 'current') ? data.action.room : (Avatar.currentRoom) ? Avatar.currentRoom : Config.default.client;
    if (data.action.setRoom)
	client = data.action.setRoom;
	return client;
}
