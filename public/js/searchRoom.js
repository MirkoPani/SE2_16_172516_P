$(document).ready(function() {
    //Funzione invocata al click
    $("#btnSearch").click(function() {
        var data = {};
        data.room = document.getElementById("txtinput").value;
        //Richiesta ajax al server per ottenere il luogo della stanza.
        $.ajax({
            type: 'POST',
            data: data,
            dataType: "text",
            url: '/searchRoom',
            success: function(data) {
                var obj = JSON.parse(data);
                alert('La stanza si trova a: ' + obj.place);
            }
        });
    });

});
