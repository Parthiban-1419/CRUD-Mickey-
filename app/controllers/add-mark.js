import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class AddMarkController extends Controller {
  @service router;
  @action
  addMark() {
    var req = new XMLHttpRequest();
    var regNumber = $('#regNum').val();
    var tamil = $('#tamilMark').val();
    var english = $('#EnglishMark').val();
    var maths = $('#mathsMark').val();
    var science = $('#ScienceMark').val();
    var social = $('#SocialMark').val();
    var total =
      parseInt(tamil) +
      parseInt(english) +
      parseInt(maths) +
      parseInt(science) +
      parseInt(social);
    var percentage = total / 5;

    console.log(
      'regNumber=' +
        regNumber +
        '&tamil=' +
        tamil +
        '&english=' +
        english +
        '&maths=' +
        maths +
        '&science=' +
        science +
        '&social=' +
        social +
        '&total=' +
        total +
        '&percentage=' +
        percentage
    );

    req.onload = function () {
      alert(this.responseText);
      console.log(this.responseText);
      this.router.transitionTo('add-mark');
    };

    req.open('POST', 'http://localhost:8080/MarkManagement/add-mark', true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(
      'regNumber=' +
        regNumber +
        '&tamil=' +
        tamil +
        '&english=' +
        english +
        '&maths=' +
        maths +
        '&science=' +
        science +
        '&social=' +
        social +
        '&total=' +
        total +
        '&percentage=' +
        percentage
    );
  }
}
