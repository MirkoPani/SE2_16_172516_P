$(document).ready(function() {
    //get
    $("#btnSearch").click(function() {
        $.get("/searchRoom/search", {
                room: "room"
            },
            function(data, status) {
                alert("Data: " + data + "\nStatus: " + status);
                alert(data.place);
            });
    });

});
