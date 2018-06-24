import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcomComponent } from './subcom.component';

describe('SubcomComponent', () => {
  let component: SubcomComponent;
  let fixture: ComponentFixture<SubcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
