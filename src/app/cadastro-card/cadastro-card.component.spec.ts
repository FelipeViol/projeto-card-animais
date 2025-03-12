import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCardComponent } from './cadastro-card.component';

describe('CadastroCardComponent', () => {
  let component: CadastroCardComponent;
  let fixture: ComponentFixture<CadastroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
