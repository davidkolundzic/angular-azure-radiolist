import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatRadioGroup } from '@angular/material/radio';
import { MatRadioButton } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet, 
      HomeComponent, 
      MatIconModule, 
      MatCardModule, 
      MatButtonModule, 
      MatRadioModule, 
      MatRadioGroup, 
      MatRadioButton, 
      MatSliderModule ]
})
export class AppComponent {

  title = 'angular-azure-radiolist';

  openRadioStation(radioAddress: string) {
    window.open('http://radiostaticplayer.z6.web.core.windows.net', '_blank', 'location=yes,height=720,width=520,scrollbars=no,status=no');
  }
  openRadio() {
    window.open('http://tanjakolundzic-001-site1.etempurl.com/', '_blank', 'location=yes,height=720,width=520,scrollbars=no,status=no');
  }
}
