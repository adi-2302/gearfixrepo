import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './workshops.html',
  styleUrls: ['./workshops.css']
})
export class Workshops implements OnInit {
  workshops = [
    {
      id: 1,
      name: 'SmartFix Mobile Care',
      location: 'Chennai',
      services: ['Screen Replacement', 'Battery Replacement', 'Software Update'],
      image: 'assets/workshops/image1.jpeg',
      description: 'Trusted mobile service center offering fast and reliable phone repairs for all major brands.'
    },
    {
      id: 2,
      name: 'MobileCare Solutions',
      location: 'Hyderabad',
      services: ['Charging Port Repair', 'Speaker & Mic Repair', 'Back Panel Replacement'],
      image: 'assets/workshops/image2.jpeg',
      description: 'Expert mobile technicians providing quick and affordable repair services for smartphones and tablets.'
    },
    {
      id: 3,
      name: 'PhoneRevive Center',
      location: 'Bangalore',
      services: ['Display Repair', 'Battery Replacement', 'Data Recovery'],
      image: 'assets/workshops/image3.jpeg',
      description: 'Professional service center offering reliable and fast solutions for all mobile phone issues.'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewWorkshopDetails(id: number): void {
    this.router.navigate(['/workshops', id]);
  }
}