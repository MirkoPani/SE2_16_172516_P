//Modello per la gestione delle Stanze.
var roomsModel = {
  //Array che contiene tutte le stanze. Simula un database
    rooms: [
        new Room("a101", "Povo 1"),
        new Room("a102", "Povo 2"),
        new Room("aula a", "Giurisprudenza"),
        new Room("aula 116", "Lettere")
    ],
    //Funzione invocata per ottenere l'oggetto Room dato il suo nome.
    //Input: Stringa roomName, il nome della stanza cercata
    //Output: Oggetto Room composto da (name,place) se la stanza e' stata trovata.
    //        Oggetto Room fittizio con place 'Stanza non trovata' altrimenti.
    getRoom: function(roomName) {

        for (var i = 0; i < this.rooms.length; i++) {
            if (this.rooms[i].name == roomName) {
                return this.rooms[i];
            }
        }
        var notFound= new Room(roomName,"Stanza non trovata.");
        return notFound;
    }
};
//Costruttore dell'oggetto Room
function Room(name, place) {
    this.name = name;
    this.place = place;
};
module.exports = roomsModel;
