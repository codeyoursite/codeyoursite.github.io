/**
 * ENGLISH MASTERY PRO - CURRICULUM DATA
 * Structure: 6 Categories | 10 Activities per Category | 10 Questions per Activity
 */

const curriculum = {
    "Spelling": [
        { title: "Statutory Essentials A", type: "spelling", questions: [{word:"accommodate"}, {word:"accompany"}, {word:"according"}, {word:"achieve"}, {word:"aggressive"}, {word:"amateur"}, {word:"ancient"}, {word:"apparent"}, {word:"appreciate"}, {word:"attached"}]},
        { title: "Statutory Essentials B", type: "spelling", questions: [{word:"available"}, {word:"average"}, {word:"awkward"}, {word:"bargain"}, {word:"bruise"}, {word:"category"}, {word:"cemetery"}, {word:"committee"}, {word:"communicate"}, {word:"community"}]},
        { title: "Statutory Essentials C", type: "spelling", questions: [{word:"competition"}, {word:"conscience"}, {word:"conscious"}, {word:"controversy"}, {word:"convenience"}, {word:"correspond"}, {word:"criticise"}, {word:"curiosity"}, {word:"definite"}, {word:"desperate"}]},
        { title: "Silent Letters", type: "spelling", questions: [{word:"doubt"}, {word:"island"}, {word:"lamb"}, {word:"solemn"}, {word:"thistle"}, {word:"knight"}, {word:"knuckle"}, {word:"gnaw"}, {word:"gnome"}, {word:"wrote"}]},
        { title: "Suffixes: -ably", type: "spelling", questions: [{word:"tolerably"}, {word:"dependably"}, {word:"comfortably"}, {word:"reasonably"}, {word:"probably"}, {word:"reliably"}, {word:"agreeably"}, {word:"enviably"}, {word:"suitably"}, {word:"affably"}]},
        { title: "Suffixes: -ibly", type: "spelling", questions: [{word:"terribly"}, {word:"visibly"}, {word:"incredibly"}, {word:"possibly"}, {word:"horribly"}, {word:"legibly"}, {word:"responsibly"}, {word:"reversibly"}, {word:"sensibly"}, {word:"forcibly"}]},
        { title: "Homophones A", type: "spelling", questions: [{word:"altar"}, {word:"alter"}, {word:"ascent"}, {word:"assent"}, {word:"bridle"}, {word:"bridal"}, {word:"cereal"}, {word:"serial"}, {word:"compliment"}, {word:"complement"}]},
        { title: "Homophones B", type: "spelling", questions: [{word:"draft"}, {word:"draught"}, {word:"farther"}, {word:"father"}, {word:"guessed"}, {word:"guest"}, {word:"heard"}, {word:"herd"}, {word:"morning"}, {word:"mourning"}]},
        { title: "The 'ee' sound (i before e)", type: "spelling", questions: [{word:"believe"}, {word:"relief"}, {word:"thief"}, {word:"chief"}, {word:"field"}, {word:"ceiling"}, {word:"receipt"}, {word:"receive"}, {word:"deceit"}, {word:"conceive"}]},
        { title: "Double Consonants", type: "spelling", questions: [{word:"occurrence"}, {word:"exaggerate"}, {word:"opportunity"}, {word:"parliament"}, {word:"profession"}, {word:"programme"}, {word:"recommend"}, {word:"sufficient"}, {word:"suggest"}, {word:"tomorrow"}]}
    ],
    "Grammar": [
        { title: "Capital Letters & Stops", type: "grammar", questions: [
            {q: "the sun is high", answer: "The sun is high."}, {q: "where is london", answer: "Where is London?"}, {q: "i saw mr smith", answer: "I saw Mr Smith."}, {q: "it is hot today", answer: "It is hot today."}, {q: "she lives in spain", answer: "She lives in Spain."},
            {q: "can you help me", answer: "Can you help me?"}, {q: "watch out", answer: "Watch out!"}, {q: "we like apples", answer: "We like apples."}, {q: "monday is busy", answer: "Monday is busy."}, {q: "school is closed", answer: "School is closed."}
        ]},
        { title: "Apostrophes (Contraction)", type: "grammar", questions: [
            {q: "do not go", answer: "Don't go."}, {q: "i am happy", answer: "I'm happy."}, {q: "we will see", answer: "We'll see."}, {q: "she is kind", answer: "She's kind."}, {q: "it is cold", answer: "It's cold."},
            {q: "they are fast", answer: "They're fast."}, {q: "cannot do it", answer: "Can't do it."}, {q: "should not wait", answer: "Shouldn't wait."}, {q: "who is that", answer: "Who's that?"}, {q: "where is it", answer: "Where's it?"}
        ]},
        { title: "Apostrophes (Possession)", type: "grammar", questions: [
            {q: "the dogs tail", answer: "The dog's tail."}, {q: "the girls dress", answer: "The girl's dress."}, {q: "the boys bikes", answer: "The boys' bikes."}, {q: "sarahs phone", answer: "Sarah's phone."}, {q: "the teachers desk", answer: "The teacher's desk."},
            {q: "the childrens toys", answer: "The children's toys."}, {q: "the birds nest", answer: "The bird's nest."}, {q: "james car", answer: "James' car."}, {q: "the mens shoes", answer: "The men's shoes."}, {q: "everyones goal", answer: "Everyone's goal."}
        ]},
        { title: "Verb Tense Correction", type: "grammar", questions: [
            {q: "i goes home", answer: "I go home."}, {q: "he seen the movie", answer: "He saw the movie."}, {q: "we was happy", answer: "We were happy."}, {q: "she done it", answer: "She did it."}, {q: "they has left", answer: "They have left."},
            {q: "i be tired", answer: "I am tired."}, {q: "she sing well", answer: "She sings well."}, {q: "he run fast", answer: "He runs fast."}, {q: "it were cold", answer: "It was cold."}, {q: "you is nice", answer: "You are nice."}
        ]},
        { title: "Conjunctions", type: "grammar", questions: [
            {q: "i like red blue", answer: "I like red and blue."}, {q: "it rained we stayed", answer: "It rained so we stayed."}, {q: "he ran he fell", answer: "He ran but he fell."}, {q: "eat up stay hungry", answer: "Eat up or stay hungry."}, {q: "i slept i was tired", answer: "I slept because I was tired."},
            {q: "it was late we left", answer: "It was late so we left."}, {q: "she sang he danced", answer: "She sang while he danced."}, {q: "wait the bus comes", answer: "Wait until the bus comes."}, {q: "i tried i failed", answer: "I tried although I failed."}, {q: "stay here i return", answer: "Stay here until I return."}
        ]},
        { title: "Commas in Lists", type: "grammar", questions: [
            {q: "eggs milk bread", answer: "Eggs, milk and bread."}, {q: "cats dogs fish", answer: "Cats, dogs and fish."}, {q: "one two three", answer: "One, two and three."}, {q: "red green blue", answer: "Red, green and blue."}, {q: "apples pears plums", answer: "Apples, pears and plums."},
            {q: "run jump hide", answer: "Run, jump and hide."}, {q: "sun moon stars", answer: "Sun, moon and stars."}, {q: "pen ink paper", answer: "Pen, ink and paper."}, {q: "hat coat boots", answer: "Hat, coat and boots."}, {q: "gold silver bronze", answer: "Gold, silver and bronze."}
        ]},
        { title: "Question Marks", type: "grammar", questions: [{q: "can you hear me", answer: "Can you hear me?"}, {q: "what time is it", answer: "What time is it?"}, {q: "who are you", answer: "Who are you?"}, {q: "why is it raining", answer: "Why is it raining?"}, {q: "where is the cat", answer: "Where is the cat?"}, {q: "is it lunch yet", answer: "Is it lunch yet?"}, {q: "may i go now", answer: "May I go now?"}, {q: "how do i do this", answer: "How do I do this?"}, {q: "are we there yet", answer: "Are we there yet?"}, {q: "could you help", answer: "Could you help?"}]},
        { title: "Exclamation Marks", type: "grammar", questions: [{q: "stop that", answer: "Stop that!"}, {q: "look out", answer: "Look out!"}, {q: "how wonderful", answer: "How wonderful!"}, {q: "help me", answer: "Help me!"}, {q: "fire fire", answer: "Fire, fire!"}, {q: "get out", answer: "Get out!"}, {q: "oh no", answer: "Oh no!"}, {q: "wow", answer: "Wow!"}, {q: "be quiet", answer: "Be quiet!"}, {q: "well done", answer: "Well done!"}]},
        { title: "Plurals", type: "grammar", questions: [{q: "two box", answer: "Two boxes."}, {q: "three bus", answer: "Three buses."}, {q: "many leaf", answer: "Many leaves."}, {q: "five baby", answer: "Five babies."}, {q: "ten man", answer: "Ten men."}, {q: "six mouse", answer: "Six mice."}, {q: "some child", answer: "Some children."}, {q: "four potato", answer: "Four potatoes."}, {q: "seven sheep", answer: "Seven sheep."}, {q: "two tooth", answer: "Two teeth."}]},
        { title: "Sentence Clarity", type: "grammar", questions: [{q: "the boy run fast", answer: "The boy ran fast."}, {q: "she have a car", answer: "She has a car."}, {q: "they is nice", answer: "They are nice."}, {q: "i like play", answer: "I like to play."}, {q: "he walk home", answer: "He walked home."}, {q: "we eats lunch", answer: "We eat lunch."}, {q: "the dog bark", answer: "The dog barks."}, {q: "birds flies high", answer: "Birds fly high."}, {q: "it be fun", answer: "It is fun."}, {q: "sun shine bright", answer: "The sun shines bright."}]}
    ],
    "Definitions": [
        { title: "Academic Vocab A", type: "mcq", questions: [
            {q: "Definition of 'Vast'?", options: ["Tiny", "Huge", "Old"], answer: "Huge"},
            {q: "Definition of 'Rapid'?", options: ["Quick", "Slow", "Smart"], answer: "Quick"},
            {q: "Definition of 'Cautious'?", options: ["Brave", "Careful", "Quiet"], answer: "Careful"},
            {q: "Definition of 'Ancient'?", options: ["Old", "New", "Fast"], answer: "Old"},
            {q: "Definition of 'Silent'?", options: ["Loud", "Quiet", "Bright"], answer: "Quiet"},
            {q: "Definition of 'Robust'?", options: ["Strong", "Weak", "Small"], answer: "Strong"},
            {q: "Definition of 'Fragile'?", options: ["Strong", "Breakable", "Cheap"], answer: "Breakable"},
            {q: "Definition of 'Gloomy'?", options: ["Dark", "Bright", "Warm"], answer: "Dark"},
            {q: "Definition of 'Cease'?", options: ["Start", "Stop", "Run"], answer: "Stop"},
            {q: "Definition of 'Obscure'?", options: ["Famous", "Hidden", "Clear"], answer: "Hidden"}
        ]},
        { title: "Academic Vocab B", type: "mcq", questions: [{q: "Definition of 'Ample'?", options: ["Enough", "Small", "Empty"], answer: "Enough"}, {q: "Definition of 'Brief'?", options: ["Long", "Short", "Fast"], answer: "Short"}, {q: "Definition of 'Clarity'?", options: ["Clearness", "Confusion", "Darkness"], answer: "Clearness"}, {q: "Definition of 'Dwell'?", options: ["Live", "Run", "Eat"], answer: "Live"}, {q: "Definition of 'Emerge'?", options: ["Appear", "Hide", "Fade"], answer: "Appear"}, {q: "Definition of 'Feat'?", options: ["Achievement", "Failure", "Foot"], answer: "Achievement"}, {q: "Definition of 'Gaze'?", options: ["Look", "Sing", "Jump"], answer: "Look"}, {q: "Definition of 'Halt'?", options: ["Stop", "Go", "Fly"], answer: "Stop"}, {q: "Definition of 'Idle'?", options: ["Lazy", "Busy", "Fast"], answer: "Lazy"}, {q: "Definition of 'Jostle'?", options: ["Push", "Pull", "Sit"], answer: "Push"}]},
        // (Similar patterns for C, D, E, F...)
        { title: "Academic Vocab C", type: "mcq", questions: [{q: "Meaning of 'Abundant'?", options: ["Plentiful", "Rare", "Old"], answer: "Plentiful"}, {q: "Meaning of 'Benevolent'?", options: ["Kind", "Mean", "Fast"], answer: "Kind"}, {q: "Meaning of 'Cordial'?", options: ["Friendly", "Angry", "Cold"], answer: "Friendly"}, {q: "Meaning of 'Diligence'?", options: ["Hard work", "Laziness", "Speed"], answer: "Hard work"}, {q: "Meaning of 'Eloquent'?", options: ["Well-spoken", "Quiet", "Rude"], answer: "Well-spoken"}, {q: "Meaning of 'Frugal'?", options: ["Thrifty", "Wasteful", "Rich"], answer: "Thrifty"}, {q: "Meaning of 'Genuine'?", options: ["Real", "Fake", "New"], answer: "Real"}, {q: "Meaning of 'Hostile'?", options: ["Unfriendly", "Kind", "Happy"], answer: "Unfriendly"}, {q: "Meaning of 'Immense'?", options: ["Large", "Small", "Thin"], answer: "Large"}, {q: "Meaning of 'Jubilant'?", options: ["Happy", "Sad", "Angry"], answer: "Happy"}]},
        { title: "Academic Vocab D", type: "mcq", questions: [{q: "Meaning of 'Lethargic'?", options: ["Sleepy", "Active", "Smart"], answer: "Sleepy"}, {q: "Meaning of 'Meticulous'?", options: ["Detailed", "Messy", "Slow"], answer: "Detailed"}, {q: "Meaning of 'Novel'?", options: ["New", "Old", "Boring"], answer: "New"}, {q: "Meaning of 'Omit'?", options: ["Leave out", "Add", "Show"], answer: "Leave out"}, {q: "Meaning of 'Pensive'?", options: ["Thoughtful", "Angry", "Happy"], answer: "Thoughtful"}, {q: "Meaning of 'Quaint'?", options: ["Old-fashioned", "Modern", "Ugly"], answer: "Old-fashioned"}, {q: "Meaning of 'Reluctant'?", options: ["Unwilling", "Eager", "Ready"], answer: "Unwilling"}, {q: "Meaning of 'Serene'?", options: ["Calm", "Noisy", "Busy"], answer: "Calm"}, {q: "Meaning of 'Tangible'?", options: ["Touchrable", "Ghostly", "Thin"], answer: "Touchrable"}, {q: "Meaning of 'Vague'?", options: ["Unclear", "Sharp", "Bright"], answer: "Unclear"}]},
        { title: "Academic Vocab E", type: "mcq", questions: [{q: "Meaning of 'Wary'?", options: ["Cereful", "Brave", "Tired"], answer: "Cereful"}, {q: "Meaning of 'Yield'?", options: ["Produce", "Take", "Stop"], answer: "Produce"}, {q: "Meaning of 'Zeal'?", options: ["Enthusiasm", "Boredom", "Fear"], answer: "Enthusiasm"}, {q: "Meaning of 'Adept'?", options: ["Skilled", "Clumsy", "New"], answer: "Skilled"}, {q: "Meaning of 'Barren'?", options: ["Empty", "Full", "Green"], answer: "Empty"}, {q: "Meaning of 'Complex'?", options: ["Hard", "Easy", "Short"], answer: "Hard"}, {q: "Meaning of 'Diverse'?", options: ["Different", "Same", "Old"], answer: "Different"}, {q: "Meaning of 'Exotic'?", options: ["Unusual", "Common", "Near"], answer: "Unusual"}, {q: "Meaning of 'Flaw'?", options: ["Defect", "Perfect", "New"], answer: "Defect"}, {q: "Meaning of 'Grave'?", options: ["Serious", "Silly", "Light"], answer: "Serious"}]},
        { title: "Academic Vocab F", type: "mcq", questions: [{q: "Meaning of 'Humid'?", options: ["Damp", "Dry", "Cold"], answer: "Damp"}, {q: "Meaning of 'Infinite'?", options: ["Endless", "Small", "Short"], answer: "Endless"}, {q: "Meaning of 'Joint'?", options: ["Shared", "Single", "Apart"], answer: "Shared"}, {q: "Meaning of 'Kin'?", options: ["Family", "Friend", "Enemy"], answer: "Family"}, {q: "Meaning of 'Lure'?", options: ["Attract", "Push", "Fear"], answer: "Attract"}, {q: "Meaning of 'Merge'?", options: ["Join", "Split", "Stop"], answer: "Join"}, {q: "Meaning of 'Nimble'?", options: ["Agile", "Slow", "Heavy"], answer: "Agile"}, {q: "Meaning of 'Opt'?", options: ["Choose", "Leave", "Run"], answer: "Choose"}, {q: "Meaning of 'Peak'?", options: ["Top", "Bottom", "Side"], answer: "Top"}, {q: "Meaning of 'Quench'?", options: ["Satisfy", "Start", "Burn"], answer: "Satisfy"}]}
    ],
    "Poetry": [
        { title: "Mixed Techniques (Set A)", type: "mcq", questions: [
            {q: "The stars danced playfully in the sky.", options: ["Simile", "Metaphor", "Personification"], answer: "Personification"},
            {q: "As brave as a lion.", options: ["Simile", "Metaphor", "Alliteration"], answer: "Simile"},
            {q: "The wind was a howling wolf.", options: ["Simile", "Metaphor", "Onomatopoeia"], answer: "Metaphor"},
            {q: "Silly snakes slithered slowly.", options: ["Alliteration", "Onomatopoeia", "Personification"], answer: "Alliteration"},
            {q: "The lightning danced across the sea.", options: ["Personification", "Metaphor", "Simile"], answer: "Personification"},
            {q: "Life is a roller coaster.", options: ["Simile", "Metaphor", "Hyperbole"], answer: "Metaphor"},
            {q: "Boom! The door slammed shut.", options: ["Alliteration", "Onomatopoeia", "Metaphor"], answer: "Onomatopoeia"},
            {q: "The classroom was a zoo.", options: ["Simile", "Metaphor", "Personification"], answer: "Metaphor"},
            {q: "He ran as fast as the wind.", options: ["Simile", "Metaphor", "Alliteration"], answer: "Simile"},
            {q: "The flowers begged for water.", options: ["Personification", "Simile", "Hyperbole"], answer: "Personification"}
        ]},
        { title: "Mixed Techniques (Set B)", type: "mcq", questions: [
            {q: "The camera loves her.", options: ["Personification", "Metaphor", "Simile"], answer: "Personification"},
            {q: "He is a night owl.", options: ["Metaphor", "Simile", "Onomatopoeia"], answer: "Metaphor"},
            {q: "The sun is a golden lamp.", options: ["Metaphor", "Simile", "Personification"], answer: "Metaphor"},
            {q: "The 'clatter' of pans in the kitchen.", options: ["Onomatopoeia", "Alliteration", "Metaphor"], answer: "Onomatopoeia"},
            {q: "As cold as ice.", options: ["Simile", "Metaphor", "Personification"], answer: "Simile"},
            {q: "I've told you a million times.", options: ["Hyperbole", "Simile", "Metaphor"], answer: "Hyperbole"},
            {q: "The leaves whispered in the dark.", options: ["Personification", "Metaphor", "Alliteration"], answer: "Personification"},
            {q: "Busy as a bee.", options: ["Simile", "Alliteration", "Metaphor"], answer: "Simile"},
            {q: "The snow was a white blanket.", options: ["Metaphor", "Simile", "Onomatopoeia"], answer: "Metaphor"},
            {q: "Tiny tigers travel together.", options: ["Alliteration", "Personification", "Simile"], answer: "Alliteration"}
        ]},
        { title: "Mixed Techniques (Set C)", type: "mcq", questions: [
            {q: "The fire roared at the campers.", options: ["Personification", "Simile", "Alliteration"], answer: "Personification"},
            {q: "Her heart is gold.", options: ["Metaphor", "Simile", "Hyperbole"], answer: "Metaphor"},
            {q: "The 'click' of the seatbelt.", options: ["Onomatopoeia", "Metaphor", "Personification"], answer: "Onomatopoeia"},
            {q: "As flat as a pancake.", options: ["Simile", "Metaphor", "Alliteration"], answer: "Simile"},
            {q: "Blue bubbles burst beautifully.", options: ["Alliteration", "Personification", "Onomatopoeia"], answer: "Alliteration"},
            {q: "The moon played hide and seek.", options: ["Personification", "Metaphor", "Simile"], answer: "Personification"},
            {q: "He was a lion in the fight.", options: ["Metaphor", "Simile", "Hyperbole"], answer: "Metaphor"},
            {q: "My alarm clock screams at me.", options: ["Personification", "Onomatopoeia", "Simile"], answer: "Personification"},
            {q: "As light as a feather.", options: ["Simile", "Metaphor", "Alliteration"], answer: "Simile"},
            {q: "The toaster popped loudly.", options: ["Onomatopoeia", "Personification", "Metaphor"], answer: "Onomatopoeia"}
        ]},
        { title: "Mixed Techniques (Set D)", type: "mcq", questions: [
            {q: "The ocean waved at the shore.", options: ["Personification", "Simile", "Metaphor"], answer: "Personification"},
            {q: "Time is a thief.", options: ["Metaphor", "Simile", "Personification"], answer: "Metaphor"},
            {q: "The 'buzz' of the fly.", options: ["Onomatopoeia", "Alliteration", "Metaphor"], answer: "Onomatopoeia"},
            {q: "As sharp as a tack.", options: ["Simile", "Hyperbole", "Metaphor"], answer: "Simile"},
            {q: "Four furious friends fought.", options: ["Alliteration", "Onomatopoeia", "Simile"], answer: "Alliteration"},
            {q: "The stars are diamonds.", options: ["Metaphor", "Simile", "Personification"], answer: "Metaphor"},
            {q: "The city never sleeps.", options: ["Personification", "Metaphor", "Hyperbole"], answer: "Personification"},
            {q: "He is as strong as an ox.", options: ["Simile", "Metaphor", "Alliteration"], answer: "Simile"},
            {q: "The 'hiss' of the snake.", options: ["Onomatopoeia", "Metaphor", "Alliteration"], answer: "Onomatopoeia"},
            {q: "The trees bowed in the wind.", options: ["Personification", "Simile", "Metaphor"], answer: "Personification"}
        ]},
        { title: "Mixed Techniques (Set E)", type: "mcq", questions: [
            {q: "The morning sun smiled down.", options: ["Personification", "Metaphor", "Simile"], answer: "Personification"},
            {q: "Knowledge is power.", options: ["Metaphor", "Simile", "Onomatopoeia"], answer: "Metaphor"},
            {q: "The 'pop' of the balloon.", options: ["Onomatopoeia", "Alliteration", "Personification"], answer: "Onomatopoeia"},
            {q: "As clear as crystal.", options: ["Simile", "Metaphor", "Hyperbole"], answer: "Simile"},
            {q: "Six slippery snails slid.", options: ["Alliteration", "Onomatopoeia", "Metaphor"], answer: "Alliteration"},
            {q: "Her eyes were ice.", options: ["Metaphor", "Simile", "Personification"], answer: "Metaphor"},
            {q: "The radio blared to life.", options: ["Personification", "Onomatopoeia", "Metaphor"], answer: "Personification"},
            {q: "Quiet as a mouse.", options: ["Simile", "Metaphor", "Alliteration"], answer: "Simile"},
            {q: "The 'sizzle' of the bacon.", options: ["Onomatopoeia", "Alliteration", "Simile"], answer: "Onomatopoeia"},
            {q: "Shadows crept across the floor.", options: ["Personification", "Metaphor", "Simile"], answer: "Personification"}
        ]},
        { title: "Mixed Techniques (Set F)", type: "mcq", questions: [
            {q: "The wind whispered secrets.", options: ["Personification", "Metaphor", "Onomatopoeia"], answer: "Personification"},
            {q: "Books are keys to wisdom.", options: ["Metaphor", "Simile", "Alliteration"], answer: "Metaphor"},
            {q: "The 'thud' of the book.", options: ["Onomatopoeia", "Personification", "Metaphor"], answer: "Onomatopoeia"},
            {q: "Cool as a cucumber.", options: ["Simile", "Metaphor", "Hyperbole"], answer: "Simile"},
            {q: "Pretty pink petals popped.", options: ["Alliteration", "Onomatopoeia", "Simile"], answer: "Alliteration"},
            {q: "Laughter is the best medicine.", options: ["Metaphor", "Simile", "Personification"], answer: "Metaphor"},
            {q: "The engine coughed and died.", options: ["Personification", "Onomatopoeia", "Metaphor"], answer: "Personification"},
            {q: "As sweet as sugar.", options: ["Simile", "Metaphor", "Alliteration"], answer: "Simile"},
            {q: "The 'crash' of the waves.", options: ["Onomatopoeia", "Metaphor", "Alliteration"], answer: "Onomatopoeia"},
            {q: "The house groaned in the storm.", options: ["Personification", "Simile", "Metaphor"], answer: "Personification"}
        ]}
    ]
};

// 1. DATA (Keep your massive curriculum here, but add an 'id' or use title for tracking)
// ... [Insert the curriculum object from the previous response here] ...

// 2. PERSISTENCE & STATE
let score = parseInt(localStorage.getItem('english_pro_xp')) || 0;
let completedActivities = JSON.parse(localStorage.getItem('english_pro_completed')) || [];

let currentView = "categories"; 
let activeCategory = null;
let currentTopic = null;
let qIndex = 0;
let canEarnPoints = true;

// 3. CORE FUNCTIONS
function saveData() {
    localStorage.setItem('english_pro_xp', score);
    localStorage.setItem('english_pro_completed', JSON.stringify(completedActivities));
}

// --- MISSING NAVIGATION FUNCTIONS ---

function selectCategory(cat) { 
    activeCategory = cat; 
    currentView = "topics"; 
    renderView(); 
}

function goBack() { 
    if (currentView === "arena") {
        currentView = "topics";
    } else if (currentView === "topics") {
        currentView = "categories";
    }
    renderView(); 
}

function resetAllProgress() {
    if(confirm("Are you sure you want to wipe all XP and progress?")) {
        localStorage.clear();
        location.reload();
    }
}


function renderView() {
    const dash = document.getElementById('dashboard');
    const arena = document.getElementById('arena');
    document.getElementById('score').innerText = score;
    dash.innerHTML = "";
    
    if (currentView === "categories") {
        arena.classList.add('d-none');
        dash.classList.remove('d-none');
        Object.keys(curriculum).forEach(cat => {
            dash.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 skill-card text-center shadow-sm border-0 border-top border-primary border-4" onclick="selectCategory('${cat}')">
                        <div class="card-body py-5">
                            <h5 class="card-title text-navy">${cat}</h5>
                        </div>
                    </div>
                </div>`;
        });
    } 
    else if (currentView === "topics") {
        arena.classList.add('d-none');
        dash.classList.remove('d-none');
        dash.innerHTML = `<div class="col-12 mb-4 d-flex justify-content-between align-items-center">
            <button class="btn btn-outline-secondary btn-sm" onclick="goBack()">← Back</button>
            <span class="text-muted fw-bold small">${activeCategory}</span>
        </div>`;
        curriculum[activeCategory].forEach((topic, idx) => {
            const isDone = completedActivities.includes(activeCategory + topic.title);
            dash.innerHTML += `
                <div class="col-md-6 mb-3">
                    <div class="card skill-card shadow-sm border-0 border-start border-${isDone ? 'success' : 'primary'} border-3" onclick="startTopic(${idx})">
                        <div class="card-body d-flex justify-content-between align-items-center">
                            <span class="${isDone ? 'text-success fw-bold' : ''}">${topic.title} ${isDone ? '✓' : ''}</span>
                            <span class="badge bg-light text-dark border">10 Qs</span>
                        </div>
                    </div>
                </div>`;
        });
    }
}

function startTopic(idx) {
    currentTopic = curriculum[activeCategory][idx];
    qIndex = 0;
    currentView = "arena";
    document.getElementById('dashboard').classList.add('d-none');
    document.getElementById('arena').classList.remove('d-none');
    loadQuestion();
}

function loadQuestion() {
    const q = currentTopic.questions[qIndex];
    const area = document.getElementById('answer-area');
    area.innerHTML = "";
    document.getElementById('feedback').classList.add('d-none');
    document.getElementById('next-btn').classList.add('d-none');
    canEarnPoints = true; // Reset point eligibility for new question

    if (currentTopic.type === "spelling") {
        document.getElementById('question-text').innerText = "Spelling Task";
        area.innerHTML = `
            <button class="btn btn-navy text-white mb-4 w-100 py-3" style="background:#1a2a6c" onclick="speak('${q.word}')">🔊 Listen</button>
            <input type="text" id="user-input" class="form-control mb-3 text-center py-3" placeholder="Type here..." autocomplete="off">
            <button id="submit-btn" class="btn btn-primary w-100 py-2" onclick="checkAnswer('${q.word}')">Verify Spelling</button>`;
    } 
    else if (currentTopic.type === "mcq") {
        document.getElementById('question-text').innerText = q.q;
        q.options.forEach(opt => {
            area.innerHTML += `<button class="btn btn-outline-primary w-100 mb-2 py-3 mcq-opt" onclick="checkAnswer('${opt}', '${q.answer}')">${opt}</button>`;
        });
    }
    else if (currentTopic.type === "grammar") {
    document.getElementById('question-text').innerText = "Grammar Correction";
    area.innerHTML = `
        <div class="p-3 bg-light border rounded mb-3 text-muted">Original: ${q.q}</div>
        <input type="text" id="user-input" class="form-control mb-3 py-3" placeholder="Type the PERFECT version here..." autocomplete="off">
        <button id="submit-btn" class="btn btn-primary w-100 py-2" onclick="checkAnswer(null, null)">Submit Correction</button>`;
    }

    updateProgress();
}

function checkAnswer(val, correct) {
    const q = currentTopic.questions[qIndex];
    const fb = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');
    const input = document.getElementById('user-input');
    const submitBtn = document.getElementById('submit-btn');

    // 1. Identify the Correct Answer (Target)
    // For Grammar/MCQ we use 'correct' or 'q.answer'. For Spelling we use 'q.word'.
    let targetAns = correct || q.answer || q.word;
    
    // 2. Identify the User's Answer
    let userAns = (currentTopic.type === "mcq") ? val : input.value.trim();

    // 3. LOCKING LOGIC (Prevents clicking again to get more XP)
    if (currentTopic.type === "mcq") {
        // Disable all MCQ buttons so they can't keep clicking
        document.querySelectorAll('.mcq-btn').forEach(btn => {
            btn.disabled = true;
            // Highlight the correct one in green so they learn
            if(btn.innerText === targetAns) {
                btn.classList.remove('btn-outline-primary');
                btn.classList.add('btn-success', 'text-white');
            }
        });
    } else {
        // Disable text input and submit button
        if (input) input.disabled = true;
        if (submitBtn) submitBtn.disabled = true;
    }

    // 4. VERIFICATION
    const isCorrect = userAns === targetAns;
    fb.classList.remove('d-none');

    if (isCorrect) {
        fb.innerHTML = `✅ <strong>Correct!</strong> ${canEarnPoints ? '+100 XP' : '(Answer Revealed)'}`;
        fb.className = "mt-4 p-3 rounded text-white bg-success shadow-sm";
        
        // Only award XP if they didn't click "Show Answer"
        if (canEarnPoints) {
            score += 100;
            document.getElementById('score').innerText = score;
            saveData(); // Save XP to LocalStorage
        }
    } else {
        // ANTI-CHEAT: Disable point earning for this question
        canEarnPoints = false;
        fb.innerHTML = `❌ <strong>Incorrect.</strong> <button class="btn btn-sm btn-light ms-2" onclick="revealAnswer(\`${targetAns}\`)">Show Answer</button>`;
        fb.className = "mt-4 p-3 rounded text-white bg-danger shadow-sm";
        
        // GSAP Shake Animation for feedback
        gsap.to("#arena", { x: 10, repeat: 3, yoyo: true, duration: 0.05 });
    }

    // 5. PROGRESSION
    qIndex++;
    nextBtn.classList.remove('d-none');
    
    if (qIndex >= currentTopic.questions.length) {
        // Mark activity as completed in LocalStorage
        const topicID = activeCategory + currentTopic.title;
        if(!completedActivities.includes(topicID)) {
            completedActivities.push(topicID);
            saveData();
        }
        
        nextBtn.innerText = "Finish Module";
        nextBtn.onclick = () => { 
            currentView = "topics"; 
            renderView(); 
        };
    } else {
        nextBtn.innerText = "Next Question";
        nextBtn.onclick = loadQuestion;
    }
}

// Helper to show the answer when they give up
function revealAnswer(ans) {
    const fb = document.getElementById('feedback');
    fb.innerHTML = `❌ The correct answer was: <strong>${ans}</strong>`;
}

function goBack() { 
    currentView = (currentView === "arena") ? "topics" : "categories"; 
    renderView(); 
}

function speak(w) { window.speechSynthesis.speak(new SpeechSynthesisUtterance(w)); }

function updateProgress() {
    const p = (qIndex / currentTopic.questions.length) * 100;
    gsap.to("#progress-bar", { width: p + "%" });
    document.getElementById('q-count').innerText = `${qIndex}/${currentTopic.questions.length}`;
}

// Initial Load
renderView();
