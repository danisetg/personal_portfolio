import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'src/environments/environment';

//ngxs
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';

//Material Modules
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';


import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuItemState } from './store/states/menu-item.state';
import { AttributesComponent } from './components/attributes/attributes.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateSkillComponent } from './components/skills/create-skill/create-skill.component';
import { UpdateSkillComponent } from './components/skills/update-skill/update-skill.component';
import { SkillFormComponent } from './components/skills/skill-form/skill-form.component';
import { GroupFormComponent } from './components/skills/group-form/group-form.component';
import { UpdateGroupComponent } from './components/skills/update-group/update-group.component';
import { CreateGroupComponent } from './components/skills/create-group/create-group.component';
import { DeleteConfirmationComponent } from './dialogs/delete-confirmation/delete-confirmation.component';
import { MessageConfirmationComponent } from './dialogs/message-confirmation/message-confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    AttributesComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    CreateSkillComponent,
    UpdateSkillComponent,
    SkillFormComponent,
    GroupFormComponent,
    UpdateGroupComponent,
    CreateGroupComponent,
    DeleteConfirmationComponent,
    MessageConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,

    //ngxs
    NgxsModule.forRoot([
      MenuItemState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),

    //Material Modules
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatChipsModule,

    LayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
