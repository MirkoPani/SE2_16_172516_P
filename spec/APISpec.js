var request = require("request");
//library for JSON requests
var base_url = "http://localhost:8080/"
requestJSON = require('request-json');
var client = requestJSON.createClient(base_url);
//Test per news
describe("Test /News", function() {
    it("returns status code 200", function(done) {
        request.get(base_url + "news/", function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
//Testing delle API per la /searchRoom
describe("/searchRoom", function() {
    //Dati corretti
    var data = {
        room: 'a101'
    };

    it("to returns status code 200", function(done) {
        client.post(base_url + "searchRoom/", data, function(err, res, body) {
            expect(body).toEqual({name: "a101", place: 'Povo 1'});

            done();
        });
    });

    //Dati sbagliati
    data1 = {
        name: 'username'
    };
    it("to returns status code 406", function(done) {
        client.post(base_url + "searchRoom/", data1, function(err, res, body) {
            expect(res.statusCode).toBe(406);
            done();
        });
    });

});
