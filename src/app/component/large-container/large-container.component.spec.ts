import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeContainerComponent } from './large-container.component';

describe('LargeContainerComponent', () => {
  let component: LargeContainerComponent;
  let fixture: ComponentFixture<LargeContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LargeContainerComponent]
    });
    fixture = TestBed.createComponent(LargeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
