import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThAngularDemoLibraryComponent } from './th-angular-demo-library.component';

describe('ThAngularDemoLibraryComponent', () => {
  let component: ThAngularDemoLibraryComponent;
  let fixture: ComponentFixture<ThAngularDemoLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThAngularDemoLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThAngularDemoLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
