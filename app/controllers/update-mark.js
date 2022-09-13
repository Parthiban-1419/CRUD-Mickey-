import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UpdateMarkController extends Controller {
  @tracked json;

  @action
  readMarks() {
    let self = this;
    var req = new XMLHttpRequest();
    var regNumber = parseInt($('#regNum').val());

    req.onload = function () {
      self.json = JSON.parse(this.responseText);
      console.log(self.json);
      self.printData();
    };

    req.open('POST', 'http://localhost:8080/MarkManagement/read-mark', true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('regNumber=' + regNumber);
  }

  printData() {
    let self = this;
    $('.container').html(function () {
      var tags =
        '<br><br><table><tr><th>Reg number</th>' +
        '<td><center>' +
        self.json.regNumber +
        '</center></td></tr>' +
        '<tr><th>Tamil</th>' +
        '<td><input id="tamil" style="width: 95%;" type="number" value="' +
        self.json.tamil +
        '"></td></tr>' +
        '<tr><th>English</th>' +
        '</td><td><input id="english" style="width: 95%;" type="number" value="' +
        self.json.english +
        '"></td></tr>' +
        '<tr><th>Maths</th>' +
        '</td><td><input id="maths" style="width: 95%;" type="number" value="' +
        self.json.maths +
        '"></td></tr>' +
        '<tr><th>Science</th>' +
        '</td><td><input id="science" style="width: 95%;" type="number" value="' +
        self.json.science +
        '"></td></tr>' +
        '<tr><th>Social</th>' +
        '</td><td><input id="social" style="width: 95%;" type="number" value="' +
        self.json.social +
        '"></td></tr></table>' +
        '<br><br><button id="update">Update<button>';

      return tags;
    });
    $('#update').click(function () {
      self.updateMarks();
    });
  }

  updateMarks() {
    let self = this;
    var req = new XMLHttpRequest();
    var tamil = parseInt($('#tamil').val());
    var english = parseInt($('#english').val());
    var maths = parseInt($('#maths').val());
    var science = parseInt($('#science').val());
    var social = parseInt($('#social').val());
    var total = tamil + english + maths + science + social;
    var percentage = total / 5;

    var json = {
      regNumber: self.json.regNumber,
      tamil: tamil,
      english: english,
      maths: maths,
      science: science,
      social: social,
      total: total,
      percentage: percentage,
    };

    req.onload = function () {
      alert(this.responseText);
    };

    req.open('POST', 'http://localhost:8080/MarkManagement/update-mark', true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('json=' + JSON.stringify(json));
  }
}
