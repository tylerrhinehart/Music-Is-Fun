function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  //Make it not skip songs
  function draw(artist) {
    var template = ''
    var rowTemplate = '<div class="row">'
    for(var i = 1; i < artist.length+1; i++) {
      var item = artist[i-1]
      if(i % 3 != 0) {
        rowTemplate += `
        <div class="col-xs-12 col-md-4">
              <div class="card thumbnail">
                <img src="${item.albumArt}" alt="albumArt">
                <div class="card-body">
                  <h4>${item.title}</h4>
                  <h4>${item.artist}</h4>
                  <h5>${item.collection}</h5>
                  <p>$${item.price}</p>
                  <audio controls class="audio-controls">
                    <source src="${item.preview}" type="audio/mp4" />
                </div>
              </div>
          </div>
          `
      }
      else {
        rowTemplate += `
        <div class="col-xs-12 col-md-4">
              <div class="card thumbnail">
                <img src="${item.albumArt}" alt="albumArt">
                <div class="card-body">
                  <h4>${item.title}</h4>
                  <h4>${item.artist}</h4>
                  <h5>${item.collection}</h5>
                  <p>$${item.price}</p>
                  <audio controls class="audio-controls">
                    <source src="${item.preview}" type="audio/mp4" />
                </div>
              </div>
          </div>
          `
        template += rowTemplate + '</div>'
        rowTemplate = '<div class="row">'
      }
    }
    document.getElementById('songs').innerHTML = template
  }



  
}