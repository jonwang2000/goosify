var goosePicture = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Canada_goose_head_detail.JPG";
var spanPicture = 'url("https://upload.wikimedia.org/wikipedia/commons/e/e0/Canada_goose_head_detail.JPG")';

// Array of animals
var animals = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Boar",
  "Buffalo",
  "Butterfly",
  "Camel",
  "Capybara",
  "Caribou",
  "Cassowary",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Cobra",
  "Cockroach",
  "Cod",
  "Coyote",
  "Crab",
  "Crane",
  "Crocodile",
  "Crow",
  "Deer",
  "Dinosaur",
  "Dog",
  "Dogfish",
  "Dolphin",
  "Dove",
  "Dragonfly",
  "Duck",
  "Eagle",
  "Eel",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Gnat",
  "Goat",
  "Goldfish",
  "Goose",
  "Gorilla",
  "Grasshopper",
  "Gull",
  "Hamster",
  "Hare",
  "Hawk",
  "Hedgehog",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Human",
  "Hummingbird",
  "Hyena",
  "Ibis",
  "Jackal",
  "Jaguar",
  "Jellyfish",
  "Kangaroo",
  "Koala",
  "Lark",
  "Lemur",
  "Leopard",
  "Lion",
  "Llama",
  "Lobster",
  "Locust",
  "Magpie",
  "Mallard",
  "Manatee",
  "Mantis",
  "Meerkat",
  "Mink",
  "Mole",
  "Mongoose",
  "Monkey",
  "Moose",
  "Mosquito",
  "Mouse",
  "Mule",
  "Narwhal",
  "Octopus",
  "Opossum",
  "Ostrich",
  "Otter",
  "Owl",
  "Oyster",
  "Panther",
  "Parrot",
  "Peafowl",
  "Pelican",
  "Penguin",
  "Pig",
  "Pigeon",
  "Pony",
  "Porcupine",
  "Porpoise",
  "Quail",
  "Rabbit",
  "Raccoon",
  "Ram",
  "Rat",
  "Raven",
  "Reindeer",
  "Rhinoceros",
  "Salamander",
  "Salmon",
  "Sandpiper",
  "Sardine",
  "Scorpion",
  "Seahorse",
  "Seal",
  "Shark",
  "Sheep",
  "Shrew",
  "Skunk",
  "Snail",
  "Snake",
  "Sparrow",
  "Spider",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Stork",
  "Swallow",
  "Swan",
  "Termite",
  "Tiger",
  "Toad",
  "Trout",
  "Turkey",
  "Turtle",
  "Viper",
  "Vulture",
  "Walrus",
  "Wasp",
  "Weasel",
  "Whale",
  "Wildcat",
  "Wolf",
  "Wolverine",
  "Woodpecker",
  "Worm",
  "Yak",
  "Zebra"
]

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "goose") {
      changeGooseImgs();
    }
    if (request.message === "text") {
      changeAnimalText();
    }
  }
);

function changeGooseImgs() {
  var images = document.getElementsByTagName("img");

  for (var i = 0; i < images.length; ++i) {
    images[i].src = goosePicture;
    images[i].srcset = goosePicture;
  }

}

function changeAnimalText() {

  var elements = document.getElementsByTagName('*');

  for (var x = 0; x < animals.length; x++) {
    var replacer = new RegExp(animals[x], "gi");

    console.log(replacer);

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
          var text = node.nodeValue;

          var replacedText = text.replace(replacer, 'goose');


          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
      }
    }
  }
}