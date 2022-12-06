import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Route } from 'src/app/models/route';

@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.page.html',
  styleUrls: ['./new-route.page.scss'],
})
export class NewRoutePage implements OnInit {

  public myForm: FormGroup;
  public validationMessages: object;

  constructor(private fb: FormBuilder,
    private router:Router,
    private toastController: ToastController) { }

  ngOnInit() {this.myForm = this.fb.group({
    name:["", Validators.required],
    numberRoute:["", Validators.required]
    // route:["", Validators.compose([Validators.required])],
  });

  this.validationMessages = {
    name: [
      { type: 'required', message: "Debe capturar el nombre"}
    ],
    numberRoute: [
      { type: 'required', message: "Debe capturar el número de la ruta"}
    ]
  }
}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'Ruta agregado',
    duration: 1500,
    position: 'bottom'
  });
  this.router.navigate([".."]);
  await toast.present();
}

public newRoute(){
  //Agregar ruta
  
}

}
