//Funzione che serve a nascondere le notizie.
//Input: divId che e' il nome in id del div da nascondere. Invocata dall'evento onclick nella rispettiva pagina
function hide(divId) {
    $("#" + divId).hide("slow", function() {});
};
