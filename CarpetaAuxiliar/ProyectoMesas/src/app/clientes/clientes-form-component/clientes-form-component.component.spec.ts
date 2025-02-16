import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesFormComponentComponent } from './clientes-form-component.component';

describe('ClientesFormComponentComponent', () => {
  let component: ClientesFormComponentComponent;
  let fixture: ComponentFixture<ClientesFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
