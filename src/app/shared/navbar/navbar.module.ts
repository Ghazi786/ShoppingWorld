import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [ RouterModule, CommonModule, MatButtonModule,MatInputModule,FormsModule ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
})

export class NavbarModule {
   
}
