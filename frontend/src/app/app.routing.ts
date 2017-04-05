import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { ProfileComponent } from './profile.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { SearchComponent } from './search.component';

const appRoutes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'search', component: SearchComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
