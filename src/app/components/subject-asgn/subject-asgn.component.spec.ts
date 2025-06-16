import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAsgnComponent } from './subject-asgn.component';

describe('SubjectAsgnComponent', () => {
  let component: SubjectAsgnComponent;
  let fixture: ComponentFixture<SubjectAsgnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectAsgnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectAsgnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
