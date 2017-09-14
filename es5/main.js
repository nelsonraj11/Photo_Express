"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Global Declaration
var ALBUM_URL = "https://jsonplaceholder.typicode.com/albums/";
var ALBUM_ID = "/photos";

var Albums = function () {
  function Albums() {
    _classCallCheck(this, Albums);
  }

  _createClass(Albums, [{
    key: "callHomepage",
    value: function callHomepage() {
      $("#backbutton").hide();
      $.get('templatehome.html', function (template) {
        $.getJSON(ALBUM_URL, function (data) {
          var result = data;
          template = _.template(template, { variable: 'data' })({ res: result }, getFirstImageByAlbum);
          $(".albums-rows").html(template);
        });
      });
    }
    // getAlbumID

  }, {
    key: "getFirstImageByAlbum",
    value: function getFirstImageByAlbum(albumId) {
      var link = ALBUM_URL + albumId + ALBUM_ID;
      var testImage = $.getJSON(link);
      testImage.done(function (data) {
        $('.albums img[data-id=' + albumId + ']').attr('src', data[0].thumbnailUrl);
      });
    }
    // getPhotos

  }, {
    key: "getPhotos",
    value: function getPhotos(id) {
      $("#backbutton").show();
      $.get('templatephotos.html', function (template) {
        var photos = ALBUM_URL + id + ALBUM_ID;
        $.getJSON(photos, function (data) {
          var result = data;
          console.log(result);
          template = _.template(template, { variable: 'data' })({ res: result });
          $(".albums-rows").html(template);
          Galleria.loadTheme('themes/classic/galleria.classic.min.js');
          Galleria.run('#galleria');
        });
      });
    }
  }]);

  return Albums;
}();

var obj = new Albums();
obj.callHomepage();

function getFirstImageByAlbum(albumId) {
  obj.getFirstImageByAlbum(albumId);
}
function getPhotos(id) {
  obj.getPhotos(id);
}

function callHomepage() {
  obj.callHomepage();
}