import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AddUserController extends Controller {
  @action
  addUser() {
    var req = new XMLHttpRequest();
    var user = $('#userId').val();
    var name = $('#username').val();
    var password = $('#password').val();
    var cPassword = $('#cPassword').val();

    if (password === cPassword) {
      req.onload = function () {
        alert(this.responseText);
        router.transitionTo('index');
      };

      req.open(
        'POST',
        'http://localhost:8080/MarkManagement/create-account',
        true
      );
      req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      req.send(
        'userId=' + user + '&userName=' + name + '&password=' + password
      );
    } else {
      alert('Password mismatch');
    }
  }
}
