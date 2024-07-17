import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodleCatComponent } from './doodle-cat.component';

describe('DoodleCatComponent', () => {
  let component: DoodleCatComponent;
  let fixture: ComponentFixture<DoodleCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoodleCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoodleCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
