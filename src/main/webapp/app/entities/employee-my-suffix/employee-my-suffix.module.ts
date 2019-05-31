import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { JhipsterJava11SharedModule } from 'app/shared';
import {
  EmployeeMySuffixComponent,
  EmployeeMySuffixDetailComponent,
  EmployeeMySuffixUpdateComponent,
  EmployeeMySuffixDeletePopupComponent,
  EmployeeMySuffixDeleteDialogComponent,
  employeeRoute,
  employeePopupRoute
} from './';

const ENTITY_STATES = [...employeeRoute, ...employeePopupRoute];

@NgModule({
  imports: [JhipsterJava11SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    EmployeeMySuffixComponent,
    EmployeeMySuffixDetailComponent,
    EmployeeMySuffixUpdateComponent,
    EmployeeMySuffixDeleteDialogComponent,
    EmployeeMySuffixDeletePopupComponent
  ],
  entryComponents: [
    EmployeeMySuffixComponent,
    EmployeeMySuffixUpdateComponent,
    EmployeeMySuffixDeleteDialogComponent,
    EmployeeMySuffixDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterJava11EmployeeMySuffixModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
