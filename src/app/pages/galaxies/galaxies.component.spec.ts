import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxiesComponent } from './galaxies.component';

describe('GalaxiesComponent', () => {
  let component: GalaxiesComponent;
  let fixture: ComponentFixture<GalaxiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalaxiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalaxiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
