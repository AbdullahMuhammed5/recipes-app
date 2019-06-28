import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipes';
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCqsKoVChwb8yRIZh-7GlWYpNhGsEKQ_no",
      authDomain: "shopping-app-8e15e.firebaseapp.com",
    })
  }
  selectFeature(feature: string){
  	this.loadedFeature = feature;
  }
}
