import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailsComponent } from './container/details.component';
import { DetailsRoutingModule } from './details-routing.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, DetailsRoutingModule],
})
export class DetailsModule {}
