const receive = new URLSearchParams(window.location.search);
const age = receive.get("age");
const level = receive.get("level");
let radio = undefined;
if (level !== "1") {
    radio = receive.get("radio");
}
const choice = receive.get("choice");
let points = 0;

let dict = {
    "Block Coding": {url: "https://code-cadets.getlearnworlds.com/course/space-invaders", img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/4d2eb929c413e767e3a14e01a211d5a2.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0", path: "Software Developer 1", purl: "https://code-cadets.getlearnworlds.com/coursesa", diff: "1", tag: ["block coding", "space invaders"]},
    "Scratch": {url: "https://code-cadets.getlearnworlds.com/course/scratchbasics1", img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/aeccbe7a98a3df008eb4624fcc32097c.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0", path: "Software Developer 2", purl: "https://code-cadets.getlearnworlds.com/coursesb"},
    "Makecode Arcade": {url: "https://code-cadets.getlearnworlds.com/course/arcade", img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/2dc429e9154f51119eaae6f469124185.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0", path: "Software Developer 2", purl: "https://code-cadets.getlearnworlds.com/coursesb"},
    "JavaScript": {url: "https://code-cadets.getlearnworlds.com/course/gamerplatform", img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/92a9dfdc6140e59c02d6ef4f77a11532.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0", path: "Software Developer 3", purl: "https://code-cadets.getlearnworlds.com/coursesc"},
    "HTML": {url: "https://code-cadets.getlearnworlds.com/course/website", img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/a3cb90926e19afbcccb7e90f2d317570.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0", path: "Software Developer 2", purl: "https://code-cadets.getlearnworlds.com/coursesb"},
    "Python": {url: "https://code-cadets.getlearnworlds.com/course/pytu", img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/42f7fd08f470a0c54903e248a1a24057.jpeg?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0", path: "Software Developer 3", purl: "https://code-cadets.getlearnworlds.com/coursesc"},
    "Data Science": {url: "https://code-cadets.getlearnworlds.com/course/agentbriefing", img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/e1ca2d31edac59cede18a980165336a3.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0", path: "Software Developer 3", purl: "https://code-cadets.getlearnworlds.com/coursesc"},
    "Advanced Web Development": {url: "https://code-cadets.getlearnworlds.com/course/gameproject", img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/029dfbd802e55487542efedffdfb2987.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0'", path: "Software Developer 3", purl: "https://code-cadets.getlearnworlds.com/coursesc"},
    "Advanced Web Development and Data Science": {img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/029dfbd802e55487542efedffdfb2987.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0'", path: "Software Developer 3", purl: "https://code-cadets.getlearnworlds.com/coursesc"}
};

if (age >= 7 && age <= 9) {
    points = 2;
} else {
    points = 3;
}

if (level === "1") {
    points++;
} else if (level === "2") {
    points += 2;
} else if (level === "3") {
    points += 3;
} else {
    points += 4;
}

const txt = document.getElementById("info");
const img = document.getElementById("img");
const a = document.getElementById("link");
let o = undefined;

if (points == 3) {
    change("Block Coding");
} else if (points == 4) {
    if (level !== "1") {
        if (radio === "1") {
            change("Makecode Arcade");
        } else {
            change("Scratch");
        }
    } else {
        change("Scratch");
    }
} else if (points == 5) {
    if (level !== "1") {
        if (radio === "3" && radio !== "5") {
            change("JavaScript");
        } else {
            change("HTML");
        }
    } else {
        change("HTML");
    }
} else if (points == 6) {
    if (level !== "1") {
        if (radio === "2" && radio !== "5") {
            change("JavaScript");
        } else {
            change("Python");
        }
    } else {
        change("Python");
    }
} else {
    if (level !== "1") {
        if (radio === "5" || radio === "3") {
            change("Data Science");
        } else {
            if (choice === "4") {
                change("Data Science");
            } else if (choice === "3" || choice === "5") {
                change("Advanced Web Development");
            } else {
                o = "The AI has chosen Advanced Web Development and Data Science for you.";
                txt.innerHTML = o + "<br>" + `Click <a href="https://code-cadets.getlearnworlds.com/course/agentbriefing">here</a> for Adavanced Web Development and <a href="https://code-cadets.getlearnworlds.com/course/space-invaders">here</a> for Data Science in <a href="https://code-cadets.getlearnworlds.com/coursesc">Software Developer C</a>.`;
            }
        }
    } else {
        if (choice === "4") {
            change("Data Science");
        } else if (choice === "3" || choice === "5") {
            change("Advanced Web Development");
        } else {
            o = "The AI has chosen Advanced Web Development and Data Science for you.";
            txt.innerHTML = o + "<br>" + `Click <a href="https://code-cadets.getlearnworlds.com/course/agentbriefing">here</a> for Adavanced Web Development and <a href="https://code-cadets.getlearnworlds.com/course/space-invaders">here</a> for Data Science in <a href="https://code-cadets.getlearnworlds.com/coursesc">Software Developer C</a>.`;
        }
    }
}

function change(act) {
    o = `The AI has chosen ${act} for you.`;
    let url = dict[act].url;
    txt.innerHTML = o + "<br>" + `Click <a href="${url}">here</a> for a link to the site or selct any activity in <a href="${dict[act].purl}">${dict[act].path}</a>`;
    img.src = dict[act].img;
    a.href = dict[act].url;
}


