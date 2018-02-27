import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneBlockComponent } from './view-one-block.component';

describe('ViewOneBlockComponent', () => {
  let component: ViewOneBlockComponent;
  let fixture: ComponentFixture<ViewOneBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOneBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOneBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
