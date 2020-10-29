import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ListsComponent} from './lists.component';
import {ListModule} from '../list/list.module';
import {RouterModule} from '@angular/router';
import {ListCreateModule} from '../list-create/list-create.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ListOverviewModule} from '../list-overview/list-overview.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexModule} from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    ListsComponent,
  ],
  exports: [
    ListsComponent,
  ],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    CommonModule,
    ListModule,
    RouterModule,
    ListCreateModule,
    MatProgressSpinnerModule,
    ListOverviewModule,
    MatGridListModule,
    FlexModule,
    MatListModule,
    MatDividerModule
  ],
})
export class ListsModule {
}