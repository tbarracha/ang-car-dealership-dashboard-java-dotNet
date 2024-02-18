import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { ContentViewComponent } from './components/content-view/content-view.component';
import { SidePanelHeaderComponent } from './components/side-panel-header/side-panel-header.component';
import { SidePanelContentComponent } from './components/side-panel-content/side-panel-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    ContentViewComponent,
    SidePanelHeaderComponent,
    SidePanelContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
