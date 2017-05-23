import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';
import { Equipos } from './equipos.js';

if (Meteor.isServer) {
  describe('Add Equipos', function () {
    beforeEach(function () {
      Equipos.remove({});
      Equipos.insert({ _id: '1', key: '1', nombre: 'Millos'});
      Equipos.insert({ _id: '2', key: '2', nombre: 'Santa Fe'});
    });
    it('Should find equipos', function () {
      const result = Equipos.find({});
      chai.assert.equal(result.count(), 2);
    });
  });
  describe('Remove Equipos', function () {
    beforeEach(function () {
      Equipos.remove({});
      Equipos.insert({ _id: '3', key: '1', nombre: 'Real Madrid'});
      Equipos.insert({ _id: '4', key: '2', nombre: 'Barcelona'});
    });
    it('Should remove equipos', function () {
      const result = Equipos.find({});
      const resul1 = chai.assert.equal(result.count(), 2);
      Equipos.remove({});
      const resul2 = chai.assert.equal(result.count(), 0);
      chai.assert.equal(resul1, resul2);
    });
  });
}
