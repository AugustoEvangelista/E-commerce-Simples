import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showBanner: boolean = JSON.parse(localStorage.getItem('showBanner') || 'true');

  toggleBanner() {
    this.showBanner = !this.showBanner;
    localStorage.setItem('showBanner', JSON.stringify(this.showBanner));
  }
}
