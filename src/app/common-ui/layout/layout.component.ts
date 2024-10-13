import {Component, inject, signal} from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {ThemeService, ThemeType} from '../../data/theme.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SidebarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  themeService = inject(ThemeService);
}
