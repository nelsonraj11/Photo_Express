// Global Declaration
const ALBUM_URL = "https://jsonplaceholder.typicode.com/albums/";
const ALBUM_ID = "/photos";

$(document).ready(function () {
  callHomepage();
});

function callHomepage() {

  $(".backButton-info").hide();
  $.get('templatehome.html', function (template) {
    $.getJSON(ALBUM_URL, function (data) {
      let result = data;
      template = _.template(template, { variable: 'data' })({ res: result }, getFirstImageByAlbum);
      $(".albums-rows").html(template);
    });
  });
}
// getAlbumID
function getFirstImageByAlbum(albumId) {

  let link = ALBUM_URL + albumId + ALBUM_ID;
  var testImage = $.getJSON(link);
  testImage.done(function (data) {
    $('.albums img[data-id=' + albumId + ']').attr('src', data[0].thumbnailUrl);
  });
}
// getPhotos
function getPhotos(id) {

  $(".backButton-info").show();
  $.get('templatephotos.html', function (template) {
    var photos = ALBUM_URL + id + ALBUM_ID;
    $.getJSON(photos, function (data) {
      let result = data;
      console.log(result);
      template = _.template(template, { variable: 'data' })({ res: result });
      $(".albums-rows").html(template);
      Galleria.loadTheme('themes/classic/galleria.classic.min.js');
      Galleria.run('#galleria');
      
    });
  });
}
