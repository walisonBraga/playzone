import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

// Angular Material Modules
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCommonModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';

// Rotas da Aplicação
import { ZONA_USER_ROUTER } from './zona-user.routing';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatStepperModule,
    MatToolbarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatSelectModule,
    MatCommonModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatBadgeModule,
    MatTableModule,
    MatMenuModule,
    MatListModule,
    MatSortModule,
    MatTabsModule,
    MatIconModule,
    MatSnackBarModule,

    // Routing
    RouterModule.forChild(ZONA_USER_ROUTER),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ZonaUserModule { }
