import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandNewComponent } from './recommand-new.component';

describe('RecommandNewComponent', () => {
  let component: RecommandNewComponent;
  let fixture: ComponentFixture<RecommandNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommandNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommandNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
