(function () {

var templateString = $('#itemTemplate').text();

var imageString = $('#imageTemplate').text();

var templateFunction = _.template(templateString);

var imageFunction = _.template(imageString);

_.each(etsy.results, function (item) {
  var itemHTML = templateFunction(item);
    var imageHTML = imageFunction(item);
  $('.resultsContainer').append(imageHTML);
  $('.resultsContainer').append(itemHTML);

});















}());