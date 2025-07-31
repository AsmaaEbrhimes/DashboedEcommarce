// ==================================== Facade Pattern=========================================== //
// 1- prevent Of dealing with complax opertions

import { Injectable } from '@angular/core';
import { StorageType } from '../interfaces/storage-type.enum';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage: Storage = localStorage; // Default

  use(type: StorageType): void {
    this.storage = type === StorageType.Local ? localStorage : sessionStorage;
  }

  set<T>(key: string, data: T): void {
    this.storage.setItem(key, JSON.stringify(data));
  }

  get<T>(key: string): T | null {
    const item = this.storage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}

