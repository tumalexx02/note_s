import { Component } from '@angular/core';
import {NoteCardComponent} from '../../note-card/note-card.component';

@Component({
  selector: 'app-sidebar-list',
  standalone: true,
  imports: [
    NoteCardComponent
  ],
  templateUrl: './sidebar-list.component.html',
  styleUrl: './sidebar-list.component.scss'
})
export class SidebarListComponent {

}
