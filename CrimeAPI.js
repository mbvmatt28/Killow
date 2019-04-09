$.ajax({
    url: "https://data.kcmo.org/resource/nyg5-https://data.kcmo.org/resource/nyg5-tzkz.json?$query=SELECT description, location WHERE description LIKE '%HOMICIDE%'.json",
    type: "GET",
    data: {
        "$limit": 99999,
        "$$app_token": "TRCaZxpAuvpOqRAYYPamdgcBO"
    }
}).done(function(data) {
    alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
});