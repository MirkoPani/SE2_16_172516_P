var roomsModel = {
    rooms: [
        new room("A101", "Povo 1"),
        new room("A102", "Povo 2"),
        new room("Aula A", "Giurisprudenza"),
        new room("Aula 116", "Lettere")
    ],
    getRoom: function(room) {

        for (var i = 0; i < this.rooms.length; i++) {
            if (this.rooms[i].name == room) {
                return this.rooms[i];
            }
        }
    }
};


function room(name, place) {
    this.name = name;
    this.place = place;
};
