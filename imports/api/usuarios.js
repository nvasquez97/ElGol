import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Usuarios = new Mongo.Collection('usuarios');

if(Meteor.isServer)
{
	Meteor.publish('usuarios', function getPartidos(){
		if(this.userId!==null)
		{
			return Usuarios.find({"_id":this.userId});	
		}
		else
		{
			return [];
		}
	});

	Meteor.methods({
		'user.insertName'(name, id){
			Usuarios.insert({"_id":id, nombre:name});
		},
		'user.addTeam'(name){
			let user = Usuarios.find({ "_id":this.userId }).fetch()[0];
			if(user.equipos){
				let nEquipos = user.equipos.push(name);
				user.equipos = nEquipos;
				Usuarios.update({ "_id":this.userId }, user);
			}
		}
	});
}