$(document).ready(function () {
  // This helper function renders a card to the restaurants div. You will call on this function with the data you get back from the API calls
  function renderCards(name, link, img, id, rating) {
    $(".restaurants").append(
      "<div class='col-md-4'><div class='restaurant-card'><h3>" + name + "</h3><a href='" + link + "'> <img class='restaurant__img' src=" + img + "></a><div id='" + id + "' class='rating-contain'><div class='stars-contain stars1' value='1'><i class='fa fa-star stars' aria-hidden='true'></i></div><div class='stars-contain stars2' value='2'><i class='fa fa-star stars' aria-hidden='true'></i></div><div class='stars-contain stars3' value='3'><i class='fa fa-star stars' aria-hidden='true'></i> </div><div class='stars-contain stars4' value='4'><i class='fa fa-star stars' aria-hidden='true'></i></div><div class='stars-contain stars5' value='5'><i class='fa fa-star stars' aria-hidden='true'></i><p>rating</p></div></div> </div></div>")
    for (var j = 0; j < 5; j++) {
      var childStars = $("#" + (id)).children()[j]
      var starVal = parseInt($(childStars).attr("value"))
      if (starVal === rating) {
        $(childStars).addClass("star-click")
        $(childStars).prevAll().addClass("star-click")
      }
    }
  }

  // Write a route to get all the restaurants and then call on the provided helper function in order to display the restaurants given to you. 
  // This will be run as soon as the page loads.
  // -------------------- Your Code Here --------------------
  $.get('/api/restaurants', function (res) {
    for (let i = 0; i < res.length; i++) {
      renderCards(
        res[i].restaurant_name,
        res[i].restaurant_link,
        res[i].restaurant_img,
        res[i].restaurant_id,
        res[i].rating,
      )
    }
  })

  // --------------------- End Code Area --------------------

  // Write an on click listener that listens for when the user clicks on a star. 
  // Look to the helper function that displays the card in order to find the value of the star being clicked on so you can update the rating. If you want to grab the restaurant id, that should also be stored in the parent container of the star being clicked.
  // -------------------- Your Code Here --------------------
  $(document).on('click','.stars-contain',function() {
    let restId = $(this).parent().attr('id');
    let restRating = $(this).attr('value');
    let updateRating = {
      restaurant_id = restId,
      rating = restRating,
    }
    $.ajax({
      type: 'PUT',
      url: '/api/restuarants/' + restID + '/rating/' + restRating,
      data: updateRating,
    })
  })

  // --------------------- End Code Area --------------------

  // Post a new restaurant to the database when the form is submitted from the add.html page
  // -------------------- Your Code Here --------------------
  $('#newRestaurant').on('submit',function () {
    let newRest = {
      restaurant_name: $('#restaurant_name').val().trim(),
      restaurant_link: $('#restaurant_link').val().trim(),
      restaurant_img: $('#restaurant_img').val().trim(),
      rating: $('#rating').val().trim(),
    }
    $.ajax({
      type: 'POST',
      url: '/api/restaurant/new',
      data: newRest,
    })
  })
  // --------------------- End Code Area --------------------
})
