import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { JhipsterJava11SharedModule } from 'app/shared';
import {
  DepartmentMySuffixComponent,
  DepartmentMySuffixDetailComponent,
  DepartmentMySuffixUpdateComponent,
  DepartmentMySuffixDeletePopupComponent,
  DepartmentMySuffixDeleteDialogComponent,
  departmentRoute,
  departmentPopupRoute
} from './';

const ENTITY_STATES = [...departmentRoute, ...departmentPopupRoute];

@NgModule({
  imports: [JhipsterJava11SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    DepartmentMySuffixComponent,
    DepartmentMySuffixDetailComponent,
    DepartmentMySuffixUpdateComponent,
    DepartmentMySuffixDeleteDialogComponent,
    DepartmentMySuffixDeletePopupComponent
  ],
  entryComponents: [
    DepartmentMySuffixComponent,
    DepartmentMySuffixUpdateComponent,
    DepartmentMySuffixDeleteDialogComponent,
    DepartmentMySuffixDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterJava11DepartmentMySuffixModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
