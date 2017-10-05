import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  show_game = false;

  user_info = {
    value: 10,
    name:"",
  }

  level= "Medium";

  ngOnInit() {
   
  }

  runChange(){
    if(this.user_info.value <= 6){
      this.level = "Hard";
    }else if(this.user_info.value <= 10){
      this.level = "Medium";
    }else if(this.user_info.value <= 13){
      this.level = "Easy"
    }else{
      this.level = "Very Easy"
    }

    console.log('hello')
  }

  submitTimeName(){
    if(this.user_info.name != ""){
      this.show_game = true;
    }
  }

  reTakeButtonClicked(event){
    this.show_game = false;
  }



}
