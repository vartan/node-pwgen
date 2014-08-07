"use strict"
if (typeof module == 'undefined')
    module = {};
module.exports = function(options2) {
    var defaultOptions = options2 || {}
    defaultOptions.setDefaultOptions = true;
    return generatePassword(defaultOptions)
}

var generatePassword = function(options) {
    var adjectives = ["adorable", "adventurous", "aggressive", "alert", "attractive", "average", "beautiful", "bloody", "blushing", "bright", "clean", "clear", "cloudy", "colorful", "crowded", "cute", "dark", "drab", "distinct", "dull", "elegant", "excited", "fancy", "glamorous", "gleaming", "gorgeous", "graceful", "grotesque", "handsome", "homely", "light", "long", "magnificent", "misty", "motionless", "muddy", "plain", "poised", "precious", "quaint", "shiny", "smoggy", "sparkling", "spotless", "stormy", "strange", "ugly", "ugliest", "unsightly", "alive", "annoying", "bad", "better", "brainy", "breakable", "busy", "careful", "cautious", "clever", "clumsy", "concerned", "crazy", "curious", "dead", "different", "difficult", "doubtful", "easy", "expensive", "famous", "fragile", "frail", "gifted", "helpful", "helpless", "horrible", "impossible", "inexpensive", "innocent", "inquisitive", "modern", "mushy", "odd", "open", "outstanding", "poor", "powerful", "prickly", "puzzled", "real", "rich", "shy", "sleepy", "stupid", "super", "talented", "tame", "tender", "tough", "uninterested", "vast", "wandering", "wild", "angry", "annoyed", "anxious", "arrogant", "ashamed", "awful", "bewildered", "black", "blue", "bored", "combative", "condemned", "confused", "creepy", "cruel", "dangerous", "defeated", "defiant", "depressed", "disgusted", "disturbed", "dizzy", "embarrassed", "envious", "evil", "fierce", "foolish", "frantic", "homeless", "hungry", "hurt", "ill", "itchy", "jealous", "jittery", "lazy", "lonely", "mysterious", "nasty", "naughty", "nervous", "nutty", "obnoxious", "outrageous", "panicky", "repulsive", "scary", "selfish", "sore", "tense", "terrible", "testy", "thoughtless", "tired", "troubled", "upset", "uptight", "weary", "wicked", "agreeable", "amused", "brave", "calm", "charming", "cheerful", "comfortable", "cooperative", "courageous", "delightful", "determined", "eager", "elated", "enchanting", "encouraging", "energetic", "enthusiastic", "exuberant", "fair", "faithful", "fantastic", "fine", "friendly", "funny", "gentle", "good", "happy", "healthy", "hilarious", "jolly", "joyous", "kind", "lively", "lovely", "lucky", "nice", "obedient", "perfect", "pleasant", "proud", "relieved", "silly", "smiling", "splendid", "successful", "thankful", "thoughtful", "victorious", "vivacious", "witty", "wonderful", "zealous", "broad", "chubby", "crooked", "curved", "deep", "flat", "high", "hollow", "low", "narrow", "round", "shallow", "skinny", "square", "steep", "straight", "cooing", "deafening", "faint", "hissing", "hushed", "husky", "loud", "melodic", "moaning", "mute", "noisy", "purring", "quiet", "raspy", "resonant", "screeching", "shrill", "silent", "soft", "squealing", "thundering", "voiceless", "bitter", "delicious", "fresh", "juicy", "ripe", "rotten", "salty", "sour", "spicy", "stale", "sticky", "strong", "sweet", "tart", "tasteless", "tasty", "thirsty", "fluttering", "fuzzy", "greasy", "grubby", "hard", "hot", "icy", "loose", "melted", "nutritious", "plastic", "rainy", "rough", "scattered", "shaggy", "shaky", "sharp", "shivering", "silky", "slimy", "slippery", "smooth", "solid", "steady", "tight", "uneven", "weak", "wet", "wooden", "yummy", "boiling", "breezy", "broken", "bumpy", "chilly", "cold", "cool", "cuddly", "curly", "damaged", "damp", "dirty", "dry", "dusty", "filthy", "flaky", "fluffy", "freezing", "warm", "abundant", "empty", "few", "heavy", "many", "numerous", "substantial"]
    var adverbs = ["aboard", "abnormally", "about", "abroad", "absentmindedly", "absolutely", "abundantly", "accidentally", "accordingly", "actively", "actually", "acutely", "admiringly", "affectionately", "affirmatively", "after", "afterwards", "agreeably", "almost", "already", "always", "amazingly", "angrily", "annoyingly", "annually", "anxiously", "anyhow", "anyplace", "anyway", "anywhere", "appreciably", "appropriately", "around", "arrogantly", "aside", "assuredly", "astonishingly", "away", "awfully", "awkwardly", "badly", "barely", "bashfully", "beautifully", "before", "begrudgingly", "believably", "bewilderedly", "bewilderingly", "bitterly", "bleakly", "blindly", "blissfully", "boldly", "boastfully", "boldly", "boyishly", "bravely", "briefly", "brightly", "brilliantly", "briskly", "brutally", "busily", "calmly", "candidly", "carefully", "carelessly", "casually", "cautiously", "certainly", "charmingly", "cheerfully", "chiefly", "childishly", "cleanly", "clearly", "cleverly", "closely", "cloudily", "clumsily", "coaxingly", "coincidentally", "coldly", "colorfully", "commonly", "comfortably", "compactly", "compassionately", "completely", "confusedly", "consequently", "considerably", "considerately", "consistently", "constantly", "continually", "continuously", "coolly", "correctly", "courageously", "covertly", "cowardly", "crazily", "crossly", "cruelly", "cunningly", "curiously", "currently", "customarily", "cutely", "daily", "daintily", "dangerously", "daringly", "darkly", "dastardly", "dearly", "decently", "deeply", "defiantly", "deftly", "deliberately", "delicately", "delightfully", "densely", "diagonally", "differently", "diligently", "dimly", "directly", "disorderly", "divisively", "docilely", "dopily", "doubtfully", "down", "dramatically", "dreamily", "during", "eagerly", "early", "earnestly", "easily", "efficiently", "effortlessly", "elaborately", "eloquently", "elegantly", "elsewhere", "emotionally", "endlessly", "energetically", "enjoyably", "enormously", "enough", "enthusiastically", "entirely", "equally", "especially", "essentially", "eternally", "ethically", "even", "evenly", "eventually", "evermore", "every", "everywhere", "evidently", "evocatively", "exactly", "exceedingly", "exceptionally", "excitedly", "exclusively", "explicitly", "expressly", "extensively", "externally", "extra", "extraordinarily", "extremely", "fairly", "faithfully", "famously", "far", "fashionably", "fast", "fatally", "favorably", "ferociously", "fervently", "fiercely", "fiery", "finally", "financially", "finitely", "fluently", "fondly", "foolishly", "forever", "formally", "formerly", "fortunately", "forward", "frankly", "frantically", "freely", "frequently", "frenetically", "fully", "furiously", "furthermore", "generally", "generously", "genuinely", "gently", "genuinely", "girlishly", "gladly", "gleefully", "gracefully", "graciously", "gradually", "gratefully", "greatly", "greedily", "grimly", "grudgingly", "habitually", "half-heartedly", "handily", "handsomely", "haphazardly", "happily", "hastily", "harmoniously", "harshly", "hastily", "hatefully", "hauntingly", "healthily", "heartily", "heavily", "helpfully", "hence", "highly", "hitherto", "honestly", "hopelessly", "horizontally", "hourly", "how", "however", "hugely", "humorously", "hungrily", "hurriedly", "hysterically", "icily", "identifiably", "idiotically", "imaginatively", "immeasurably", "immediately", "immensely", "impatiently", "impressively", "inappropriately", "incessantly", "incorrectly", "indeed", "independently", "indoors", "indubitably", "inevitably", "infinitely", "informally", "infrequently", "innocently", "inquisitively", "instantly", "intelligently", "intensely", "intently", "interestingly", "intermittently", "internally", "invariably", "invisibly", "inwardly", "ironically", "irrefutably", "irritably", "jaggedly", "jauntily", "jealously", "jovially", "joyfully", "joylessly", "joyously", "jubilantly", "judgmentally", "just", "justly", "keenly", "kiddingly", "kindheartedly", "kindly", "knavishly", "knottily", "knowingly", "knowledgeably", "kookily", "lastly", "late", "lately", "later", "lazily", "less", "lightly", "likely", "limply", "lithely", "lively", "loftily", "longingly", "loosely", "loudly", "lovingly", "loyally", "luckily", "luxuriously", "madly", "magically", "mainly", "majestically", "markedly", "materially", "meaningfully", "meanly", "meantime", "meanwhile", "measurably", "mechanically", "medically", "menacingly", "merely", "merrily", "methodically", "mightily", "miserably", "mockingly", "monthly", "morally", "more", "moreover", "mortally", "mostly", "much", "mysteriously", "nastily", "naturally", "naughtily", "nearby", "nearly", "neatly", "needily", "negatively", "nervously", "never", "nevertheless", "next", "nicely", "nightly", "noisily", "normally", "nosily", "not", "now", "nowadays", "numbly", "obediently", "obligingly", "obnoxiously", "obviously", "occasionally", "oddly", "offensively", "officially", "often", "ominously", "once", "only", "openly", "optimistically", "orderly", "ordinarily", "outrageously", "outwardly", "outwards", "overconfidently", "painfully", "painlessly", "paradoxically", "partially", "particularly", "passionately", "patiently", "perfectly", "periodically", "perpetually", "persistently", "personally", "persuasively", "physically", "plainly", "playfully", "poetically", "poignantly", "politely", "poorly", "positively", "possibly", "potentially", "powerfully", "presently", "presumably", "prettily", "previously", "primly", "principally", "probably", "promptly", "properly", "proudly", "punctually", "puzzlingly", "quaintly", "queasily", "questionably", "questioningly", "quicker", "quickly", "quietly", "quirkily", "quite", "quizzically", "randomly", "rapidly", "rarely", "readily", "really", "reasonably", "reassuringly", "recently", "recklessly", "regularly", "reliably", "reluctantly", "remarkably", "repeatedly", "reproachfully", "reponsibly", "resentfully", "respectably", "respectfully", "restfully", "richly", "ridiculously", "righteously", "rightfully", "rightly", "rigidly", "roughly", "routinely", "rudely", "ruthlessly", "sadly", "safely", "scarcely", "scarily", "scientifically", "searchingly", "secretively", "securely", "sedately", "seemingly", "seldom", "selfishly", "selflessly", "separately", "seriously", "shakily", "shamelessly", "sharply", "sheepishly", "shoddily", "shortly", "shrilly", "significantly", "silently", "simply", "sincerely", "singularly", "shyly", "skillfully", "sleepily", "slightly", "slowly", "slyly", "smoothly", "so", "softly", "solely", "solemnly", "solidly", "silicitiously", "somehow", "sometimes", "somewhat", "somewhere", "soon", "specially", "specifically", "spectacularly", "speedily", "spiritually", "splendidly", "sporadically", "spasmodically", "startlingly", "steadily", "stealthily", "sternly", "still", "strenuously", "stressfully", "strictly", "structurally", "studiously", "stupidly", "stylishly", "subsequently", "substantially", "subtly", "successfully", "suddenly", "sufficiently", "suitably", "superficially", "supremely", "surely", "surprisingly", "suspiciously", "sweetly", "swiftly", "sympathetically", "systematically", "temporarily", "tenderly", "tensely", "tepidly", "terribly", "thankfully", "then", "there", "thereby", "thoroughly", "thoughtfully", "thus", "tightly", "today", "together", "tomorrow", "too", "totally", "touchingly", "tremendously", "truly", "truthfully", "twice", "ultimately", "unabashedly", "unanimously", "unbearably", "unbelievably", "unemotionally", "unethically", "unexpectedly", "unfailingly", "unfavorably", "unfortunately", "uniformly", "unilaterally", "unimpressively", "universally", "unnaturally", "unnecessarily", "unquestionably", "unwillingly", "up", "upbeat", "unkindly", "upliftingly", "upright", "unselfishly", "upside-down", "unskillfully", "upward", "upwardly", "urgently", "usefully", "uselessly", "usually", "utterly", "vacantly", "vaguely", "vainly", "valiantly", "vastly", "verbally", "vertically", "very", "viciously", "victoriously", "vigilantly", "vigorously", "violently", "visibly", "visually", "vivaciously", "voluntarily", "warmly", "weakly", "wearily", "weekly", "well", "wetly", "when", "where", "while", "whole-heartedly", "wholly", "why", "wickedly", "widely", "wiggly", "wildly", "willfully", "willingly", "wisely", "woefully", "wonderfully", "worriedly", "worthily", "wrongly", "yearly", "yearningly", "yesterday", "yet", "youthfully", "zanily", "zealously", "zestfully", "zestily"]
    var animals = ["Alligator", "bull", "cow", "Alpaca", "Antelope", "buck", "doe", "Ape", "Armadillo", "Baboon", "Badger", "boar", "sow", "Bat", "Bear", "Beaver", "Bee", "worker", "Bird", "hen", "Buffalo", "Boar", "Butterfly", "Camel", "Cat", "tomcat", "queen", "Cattle", "Cheetah", "Chicken", "rooster", "Clam", "Cockroach", "Codfish", "Coyote", "dog", "Crow", "Deer", "stag", "Dinosaur", "Dog", "Dolphin", "Donkey", "Dove", "Duck", "duck", "Eagle", "Eel", "Elephant", "Elk", "Emu", "Falcon", "terzel", "falcon", "Ferret", "Fish", "Finch", "Flamingo", "Fly", "Fox", "tod", "Frog", "Gerbil", "Giraffe", "Gnat", "Goat", "billy", "nanny", "Goose", "goose", "Gorilla", "Grasshopper", "Guinea", "pig", "Gull", "Hamster", "Hare", "Hawk", "tiercel", "Hedgehog", "Heron", "Hippo", "Hornet", "Hog", "Horse", "stud", "dam", "Hound", "Human", "man", "woman", "Hummingbird", "Hyena", "Jay", "Jellyfish", "Kangaroo", "jack", "Koala", "Lark", "Leopard", "leopard", "leopardess", "lion", "lioness", "Llama", "Locust", "Louse", "Magpie", "Mallard", "Mole", "Monkey", "Moose", "Mosquito", "Mouse", "Mule", "john", "molly", "Nightingale", "Opossum", "Ostrich", "Otter", "Owl", "Ox", "Oyster", "Panda", "Parrot", "Peafowl", "peacock", "Penguin", "Pheasant", "Pig", "Pigeon", "Platypus", "Porpoise", "Pronghorn", "Quail", "Rabbit", "Raccoon", "Rat", "Raven", "Reindeer", "Rhinoceros", "Sand", "Dollar", "Seal", "Seastar", "Urchin", "Shark", "Sheep", "ram", "Skunk", "Snake", "sparrow", "Spider", "Squid", "Squirrel", "Swallow", "Swan", "Termite", "Tiger", "tiger", "tigress", "Toad", "Trout", "Turkey", "Turtle", "Wallaby", "Walrus", "Wasp", "Weasel", "Whale", "Wolf", "Wombat", "Woodpecker", "Yak", "Yellow", "Jacket", "Zebra", "stallion", "mare"]
    var defaultOptions = {
        asdf: "true"
    }
    var extend = function(destination, source) {
        for (var property in source) {
            if (source.hasOwnProperty(property) && !destination.hasOwnProperty(property)) {
                destination[property] = source[property];
            }
        }
        return destination;
    };
    var _generatePassword = function(options) {
        if (!options) options = {}
        if (options.setDefaultOptions) {
            options.setDefaultOptions = false;
            defaultOptions = options;
            return _generatePassword;
        }
        extend(options, defaultOptions)

        var separator;
        var numbers = (options.numbers === 0 ? 0 : options.numbers) || 3
        var mixCase = options.mixCase || defaultOptions.mixCase || true
        var padding = (options.padding === true ? 1 : options.padding) || (Math.round(Math.random() * 4))
        var maxSize = options.maxSize || false
        var optionSeparators = options.separators || "-_.";
        if (separatorsText === "false" || separatorsText === "false") {
            separator = ""
        } else {
            var separatorsText = (optionSeparators === true ? "-/:;()$&@.,?!'" : optionSeparators)
            var separators = separatorsText.split("")

            separator = separators[Math.floor(separators.length * Math.random())]
        }

        var words = []

        if (Math.random() * (adjectives.length + adverbs.length) < adjectives.length)
            words.push(adjectives[Math.floor(Math.random() * adjectives.length)])
        else
            words.push(adverbs[Math.floor(Math.random() * adverbs.length)])

        words.push(adjectives[Math.floor(Math.random() * adjectives.length)])

        words.push(animals[Math.floor(Math.random() * animals.length)])
        var num = Math.floor(Math.random() * numbers)
        for (var j = 0; j < words.length; j++) {
            var wordType = Math.floor(Math.random() * 3) + 1
            switch (wordType) {
                case 1:
                    words[j] = words[j].toLowerCase()
                    break
                case 2:
                    words[j] = words[j].toUpperCase()
                    break
                case 3:
                    words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1).toLowerCase()
                    break
            }
        }

        var password = words.join(separator)
        for (var num = numbers; num > 0; num--) {
            password = password + Math.floor(Math.random() * 10)
        }


        for (var k = 0; k < padding; k++) {
            password = separator + password + separator
        }
        var returning = ((!maxSize || password.length <= maxSize) && (!mixCase || /(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password))) ? password : generatePassword({
            separators: options.separators,
            numbers: numbers,
            mixCase: mixCase,
            padding: (padding ? --padding : padding),
            maxSize: maxSize,
            returnCount: options.returnCount
        });
        if (options.returnCount) {
            return "Deprecated"
        } else {
            return returning
        }
    };
    return _generatePassword(options)
}