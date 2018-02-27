import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBlocksComponent } from './view-all-blocks.component';

describe('ViewAllBlocksComponent', () => {
  let component: ViewAllBlocksComponent;
  let fixture: ComponentFixture<ViewAllBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
