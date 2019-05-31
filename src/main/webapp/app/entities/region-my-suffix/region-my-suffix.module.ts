import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { JhipsterJava11SharedModule } from 'app/shared';
import {
  RegionMySuffixComponent,
  RegionMySuffixDetailComponent,
  RegionMySuffixUpdateComponent,
  RegionMySuffixDeletePopupComponent,
  RegionMySuffixDeleteDialogComponent,
  regionRoute,
  regionPopupRoute
} from './';

const ENTITY_STATES = [...regionRoute, ...regionPopupRoute];

@NgModule({
  imports: [JhipsterJava11SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    RegionMySuffixComponent,
    RegionMySuffixDetailComponent,
    RegionMySuffixUpdateComponent,
    RegionMySuffixDeleteDialogComponent,
    RegionMySuffixDeletePopupComponent
  ],
  entryComponents: [
    RegionMySuffixComponent,
    RegionMySuffixUpdateComponent,
    RegionMySuffixDeleteDialogComponent,
    RegionMySuffixDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterJava11RegionMySuffixModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
