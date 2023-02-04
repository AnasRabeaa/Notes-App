import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/Components/layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './shared/Components/layouts/user-layout/user-layout.component';
import { BlankLayoutComponent } from './shared/Components/layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './shared/Components/layouts/auth-layout/auth-layout.component';


const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'posts',
        loadChildren: () => import('./views/posts/posts.module').then(m => m.PostsModule)
      }
    ]
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      {
        path: 'notes',
        loadChildren: () => import('./views/notes/notes.module').then(m => m.NotesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
