import { Component, OnInit } from '@angular/core';
import {encode, getXlsxData, getXlsxDatas} from 'filereadermodeule'
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})


export class FileUploadComponent implements OnInit {

  UploadFile:File = null;
  uploadDetails :Array<Object> =[];
  Math :any;
  base64Value:any;
  disableUpload : boolean = false;
  disableCancel : boolean = true;
  disableRemove : boolean = false;
  displayedColumns: string[] = [];
  dataSource: Array<Object> = [];



constructor()  {
}

ngOnInit()  {
  // this.toasterService.pop('success', 'Args Title', 'Args Body');
} 

bytesToSize(bytes) {
   this.Math = Math;
  let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  let i = parseInt(this.Math.floor(Math.log(bytes) / Math.log(1024)));
  return this.Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

handleFileInput(files:FileList):void{
  console.log("file",files);
  this.UploadFile = files.item(0);
  this.uploadDetails[0] = files.item(0);
 // this.uploadDetails.push(files.item(0));
  console.log(this.uploadDetails[0])
  console.log("file",this.UploadFile);
  console.log("file",this.UploadFile.size);
  
}

uploadBase64File(base64Value, mimeType, fileName){

  let baseValue = base64Value.split(','); 
      var baseTotalValue ={
          "content":baseValue[1],
          "fileName":fileName,
          "mime":mimeType,
          };

  console.log("base64data",baseTotalValue);
  //var dataconf = encode(baseTotalValue);
  //console.log("dataconf",dataconf);
  // this.bitCarrotservice.uploadBase64File(base64data)
  // .subscribe((data) => {
  //     if(data.ProcessVariables.error){
  //         this.toasterService.pop('error', data.ProcessVariables.error.type, data.ProcessVariables.error.value);
  //     }else{
  //         this.toasterService.pop('success', 'Success', data.ProcessVariables.output);
  //         this.generatedQrCode(fileName)
  //     }
  // });
}



uploadUpload(uploadDetails) {

  console.log('uploadDetails', uploadDetails);
  let mimeType = uploadDetails[0].type.split('/');
  let fileName = uploadDetails[0].name;
  console.log('mimeType', mimeType);

 // var xlsxJson = getXlsxData(uploadDetails[0]);


  const reader = new FileReader();

  reader.onloadend = (e) => {
      this.base64Value = reader.result;
      console.log('this.base64Value', this.base64Value);
      const xlsxJson = getXlsxDatas(this.base64Value);
      console.log('xlsxJson', xlsxJson);
      this.dataSource = xlsxJson.Values;
      this.displayedColumns = xlsxJson.header;
      this.uploadBase64File(this.base64Value, mimeType[1], fileName);
    };

  // reader.readAsDataURL(uploadDetails[0]) //url mode base 64 value
  // reader.readAsText(uploadDetails[0]) //ASCII
  reader.readAsBinaryString(uploadDetails[0]);

}

clearUpload(uploadDetails, index): void {
  console.log('index', index);
  uploadDetails.splice(index, 1);
  (<HTMLInputElement>document.getElementById('file')).value = '';
 // this.toasterService.pop('success', '', 'File Removed');
}

}