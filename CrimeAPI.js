$.ajax({
    url: "https://data.kcmo.org/resource/nyg5-tzkz.json",
    type: "GET",
    data: {
        "$limit": 5000,
        "$$app_token": "TRCaZxpAuvpOqRAYYPamdgcBO"
    }
}).done(function(data) {
    alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
});