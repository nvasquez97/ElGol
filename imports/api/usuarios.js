import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Usuarios = new Mongo.Collection('usuarios');

if(Meteor.isServer)
{
	Meteor.publish('usuarios', function getPartidos(){
		if(Meteor.userId()!==null)
		{
			return Usuarios.find({"_id":Meteor.userId()});	
		}
		else
		{
			return [];
		}
	});

	Meteor.methods({
		'user.insertName'(name, id){
			Usuarios.insert({"_id":id, nombre:name});
		}
	});
}