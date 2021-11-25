import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:()=>import('./pages/homepage/homepage.module').then(mod=>mod.HomepageModule)
  },
  // { path: 'homepage', 
  // loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule) },

  { path: '', loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule) },
  { path: '',
   loadChildren: () => import('./pages/addblog/addblog.module').then(m => m.AddblogModule) },
  { path: 'allblogs', loadChildren: () => import('./allblogs/allblogs.module').then(m => m.AllblogsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
