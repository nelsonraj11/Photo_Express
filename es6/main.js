// Global Declaration
const ALBUM_URL = "https://jsonplaceholder.typicode.com/albums/";
const ALBUM_ID = "/photos";

class Albums {
  callHomepage(){
    $("#backbutton").hide();
    $.get('templatehome.html', function (template) {
      $.getJSON(ALBUM_URL, function (data) {
        let result = data;
        template = _.template(template, { variable: 'data' })({ res: result },getFirstImageByAlbum);
        $(".albums-rows").html(template);        
      });
    });
  }
  // getAlbumID
  getFirstImageByAlbum(albumId) {    
    let link = ALBUM_URL + albumId + ALBUM_ID;
    let testImage = $.getJSON(link);
    testImage.done(function (data) {
      $('.albums img[data-id=' + albumId + ']').attr('src', data[0].thumbnailUrl);
    });
  }
  // getPhotos
  getPhotos(id) {
    $("#backbutton").show();
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
}
let obj = new Albums()
  obj.callHomepage()

function  getFirstImageByAlbum(albumId) { 
  obj.getFirstImageByAlbum(albumId)
}
function getPhotos(id){
  obj.getPhotos(id)
}

function callHomepage(){
     obj.callHomepage()
  }