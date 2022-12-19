import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeFormComponent } from './forms/recipe-form/recipe-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, RecipeFormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp({
    //   apiKey: '<your-api-key>',
    //   authDomain: '<your-auth-domain>',
    //   databaseURL: '<your-database-url>',
    //   projectId: '<your-project-id>',
    //   storageBucket: '<your-storage-bucket>',
    //   messagingSenderId: '<your-messaging-sender-id>',
    // }),
    // AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
