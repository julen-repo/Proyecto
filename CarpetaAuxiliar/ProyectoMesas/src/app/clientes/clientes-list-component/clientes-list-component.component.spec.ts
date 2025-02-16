import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesListComponentComponent } from './clientes-list-component.component';

describe('ClientesListComponentComponent', () => {
  let component: ClientesListComponentComponent;
  let fixture: ComponentFixture<ClientesListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
