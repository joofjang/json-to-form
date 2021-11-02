import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirrorFormComponent } from './mirror-form.component';

describe('MirrorFormComponent', () => {
  let component: MirrorFormComponent;
  let fixture: ComponentFixture<MirrorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MirrorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MirrorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
