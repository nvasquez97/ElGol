import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Jugadores = new Mongo.Collection('jugadores');

if(Meteor.isServer)
{
	Meteor.publish('jugadores', function getJugadores(){
		return Jugadores.find({});
	});
}