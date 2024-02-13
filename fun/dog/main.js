class Dog {
    constructor(name, breed, furcolour, woofsound) {
        this.name = name;
        this.breed = breed;
        this.furcolour = furcolour;
        this.woofsound = woofsound;
    }
    
    woof() {
        console.log("woof");
        let audio = new Audio(this.woofsound);
        audio.play();
    }
}

document.getElementById("fact-file").classList.add("hidden");
document.getElementById("dog-form").classList.remove("hidden");
document.getElementById("download-btn").classList.add("hidden");

function send() {
    var name = document.getElementById("name").value.trim();
    var breed = document.getElementById("breed").value.trim();
    var colour = document.getElementById("colour").value.trim();
    var barkInput = document.getElementById("bark");
    var pictureInput = document.getElementById("picture");
    if (name === "" || breed === "" || colour === "" || barkInput.files.length === 0 || pictureInput.files.length === 0) {
        document.getElementById("error").textContent = "Please remeber to fill out all of the fields.";
        return;
    }
    let barkFile = barkInput.files[0];
    let pictureFile = pictureInput.files[0];
    let barkReader = new FileReader();
    barkReader.onload = function (e) {
        let sbark = e.target.result;
        let pictureReader = new FileReader();
        pictureReader.onload = function (e) {
            let twopicture = e.target.result;
            let dog = new Dog(name, breed, colour, bark);
            console.log(dog);
            document.getElementById("dog-picture").src = twopicture;
            dog.woof();
        }
        pictureReader.readAsDataURL(pictureFile);
    }
    barkReader.readAsDataURL(barkFile);
    document.getElementById("fact-name").textContent = name;
    document.getElementById("fact-breed").textContent = breed;
    document.getElementById("fact-colour").textContent = colour;
    document.getElementById("fact-file").classList.remove("hidden");
    document.getElementById("dog-form").classList.add("hidden");
    document.getElementById("download-btn").classList.remove("hidden");
}

function downloadImage() {
    // Capture the fact file section as an image
    html2canvas(document.getElementById("fact-file")).then(function(canvas) {
        // Convert the canvas to a data URL
        var dataURL = canvas.toDataURL("image/png");

        // Create a download link
        var link = document.createElement("a");
        link.href = dataURL;
        link.download = "dog_fact_file.png";
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Remove the download link from the DOM
        document.body.removeChild(link);
    });
}
