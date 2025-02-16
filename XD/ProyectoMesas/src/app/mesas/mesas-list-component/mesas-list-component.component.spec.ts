import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasListComponentComponent } from './mesas-list-component.component';

describe('MesasListComponentComponent', () => {
  let component: MesasListComponentComponent;
  let fixture: ComponentFixture<MesasListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesasListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesasListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
