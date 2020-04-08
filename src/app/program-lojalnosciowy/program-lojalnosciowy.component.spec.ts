import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProgramLojalnosciowyComponent} from './program-lojalnosciowy.component';

describe('ProgramLojalnosciowyComponent', () => {
  let component: ProgramLojalnosciowyComponent;
  let fixture: ComponentFixture<ProgramLojalnosciowyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramLojalnosciowyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramLojalnosciowyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
