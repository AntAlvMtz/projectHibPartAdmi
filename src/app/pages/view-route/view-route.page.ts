import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Route } from 'src/app/models/route';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-view-route',
  templateUrl: './view-route.page.html',
  styleUrls: ['./view-route.page.scss'],
})
export class ViewRoutePage implements OnInit {

  public routes:Route[]

  constructor(private router: Router,
    private alertController:AlertController,
    private toastController:ToastController,
    private routeService:RouteService) {
      routeService.getRoutes().subscribe(res=>{
        this.routes = res;
      });
     }

  ngOnInit() {
  }

  public async createRoute() {     
      const alert = await this.alertController.create({
        header: 'Ingrese el nuevo camión',
        buttons: [{
          text: 'Agregar',
          handler: data =>{
              let route:Route = {name:data[0]}
                 
              this.routeService.createRoute(route).subscribe(res=>{
                this.routeService.getRoutes().subscribe(res=>{
                  this.routes = res;
                });   
              })
          }
      }],
        inputs: [
          {value:'Progreso 3',
            placeholder: 'Nombre',          
            attributes: {
              minlength: 5,
            },
          },
        ],
      });
  
      await alert.present();
    }

    public async removeRoute(route:Route){
      const alert = await this.alertController.create({
        header: 'Confirmación',
        message: '¿Estás seguro que deseas eliminar el camion '+route.name+'?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              
            },
          },
          {
            text: 'Aceptar',
            role: 'confirm',
            handler: () => {
              this.routeService.removeRoute(route).subscribe(res=>{
                this.presentToast('bottom',`Se ha eliminado la routa ${route.name}`)
                this.routeService.getRoutes().subscribe(res=>{
                  this.routes = res;
                });      
              });        
            }
          },
        ],
      });      
  
      await alert.present();      
    }

    public async presentToast(position: 'top' | 'middle' | 'bottom', message:string) {
      const toast = await this.toastController.create({
        message,
        duration: 1500,
        position,
        cssClass: 'custom-toast',     
      });
  
      await toast.present();
    }
  
}
