import { Component, OnInit, Input } from '@angular/core';
import * as Tone from 'node_modules/tone';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  name = 'Angular Tone.js';
  synth:any;
  notes:string[] = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
	octives:number[] = [1,2,3,4,5,6];
	
	activePhaser: boolean;
	activeChorus: boolean;

	chorusTone = new Tone.Chorus(4, 2.5, 0.5);
	phaserTone = new Tone.Phaser({
		"frequency" : 2, 
		"octaves" : 2, 
		"baseFrequency" : 400
	}).toMaster();

 
	msdown:boolean = false;
	
	@Input() kick1: boolean;

  constructor() {
    this.synth = new Tone.PolySynth( Tone.Synth).toMaster();
	}
	
	ngOnInit(): void {
		this.activeChorus = false;
		this.activePhaser = false;
	}

  chorus() {
		if(this.activeChorus){
			this.synth.disconnect(this.chorusTone);
			this.activeChorus = false;
		}
		else{
			this.synth = new Tone.PolySynth(Tone.MonoSynth).toMaster().connect(this.chorusTone);
			this.activeChorus = true;
		}
  }

  reverb(){
    var reverb = new Tone.JCReverb(0.9).connect(Tone.Master);
    var delay = new Tone.FeedbackDelay(0.2); 
    this.synth = new Tone.DuoSynth().chain(delay, reverb);
  }

  phaser(){

		if(this.activePhaser){
			this.synth.disconnect(this.phaserTone);
			this.activePhaser = false;
		}
		else{
			this.synth.connect(this.phaserTone);
			this.activePhaser = true;
		}
    
  }

  msover(note){
    if(this.msdown){
      this.play(note);
    }
  }

  play(note){
     this.synth.triggerAttackRelease(note,"8n");
	}

}

