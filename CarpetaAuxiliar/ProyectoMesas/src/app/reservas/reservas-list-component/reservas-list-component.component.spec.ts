import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasListComponentComponent } from './reservas-list-component.component';

describe('ReservasListComponentComponent', () => {
  let component: ReservasListComponentComponent;
  let fixture: ComponentFixture<ReservasListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservasListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservasListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
