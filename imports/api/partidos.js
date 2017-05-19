import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export cons Partidos = new Mongo.Collection('partidos');

if(Meteor.isServer)
{
	Meteor.publish('partidos', function getPartidos(){
		return Partidos.find({});
	});
}