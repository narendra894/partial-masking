import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
title = 'assignment2';
pswd : any;
pass:any;
hide=true;
cgi()
{
 this.hide =!this.hide;
 let vis=this.pswd.slice(-4), countnum='';
 for(var i=(this.pswd.length)-4;i>0;i--)
  {
  countnum+='*';
 }
 if(this.hide==false)
  this.pass=countnum+vis;
  else
  this.pass=this.pswd;
}
}
