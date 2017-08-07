function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(artist) {
    var template = ''
    var rowTemplate = '<div class="row">'
    var count = 1
    var id = 1
    for (var i = 0; i < artist.length; i++) {
      var item = artist[i]
      if (count <= 2) {
        rowTemplate += `
            <div class="col-xs-12 col-md-4">
              <div class="card thumbnail overflow">
                <img src="${item.albumArt}" alt="albumArt">
                <div class="card-body">
                  <h4 class="title" onclick="app.controllers.itunesCtrl.titlePlay(${id})">${item.title}</h4>
                  <h4>${item.artist}</h4>
                  <h5>${item.collection}</h5>
                  <p>$${item.price}</p>
                  <audio controls class="audio-controls" id="${id}">
                    <source src="${item.preview}" type="audio/mp4" />
                </div>
              </div>
            </div>
          `
        count++
      }
      else {
        rowTemplate += `
            <div class="col-xs-12 col-md-4">
              <div class="card thumbnail overflow">
                <img src="${item.albumArt}" alt="albumArt">
                <div class="card-body">
                  <h4 class="title" onclick="app.controllers.itunesCtrl.titlePlay(${id})">${item.title}</h4>
                  <h4>${item.artist}</h4>
                  <h5>${item.collection}</h5>
                  <p>$${item.price}</p>
                  <audio controls class="audio-controls" id="${id}">
                    <source src="${item.preview}" type="audio/mp4" />
                </div>
              </div>
            </div>
          `
        count = 1
        template += rowTemplate + '</div>'
        rowTemplate = '<div class="row">'
      }
      id++
    }
    document.getElementById('songs').innerHTML = template

  }

  document.addEventListener('play', function (e) {
    var players = document.getElementsByClassName('audio-controls')
    for (var i = 0; i < players.length; i++) {
      if (players[i] != e.target) {
        players[i].pause()
      }
    }
  }, true)

  this.titlePlay = function (id) {
    var player = document.getElementById(id)
    player.play()
  }


}