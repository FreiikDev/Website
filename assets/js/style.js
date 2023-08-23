let words = ["known as Freiik", "young developer", "university student 🎓", "loves french bread 🥖"],
    con = document.getElementById("underscore"),
    letterCount = 1,
    x = 1,
    waiting = !1,
    target = document.getElementById("text");
window.setInterval(function() {
    0 === letterCount && !1 === waiting ? (waiting = !0, target.innerHTML = words[0].substring(0, letterCount), window.setTimeout(function() {
        var t = words.shift();
        words.push(t), x = 1, letterCount += x, waiting = !1
    }, 1e3)) : letterCount === words[0].length + 1 && !1 === waiting ? (waiting = !0, window.setTimeout(function() {
        x = -1, letterCount += x, waiting = !1
    }, 1e3)) : !1 === waiting && (target.innerHTML = words[0].substring(0, letterCount), letterCount += x)
}, 120), window.setInterval(function() {
    "none" === con.style.display ? con.style = "display:inline-block;" : con.style = "display:none;"
}, 400);