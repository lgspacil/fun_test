import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import {MdDialog, MD_DIALOG_DATA} from '@angular/material';
import { PopUpComponent } from '../../pop-up/pop-up.component';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {
  @Input() user_info;
  @Output() reTakeButtonClicked = new EventEmitter();

  constructor(public dialog: MdDialog) { }

  //when the dialog is closed it will send info to this variable
  dialogResult = '';

  //what do you want to send to the dialog when it opens
  dialog_message = {
    percent: null,
    total_time: null,
    message: null,

  };

  //users name:
  users_name ='';

  //timer info
  inital_time: number;
  time_limit: number;
  interval;
  total_time = 0;

  //game running Bool
  game_running = true;

  //audio info
  playing = false;
  audio_correct = new Audio();
  audio_incorrect = new Audio();
  audio_beep = new Audio();
  audio_buzzer = new Audio();
  //end of audio info

  //test information
  question_num = 0;
  correct = 0;
  questions = [
    ["Pick the flag of Slovakia", "../../assets/pictures/slovakia.png", "../../assets/pictures/frane.png", "../../assets/pictures/brasil.png", "../../assets/pictures/usa.png", "A", "true"],
    ["What is the capital of CA?", "Sacramento", "LA", "Fresno", "San Francisco", "A", "false"],
    ["How many hours is Europe ahead of the California Time Zone?", "4", "8", "9", "7", "C", "false"],
    ["At what temperature does water boil in celcius?", "50", "99", "100", "123", "C", "false"],
    ["How far can you walk into a forest?", "10 miles", "500 yeards", "half way", "6miles", "C", "false"],
    ["Which country is Hungary?", "../../assets/sillhouettes/afghanistan-silhouette.jpg", "../../assets/sillhouettes/iceland-silhouette.jpg", "../../assets/sillhouettes/australia-silhouette.jpg", "../../assets/sillhouettes/hungary-silhouette.jpg", "D", "true"],
    ["Which country is Iceland?", "../../assets/sillhouettes/iceland-silhouette.jpg", "../../assets/sillhouettes/costa-rica-silhouette.jpg", "../../assets/sillhouettes/belgium-silhouette.jpg", "../../assets/sillhouettes/mexico-silhouette.jpg", "A", "true"],
    ["Which country is New Zealand?", "../../assets/sillhouettes/italy-silhouette.jpg", "../../assets/sillhouettes/united-states-silhouette.jpg", "../../assets/sillhouettes/new-zealand-silhouette.jpg", "../../assets/sillhouettes/spain-silhouette.jpg", "C", "true"],
    ["Which country is Iceland?", "../../assets/sillhouettes/greenland-silhouette.jpg", "../../assets/sillhouettes/thailand-silhouette.jpg", "../../assets/sillhouettes/iceland-silhouette.jpg", "../../assets/sillhouettes/zambia-silhouette.jpg", "C", "true"],
    ["Which country is Australia?", "../../assets/sillhouettes/italy-silhouette.jpg", "../../assets/sillhouettes/australia-silhouette.jpg", "../../assets/sillhouettes/india-silhouette.jpg", "../../assets/sillhouettes/united-states-silhouette.jpg", "B", "true"],
    ["Which country is Germany?", "../../assets/sillhouettes/germany-silhouette.jpg", "../../assets/sillhouettes/belgium-silhouette.jpg", "../../assets/sillhouettes/belgium-silhouette.jpg", "../../assets/sillhouettes/afghanistan-silhouette.jpg", "A", "true"],
    ["Which country is Costa Rica?", "../../assets/sillhouettes/egypt-silhouette.jpg", "../../assets/sillhouettes/macedonia-silhouette.jpg", "../../assets/sillhouettes/mexico-silhouette.jpg", "../../assets/sillhouettes/costa-rica-silhouette.jpg", "D", "true"],
    ["Which country is Sweden?", "../../assets/sillhouettes/romania-silhouette.jpg", "../../assets/sillhouettes/sweden-silhouette.jpg", "../../assets/sillhouettes/hungary-silhouette.jpg", "../../assets/sillhouettes/russia-silhouette.jpg", "B", "true"],
    ["Which country is South Africa?", "../../assets/sillhouettes/russia-silhouette.jpg", "../../assets/sillhouettes/south-africa-silhouette.jpg", "../../assets/sillhouettes/germany-silhouette.jpg", "../../assets/sillhouettes/austria-silhouette.jpg", "B", "true"],
    ["Which country is Macedonia?", "../../assets/sillhouettes/egypt-silhouette.jpg", "../../assets/sillhouettes/macedonia-silhouette.jpg", "../../assets/sillhouettes/mexico-silhouette.jpg", "../../assets/sillhouettes/spain-silhouette.jpg", "B", "true"],
    ["Which country is Italy?", "../../assets/sillhouettes/spain-silhouette.jpg", "../../assets/sillhouettes/italy-silhouette.jpg", "../../assets/sillhouettes/belgium-silhouette.jpg", "../../assets/sillhouettes/united-states-silhouette.jpg", "B", "true"],
    ["Pick the flag of South Africa", "../../assets/pictures/germany.png", "../../assets/pictures/south-africa.png", "../../assets/pictures/denmark.png", "../../assets/pictures/australia.png", "B", "true"],
    ["Pick the flag of Sweden", "../../assets/pictures/denmark.png", "../../assets/pictures/norway.png", "../../assets/pictures/finland.png", "../../assets/pictures/sweden.png", "D", "true"],
    ["Pick the flag of Ireland", "../../assets/pictures/ireland.jpg", "../../assets/pictures/italy.gif", "../../assets/pictures/austria.GIF", "../../assets/pictures/bangladesh.png", "A", "true"],
    ["Pick the flag of Iceland", "../../assets/pictures/new_zealand.png", "../../assets/pictures/australia.png", "../../assets/pictures/icealnd.png", "../../assets/pictures/frane.png", "C", "true"],
    ["Marie Antoinette was born an Archduchess of what country?", "Germany", "Austria", "Frane", "Netherlands", "B", "flase"],
    ["What was the name of the currency used in Spain before the euro?", "Shilling", "Frank", "Peso", "Pesetas", "D", "false"],
    ["Which American inventor is generally given credit for the invention of the lightning rod?", "Thomas Jefferson", "Benjamin Franklin", "Harriet Tubman", "Thomas Edison", "B", "false"],
    ["In 1867 the United States purchased Alaska from what country?", "Russia", "Canada", "It was never purchased", "Inuit Tribes", "A", "false"],
    ["The inventor Nikola Tesla was born on July 10th 1856 in what modern day country?", "Germany", "Slovenia", "Croatia", "Austria", "C", "false"]
    
  ]
  //end of test information

  ngOnInit() {
    this.audio_correct.src = "../assets/sounds/correct.mp3";
    this.audio_incorrect.src = "../assets/sounds/explosion.mp3";
    this.audio_beep.src = "../assets/sounds/count_down.mp3";
    this.audio_buzzer.src = "../assets/sounds/Game-show-buzzer-sound.mp3";

    this.audio_correct.load();
    this.audio_incorrect.load();
    this.audio_beep.load();
    this.audio_buzzer.load();

    this.time_limit = this.user_info.value;
    this.inital_time = this.user_info.value;
    this.users_name = this.user_info.name;

    this.shuffle(this.questions)

    this.decrement();
  }

  shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
      }
    
      return array;
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

    if(this.questions.length -1 > this.question_num){
      this.question_num ++;  
      this.time_limit = this.inital_time;
    }else{
      clearInterval(this.interval);
      this.dialog_message.message = "You finished the Game!"
      this.dialog_message.percent = Math.floor((this.correct/this.questions.length)*100)
      this.dialog_message.total_time = this.total_time;
      
      this.openDialog();
    }

  }

  decrement(){
    this.interval = setInterval(()=> {
        this.timer(); },1000); 
  }

  timer(){
    this.time_limit -= 1;
    this.total_time += 1;

    if(this.time_limit == 0){
      this.audio_buzzer.play();
    }else if(this.time_limit <= 3){
      this.audio_beep.play();
    }

    //if time is out you loose!
    if(this.time_limit == 0){
      clearInterval(this.interval);
      this.dialog_message.message = "You ran out of time, try again next time"
      this.openDialog();
    }
  }

  openDialog() {
    let dialog = this.dialog.open(PopUpComponent, {width: '600px', data: this.dialog_message});

    dialog.afterClosed()
      .subscribe(result => {
        console.log('Dialog closed: ', result);
        if(result == "Retake"){
          this.reTakeButtonClicked.emit(true);
        }else{
          this.reTakeButtonClicked.emit(true);
        }
        this.dialogResult = result;
      });
  }

}

