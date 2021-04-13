import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandHotComponent } from './recommand-hot.component';

describe('RecommandHotComponent', () => {
  let component: RecommandHotComponent;
  let fixture: ComponentFixture<RecommandHotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommandHotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommandHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
