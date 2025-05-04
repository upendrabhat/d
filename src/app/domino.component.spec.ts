import { TestBed } from '@angular/core/testing';
import { DominoComponent } from './domino.component'; // Import the DominoComponent

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DominoComponent], // Declare DominoComponent
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DominoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});