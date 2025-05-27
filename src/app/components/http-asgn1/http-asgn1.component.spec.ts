import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpAsgn1Component } from './http-asgn1.component';

describe('HttpAsgn1Component', () => {
  let component: HttpAsgn1Component;
  let fixture: ComponentFixture<HttpAsgn1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpAsgn1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpAsgn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
