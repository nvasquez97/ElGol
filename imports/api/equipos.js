import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Equipos = new Mongo.Collection('equipos');

if(Meteor.isServer)
{
	Meteor.publish('equipos', function getEquipos(){
		return Equipos.find({});
	});
}