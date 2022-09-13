import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SampleController extends Controller {
    

    @tracked count = 0

    @action
    increaseCount(){
        this.count += 1;
    }
}
