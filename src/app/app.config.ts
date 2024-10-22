import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
//import { FormlyTailwindcssModule } from './formly-tailwindcss.module'; // ajuste o caminho conforme necessário
import { importProvidersFrom } from '@angular/core';
import { FormlyTailwindcssModule } from '@notiz/formly-tailwindcss';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      ReactiveFormsModule,
      FormlyModule.forRoot({ extras: { lazyRender: true } }),
      FormlyTailwindcssModule
    ),]
};
