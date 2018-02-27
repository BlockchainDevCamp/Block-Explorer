import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneTransactionComponent } from './view-one-transaction.component';

describe('ViewOneTransactionComponent', () => {
  let component: ViewOneTransactionComponent;
  let fixture: ComponentFixture<ViewOneTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOneTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOneTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
