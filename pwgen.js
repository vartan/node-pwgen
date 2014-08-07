var adjectives = ["adorable", "adventurous", "aggressive", "alert", "attractive", "average", "beautiful", "bloody", "blushing", "bright", "clean", "clear", "cloudy", "colorful", "crowded", "cute", "dark", "drab", "distinct", "dull", "elegant", "excited", "fancy", "glamorous", "gleaming", "gorgeous", "graceful", "grotesque", "handsome", "homely", "light", "long", "magnificent", "misty", "motionless", "muddy", "plain", "poised", "precious", "quaint", "shiny", "smoggy", "sparkling", "spotless", "stormy", "strange", "ugly", "ugliest", "unsightly", "alive", "annoying", "bad", "better", "brainy", "breakable", "busy", "careful", "cautious", "clever", "clumsy", "concerned", "crazy", "curious", "dead", "different", "difficult", "doubtful", "easy", "expensive", "famous", "fragile", "frail", "gifted", "helpful", "helpless", "horrible", "impossible", "inexpensive", "innocent", "inquisitive", "modern", "mushy", "odd", "open", "outstanding", "poor", "powerful", "prickly", "puzzled", "real", "rich", "shy", "sleepy", "stupid", "super", "talented", "tame", "tender", "tough", "uninterested", "vast", "wandering", "wild", "angry", "annoyed", "anxious", "arrogant", "ashamed", "awful", "bewildered", "black", "blue", "bored", "combative", "condemned", "confused", "creepy", "cruel", "dangerous", "defeated", "defiant", "depressed", "disgusted", "disturbed", "dizzy", "embarrassed", "envious", "evil", "fierce", "foolish", "frantic", "homeless", "hungry", "hurt", "ill", "itchy", "jealous", "jittery", "lazy", "lonely", "mysterious", "nasty", "naughty", "nervous", "nutty", "obnoxious", "outrageous", "panicky", "repulsive", "scary", "selfish", "sore", "tense", "terrible", "testy", "thoughtless", "tired", "troubled", "upset", "uptight", "weary", "wicked", "agreeable", "amused", "brave", "calm", "charming", "cheerful", "comfortable", "cooperative", "courageous", "delightful", "determined", "eager", "elated", "enchanting", "encouraging", "energetic", "enthusiastic", "exuberant", "fair", "faithful", "fantastic", "fine", "friendly", "funny", "gentle", "good", "happy", "healthy", "hilarious", "jolly", "joyous", "kind", "lively", "lovely", "lucky", "nice", "obedient", "perfect", "pleasant", "proud", "relieved", "silly", "smiling", "splendid", "successful", "thankful", "thoughtful", "victorious", "vivacious", "witty", "wonderful", "zealous", "broad", "chubby", "crooked", "curved", "deep", "flat", "high", "hollow", "low", "narrow", "round", "shallow", "skinny", "square", "steep", "straight", "cooing", "deafening", "faint", "hissing", "hushed", "husky", "loud", "melodic", "moaning", "mute", "noisy", "purring", "quiet", "raspy", "resonant", "screeching", "shrill", "silent", "soft", "squealing", "thundering", "voiceless", "bitter", "delicious", "fresh", "juicy", "ripe", "rotten", "salty", "sour", "spicy", "stale", "sticky", "strong", "sweet", "tart", "tasteless", "tasty", "thirsty", "fluttering", "fuzzy", "greasy", "grubby", "hard", "hot", "icy", "loose", "melted", "nutritious", "plastic", "rainy", "rough", "scattered", "shaggy", "shaky", "sharp", "shivering", "silky", "slimy", "slippery", "smooth", "solid", "steady", "tight", "uneven", "weak", "wet", "wooden", "yummy", "boiling", "breezy", "broken", "bumpy", "chilly", "cold", "cool", "cuddly", "curly", "damaged", "damp", "dirty", "dry", "dusty", "filthy", "flaky", "fluffy", "freezing", "warm", "abundant", "empty", "few", "heavy", "many", "numerous", "substantial"]

var animals = ["Alligator", "bull", "cow", "Alpaca", "Antelope", "buck", "doe", "Ape", "Armadillo", "Baboon", "Badger", "boar", "sow", "Bat", "Bear", "Beaver", "Bee", "worker", "Bird", "hen", "Buffalo", "Boar", "Butterfly", "Camel", "Cat", "tomcat", "queen", "Cattle", "Cheetah", "Chicken", "rooster", "Clam", "Cockroach", "Codfish", "Coyote", "dog", "Crow", "Deer", "stag", "Dinosaur", "Dog", "Dolphin", "Donkey", "Dove", "Duck", "duck", "Eagle", "Eel", "Elephant", "Elk", "Emu", "Falcon", "terzel", "falcon", "Ferret", "Fish", "Finch", "Flamingo", "Fly", "Fox", "tod", "Frog", "Gerbil", "Giraffe", "Gnat", "Goat", "billy", "nanny", "Goose", "goose", "Gorilla", "Grasshopper", "Guinea", "pig", "Gull", "Hamster", "Hare", "Hawk", "tiercel", "Hedgehog", "Heron", "Hippo", "Hornet", "Hog", "Horse", "stud", "dam", "Hound", "Human", "man", "woman", "Hummingbird", "Hyena", "Jay", "Jellyfish", "Kangaroo", "jack", "Koala", "Lark", "Leopard", "leopard", "leopardess", "lion", "lioness", "Llama", "Locust", "Louse", "Magpie", "Mallard", "Mole", "Monkey", "Moose", "Mosquito", "Mouse", "Mule", "john", "molly", "Nightingale", "Opossum", "Ostrich", "Otter", "Owl", "Ox", "Oyster", "Panda", "Parrot", "Peafowl", "peacock", "Penguin", "Pheasant", "Pig", "Pigeon", "Platypus", "Porpoise", "Pronghorn", "Quail", "Rabbit", "Raccoon", "Rat", "Raven", "Reindeer", "Rhinoceros", "Sand", "Dollar", "Seal", "Seastar", "Urchin", "Shark", "Sheep", "ram", "Skunk", "Snake", "sparrow", "Spider", "Squid", "Squirrel", "Swallow", "Swan", "Termite", "Tiger", "tiger", "tigress", "Toad", "Trout", "Turkey", "Turtle", "Wallaby", "Walrus", "Wasp", "Weasel", "Whale", "Wolf", "Wombat", "Woodpecker", "Yak", "Yellow", "Jacket", "Zebra", "stallion", "mare"]

var defaultOptions = {}
module.exports = function(options2) {
	defaultOptions = options2 || {}
	return _generatePassword
}

var _generatePassword = function(options) {
	if(!options) options={}
	extend(options,defaultOptions)
  var separator;
	var numbers = (options.numbers === 0 ? 0 : options.numbers) || 3
	var mixCase = options.mixCase || defaultOptions.mixCase || true
	var padding = (options.padding === true? 1 : options.padding) || (Math.round(Math.random()*4))
	var maxSize = options.maxSize || false
	var optionSeparators = options.separators || "-_.";
	if(separatorsText === "false" || separatorsText === "false") {
		separator = ""
	} else {
		var separatorsText = (optionSeparators === true ? "-/:;()$&@.,?!'" : optionSeparators)
	  var separators = separatorsText.split("") 

		separator = separators[Math.floor(separators.length * Math.random())]		
	}

	var words = []
	words.push(adjectives[Math.floor(Math.random() * adjectives.length)])
	words.push(adjectives[Math.floor(Math.random() * adjectives.length)])
	words.push(animals[Math.floor(Math.random() * animals.length)])
	var num = Math.floor(Math.random()*numbers)
	for(var j = 0; j < words.length; j++) {
		var wordType = Math.floor(Math.random() * 3) + 1
		switch(wordType) {
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
	for(var num=numbers;num>0;num--) {
		password=password + Math.floor(Math.random() * 10)
			}


	for(var k=0;k<padding;k++) {
		password = separator+password+separator
	}
	var returning = ((!maxSize || password.length <= maxSize) && (!mixCase || /(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password))) ? password : _generatePassword({separators:options.separators, numbers:numbers, mixCase:mixCase, padding:(padding?--padding:padding), maxSize:maxSize, returnCount:options.returnCount});
	if(options.returnCount) {
		/*
		
			var capitalizationChance = mixCase? 0.92471:1

		  console.log(numberWithCommas(Math.floor(
			capitalizationChance * // estimation of percentage of how often word will get rejected because of capitalization
			adjectives.length * 3 * // three formats per word, uppercase, lowercase, or mixed
			adjectives.length * 3 * 
			animals.length * 3 * 
			Math.pow(10,numbers) * // the number 0 - maxNumber
			separators.length // number of separator characters
			)) + " possible password combinations"+(maxSize?" before applying your "+maxSize+" character limit.":"."))
		*/
	} else {
		return returning
	}
}

var extend = function(destination, source) {
    for (var property in source) {
        if (source.hasOwnProperty(property) && !destination.hasOwnProperty(property)) {
            destination[property] = source[property];
        }
    }
    return destination;
};
