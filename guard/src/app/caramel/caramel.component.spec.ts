import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaramelComponent } from './caramel.component';

describe('CaramelComponent', () => {
  let component: CaramelComponent;
  let fixture: ComponentFixture<CaramelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaramelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaramelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
