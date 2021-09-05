import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const APIKEY = '3d8b309701a13f65b660fa2c64cdc517';
const BASEURL = 'http://api.openweathermap.org/data/2.5';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private cityIds = [2643743, 2950158, 524894, 745044, 3117735];
  constructor(private readonly http: HttpClient) {}

  getDataByIds() {
    const ids = this.cityIds.join();
    return this.http
      .get(`${BASEURL}/group?id=${ids}&appid=${APIKEY}&units=metric`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(
            `Error retrieving data. ${error.statusText || 'Unknown'} `
          );
        })
      );
  }

  getWeatherForeCast(city: string, noOfDays: number) {
    return this.http
      .get(
        `${BASEURL}/forecast?q=${city}&units=metric&appid=${APIKEY}&units=metric`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(
            `Error retrieving data. ${error.statusText || 'Unknown'} `
          );
        })
      );
  }
}
