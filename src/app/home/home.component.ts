import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RadioPlayerService } from '../services/radio-player.service';

@Component({
  selector: 'radio-home',
  standalone: true,
  imports: [AsyncPipe, MatIconModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  musicPlaying$ = this.playerService.playing$;
  constructor(private playerService: RadioPlayerService) { }

  play(url: string) {
    this.playerService.play(url);
  }
  stop() {
    this.playerService.stop();
  }

}
