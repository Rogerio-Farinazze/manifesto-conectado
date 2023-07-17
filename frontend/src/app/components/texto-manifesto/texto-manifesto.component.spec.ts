import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoManifestoComponent } from './texto-manifesto.component';

describe('TextoManifestoComponent', () => {
  let component: TextoManifestoComponent;
  let fixture: ComponentFixture<TextoManifestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoManifestoComponent]
    });
    fixture = TestBed.createComponent(TextoManifestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
