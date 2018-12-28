import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng6TextRestrictionsComponent } from './ng6-text-restrictions.component';

describe('Ng6TextRestrictionsComponent', () => {
  let component: Ng6TextRestrictionsComponent;
  let fixture: ComponentFixture<Ng6TextRestrictionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng6TextRestrictionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng6TextRestrictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
