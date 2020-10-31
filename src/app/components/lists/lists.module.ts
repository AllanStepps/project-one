import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListsComponent} from './lists.component';
import {ListCreateModule} from '../list-create/list-create.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ListOverviewModule} from '../list-overview/list-overview.module';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    ListsComponent,
  ],
  exports: [
    ListsComponent,
  ],
  imports: [
    CommonModule,
    ListCreateModule,
    ListOverviewModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
})
export class ListsModule {
}
