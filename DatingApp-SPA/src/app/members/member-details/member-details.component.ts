import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Ptor } from 'protractor';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
user: User;
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

  constructor(private userservice: UserService, private alert: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {this.user = data['user']; });

    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      }
  ];
    this.galleryImages = this.loadPhotos();
  }
loadPhotos(){
  const photos = [];
  for (const photo of this.user.photos) {
photos.push({
      small: photo.url,
      medium:  photo.url,
      big:  photo.url
      });
  }
  return photos;
}
}
