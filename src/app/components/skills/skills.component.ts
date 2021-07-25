import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  technologies = [
    {title: 'C', value: 85},
    {title: 'C++', value: 90},
    {title: 'C#', value: 70},
    {title: 'Java', value: 75},
    {title: 'Ruby', value: 70},
    {title: 'Python', value: 90},
    {title: 'HTML', value: 93},
    {title: 'Javascript', value: 95},
    {title: 'Typescript', value: 95},
    {title: 'CSS', value: 85},
    {title: 'PHP', value: 80},
    {title: 'Angular', value: 90},
    {title: 'Nodejs', value: 85},

    {title: 'Yii', value: 75},
    {title: 'Ruby on Rails', value: 75},
    {title: 'SQL', value: 88},
    {title: 'MongoDB', value: 70},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
