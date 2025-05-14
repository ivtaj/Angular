import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  userDetails = { name: '' };

  constructor() {
    // Verificar si ya hay datos en localStorage y cargarlos si es así
    const storedData = localStorage.getItem('datas');
    if (storedData) {
      this.userDetails = JSON.parse(storedData);
    }
  }

  submitForm(form: any): void {
    if (form.valid) {
      console.log('Form data:', this.userDetails);
      // Obtener los datos previos del localStorage
      let storedData: any[] = JSON.parse(localStorage.getItem('datas') || '[]');
      // Agregar los nuevos detalles del usuario
      storedData.push(this.userDetails);
      // Guardar el array actualizado en localStorage
      localStorage.setItem('datas', JSON.stringify(storedData));
      console.log('Data saved:', storedData);
    }
  }
}
