import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.css',
})
export class LeftSidebar {
  isLeftsidebarCollapsed = input.required<boolean>();
  isLeftsidebarCollapsedChanged = output<boolean>();

  items = [
    {
      label: 'Dashboard',
      icon: 'fas fa-home',
      routeLink: '/dashboard',
    },

    {
      label: 'Products',
      icon: 'fas fa-box-open',
      routeLink: '/products',
    },

    {
      label: 'Pages',
      icon: 'fas fa-file',
      routeLink: '/pages',
    },

    {
      label: 'Settings',
      icon: 'fas fa-cog',
      routeLink: '/settings',
    },
  ];

  toggleCollapse(): void{
    this.isLeftsidebarCollapsedChanged.emit(!this.isLeftsidebarCollapsed());
  }

  closeSidebarNav(): void {
    this.isLeftsidebarCollapsedChanged.emit(true);
  } 
}
