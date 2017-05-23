import { Meteor } from 'meteor/meteor';
import { chai, expect } from 'meteor/practicalmeteor:chai';
import { Usuarios } from './usuarios.js';
import { Accounts } from 'meteor/accounts-base';
import  faker  from 'faker';

if(Meteor.isClient){
	describe('Accounts', function () {

    it('should be able to create a user', function () {
      const pusername = faker.internet.userName();
      const pemail= faker.internet.email();
      const ppassword = 'password1234';

      const createUser = new Promise((resolve, reject) => {
        Accounts.createUser({
          username: pusername,
          email: pemail,
          password: ppassword,
        }, (error) => {
          if (error) {
            reject(error);
          } else {
            const newUser = Meteor.users.findOne();
            resolve(newUser);
          }
        });
      });
      return createUser.then(function (newUser) {
        expect(newUser).to.not.be.undefined;
        console.log(newUser);
        expect(newUser.username).to.equal(pusername);
      });
    });
  });
}