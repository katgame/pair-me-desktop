import { CategoryCardComponent } from './category-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CategoryCardComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CategoryCardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pair-me-desktop'`, () => {
    const fixture = TestBed.createComponent(CategoryCardComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pair-me-desktop');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CategoryCardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('pair-me-desktop app is running!');
  });
});
