import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavBarrComponent } from './nav-barr.component';

describe('NavBarrComponent', () => {
  let component: NavBarrComponent;
  let fixture: ComponentFixture<NavBarrComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NavBarrComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
