import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CARComponent } from './car.component';

describe('CARComponent', () => {
  let component: CARComponent;
  let fixture: ComponentFixture<CARComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CARComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
