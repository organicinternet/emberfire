import Mixin from '@ember/object/mixin';
import { subscribe, unsubscribe } from '../services/realtime-listener';
import DS from 'ember-data';

// TODO make sure realtime works on findAll
//      handle includes
export default Mixin.create({
    afterModel(model:DS.Model) {
        subscribe(this, model);
        return this._super(model);
    },
    deactivate() {
        unsubscribe(this);
        return this._super();
    }
});