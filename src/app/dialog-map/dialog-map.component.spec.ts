import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogMapComponent } from './dialog-map.component';

describe('DialogMapComponent', () => {
  let component: DialogMapComponent;
  let fixture: ComponentFixture<DialogMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [{provide : MatDialogRef, useValue : {}}, { provide: MAT_DIALOG_DATA, useValue: {} }],
      declarations: [ DialogMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
