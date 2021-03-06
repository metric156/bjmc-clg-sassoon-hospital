import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { DeansComponent } from './deans/deans.component';
import { OrganogramComponent } from './organogram/organogram.component';
import { HistoryComponent } from './history/history.component';
import { CommitteeComponent } from './committee/committee.component';
import { UniversityComponent } from './university/university.component';
import { RecognitionComponent } from './recognition/recognition.component';


@NgModule({
  declarations: [DeansComponent, OrganogramComponent, HistoryComponent, CommitteeComponent, UniversityComponent, RecognitionComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
