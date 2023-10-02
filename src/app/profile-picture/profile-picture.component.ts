import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {
  profilePictureUrl: string;
  profilePictureFile: File;
  id: number;


  constructor( private clientService: ClientService ) { }

  ngOnInit(): void {
  }

  updateProfilePicture() {
    this.clientService.updateProfilePicture(this.id, this.profilePictureUrl, this.profilePictureFile).subscribe(
      () => console.log('Profile picture updated successfully'),
      error => console.error('Failed to update profile picture', error)
    );
  }

}
