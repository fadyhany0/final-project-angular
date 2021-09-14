import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetaecherComponent } from './updatetaecher.component';

describe('UpdatetaecherComponent', () => {
  let component: UpdatetaecherComponent;
  let fixture: ComponentFixture<UpdatetaecherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetaecherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetaecherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
