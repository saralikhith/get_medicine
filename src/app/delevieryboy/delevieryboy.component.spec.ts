import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelevieryboyComponent } from './delevieryboy.component';

describe('DelevieryboyComponent', () => {
  let component: DelevieryboyComponent;
  let fixture: ComponentFixture<DelevieryboyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelevieryboyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelevieryboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
