import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import {SidebarListComponent} from './sidebar-list/sidebar-list.component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarListComponent,
    NgClass
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @ViewChild('search') searchElement?: ElementRef;

  minWidth = 250
  maxWidth = 400
  mediumWidth = (this.maxWidth + this.minWidth) / 2

  isShowSearch = signal<boolean>(false);
  isDragging = signal<boolean>(false);
  sidebarWidth = signal<number>(this.mediumWidth);

  toggleSearch() {
    this.isShowSearch.update(prev => !prev)
    setTimeout(() => {
      if (this.searchElement) {
        this.searchElement.nativeElement.focus();
      }
    })
  }

  changeDraggable(event: MouseEvent, val: boolean) {
    event.preventDefault();
    this.isDragging.set(val);
  }

  changeSidebarWidth(event: MouseEvent) {
    event.preventDefault();

    if (this.isDragging()) {
      const x = event.clientX;

      this.sidebarWidth.set(x);
    }
  }
}
