import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidePanelComponent } from './components/side-panel-components/side-panel/side-panel.component';
import { ContentViewComponent } from './components/content-view/content-view.component';
import { SidePanelHeaderComponent } from './components/side-panel-components/side-panel-header/side-panel-header.component';
import { SmileyFaceComponent } from './components/side-panel-components/smiley-face/smiley-face.component';
import { EntityTableSelectorComponent } from './components/entity-tables/entity-table-selector/entity-table-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { SidePanelContentComponent } from './components/side-panel-components/side-panel-content/side-panel-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    ContentViewComponent,
    SidePanelHeaderComponent,
    SmileyFaceComponent,
    EntityTableSelectorComponent,
    SidePanelContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
