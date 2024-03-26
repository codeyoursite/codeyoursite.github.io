const form = document.getElementById("form");
const pass = document.getElementById("pass").value;
const char = `abcdefghijklmnopqrstuvwxyz1234567890_-+=\`¬<>,./?!"£$%^&*()|[]{}#~@;:'`
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let isfound = false;
    for (let i = 0; i < char.length; i++) {
        let char1 = char[i];
        for (let i = 0; i < char.length; i++) {
            let char2 = char[i];
            for (let i = 0; i < char.length; i++) {
                let char3 = char[i];
                let cpass = char1 + char2 + char3;
                if (pass === cpass) {
                    console.log(`Your password ${cpass} was found!`);
                    isfound = true;
                    break;
                }
            }
        }
    }
    if (isfound === true) {
        console.log("Yay!");
    }
});