import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShellComponent } from './main-shell.component';

describe('MainShellComponent', () => {
  let component: MainShellComponent;
  let fixture: ComponentFixture<MainShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
