import { Component } from '@angular/core';
import { Obiettivi } from '../../models/obiettivi';
import { Utenti } from '../../models/utenti';
import { ObiettiviService } from '../../services/obiettivi.service';
import { PersoneService } from '../../services/persone.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
obbArray: Obiettivi[] = []
persArray: Utenti[] = [];

constructor(private obbSvc:ObiettiviService, private persSvc:PersoneService) {}

ngOnInit() {
  this.obbArray = this.obbSvc.obbArr;
  this.persArray = this.persSvc.persArr;
}
getPersonId(userId:number):Utenti | undefined {
  return this.persArray.find(user => user.id === userId);
}
}
