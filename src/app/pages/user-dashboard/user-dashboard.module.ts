import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard.component';
import {
  NbAlertModule, NbBadgeModule, NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbListModule, NbSelectModule, NbStepperModule,
  NbTableModule, NbToastrModule, NbToggleModule,
  NbTreeGridModule,
} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GbListComponent } from './gb-list/gb-list.component';
import { GbVideoComponent } from './gb-video/gb-video.component';
import { GbMapComponent } from './gb-map/gb-map.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { GbSensorsComponent } from './gb-sensors/gb-sensors.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {LeafletDrawModule} from '@asymmetrik/ngx-leaflet-draw';
import {ComponentsModule} from '../../@components/components.module';
import { AdminComponent } from './admin/admin.component';


const NB_MODULES = [
  NbCardModule,
  NbListModule,
  NbTreeGridModule,
  NbIconModule,
  NbTreeGridModule,
  NbInputModule,
  ThemeModule,
  NbTableModule,
  NbAlertModule,
  NbIconModule,
  NbButtonModule,
  NbToastrModule,
  NbInputModule,
  NbStepperModule,
  NbAlertModule,
  NbSelectModule,
];

@NgModule({
  declarations: [
    UserDashboardComponent,
    GbListComponent,
    GbVideoComponent,
    GbMapComponent,
    GbSensorsComponent,
    AdminComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    LeafletModule,
    LeafletDrawModule,
    ...NB_MODULES,
    NbBadgeModule,
    ComponentsModule,
    NbToggleModule,
  ],

  providers: [
  ],
})
export class UserDashboardModule { }
