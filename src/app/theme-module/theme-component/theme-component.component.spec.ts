import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeComponentComponent } from './theme-component.component';

describe('ThemeComponentComponent', () => {
  let component: ThemeComponentComponent;
  let fixture: ComponentFixture<ThemeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
