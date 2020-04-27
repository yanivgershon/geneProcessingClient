import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCsvResultsComponent } from './view-csv-results/view-csv-results.component';
import { ManageGenesComponent } from './manage-genes/manage-genes.component';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';

const routes: Routes = [ { path: '', redirectTo: 'uploadCsv', pathMatch: 'full' },
{ path: 'uploadCsv', component: UploadCsvComponent },
{ path: 'viewCsvResults', component: ViewCsvResultsComponent },
{ path: 'geneResultsEditing', component: ManageGenesComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
