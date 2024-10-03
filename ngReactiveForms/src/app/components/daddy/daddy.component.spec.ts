import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaddyComponent } from './daddy.component';

describe('DaddyComponent', () => {
  let component: DaddyComponent;
  let fixture: ComponentFixture<DaddyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaddyComponent]
    });
    fixture = TestBed.createComponent(DaddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
