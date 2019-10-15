import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';
// import { FileManagerAllModule } from '@syncfusion/ej2-angular-filemanager';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTreeModule, MatIconModule, MatButtonModule } from '@angular/material';


@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		AngularFileUploaderModule,
		MatTreeModule,
		MatIconModule,
		MatButtonModule,
	],
	declarations: [
		AppComponent,
	],
	bootstrap: [AppComponent],
})
export class AppModule {
}
