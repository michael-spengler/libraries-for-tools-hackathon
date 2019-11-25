import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ThAngularDemoLibraryModule } from "th-angular-demo-library";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ThAngularDemoLibraryModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
