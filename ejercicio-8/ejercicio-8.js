var talk = talky;

var cat = {
    speak: talk,
    sound: 'miau'
}

var dog = {
    speak: cat.speak,
    sound: 'wof'
}

function talky() {
    console.log(this.sound);
}

cat.speak.call(dog);

function callSpeak() {
    return cat.speak.call(dog);
}

export { callSpeak };
