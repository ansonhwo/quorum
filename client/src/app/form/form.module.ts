import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Select2Module } from 'ng2-select2';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { AlertModule, TooltipModule } from 'ngx-bootstrap';
import { Autosize } from 'ng-autosize';
import { TagInputModule } from 'ngx-chips';

declare let global: any;

let markdown = require('markdown').markdown;
global.markdown = markdown;
import 'bootstrap-markdown/js/bootstrap-markdown.js';
import 'bootstrap-select/dist/js/bootstrap-select.js';
import 'parsleyjs';
import 'twitter-bootstrap-wizard/jquery.bootstrap.wizard.js';
import 'bootstrap-colorpicker';
import 'jasny-bootstrap/js/inputmask.js';
import 'ng2-datetime/node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js';
import 'bootstrap-timepicker/js/bootstrap-timepicker.js';
import 'bootstrap-slider/dist/bootstrap-slider.js';
import 'froala-editor/js/froala_editor.pkgd.min.js';


import { Account } from './account/account.component';
import { Article } from './article/article.component';
import { Elements } from './elements/elements.component';
import { Validation } from './validation/validation.component';
import { Wizard } from './wizard/wizard.component';
import { FormWizard } from './wizard/form-wizard/form-wizard.directive';
import { WidgetModule } from '../layout/widget/widget.module';
import {
  DatetimeTransparent
} from '../ui/datetime-transparent/datetime-transparent.directive';
import {
  MarkdownToolbarTransparent
} from '../ui/markdown-toolbar-transparent/markdown-toolbar-transparent.directive';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


export const routes = [
  {path: '', redirectTo: 'account', pathMatch: 'full'},
  {path: 'account', component: Account},
  {path: 'article', component: Article},
  {path: 'elements', component: Elements},
  {path: 'validation', component: Validation},
  {path: 'wizard', component: Wizard}
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Account,
    Article,
    Elements,
    Validation,
    Wizard,
    FormWizard,
    Autosize,
    DatetimeTransparent,
    MarkdownToolbarTransparent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Select2Module,
    NKDatetimeModule,
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    WidgetModule,
    TagInputModule,
    RouterModule.forChild(routes),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ]
})
export class FormModule {
  static routes = routes;
}
