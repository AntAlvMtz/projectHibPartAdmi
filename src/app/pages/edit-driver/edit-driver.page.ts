import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DriverService } from 'src/app/services/driver.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Driver } from 'src/app/models/driver';
import { RouteService } from 'src/app/services/route.service';
import { Route } from 'src/app/models/route';



@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.page.html',
  styleUrls: ['./edit-driver.page.scss'],
})
export class EditDriverPage implements OnInit {

  public myForm: FormGroup;
  public routes:Route[]
  public validationMessages: object;

  public driver:Driver
  public photo:string

  constructor(private driverService: DriverService, 
    private routeService:RouteService,
    private fb: FormBuilder,
    private router:Router,
    private aroute:ActivatedRoute,
    private toastController: ToastController) { 
      routeService.getRoutes().subscribe(res=>{
        this.routes = res;
      });
    }

  ngOnInit() {
    this.aroute.queryParams.subscribe((params)=>{
      this.driver = params as Driver;
      this.photo = 'https://i.stack.imgur.com/l60Hf.png';      
    });

    this.myForm = this.fb.group({
      name:[this.driver.name, Validators.required],
      age:[this.driver.age, Validators.compose([Validators.required, Validators.min(18)])],
      phone:[this.driver.phone,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
      license:[this.driver.license, Validators.compose([Validators.required])],
      route:[this.driver.route],
      // route:["", Validators.compose([Validators.required])],
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
      message: 'Chófer actualizado',
      duration: 1500,
      position: 'bottom'
    });
    this.router.navigate(["view-drivers"]);
    await toast.present();
  }

  public editDriver(){
    let data = this.myForm.value as Driver; 
    this.driver = {_id:this.driver._id,...data}
    this.driverService.updateDriver(this.driver).subscribe(res=>{
      this.presentToast();
    })
    
  }

}
