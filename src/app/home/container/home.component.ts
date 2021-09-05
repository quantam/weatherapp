import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../../providers/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  weatherInfos$: Observable<any>;
  constructor(private dataService: DataService, private router: Router) {
    this.weatherInfos$ = this.dataService.getDataByIds();
  }

  ngOnInit(): void {}

  goToDetails(cityname: string) {
    this.router.navigate(['/details', cityname]);
  }
}
