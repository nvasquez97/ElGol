import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const PartidosM = new Mongo.Collection('partidos');

if(Meteor.isServer)
{
	Meteor.publish('partidos', function getPartidos(){
		if(this.userId!== null)
		{
			return PartidosM.find({});
		}
		else
		{
			return [];
		}
	});
}