import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private storeData: DataStorageService, public authService: AuthService) { }
  
  ngOnInit() {}

  saveData(){
    this.storeData.storeRecipes().subscribe(
      (response: Response) => console.log(response)
    );
  }
  getData(){
    this.storeData.getRecipes();
  }
  onLogout(){
    this.authService.logout();
  }
}
