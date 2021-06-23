import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ImageCropperModule } from "ngx-image-cropper";
import { CarouselModule } from "ngx-owl-carousel-o";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
// Plugins

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { ModalModule, BsModalRef } from "ngx-bootstrap/modal";

import { TabsModule } from "ngx-bootstrap/tabs";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { ToastrModule } from "ngx-toastr";
import { NgxPaginationModule } from "ngx-pagination";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { PopoverModule } from "ngx-bootstrap/popover";
import { UiSwitchModule } from "ngx-ui-switch";
import { NgxLoadingModule } from "ngx-loading";
import { AmazingTimePickerModule } from "amazing-time-picker";

import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { ShareModule } from "ngx-sharebuttons";
import { Ng2SearchPipeModule } from "ng2-search-filter";

// Page Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFormComponent } from './upload-form/upload-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
    }),
    NgxPaginationModule,
    ProgressbarModule.forRoot(),
    PopoverModule.forRoot(),
    HttpClientModule,
    UiSwitchModule,
    CarouselModule,
    TabsModule.forRoot(),
   
    ImageCropperModule,
    NgxLoadingModule,
    // NgxSocialShareModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AmazingTimePickerModule,
    TypeaheadModule.forRoot(),
    Ng2SearchPipeModule,
    ShareModule,
  ],
  providers: [
    BsModalRef,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
