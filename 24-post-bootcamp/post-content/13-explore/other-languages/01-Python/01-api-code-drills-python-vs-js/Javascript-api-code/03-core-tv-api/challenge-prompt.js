$(document).submit(function () {
    // prevent the default behavior of the submit
    event.preventDefault()
    // grab the show information from the form on the page
    var searchInformation = $('#showSearch').val()
    // console.log the input
    console.log(searchInformation)
    // this is the api we are using add your search variable to end of the queryURL
    var queryURL = "http://api.tvmaze.com/search/shows?q=" + searchInformation;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log the response 
        console.log(response)
        // create a forloop and append the first 3 responses to the page
        for (let i = 0; i < 3; i++) {
            // console.log the image and then append it to the page.            
            console.log(response[i].show.image.medium)
            let showImage = response[i].show.image.medium
            $('.shows').append('<img src='+ showImage + '>')
            // console.log the name of the show and append it to the page
            console.log(response[i].show.name)
            let showName = response[i].show.name
            $('.shows').append('<h1>' + showName + '</h1>')
            // console.log the genres of the show and append it to the page
            console.log(response[i].show.genres)
            let showGenres = response[i].show.genres
            $('.shows').append('<h2>' + showGenres + '</h2>')
            // console.log the summary of the show and append it to the page
            console.log(response[i].show.summary)
            let showSummary = response[i].show.summary
            $('.shows').append('<h4>' + showSummary + '</h4>')
        }

    });

})
