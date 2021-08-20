import { Component, OnInit } from '@angular/core';

interface Componente {
icon: String,
name: String,
redirectTo:String
};

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes : Componente[] = [
    {
      icon:'american-football-outline',
      name: 'Action Sheet',
      redirectTo:'/action-sheet' 
    },
    {
      icon:'alert-circle-outline',
      name: 'Alert',
      redirectTo:'/alert' 
    },
    {
      icon:'person-circle-outline',
      name: 'Avatar',
      redirectTo:'/avatar' 
    },
    {
      icon:'keypad-outline',
      name: 'Buttons',
      redirectTo:'/buttons' 
    },
    {
      icon:'card-outline',
      name: 'Cards',
      redirectTo:'/card' 
    },
    {
      icon:'checkmark-circle-outline',
      name: 'Checkboox',
      redirectTo:'/checkbox' 
    },
    {
      icon:'calendar-outline',
      name: 'Date Time',
      redirectTo:'/date-time' 
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
