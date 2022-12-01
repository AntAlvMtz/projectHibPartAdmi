import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DriverService } from 'src/app/services/driver.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.page.html',
  styleUrls: ['./new-driver.page.scss'],
})
export class NewDriverPage implements OnInit {

  public myForm: FormGroup;
  public validationMessages: object;

  constructor(private driverService: DriverService, private fb: FormBuilder,private router:Router,private toastController: ToastController) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name:["", Validators.required],
      age:["", Validators.compose([Validators.required, Validators.min(18)])],
      phone:["",Validators.compose([Validators.required,Validators.minLength(12),Validators.maxLength(13),Validators.pattern(/\+\d+/)])],
      license:["", Validators.compose([Validators.required])],
      route:["", Validators.compose([Validators.required])],
    });

    this.validationMessages = {
      name: [
        { type: 'required', message: "Debe capturar el nombre"}
      ],
      age: [
        { type: 'required', message: "Debe capturar la edad"},
        { type: 'min', message: "El chófer debe ser mayor de edad"}
      ],
      phone: [
        { type: 'required', message: "Teléfono obligatorio" },
        { type: 'minlength', message: "El Teléfono debe ser de mínimo 11 digitos" },
        { type: 'maxlength', message: "El Teléfono debe ser de máximo 12 digitos" },
        { type: 'pattern', message: "El Teléfono debe ser solo la lada y los números. Ej. +523113331111" }
      ],
      license: [
        { type: 'required', message: "Debe capturar la licencia del conductor"}
      ],
      route: [
        { type: 'required', message: "Debe capturar la ruta"}
      ]
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Chófer agregado',
      duration: 1500,
      position: 'bottom'
    });
    this.router.navigate([".."]);
    await toast.present();
  }

  public newDriver(){
    
  }
}
