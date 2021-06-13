import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  serviceCardsInfo = [
  {
    _id:1,
    url: './../../assets/001.png',
    header: 'Design',
  },
  {
    _id:2,
    url: './../../assets/002.png',
    header: 'Development',
  },
  {
    _id:3,
    url: './../../assets/003.png',
    header: 'SEO',
  },
  {
    _id:4,
    url: './../../assets/004.png',
    header: 'Marketing',
  },
  {
    _id:5,
    url: './../../assets/005.png',
    header: 'App Development',
  },
  {
    _id:6,
    url: './../../assets/006.png',
    header: 'Error Fixing',
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
