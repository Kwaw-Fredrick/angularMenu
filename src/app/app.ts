import { Component, HostListener, OnInit, signal } from '@angular/core';
import { LeftSidebar } from './left-sidebar/left-sidebar';
import { Main } from './main/main';

@Component({
  selector: 'app-root',
  imports: [LeftSidebar, Main],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('angularForms');

  isLeftsidebarCollapsed = signal<boolean>(false);

  widthScreen = signal<number>(window.innerWidth);

  @HostListener('window:resize')
  onResize() {
    this.widthScreen.set(window.innerWidth);

    if (this.widthScreen() < 768) {
      this.isLeftsidebarCollapsed.set(true);
    }
  }

  ngOnInit(): void {
    this.isLeftsidebarCollapsed.set(this.widthScreen() < 768);
    }

  isleftsidebarCollapsedChanged(isLeftsidebarCollapsed: boolean): void {
    this.isLeftsidebarCollapsed.set(isLeftsidebarCollapsed);
  }
}
