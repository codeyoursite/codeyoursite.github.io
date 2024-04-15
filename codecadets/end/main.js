const receive = new URLSearchParams(window.location.search);
const age = parseInt(receive.get("age"));
const level = parseInt(receive.get("level"));
let radio = receive.get("radio");
const choice = receive.get("choice");
let points = 0;

if (isNaN(age) || isNaN(level)) {
    console.error("Invalid parameters in URL");
}

let dict = {
    "Block Coding": {url: "https://code-cadets.getlearnworlds.com/course/space-invaders", img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/4d2eb929c413e767e3a14e01a211d5a2.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0", path: "Learning Pathway A", purl: "https://code-cadets.getlearnworlds.com/coursesa"},
    "Scratch": {url: "https://code-cadets.getlearnworlds.com/course/scratchbasics1", img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/aeccbe7a98a3df008eb4624fcc32097c.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0", path: "Learning Pathway B", purl: "https://code-cadets.getlearnworlds.com/coursesb"},
    "Makecode Arcade": {url: "https://code-cadets.getlearnworlds.com/course/arcade", img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/2dc429e9154f51119eaae6f469124185.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0", path: "Learning Pathway B", purl: "https://code-cadets.getlearnworlds.com/coursesb"},
    "JavaScript": {url: "https://code-cadets.getlearnworlds.com/course/gamerplatform", img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/92a9dfdc6140e59c02d6ef4f77a11532.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0", path: "Learning Pathway C", purl: "https://code-cadets.getlearnworlds.com/coursesc"},
    "HTML": {url: "https://code-cadets.getlearnworlds.com/course/website", img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/a3cb90926e19afbcccb7e90f2d317570.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0", path: "Learning Pathway B", purl: "https://code-cadets.getlearnworlds.com/coursesb"},
    "Python": {url: "https://code-cadets.getlearnworlds.com/course/pytu", img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/42f7fd08f470a0c54903e248a1a24057.jpeg?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0", path: "Learning Pathway C", purl: "https://code-cadets.getlearnworlds.com/coursesc"},
    "Data Science": {url: "https://code-cadets.getlearnworlds.com/course/agentbriefing", img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/e1ca2d31edac59cede18a980165336a3.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0", path: "Learning Pathway C", purl: "https://code-cadets.getlearnworlds.com/coursesc"},
    "Advanced Web Development": {url: "https://code-cadets.getlearnworlds.com/course/gameproject", img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/029dfbd802e55487542efedffdfb2987.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0'", path: "Learning Pathway C", purl: "https://code-cadets.getlearnworlds.com/coursesc"},
    "Advanced Web Development and Data Science": {img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/029dfbd802e55487542efedffdfb2987.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0'", path: "Learning Pathway C", purl: "https://code-cadets.getlearnworlds.com/coursesc"}
};

if (age >= 7 && age <= 9) {
    points = 2;
} else {
    points = 3;
}

points += level;

switch (points) {
    case 3:
        change("Block Coding");
        break;
    case 4:
        if (level !== 1) {
            change(radio === "1" ? "Makecode Arcade" : "Scratch");
        } else {
            change("Scratch");
        }
        break;
    case 5:
        change(level !== 1 && radio === "3" ? "JavaScript" : "HTML");
        break;
    case 6:
        change(level !== 1 && radio === "2" ? "JavaScript" : "Python");
        break;
    default:
        if (level !== 1 && (radio === "5" || radio === "3" || choice === "4")) {
            change("Data Science");
        } else if (choice === "3" || choice === "5") {
            change("Advanced Web Development");
        } else {
            const combined = "Advanced Web Development and Data Science";
            const combinedUrl = dict[combined].purl;
            const combinedLink = `<a href="${combinedUrl}">${combined}</a>`;
            const message = `The AI has chosen ${combined} for you. Click ${combinedLink} for more information.`;
            txt.innerHTML = message;
        }
}

function change(activity) {
    const url = dict[activity].url;
    const pathwayUrl = dict[activity].purl;
    const message = `The AI has chosen ${activity} for you. Click <a href="${url}">here</a> for a link to the site or select any activity in <a href="${pathwayUrl}">${dict[activity].path}</a>`;
    txt.innerHTML = message;
    img.src = dict[activity].img;
    a.href = url;
}
