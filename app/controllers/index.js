import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class IndexController extends Controller {
  @service router;

  @action
  checkUser() {
    var req = new XMLHttpRequest();
    var user = $('#userId').val();
    var password = $('#password').val();

    req.onload = function () {
      if (this.responseText === true) router.transitionTo('home-page');
      else {
        alert(this.responseText);
      }
    };

    req.open('POST', 'http://localhost:8080/MarkManagement/check-user', true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('user=' + user + '&password=' + password);
  }
}
