import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MesasService } from '../mesas-service.service';

@Component({
  selector: 'app-mesas-form',
  templateUrl: './mesas-form.component.html',
  styleUrls: ['./mesas-form.component.css']
})
export class MesasFormComponent implements OnInit {
  mesaForm: FormGroup;
  isEditMode = false;

  constructor(private fb: FormBuilder, private mesasService: MesasService) {
    this.mesaForm = this.fb.group({
      id: ['', Validators.required],
    });
  }

  ngOnInit(): void {

    if (this.isEditMode) {
      // Lógica para cargar datos de la mesa y rellenar el formulario
    }
  }

  onSubmit(): void {
    if (this.mesaForm.valid) {
      const formData = this.mesaForm.value;
      if (this.isEditMode) {
        this.mesasService.updateMesa(formData.id).subscribe((response: any) => {
          console.log('Mesa actualizada', response);
        });
      } else {
        this.mesasService.createMesa(formData.id).subscribe((response: any) => {
          console.log('Mesa creada', response);
        });
      }
    }
  }
}
