import {effect, inject, Injectable, signal} from '@angular/core';
import { LocalstorageService } from './localstorage.service';

export type ThemeType = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeKey = 'APP_THEME';
  ls = inject(LocalstorageService);

  themeSignal = signal<ThemeType>('dark')

  constructor() {
    this.initThemeFromLocalstorage();

    effect(() => {
      this.updateRenderTheme();
    });
  }

  toggleTheme() {
    this.themeSignal.update(prev => this.themeSignal() === 'dark' ? 'light' : 'dark');
  }

  initThemeFromLocalstorage() {
    const savedTheme = this.ls.get<ThemeType>(this.themeKey);

    if (savedTheme) {
      this.themeSignal.set(savedTheme);
    }
  }

  updateRenderTheme() {
    document.body.setAttribute('data-theme', this.themeSignal());
    this.ls.set(this.themeKey, this.themeSignal());
  }

  isDartTheme() {
    return this.themeSignal() === 'dark';
  }

  getToggleButtonText() {
    return `Включить ${this.isDartTheme() ? 'светлую' : 'тёмную'} тему`
  }
}
