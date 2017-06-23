import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HeroDetailComponent} from "./hero-detail.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroesComponent} from "./heroes.component";
/**
 * Created by danawacomputer on 2017-06-23.
 */

//상수로 가져온것.
const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path:'detail/:id',
    component:HeroDetailComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
