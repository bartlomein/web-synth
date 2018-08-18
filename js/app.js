//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();

function playSound(note) {
    console.log(note);
    synth.triggerAttackRelease(note+"4", "8n");

}
function playSoundOctaveHigher(note) {
    console.log(note);
    synth.triggerAttackRelease(note + "5", "8n");

}


