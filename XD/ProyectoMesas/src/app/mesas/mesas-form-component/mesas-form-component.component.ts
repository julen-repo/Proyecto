import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MesasService } from '../mesas-service.service';

@Component({
  selector: 'app-mesas-form',
  templateUrl: './mesas-form.component.html',
  styleUrls: ['./mesas-form.component.css']
})
export class MesasFormComponent implements OnInit {

  @Input() idMesa: string = '';
  mesaForm!: FormGroup;
  isEditMode = false; // Para determinar si estamos en modo de edición o creación

  constructor(private fb: FormBuilder, private mesasService: MesasService) {
  }

  ngOnInit(): void {

    this.mesaForm = this.fb.group({
      tamano: ['', Validators.required],
    });

    if (this.isEditMode) {
      
    }
  }

  onSubmit(): void {
    if (this.mesaForm.valid) {
      const formData = this.mesaForm.value;
      if (this.isEditMode) {
        this.mesasService.updateMesa(formData.id).subscribe(response => {
          console.log('Mesa actualizada', response);
        });
      } else {
        this.mesasService.createMesa(formData.id).subscribe(response => {
          console.log('Mesa creada', response);
        });
      }
    }
  }
}
