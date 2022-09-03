fetch('assets/js/properties.json').then(async function(response) {
    let data = await response.json();
    Object.keys(data).forEach(key => {
        console.log(key, data[key])
    });
    document.getElementById('type').innerHTML = JSON.stringify(data, null, 2).split("\n").map(x => /"(.*)":/g.test(x) ? x.replace(/: (".*"|[+-]?([0-9]*[.])?[0-9]+)(?!:)/g, ": <span class=\"highlight\">$1</span>") : x.replace(/(".*"|[+-]?([0-9]*[.])?[0-9]+)/g, "<span class=\"highlight\">$1</span>")).map(x => x.replace(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})"/, "<a href=\"$1\">$1</a>\"")).join("\n")
});