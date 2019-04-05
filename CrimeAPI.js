var baseURL = "https://data.kcmo.org/resource/nyg5-tzkz.json"

$.ajax({
    url: "https://data.kcmo.org/resource/nyg5-tzkz.json",
    method: 'GET'
}).done((response) => {
    console.log(response)
});