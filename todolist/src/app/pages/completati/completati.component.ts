import { Component } from '@angular/core';
import { ObiettiviService } from '../../services/obiettivi.service';
import { PersoneService } from '../../services/persone.service';
import { Utenti } from '../../models/utenti';
import { Obiettivi } from '../../models/obiettivi';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrl: './completati.component.scss'
})
export class CompletatiComponent {
  obbArray: Obiettivi[] = []
  persArray: Utenti[] = [];

  constructor(private obbSvc:ObiettiviService, private persSvc:PersoneService) {}

  ngOnInit() {
    this.obbArray = this.obbSvc.obbArr.filter(o => o.completed);
    this.persArray = this.persSvc.persArr;
  }
  getPersonId(userId:number):Utenti | undefined {
    return this.persArray.find(user => user.id === userId);
  }
}
