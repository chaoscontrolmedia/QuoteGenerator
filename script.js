
let btnNext = document.querySelector('#next-quote');
let btnPrev = document.querySelector('#prev-quote')
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let source = document.querySelector('.source');
let quoteImage = document.querySelector('.quote-image');

const quotes = [
    {quote:  "Man seeks peace, yet at the same time yearning for war... Those are the two realms belonging solely to man. Thinking of peace whilst spilling blood is something that only humans could do. They're two sides of the same coin...To protect something... another must be sacrificed.", person: "Madara Uchiha", quoteImage: "img/madara.jpg", source: "Naruto" },

    {quote:  "There certainly are things that cannot be told in words, but that can only be said by people who have exhausted their use of words. Words are like icebergs that are floating on the ocean called “heart”. The parts that show above the sea surface are small, but they still let us perceive the larger parts that are hidden below the water. Use words deliberately. If you do, you’ll be able to convey more things more accurately than if you were to keep silent. Right judgement can only be made with right information and right analyses.", person: "Yang Wen-Li",  source: "Legend of the Galactic Heroes",quoteImage: "img/yang6.jpg" },

    {quote:  "There are a few wars between good and evil; most of between one good and another good..", person: "Yang Wen-Li", source: "Legend of the Galactic Heroes" ,quoteImage: "img/yang.jpg"},

    // Add source parameter to the remaining objects
    {quote:  "The Law doesn’t protect people. People protect the law. People have always detested evil and sought out a righteous way of living. Their feelings… The accumulation of those people’s feelings are the law. They’re neither the provisions nor the system. They are the fragile and irreplaceable feelings that everyone carries in their hearts. Compared to the power of anger and hatred, they are something that can quite easily break down. People have prayed for a better world throughout time. In order for those prayers to continue to hold meaning, we have to try our best to protect it to the very end. We just can’t give up on it.", person: "Akane Tsunemori", source: "Psycho-Pass",quoteImage: "img/akane.jpg" },

    {quote:  "The inferiority you feel is actually the quality of a king. You may grumble a lot, but you know how small you are. And yet you still struggle to reach heights greater than you can imagine.", person: "Iskander", source: "Fate/Zero",quoteImage: "img/iskander.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "There are two kinds of arrogance. One where you are unequal to the task and one where your dreams are too big. The former is commonplace stupidity... but the latter is a rare species that is difficult to find.", person: "Gilgamesh", source: "Fate/Zero",quoteImage: "img/gil.jpg" },

    {quote:  "Our Heroic Spirit thinks a battlefield to be something better than Hell. What a joke. It's Hell itself. There is no hope on a battlefield. There is nothing but unspeakable despair. Just a crime we call victory, paid for by the pain of the defeated. But humanity has never recognized this truth. And the reason is that, in every era, a dazzling hero has blinded the people with their legends, and kept them from seeing the evil of bloodshed. True human nature has not advanced a step beyond the Stone Age.", person: "Kiritsugu Emiya", source: "Fate/Zero",quoteImage: "img/kiritsugu.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "You couldn’t call simply not killing or destroying any more atonement. I need to grow more wheat than I trampled underfoot. I need to rebuild more houses than I burnt down. I still don’t know how to eliminate war from the entire world. But just a single village would do. I want to create a place where people don’t need swords.", person: "Thorfinn", source: "Vinland Saga",quoteImage: "img/thorfinn.jpg" },

    {quote:  "Those who are weak, and who desire power, simply strip the strong of their power, and convince themselves they've earned it.. That's how people become tainted by darkness. They believe what they want to believe, using hollow reasons as justification. They repeat this cycle, and their darkness grows.", person: "Young Xehanort", source: "Kingdom Hearts",quoteImage: "img/yxehanort.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "It's opportunistic soldiers... No, its citizens have turned over rulership to politicians, instead of participating in it! The people have democratic principles on their lips, but can't spare the effort to safeguard them! The collapse of a government is the sin of its rulers and leaders. The collapse of democratic rule is the sin of every citizen!", person: "Alexander Bucock", source: "Legend of the Galactic Heroes",quoteImage: "img/bucock.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "People are strange things… sadness fades away with time… and only the enjoyable memories remain… we’re built so conveniently, aren’t we?", person: "Eva Heinemenn", source: "Monster",quoteImage: "img/eva.jpg" },

    {quote:  "In order to measure a person’s worth, you must do more than push them. The real way to test their worth is to give them power. When they gain the freedom to act outside the boundaries of law and ethics, you can sometimes see their souls.", person: "Shogo Makishima", source: "Psycho-Pass",quoteImage: "img/makishima.jpeg" },

    // Add source parameter to the remaining objects
    {quote:  "Charisma has three points. The nature of a hero or prophet, the ability to simply make you feel good when you’re around them, and the intelligence to eloquently talk about all sorts of things.", person: "Saiga Jouji", source: "Psycho-Pass",quoteImage: "img/saiga.jpg" },

    {quote:  "How weak the mind is when it wants to forget.", person: "Johan Liebert", source: "Monster",quoteImage: "img/johan2.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "What criminals need is neither diplomacy nor persuasion. They have neither the ability nor the intention to understand. Only force will enlighten their foolishness.", person: "Reinhard von Lohengramm", source: "Legend of the Galactic Heroes",quoteImage: "img/reinhard2.jpg" },

    {quote:  "The Empire, with a few nobles ruling the masses, is bad government. The Alliance, with a government chosen by the people, is badly governed. Which one do you think is wrong?", person: "Yang Wen-Li", source: "Legend of the Galactic Heroes",quoteImage: "img/yang4.jpeg" },

    // Add source parameter to the remaining objects
    {quote:  "They say that fools learn from their experiences, while the wise learn from history. I hope you’re not a fool.", person: "Nobuchika Ginoza", source: "Psycho-Pass",quoteImage: "img/ginoza.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "Even a child that receives one bit of praise has the ability to excel in a single talent, and those who receive regular encouragement can feel confidence, achieve success, and become leading members of society. Because they don’t believe they are worthless, they don’t need to raise a fist and have vengeance against fate or the world at large…", person: "Inspector Lunge", source: "Monster",quoteImage: "img/lunge.jpg" },

    {quote:  "I don't admire one guy leaping into danger if it means someone else might have to jump in to save him. You're all just lining up to lose out. Dooming others to take the fall with ya.", person: "Xigbar", source: "Kingdom Hearts",quoteImage: "img/xigbar.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "People live their lives bound by what they accept as correct and true. That's how they define 'reality'. But what does it mean to be 'correct' or 'true'? Merely vague concepts... Their 'reality' may all be a mirage. Can we consider them to simply be living in their own world, shaped by their beliefs?", person: "Itachi Uchiha", source: "Naruto",quoteImage: "img/itachi.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "An ideal is only an ideal after all. As long as you embrace that ideal, the friction with reality will continue to increase. So you will someday face reality and will have to pay the price for your compromises.", person: "Archer", source: "Fate/stay night: Unlimited Blade Works",quoteImage: "img/archer2.jpg" },

    {quote:  "You have no enemies. No one…Has any enemies. There is no one…That you should hurt.", person: "Thors", source: "Vinland Saga",quoteImage: "img/thors.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "Maybe humans are capable of committing far more shameless acts than they imagine they are. If they hadn’t faced adversity, they might have gone without discovering such ugly facets of themselves.", person: "Hildegard Von Mariendorf", source: "Legend of the Galactic Heroes",quoteImage: "img/hildegard.jpg" },

    {quote:  "In every time, in every place, the deeds of men remain the same. ", person: "Legend of the Galactic Heroes opening", source: "Legend of the Galactic Heroes",quoteImage: "img/opening.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "Fortunately, I do not have any pride. But what about it? Will the name of the hero be disgraced? Hah, don’t make me laugh, You can wash away disgrace with results. You can feed your meaningless pride to the dogs.", person: "Archer", source: "Fate/stay night: Unlimited Blade Works",quoteImage: "img/archer.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "The hole in one’s heart gets filled by others around you. Friends won’t flock to someone who abandons the memory of his friends and gives up on the world just because things don’t go the way he wants them to. That won’t help fill the hole in your heart. And people won’t help those who run away and do nothing. As long as you don’t give up, there will always be salvation.", person: "Kakashi Hatake", source: "Naruto",quoteImage: "img/kakashi.jpg" },

    {quote:  "A man, slave to gold, holds a whip…And beats the slave he bought with that gold as if to claim HE is the master. He just doesn’t see it for himself. Every living human being is a slave to something.", person: "Askeladd", source: "Vinland Saga",quoteImage: "img/askeladd.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "It’s the most powerful words in the world. No just argument or eloquence can stand a chance against it. It’s… ”So what?", person: "Yang Wen-Li", source: "Legend of the Galactic Heroes",quoteImage: "img/yang3.jpg" },

    {quote:  "Love and the human mind can’t be analyzed with formulas. It’s not so unusual for love to make you forget the sense of care and respect for others. There’s no logic. It’s an uncontrollable urge. To tell you the truth, it’d be worrisome if you became like that. Your mind is keen, and your character is good. But passion has nothing to do with mind or character.", person: "Alex Cazerne", source: "Legend of the Galactic Heroes",quoteImage: "img/alex.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "Fight! Fight for the glory of your God! God does not help those who kneel before Him! God does not save those who pray for mercy, for those are not true prayers! Would you beg in the presence of your Lord? Your impiety begs only for death! True prayer is forged in battle! Dazzle your Lord with your prayer, and you shall know Him! You shall know Jerusalem! After the tearing, the crushing, the breaking of men's bones, when the fruits of our prayers lie at our feet, God will descend from His throne on high to bring judgement upon His wretched and pitiful servants!", person: "Alucard", source: "Hellsing Ultimate",quoteImage: "img/dracula.jpg" },

    {quote:  "There is great satisfaction in fighting for the sake of gaining power, but it’s joyless to fight for the sake of maintaining it.", person: "Reinhard Von Lohengramm", source: "Legend of the Galactic Heroes",quoteImage: "img/reinhard2.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "I could live with it if you said “fate,” but “predetermination is really an unpleasant word. It insults human beings in two ways. First, it stymies the thought process that analyzes situations. And secondly, it belittles the free will of human beings as something of little value. Julian, there is no such thing as a predetermined battle. No matter what the circumstances are, in the end it’s something that we choose to do…When you have a convenient word like “predetermination,” you get tempted to shift blame to it to justify your decision. I don’t think I’m always right. But even if I end up making a mistake, I want to make that mistake on my own responsibility.", person: "Yang Wen-Li", source: "Legend of the Galactic Heroes",quoteImage: "img/yang5.jpg" },

    {quote:  "Isn’t using the net just like using knives for cooking or using paper to write things down? It has nothing to do with good or bad. It’s like, it’s there, so we accept and use it.", person: "Akane Tsunemori", source: "Psycho-Pass",quoteImage: "img/akane2.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "True equality means acknowledging that everyone has their own weaknesses.", person: "Wolfgang Grimmer", source: "Monster",quoteImage: "img/grimmer.jpg" },

    {quote:  "Even the mightiest warriors experience fears. What makes them a true warrior is the courage that they possess to overcome their fears.", person: "Vegeta", source: "Dragon Ball Z",quoteImage: "img/vegeta.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "It's not about loss. Strength is a choice, fighting like hell to protect what's important. You threw away everything you ever had, no wonder you have no true power!", person: "Dante", source: "Devil May Cry 5",quoteImage: "img/dmc5dante.jpg" },

    {quote:  "How many others took the test that day? Spent months, years preparing, some working much harder than you. Yet you were the only one who passed. Where was their reward? Is it their fault they lacked your natural talent? Or what about the equal value of each person's life? If I clap my hands, the baby won't survive. And if I do that, where is the world's balance in that? Does that mean the baby was born just so it could die? It's doing all an infant CAN to survive, breathing, crying for help. But what does it get in exchange? People can say there is a balance, a logic that everything happens for a reason. But the truth is far less designed. No matter how hard you work; when you die, you die. Some spend their entire life trying to scratch their way to the top and still die in poverty, while others are born into wealth without ever lifting an arm. It's a cruel and random world, but the chaos is all so beautiful.", person: "Dante", source: "Fullmetal Alchemist",quoteImage: "img/dante.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "Humankind cannot gain anything without first giving something in return. To obtain, something of equal value must be lost. That is alchemy's first law of Equivalent Exchange. In those days, we really believed that to be the world's one, and only truth.", person: "Alphonse Elric", source: "Fullmetal Alchemist",quoteImage: "img/alphonse.jpg" },

    {quote:  "Even when our eyes are closed, there's a whole world out there, that lives outside ourselves and our dreams.", person: "Edward Elric", source: "Fullmetal Alchemist",quoteImage: "img/ed.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "You’re so caught up in finding the shadows that you forgot about the light that cast them.", person: "Sora", source: "Kingdom Hearts 3",quoteImage: "img/sora.jpg" },

    {quote:  "Children's minds are immature. They do not possess a firm resolve and the strength to turn their misery to anger. Confronted with a cruel fate, they were not provided with the choice of having a strong will. Moreover, as they have not lived through and comprehended life, ideals such as honor and hope are yet to be completely nurtured in them. Therefore, in moments of despair, children are more prone than adults to seal away their own mind, lock up their own heart. Because they have not tasted the joy of life they can afford to discard. Because they have not understood the meaning of future, they can sink into despair.", person: "Kariya Matou", source: "Fate/Zero",quoteImage: "img/kariya.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "Taking responsibility for yourself is the first condition for humanity. One who cannot do even that is less than human. Just a dog.", person: "Tokiomi Tohsaka", source: "Fate/Zero",quoteImage: "img/tokiomi.jpg" },

    {quote:  "Do you fully understand? If you do evil out of hatred for evil,that rage and hatred will merely give rise to new conflict. ", person: "Saber", source: "Fate/stay night",quoteImage: "img/saber.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "The path of devotion is a great labor. Do not ever mar it.", person: "Gilgamesh", source: "Fate/stay night",quoteImage: "img/gil2.jpg" },

    {quote:  "Open your eyes. 'God' is nothing more than a construct created by man to inspire fear and promote order. If you wish to see me struck down, for all these atrocities, use your own hands to do so, not 'God's'.", person: "Wrath", source: "Fullmetal Alchemist: Brotherhood",quoteImage: "img/wrath2.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "Where in this world can a sane man be found? We’re the same. We’re all the same. None of us understands what it means to love all. Or the meaning of life…Or the meaning of death…Or the meaning of our own battles.", person: "Canute", source: "Vinland Saga",quoteImage: "img/canute.jpg" },

    {quote:  "All power tends to corrupt, and absolute power corrupts absolutely. Great men are almost always bad men.", person: "Wrath", source: "Fullmetal Alchemist: Brotherhood",quoteImage: "img/wrath.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "I’m not reproaching you. It’s still better than committing a mistake that is unlike your character. At this point, think about making up for the loss with the work that you’re capable of doing.", person: "Reinhard von Lohengramm", source: "Legend of the Galactic Heroes",quoteImage: "img/reinhard3.jpg" },

    {quote:  "A nation doesn’t create individuals by cellular division. Instead, it is individuals with autonomous intent who gather to establish a nation. In a democratic society, it is axiomatic as to which one is the master and which the servant.", person: "Yang Wen-Li", source: "Legend of the Galactic Heroes",quoteImage: "img/yang6.jpg" },

    // Add source parameter to the remaining objects
    {quote:  "Power is not will,it is a phenomenon of physically making things happen.", person: "Madara Uchiha", source: "Naruto",quoteImage: "img/madara2.jpg" },
];













//let shuffledQuotes = shuffleArray(quotes);
let currentIndex = 0;

// Display the first quote
displayQuote(currentIndex);



/*
btnNext.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex === shuffledQuotes.length) {
        shuffledQuotes = shuffleArray(quotes);
        currentIndex = 0;
    }
    displayQuote(currentIndex);
});

btnPrev.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = shuffledQuotes.length - 1;
    }
    displayQuote(currentIndex);
});
*/

btnNext.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % quotes.length;
    displayQuote(currentIndex);
});

btnPrev.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    displayQuote(currentIndex);
});


function displayQuote(index) {
    quote.innerText = quotes[index].quote;
    person.innerText = quotes[index].person;
    source.innerText = quotes[index].source;
    // Since there is no 'source' property in your quotes objects, you can remove this line
    // source.innerText = "Source: " + quotes[index].source;
    quoteImage.src = quotes[index].quoteImage; // Use 'quoteImage' property instead of 'image'
}



/*
function displayQuote(index) {
    quote.innerText = shuffledQuotes[index].quote;
    person.innerText = shuffledQuotes[index].person;
    source.innerText = "Source: " + shuffledQuotes[index].source;
    quoteImage.src = shuffledQuotes[index].image;
}

function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
*/