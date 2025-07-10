import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AuthInterceptor } from './Core/Interceptor/authcathion.interceptor';
import { ErrorInterceptor } from './Core/Interceptor/Error.interceptor';
import { UserEffect } from './module/admin-user/Store/Effects/user.effect';
import { userReducer } from './module/admin-user/Store/Reducser/user.reducer';
import { AppReducer } from './Store/Reducer/reducer';
import { EffectCategory } from './module/category/Store/EffectCategory/EffecCategory';
import { categoriesReducer } from './module/category/Store/ReducerCategory/ReducerCategory';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ app: AppReducer }),
    EffectsModule.forRoot([]),

    EffectsModule.forFeature([UserEffect]),
    StoreModule.forFeature('user', userReducer),

    EffectsModule.forFeature([EffectCategory]),
StoreModule.forFeature('categoryFeaturesKey', categoriesReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
