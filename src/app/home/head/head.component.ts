
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  constructor(
        private router: Router
  ) { }

  ngOnInit() {}

}