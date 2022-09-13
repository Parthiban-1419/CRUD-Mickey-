import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ReadMarkController extends Controller {
  @action
  readMarks() {
    var req = new XMLHttpRequest();
    var regNumber = parseInt($('#regNum').val());

    req.onload = function () {
      console.log(this.responseText);
    };

    req.open('POST', 'http://localhost:8080/MarkManagement/read-mark', true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('regNumber=' + regNumber);
  }
}
