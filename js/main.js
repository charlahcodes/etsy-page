(function () {

var templateString = $('#itemTemplate').text();

var imageString = $('#imageTemplate').text();

var templateFunction = _.template(templateString);

var imageFunction = _.template(imageString);

_.each(etsy.results, function (item) {
  var itemHTML = templateFunction(item);
    var imageHTML = imageFunction(item);
  $('.productImages').append(imageHTML);
  $('.searchResults').append(itemHTML);

});















}());