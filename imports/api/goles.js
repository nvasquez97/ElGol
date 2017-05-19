import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export cons Goles = new Mongo.Collection('goles');

if(Meteor.isServer)
{
	Meteor.publish('goles', function getGoles(){
		return Goles.find({});
	});
}