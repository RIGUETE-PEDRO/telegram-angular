import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardButtonCacelComponent } from './card-button-cacel.component';

describe('CardButtonCacelComponent', () => {
  let component: CardButtonCacelComponent;
  let fixture: ComponentFixture<CardButtonCacelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardButtonCacelComponent]
    });
    fixture = TestBed.createComponent(CardButtonCacelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
