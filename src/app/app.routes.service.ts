
import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { AgentStatsTableComponent } from './views/tables/basic-table/basic-table.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
//import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { CdrComponent } from './views/cdr/cdr.component';
import { CdrTableComponent } from './cdr-table/cdr-table.component';
import { QPerformanceTableComponent } from './q-performance-table/q-performance-table.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  { path: 'dashboards', children:
    [
      { path: 'v1', component: Dashboard1Component, canActivate:[AuthGaurdService] },
    ]
  },
  { path: 'profiles', children:
    [
      { path: 'profile1', component: Profile1Component, canActivate:[AuthGaurdService] },
    ]
  },
  { path: 'stats', children:
    [
      { path: 'soa', component: AgentStatsTableComponent, canActivate:[AuthGaurdService] },
    ]
  },
  { path: 'maps', children:
    [
      { path: 'map1', component: Map1Component},
    ]
  },
//   { path: 'cdr', children:
//   [
//     { path: 'cdr', component: CdrComponent},
//   ]
// },
{ path: 'cdr-table', children:
  [
    { path: 'cdr', component: CdrTableComponent, canActivate:[AuthGaurdService]},
  ]
},
{ path: 'qPerform-table', children:
  [
    { path: 'qPerform', component: QPerformanceTableComponent, canActivate:[AuthGaurdService]},
  ]
},
  { path: 'modals', component: ModalsComponent, canActivate:[AuthGaurdService]},
  //{ path: '**', component: NotFoundComponent, canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent},

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
