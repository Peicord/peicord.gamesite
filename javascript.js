function redirectToPage(page) {
    window.location.href = page + ".html";
}

function redirectTo(platform) {
    switch (platform) {
        case 'pc':
            window.location.href = "pc.html";
            break;
        case 'ps':
            window.location.href = "ps.html";
            break;
        case 'psp':
            window.location.href = "psp.html";
            break;
        case 'gamecube':
            window.location.href = "gamecube.html";
            break;
        case 'nintendo':
            window.location.href = "nintendo.html";
            break;
        case 'gameboy':
            window.location.href = "gameboy.html";
            break;
        case 'wii':
            window.location.href = "wii.html";
            break;
        case 'xbox360':
            window.location.href = "xbox360.html";
            break;
        default:
            break;
    }
}

function redirectToPage(page) {
    if (page === 'contato') {
      window.location.href = 'contato.html';
    } else {
      window.location.href = page + '.html';
    }
  }
  
 document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var query = document.getElementById("search-input").value;
    var googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);

    window.location.href = googleSearchUrl;
});
