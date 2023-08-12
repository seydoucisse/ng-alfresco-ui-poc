import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './pages';
import { NewDocumentComponent } from './pages/new-document';

const routes: Routes = [
  {path: 'documents', component: DocumentsComponent},
  {path: 'add-file', component: NewDocumentComponent},
  {path: '', redirectTo: 'documents', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
