import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Partidos = new Mongo.Collection('partidos');

if(Meteor.isServer)
{
	Meteor.publish('partidos', function getPartidos(){
		return Partidos.find({});
	});
}