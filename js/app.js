//BASIC SYNTH FUNCTIONALITY FOR NOW
var synth = new Tone.Synth().toMaster();

function playSound(note, octave) {

    synth.triggerAttackRelease(note + octave, "8n");

}



