let frminput = document.forms['frm'];
let data = {};
let arry = [];
// console.log(data);


getData = () => {
    let validate = true;


    for (let i = 0; i < frminput.length - 1; i++) {
        // console.log(key);
        data[frminput[i].name] = frminput[i].value;
    }

    for (let i = 0; i < frminput.length - 1; i++) {
        // console.log(frminput[i]);
        if (frminput[i].type != 'checkbox') {
            document.getElementsByClassName("error")[i].innerHTML = "";
        }

        if (frminput[i].value.length == 0) {
            error(i, "Please enter a Value");
            validate = false;
        }

        else if (frminput[i].name == "email") {
            if (frminput[i].value.indexOf("@") == -1) {
                error(i, "Please valid email id");
                validate = false;
            }
        }

    }

    if (validate != false) {
        arry.push(data);
        console.log(data)
        // document.getElementById("success").innerHTML = `Submit suscessful`
        alert('Submit suscessful');
    }
}



error = (id, error) => {
    console.log(id + error);
    document.getElementsByClassName("error")[id].innerHTML = error;
}




signup = (e) => {
    e.preventDefault();
    getData();

    fetch("https://real-pear-fly-kilt.cyclic.app/accounts/register", {

        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(y => y.json()).then(y => {
        console.log(y)
        document.getElementById("demo").innerHTML = y;
    })

}






login = (e) => {
    e.preventDefault();
    getData();
    let loginValue = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    }

    fetch("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate", {
        method: "post",
        body: JSON.stringify(loginValue),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json()).then(token => {
        localStorage.setItem("token", token.jwtToken)
        console.log(token);
    })

    window.location.assign("home.html")

}