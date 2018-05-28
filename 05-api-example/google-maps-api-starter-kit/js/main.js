jQuery(document).ready(function($) {




});

function jsonFlickrApi(data) {
	var html = '<br>';
	for (var i=0; i < data.photos.photo.length; i++) {
      photo = data.photos.photo[i];
      t_url = "http://farm" + photo.farm + ".static.flickr.com/" + 
        photo.server + "/" + photo.id + "_" + photo.secret + "_" + "t.jpg";
      p_url = "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id;
      html +=  '<a href="' + p_url + '">' + '<img alt="'+ photo.title + 
        '"src="' + t_url + '"/>' + '</a>';
    }
    
}

