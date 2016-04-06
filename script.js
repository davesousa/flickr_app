(function() {
  var flickerAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6d03adcbd421bee2eb78dce7521e922b";
  $.getJSON( flickerAPI, {
    tags: "lighthouse",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "body" );
        if ( i === 10 ) {
          return false;
        }
      });
    });
})();

$.getJSON("http://api.flickr.com/services/feeds/groups_pool.gne?id=675729@N22&lang=en-us&format=json&jsoncallback=?", function(data){
  $.each(data.items, function(i,item){
    $("<img/>").attr("src", item.media.m).appendTo("body")
      .wrap("<a href='" + item.link + "'></a>");
  });
});
