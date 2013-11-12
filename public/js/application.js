// $(document).ready(function() {

//  $('#this_form').on('submit', function(event) {
//     event.preventDefault();
//     // make data equal to username field
//     var data = this.id.value;
//     console.log(data)

//     var url = '/' + data;
//     var response = function(response) {
//         $('.response').html(response);
//     };

//     $('.response').html("Waiting");


//     // function(response) == what's returned from page
//     $.get(url, response);

//   });

//   // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
// });


$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
  $('form').unbind("submit").submit(function(event) {
    alert('form submitted');
    event.preventDefault();
    // make data equal to username field
    var form_value = this.tweet.value;
    console.log(form_value);

    var url = '/';
    var data = {tweet: form_value};
    $('.response').html("Waiting");

    // function(response) == what's returned from page
    $.post(url, data, function(response) {
      $('.response').html(response);

      // To just post the last tweet
      // $('.response').html(form_value);

    });

  });

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
