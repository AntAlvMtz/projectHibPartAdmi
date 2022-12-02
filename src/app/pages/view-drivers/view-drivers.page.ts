import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-view-drivers',
  templateUrl: './view-drivers.page.html',
  styleUrls: ['./view-drivers.page.scss'],
})
export class ViewDriversPage implements OnInit {
  
  public drivers: Driver[]

  constructor(private router: Router,
    private driverService: DriverService) { }
    
    ngOnInit() {
      this.driverService.getDrivers().subscribe(res => {
        console.log(res);
        this.drivers = res;
      })
    }
    
    public goToNewDriver(): void {
      this.router.navigate(['/new-driver']);
    }
    
    public goToDriver(driver:Driver){      
      const data = driver._id
      // this.driverService.getOneDriver(data).subscribe(res=>{
      //   console.log(res);        
      // });
      this.router.navigate(['view-driver'],{queryParams:{_id:data}})
    }

    public removeDriver(i: number) {
    }
}
