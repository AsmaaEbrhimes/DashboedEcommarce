import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './Core/Interceptor/authcathion.interceptor';
import { ErrorInterceptor } from './Core/Interceptor/Error.interceptor';
import { StoreModuleModule } from './Store/store-module/store-module.module';
import { SharedModule } from './shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CoreModule } from './Core/Interceptor/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModuleModule,
    SharedModule,
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
