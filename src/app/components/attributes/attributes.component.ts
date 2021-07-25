import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  attributes = [
    {
      title: 'Communication skills',
      value: 80
    },
    {
      title: 'Initiative',
      value: 90
    },
    {
      title: 'Willingness to learn',
      value: 100
    },
    {
      title: 'Adaptability',
      value: 85
    },
    {
      title: 'Confidence',
      value: 95
    },
    {
      title: 'Resilience',
      value: 93
    },
    {
      title: 'Optimism',
      value: 98
    },
    {
      title: 'Empathy',
      value: 90
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
