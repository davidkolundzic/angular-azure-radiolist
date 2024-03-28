import { Injectable } from '@angular/core';
import { Howl } from 'howler';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RadioPlayerService {
  private sound: Howl | undefined;

  private playingSubject = new BehaviorSubject<boolean>(false); 
  playing$ = this.playingSubject.asObservable();

  constructor() {}

  play(url: string) {
    if (this.sound) {
      this.sound.stop();
    }

    this.sound = new Howl({
      src: [url],
      html5: true,
    });

    this.sound.volume(0);
    this.sound?.play();
    this.sound.once('play', () => {
      this.sound?.fade(0, 1, 1000);
    });
    
    // this.sound.play();
    this.playingSubject.next(true);
  }

  stop() {
    if (this.sound) {
      this.sound.fade(1, 0, 1000);
      this.sound.once('fade', () => {
        this.sound?.stop();
      });
      this.playingSubject.next(false);
    }
  }
}
