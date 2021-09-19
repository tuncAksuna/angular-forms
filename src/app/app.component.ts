import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageExtensionValidator } from './image-extension-validator';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.age.errors.min)
  }

  urlOfImage: string = '';

  printAllValues(...values: any): void {

    let convertingArrayTo = Object.assign({}, values[0]);
    console.log(convertingArrayTo);

    for (const key in convertingArrayTo) {
      console.log(convertingArrayTo[key]);
    }
    this.clearInputAreas();
  }


  clearInputAreas() {
    this.profileFormInfos.reset();
  }

  onSelectFile(event) {

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.urlOfImage = event.target.result as string;
      }
    }
  }

  profileFormInfos = new FormGroup({
    name: new FormControl('',
      [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(3)
      ]),
    surName: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3)
      ]),
    age: new FormControl('',
      [
        Validators.required,
        Validators.min(1),
      ]),
    email: new FormControl('',
      [
        Validators.required,
        Validators.email,
      ]),
    imageUrl: new FormControl('',
      [
        Validators.required,
        ImageExtensionValidator.isValidExtension,
      ])
  })

  get email() {
    return this.profileFormInfos.get('email')
  }

  get name() {
    return this.profileFormInfos.get('name');
  }

  get age() {
    return this.profileFormInfos.get('age');
  }

  get surName() {
    return this.profileFormInfos.get('surName');
  }

  get imageUrl() {
    return this.profileFormInfos.get('imageUrl');
  }

}
