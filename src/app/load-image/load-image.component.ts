import { Component, OnInit, Optional } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import {HttpErrorResponse ,HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-load-image',
  templateUrl: './load-image.component.html',
  styleUrls: ['./load-image.component.css']
})
export class LoadImageComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }

  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;
  electronics : string = "";
  trueShow:boolean = false;
  myname: any = '';




  //Gets called when the user selects an image
  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }


  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post <any>('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        console.log(response.body)

        if (response.ok){
          this.message = 'Image uploaded successfully';
          localStorage.setItem('Name', response.body.name);
          localStorage.setItem('Type', response.body.type);
          localStorage.setItem('picByte',response.body.picByte);
          this.myname = response.body.name;
          this.gotoPatientLogin()


        }else{
          this.message = 'Image is not uploaded successfully';

        }



      }


      );


  }

    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }

  gotoPatientLogin(){
    this.router.navigate(["/viewImage"])



   }



  ngOnInit(): void {
  }

}
