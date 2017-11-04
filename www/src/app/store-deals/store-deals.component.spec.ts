import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDealsComponent } from './store-deals.component';

describe('StoreDealsComponent', () => {
  let component: StoreDealsComponent;
  let fixture: ComponentFixture<StoreDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
