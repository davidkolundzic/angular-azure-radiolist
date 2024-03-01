import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-azure-radiolist';

  openRadioStation(radioAddress: string) {
    window.open('http://radiostaticplayer.z6.web.core.windows.net', '_blank', 'location=yes,height=720,width=520,scrollbars=no,status=no');
  }
}
