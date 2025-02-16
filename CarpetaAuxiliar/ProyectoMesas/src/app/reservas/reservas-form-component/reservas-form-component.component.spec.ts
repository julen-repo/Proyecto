import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasFormComponentComponent } from './reservas-form-component.component';

describe('ReservasFormComponentComponent', () => {
  let component: ReservasFormComponentComponent;
  let fixture: ComponentFixture<ReservasFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservasFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservasFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
