import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemeSolaireComponent } from './systeme-solaire.component';



describe('SystemeSolaireComponent', () => {
  let component: SystemeSolaireComponent;
  let fixture: ComponentFixture<SystemeSolaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemeSolaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemeSolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
