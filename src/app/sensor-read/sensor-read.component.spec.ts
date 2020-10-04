import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SensorReadComponent } from './sensor-read.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('SensorReadComponent', () => {
  let component: SensorReadComponent;
  let fixture: ComponentFixture<SensorReadComponent>;
  let compiled: HTMLElement;
  let httpClient;
  let httpTestingController;

  beforeEach(async () => {
    const tb = await TestBed.configureTestingModule({
      declarations: [ SensorReadComponent ],
      imports: [ HttpClientTestingModule ],
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    tb.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorReadComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 columns', () => {
    expect(compiled.querySelectorAll('td').length).toBe(5);
  });
});
