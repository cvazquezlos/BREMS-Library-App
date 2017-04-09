/**
 * Created by Anny on 09/04/2017.
 */
import {Component, trigger, transition, style, animate} from "@angular/core";


@Component({
  selector: 'modal-login',
  templateUrl: 'modal-login.html',
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ModalLogin {
  // - attributes
  visible: boolean;

  // ------------------------------------------------------------------------------------------------------------------

  constructor() {}

  // ------------------------------------------------------------------------------------------------------------------

  close(): void {
    this.visible = false;
  }

  open() : void {
    if( !this.visible )
      this.visible = true;
  }
}
