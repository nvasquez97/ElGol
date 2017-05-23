import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';
import { Partidos } from './partidos.js';

if (Meteor.isServer) {
  describe('Add Partidos', function () {
    beforeEach(function () {
      Partidos.remove({});
      Partidos.insert({ _id: '1', key: '1', id_equipo1: 'Millos', id_equipo2:'Santa fe', goles1:'2', goles2:'7', torneo:'ChampCol'});
      Partidos.insert({ _id: '2', key: '2', id_equipo1: 'Santa Fe', id_equipo2:'Real', goles1:'0', goles2:'6', torneo:'ChampCol'});
    });
    it('Should find partidos', function () {
      const result = Partidos.find({});
      chai.assert.equal(result.count(), 2);
    });
  });
  describe('Remove Partidos', function () {
    beforeEach(function () {
      Partidos.remove({});
      Partidos.insert({ _id: '3', key: '1', id_equipo1: 'Millos', id_equipo2:'Santa fe', goles1:'2', goles2:'7', torneo:'ChampCol'});
      Partidos.insert({ _id: '4', key: '2', id_equipo1: 'Santa Fe', id_equipo2:'Real', goles1:'0', goles2:'6', torneo:'ChampCol'});
    });
    it('Should remove partidos', function () {
      const result = Partidos.find({});
      const resul1 = chai.assert.equal(result.count(), 2);
      Partidos.remove({});
      const resul2 = chai.assert.equal(result.count(), 0);
      chai.assert.equal(resul1, resul2);
    });
  });
}