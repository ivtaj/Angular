import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteItemComponent } from '../delete-item/delete-item.component';

@Component({
  selector: 'app-local-storage-data',
  standalone: true,
  imports: [CommonModule, DeleteItemComponent],
  templateUrl: './local-storage-data.component.html',
  styleUrls: ['./local-storage-data.component.css']
})
export class LocalStorageDataComponent {
  storedData: any[] = [];
  
  constructor() { }
  
  ngOnInit(): void {
    const storedData = localStorage.getItem('datas');
    if (storedData) {
      this.storedData = JSON.parse(storedData);
      if (!Array.isArray(this.storedData)) {
        // Si los datos no son un array, intenta convertirlos en uno
        this.storedData = [this.storedData];
      }
    }
  }
  
  deleteItem(item: any): void {
    const index = this.storedData.indexOf(item);
    if (index !== -1) {
      this.storedData.splice(index, 1);
      localStorage.setItem('datas', JSON.stringify(this.storedData));
    }
    // Limpiar localStorage si no quedan datos
    if (this.storedData.length === 0) {
      localStorage.removeItem('datas');
    }
  }
}