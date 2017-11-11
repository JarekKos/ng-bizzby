import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeTab = 0;
  onChangeSelectedTab(ev) {
    this.activeTab = ev.index;
  }

  isTabActive(index: number): boolean {
    return this.activeTab === index;
  }
}
