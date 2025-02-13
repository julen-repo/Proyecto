import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasFormComponentComponent } from './mesas-form-component.component';

describe('MesasFormComponentComponent', () => {
  let component: MesasFormComponentComponent;
  let fixture: ComponentFixture<MesasFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesasFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesasFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
