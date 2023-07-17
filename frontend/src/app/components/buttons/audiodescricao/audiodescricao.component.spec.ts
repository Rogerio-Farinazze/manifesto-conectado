import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiodescricaoComponent } from './audiodescricao.component';

describe('AudiodescricaoComponent', () => {
  let component: AudiodescricaoComponent;
  let fixture: ComponentFixture<AudiodescricaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudiodescricaoComponent]
    });
    fixture = TestBed.createComponent(AudiodescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
