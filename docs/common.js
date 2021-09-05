(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "H0g1":
/*!*******************************************!*\
  !*** ./src/app/providers/data.service.ts ***!
  \*******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");




const APIKEY = '3d8b309701a13f65b660fa2c64cdc517';
const BASEURL = 'http://api.openweathermap.org/data/2.5';
class DataService {
    constructor(http) {
        this.http = http;
        this.cityIds = [2643743, 2950158, 524894, 745044, 3117735];
    }
    getDataByIds() {
        const ids = this.cityIds.join();
        return this.http
            .get(`${BASEURL}/group?id=${ids}&appid=${APIKEY}&units=metric`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(`Error retrieving data. ${error.statusText || 'Unknown'} `);
        }));
    }
    getWeatherForeCast(city, noOfDays) {
        return this.http
            .get(`${BASEURL}/forecast?q=${city}&units=metric&appid=${APIKEY}&units=metric`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(`Error retrieving data. ${error.statusText || 'Unknown'} `);
        }));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map