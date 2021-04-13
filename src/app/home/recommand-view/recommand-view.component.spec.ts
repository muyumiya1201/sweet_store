import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandViewComponent } from './recommand-view.component';

describe('RecommandViewComponent', () => {
  let component: RecommandViewComponent;
  let fixture: ComponentFixture<RecommandViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommandViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommandViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
