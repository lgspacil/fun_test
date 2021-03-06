import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import {MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor(public thisDialogRef: MdDialogRef<PopUpComponent>, @Inject(MD_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onCloseConfirm(){
    this.thisDialogRef.close('Retake');
  }

  onCloseCancel(){
    this.thisDialogRef.close('Cancel');
  }

}
