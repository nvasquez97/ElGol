import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Usuarios } from './usuarios.js';
export const PartidosM = new Mongo.Collection('partidos');

if(Meteor.isServer)
{
	Meteor.publish('partidos', function getPartidos(){
		if(this.userId!== null)
		{
			return PartidosM.find({}, {sort: {round: -1}});
		}
		else
		{
			return [];
		}
	});
}