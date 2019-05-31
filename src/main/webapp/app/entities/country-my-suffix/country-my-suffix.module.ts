import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { JhipsterJava11SharedModule } from 'app/shared';
import {
  CountryMySuffixComponent,
  CountryMySuffixDetailComponent,
  CountryMySuffixUpdateComponent,
  CountryMySuffixDeletePopupComponent,
  CountryMySuffixDeleteDialogComponent,
  countryRoute,
  countryPopupRoute
} from './';

const ENTITY_STATES = [...countryRoute, ...countryPopupRoute];

@NgModule({
  imports: [JhipsterJava11SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CountryMySuffixComponent,
    CountryMySuffixDetailComponent,
    CountryMySuffixUpdateComponent,
    CountryMySuffixDeleteDialogComponent,
    CountryMySuffixDeletePopupComponent
  ],
  entryComponents: [
    CountryMySuffixComponent,
    CountryMySuffixUpdateComponent,
    CountryMySuffixDeleteDialogComponent,
    CountryMySuffixDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterJava11CountryMySuffixModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
