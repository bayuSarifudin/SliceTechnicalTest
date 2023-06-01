import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SummaryComponent } from './component/summary/summary.component';
import { PerformanceComponent } from './component/performance/performance.component';
import { SmallContainerComponent } from './component/small-container/small-container.component';
import { LargeContainerComponent } from './component/large-container/large-container.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { FormComponent } from './component/form/form.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SummaryComponent,
    PerformanceComponent,
    SmallContainerComponent,
    LargeContainerComponent,
    PaginationComponent,
    FormComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
