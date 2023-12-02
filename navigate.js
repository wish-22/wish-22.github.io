const PAGES = [
    ["content","CONTENT"],
    [null,"CHARACTERS"],
    [null,"NOW DRAW THEM..."],
    ["bonus","CATCHALL"],
    ["qa","Q \\ A"],
    ["playlist","PLAYLIST"],
    ["about","ABOUT"],
]

function generateNavigation(page) {
    let ht = "<ul>"

    for (let i=0; i < PAGES.length; i++) {
        if (page==PAGES[i][0] || null==PAGES[i][0]) {
            ht += "<li>" + PAGES[i][1] + "</li>"
        } else {
            ht += "<li><a href='../"+PAGES[i][0]+"/index.html'>" + PAGES[i][1] + "</a></li>"
        }
    }

    document.getElementById("mainNav").innerHTML = ht + "</ul>"
}