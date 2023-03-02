import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BlogComponent } from './component/blog/blog.component';
import { CategoryComponent } from './component/category/category.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { QuestionAddComponent } from './component/question-add/question-add.component';
import { QuestionListComponent } from './component/question-list/question-list.component';
import { QuestionComponent } from './component/question/question.component';
import { ResultsComponent } from './component/results/results.component';
import { UsersComponent } from './component/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path:'question-add',
        component: QuestionAddComponent
      },
      {
        path:'question',
        component: QuestionComponent
      },
      {
        path:'question-list',
        component: QuestionListComponent
      },
      {
        path:'blog',
        component: BlogComponent
      },
      {
        path:'users',
        component: UsersComponent
      },
      {
        path:'results',
        component: ResultsComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
