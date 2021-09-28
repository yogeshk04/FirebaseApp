import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AngularFireModule } from '@angular/fire';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { NavBarComponent } from './comps/nav-bar/nav-bar.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { HomeComponent } from './comps/home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BlogEditorComponent } from './comps/blog-editor/blog-editor.component';
import { ExcerptPipe } from './customPipes/excerpt.pipe';
import { SlugPipe } from './customPipes/slug.pipe';
import { BlogCardComponent } from './comps/blog-card/blog-card.component';
import { BlogComponent } from './comps/blog/blog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginatorComponent } from './comps/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BlogEditorComponent,
    ExcerptPipe,
    SlugPipe,
    BlogCardComponent,
    BlogComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    FormsModule,
    CKEditorModule,
    NgxPaginationModule,
    NgMaterialModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'addpost', component: BlogEditorComponent },
      { path: 'blog/:id/:slug', component: BlogComponent },
      { path: 'editpost/:id', component: BlogEditorComponent },
      { path: 'page/:pagenum', component: HomeComponent },
      { path: '**', component: HomeComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
