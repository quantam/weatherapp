import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../../providers/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  forecast: any;
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.getData(params.get('city'));
    });
  }

  getData(city: any) {
    this.dataService.getWeatherForeCast(city, 5).subscribe((data: any) => {
      this.forecast = data?.list.filter((item: any) =>
        item.dt_txt.includes('09:00:00')
      );
    });
  }
}
