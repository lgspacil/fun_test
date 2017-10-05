import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  cookieValue = 'UNKNOWN';

  //audio info
  playing = false;
  audio_correct = new Audio();
  audio_incorrect = new Audio();
  //end of audio info

  //test information
  question_num = 0;
  correct = 0;
  questions = [
    ["Pick the flag of Slovakia", "http://flaglane.com/download/slovakian-flag/slovakian-flag-graphic.png", "HI", "USA", "Brasil", "A", "true"],
    ["What is the capital of CA?", "Sacramento", "LA", "Fresno", "San Francisco", "A", "false"],
    ["How many hours is Europe ahead of the California Time Zone?", "4", "8", "9", "7", "C", "false"],
    ["When does water boil?", "50", "99", "100", "123", "C", "false"],
  ]
  //end of test information

  ngOnInit() {
    this.cookieService.set( 'Test', 'Hello World' );
    this.cookieValue = this.cookieService.get('Test');
    console.log("i am being run")

    this.audio_correct.src = "../assets/sounds/correct.mp3";
    this.audio_incorrect.src = "../assets/sounds/explosion.mp3";

    this.audio_correct.load();
    this.audio_incorrect.load();
  }


  clicked(event){
    var target = event.srcElement.attributes.id || event.currentTarget.id;
    console.log("you clicked: ", target);
    if(target == this.questions[this.question_num][5]){
      console.log("You got it right!");
      this.correct ++;
      this.audio_correct.play();
    }else{
      console.log("you got it wrong..")
      this.audio_incorrect.play();
    }
    if(this.questions.length -1 > this.question_num)
      this.question_num ++;
  }


}
