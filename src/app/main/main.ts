import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterModule, CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  isLeftsidebarCollapsed = input.required<boolean>();

  screenWidth = input.required<number>();

  sizeClass = computed(() => {
    const isLeftsidebarCollapsed = this.isLeftsidebarCollapsed();
    if(isLeftsidebarCollapsed){
      return '';
    }

    return this.screenWidth() > 768 ? 'body-trimmed' : 'body-md-screen'
  })



}
