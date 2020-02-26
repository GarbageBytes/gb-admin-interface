import {Component, HostListener, OnInit} from '@angular/core';
import {GbService, IGbs} from '../../@core/backend/common/services/gb.service';

@Component({
  selector: 'ngx-user-dashboard',
  templateUrl: './user-dashboard.component.html',
})
export class UserDashboardComponent implements OnInit {

  private body: HTMLBodyElement;
  x;
  y;
  z;
  gbs: IGbs;

  constructor(
      public gbService: GbService,
  ) { }

  ngOnInit() {
    this.body = document.getElementsByTagName('body')[0];
    this.body.addEventListener('keydown', (event) => {
      this.handleKey(event.keyCode, true);
    });
    this.body.addEventListener('keyup', (event) => {
      this.handleKey(event.keyCode, false);
    });
    this.gbService.gbs.subscribe(gbs => {
      this.gbs = gbs;
    });
  }

  private handleKey(keyCode, keyDown) {
    // used to check for changes in speed
    const oldX = this.x;
    const oldY = this.y;
    const oldZ = this.z;

    let pub = true;

    let speed = 0;
    // throttle the speed by the slider and throttle constant
    if (keyDown === true) {
      speed = 1;
    }
    // check which key was pressed
    switch (keyCode) {
      case 65:
      case 37:
        // turn left
        this.z = speed;
        break;
      case 87:
      case 38:
        // up
        this.x = 0.5 * speed;
        break;
      case 68:
      case 39:
        // turn right
        this.z = -1 * speed;
        break;
      case 83:
      case 40:
        // down
        this.x = -0.5 * speed;
        break;
      case 69:
        // strafe right
        this.y = -0.5 * speed;
        break;
      case 81:
        // strafe left
        this.y = 0.5 * speed;
        break;
      default:
        pub = false;
    }

    // publish the command
    if (pub === true) {
      const rosObject = {
        angular: {
          x: 0,
          y: 0,
          z: this.z,
        },
        linear: {
          x: this.x,
          y: this.y,
          z: this.z,
        },
      };

      // check for changes
      this.gbs['gb1'].pubToGbActionStream('move', rosObject);

      if (oldX !== this.x || oldY !== this.y || oldZ !== this.z) {
        // that.emit('change', twist);
      }
    }
  }
}
