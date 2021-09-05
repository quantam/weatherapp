import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { DataService } from '../../providers/data.service';
import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [DataService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch from api and filter data', () => {
    spyOn(dataService, 'getWeatherForeCast').and.returnValue(
      of({
        list: [
          {
            dt_txt: '2021-09-06 09:00:00',
            main: { temp: 22.4 },
          },
          {
            dt_txt: '2021-09-06 11:00:00',
            main: { temp: 22.4 },
          },
        ],
      })
    );
    component.getData('berlin');
    expect(dataService.getWeatherForeCast).toHaveBeenCalled();
    expect(component.forecast.length).toBe(1);
  });
});
