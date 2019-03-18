import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CluckComponent } from './cluck.component';

describe('CluckComponent', () => {
  let component: CluckComponent;
  let fixture: ComponentFixture<CluckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CluckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CluckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
