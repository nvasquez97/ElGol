import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Usuarios = new Mongo.Collection('usuarios');

if(Meteor.isServer)
{
	Meteor.publish('usuarios', function getPartidos(){
		return Usuarios.find({});
	});

	Meteor.methods({
		'user.insertName'(name, id){
			Usuarios.insert({"_id":id, nombre:name});
		}
	});
}