var newsModel = {
    news: [
        new News("Inaugurazione Biblioteca", "10/10/2016", "E' stata inaugurata la Buk."),
        new News("Aperitivo", "20/10/2016", "Festa!")
    ]
};

function News(title, date, text) {
    this.title = title;
    this.date = date;
    this.text = text;
};

module.exports = newsModel;
