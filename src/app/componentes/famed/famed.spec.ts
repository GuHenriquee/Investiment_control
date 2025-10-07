import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Famed } from './famed';

describe('Famed', () => {
  let component: Famed;
  let fixture: ComponentFixture<Famed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Famed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Famed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
