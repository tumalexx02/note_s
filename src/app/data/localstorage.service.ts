import { Injectable } from '@angular/core';
import {ThemeType} from './theme.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  get<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value) as T;
    }
    return null;
  }

  set(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
