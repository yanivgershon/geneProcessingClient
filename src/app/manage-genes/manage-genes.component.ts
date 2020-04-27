import { Component, OnInit, ViewChild } from '@angular/core';
import { GeneResult } from './../data/gene-result';
import { GeneResultsService } from './../services/gene-results.service';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-manage-genes',
  templateUrl: './manage-genes.component.html',
  styleUrls: ['./manage-genes.component.css']
})
export class ManageGenesComponent implements OnInit {

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  constructor(private geneResultsService: GeneResultsService,public dialog: MatDialog) { }
  displayedColumns: string[] = ['GeneName', 'Result', 'Text','action'];
  dataSource: GeneResult[] = [];
  ngOnInit(): void {
    this.getAll();
  }
  getAll()
  {
    this.geneResultsService.getAll().subscribe(data => {
      this.dataSource = data;
    });
  }
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj){
    var d = new Date();
    var newItem:GeneResult={
      id:null,
      geneName:row_obj.geneName,
      result:row_obj.result,
      text:row_obj.text
    };
    this.geneResultsService.add(newItem).subscribe(data=>
      {
        this.getAll();
      })


  }
  updateRowData(row_obj){

    var d = new Date();
    var newItem:GeneResult={
      id:row_obj.id,
      geneName:row_obj.geneName,
      result:row_obj.result,
      text:row_obj.text
    };
    this.geneResultsService.update(newItem).subscribe(data=>
      {
        this.getAll();
      })

  }
  deleteRowData(row_obj){
    var d = new Date();
    var newItem:GeneResult={
      id:row_obj.id,
      geneName:row_obj.geneName,
      result:row_obj.result,
      text:row_obj.text
    };
    this.geneResultsService.delete(newItem).subscribe(data=>
      {
        this.getAll();
      })


  }

}
