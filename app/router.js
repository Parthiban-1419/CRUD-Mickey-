import EmberRouter from '@ember/routing/router';
import config from 'mark-management/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('add-user');
  this.route('add-mark');
  this.route('delete-mark');
  this.route('read-mark', function () {});
  this.route('update-mark');
  this.route('sample');
});
