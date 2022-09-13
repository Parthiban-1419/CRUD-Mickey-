import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DeleteMarkController extends Controller {
  @action
  deleteMarks() {
    var req = new XMLHttpRequest();
    var regNumber = parseInt($('#regNum').val());

    req.onload = function () {
      alert(this.responseText);
    };

    req.open('POST', 'http://localhost:8080/MarkManagement/delete-marks', true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('regNumber=' + regNumber);
  }
}
