

getdisplay = () => {
    let tkn = localStorage.getItem("token");
    console.log(tkn);

    if (tkn != "") {
        document.getElementById("displayWelcome").innerHTML = `Wel-Come Home`
    } else {
        document.getElementById("displayWelcome").innerHTML = `You Need To login First`

    }
}

