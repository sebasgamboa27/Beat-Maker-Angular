import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  kick = new Tone.Player("./drums/kick-electro01.wav").toMaster();
  snare = new Tone.Player("./drums/snare-lofi02.wav").toMaster();
  clap = new Tone.Player("./drums/clap-analog.wav").toMaster();
  crash = new Tone.Player("./drums/crash-808.wav").toMaster();
  tom = new Tone.Player("./drums/tom-808.wav").toMaster();
  openhat = new Tone.Player("./drums/openhat-808.wav").toMaster();
  cowbell = new tone.Player("./drums/cowbell-808.wav").toMaster();
	hihat = new Tone.Player("./drums/hihat-digital.wav").toMaster();
  index = 0;


  constructor() { }

  ngOnInit(): void {
		const synth = new Tone.Player();
		
    synth.triggerAttackRelease("C4", "8n");
  }

  sequencer() {
    
    Tone.Transport.scheduleRepeat(this.repeat, "8n");
    Tone.Transport.start();
  }

  repeat() {
		let step = this.index % 8;
		let kickInputs = document.querySelector(
			`.kick .pad:nth-child(${step + 1}) input` //changed the format a bit to access the nth pad and then the input checkbox inside the nth pad
		);
		let snareInputs = document.querySelector(
			`.snare .pad:nth-child(${step + 1}) input`
		);
		let clapInputs = document.querySelector(
			`.clap .pad:nth-child(${step + 1}) input`
		);
		let crashInputs = document.querySelector(
			`.crash .pad:nth-child(${step + 1}) input`
		);
		let tomInputs = document.querySelector(`
        .tom .pad:nth-child(${step + 1}) input`);
		let openhatInputs = document.querySelector(
			`.openhat .pad:nth-child(${step + 1}) input`
		);
		let cowbellInputs = document.querySelector(
			`.cowbell .pad:nth-child(${step + 1}) input`
		);
		let hihatInputs = document.querySelector(
			`.hihat .pad:nth-child(${step + 1}) input`
		);
		if (kickInputs.checked) {
			this.kick.start();
		}
		if (snareInputs.checked) {
			this.snare.start();
		}
		if (clapInputs.checked) {
			this.clap.start();
		}
		if (crashInputs.checked) {
			this.crash.start();
		}
		if (tomInputs.checked) {
			this.tom.start();
		}
		if (openhatInputs.checked) {
			this.openhat.start();
		}
		if (cowbellInputs.checked) {
			this.cowbell.start();
		}
		if (hihatInputs.checked) {
			this.hihat.start();
		}
		this.index++;
  }

  changeColor(beat, index){
    let pad = document.querySelector(`.${beat} .pad:nth-child(${index}) input`);
    if (pad.checked === true) {
    } else {
    }
  
  }
}
