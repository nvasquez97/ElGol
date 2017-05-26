import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Usuarios = new Mongo.Collection('usuarios');

if(Meteor.isServer)
{
	Meteor.publish('usuarios', function getPartidos(){
		if(this.userId!==null)
		{
			return Usuarios.find();	
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
		'user.addTeam'(name, id){
			let user = Usuarios.find({ "_id":id }).fetch()[0];
			if(user.equipos){
				if(user.equipos.includes(name))
				{

				}
				else
				{
				user.equipos.push(name);
				let nEquipos = user.equipos;
				user.equipos = nEquipos;
				Usuarios.update({ "_id":this.userId }, user);	
				}
			}
			else
			{
				let nEquipos = [];
				nEquipos.push(name);
				user.equipos = nEquipos;
				Usuarios.update({ "_id":this.userId }, user);
			}
		},
		'user.DeleteTeam'(name, id){
			let user = Usuarios.find({ "_id":id }).fetch()[0];
			if(user.equipos)
			{
				let nEquipos =[];
				user.equipos.map(equip=>{
					if(equip!==name)
					{
						nEquipos.push(equip);
					}
				});
				user.equipos = nEquipos;
				Usuarios.update({ "_id":this.userId }, user);
			}
		},
		'user.addPlayer'(name, id){
			let user = Usuarios.find({ "_id":id }).fetch()[0];
			if(user.jugadores){
				if(user.jugadores.includes(name))
				{

				}
				else
				{
				user.jugadores.push(name);
				Usuarios.update({ "_id":this.userId }, user);	
				}
			}
			else
			{
				let nEquipos = [];
				nEquipos.push(name);
				user.jugadores = nEquipos;
				Usuarios.update({ "_id":this.userId }, user);
			}
		},
		'user.DeletePlayer'(name, id){
			let user = Usuarios.find({ "_id":id }).fetch()[0];
			if(user.jugadores)
			{
				let nEquipos =[];
				user.jugadores.map(equip=>{
					if(equip!==name)
					{
						nEquipos.push(equip);
					}
				});
				user.jugadores = nEquipos;
				Usuarios.update({ "_id":this.userId }, user);
			}
		}
	});
}