import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ContractsTableComponent } from './contract/contracts-table/contracts-table.component'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { NavigationComponent } from './shell/navigation/navigation.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { ContractFormComponent } from './contract/contract-form/contract-form.component'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatRadioModule } from '@angular/material/radio'
import { MatCardModule } from '@angular/material/card'
import { MatMenuModule } from '@angular/material/menu'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ShellComponent } from './shell/shell.component'
import { ToolbarComponent } from './shell/toolbar/toolbar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FooterShellItem, HeaderShellItem, LeftShellItem, RightShellItem, MainShellItem } from './shell/shell.directive'

@NgModule({
	declarations: [
		AppComponent,
		ContractsTableComponent,
		NavigationComponent,
		ContractFormComponent,
		ShellComponent,
		ToolbarComponent,
		HeaderShellItem,
		LeftShellItem,
		MainShellItem,
		RightShellItem,
		FooterShellItem
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatInputModule,
		MatSelectModule,
		MatRadioModule,
		MatCardModule,
		MatMenuModule,
		MatSlideToggleModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
