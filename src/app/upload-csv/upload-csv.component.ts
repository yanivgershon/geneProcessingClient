import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient ,HttpHeaders, HttpEventType } from '@angular/common/http';
import { Globals } from './../globals';


@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.css']
})
export class UploadCsvComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
@ViewChild('inputFile') inputFile: ElementRef;
  @Output() public onUploadFinished = new EventEmitter();
  public progress: number;
  public message: string;
  displayedColumns: string[] = ['geneName', 'Result'];
  dataSource:any[] = [];
  afuConfig;
  constructor( private http: HttpClient) {
    this.afuConfig = {
      uploadAPI: {
        multiple: false,
        url:'https://example-file-upload-api',
        formatsAllowed: '.xlsx,.xls,.csv',
        replaceTexts: {
          selectFileBtn: 'Select Files!!',
          resetBtn: 'Reset',
          uploadBtn: 'Upload',
          dragNDropBox: 'Drag N Drop',
          attachPinBtn: 'Attach Files...!!',
          afterUploadMsg_success: 'Successfully Uploaded !',
          afterUploadMsg_error: 'Upload Failed !'
        }

      }
  };

   }
   public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    this.dataSource=[];
    const fileToUpload = files[0] as File;
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    // const path='https://localhost:5001/api/upload';
    //const path = 'http://localhost:44331/api/UploadCsv';
    const path =`${Globals.baseUrl}Upload`;
    this.http.post<any[]>(path, formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        }
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';

          this.dataSource=event.body;
          this.inputFile.nativeElement.value = "";
          //this.onUploadFinished.emit(event.body);
        }
      });
  }
  ngOnInit(): void {
  }

}
