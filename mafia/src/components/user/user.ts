import { MenuPage } from "../../screens/menu/menuPage";
import { userInterface } from "../../types/user";

export const user: userInterface = {
  name: 'user',
  lastGame: "AAAAAA",
  active: false,
  addFree: false,
  gamesNarrated: 0,
  gamesWonAsGood: 0,
  gamesWonAsEvil: 0,
  gamesWonAsNeutral: 0,
  gamesLostAsGood: 0,
  gamesLostAsEvil: 0,
  gamesLostAsNeutral: 0,
  items: [],
  setUser: function (doc: any): void {
    throw new Error("Function not implemented.");
  },
  getUser: function () {
    throw new Error("Function not implemented.");
  },
}

user.getUser = function() {
  return user;
}

user.setUser = function(doc: any) {
  console.log('setUser');
  this.name = doc.name;
  this.lastGame = doc.lastGame;
  this.active = true;
  this.addFree = doc.addFree;
  this.gamesNarrated = doc.gamesNarrated;
  this.gamesWonAsGood = doc.gamesWonAsGood;
  this.gamesWonAsEvil = doc.gamesWonAsEvil;
  this.gamesWonAsNeutral = doc.gamesWonAsNeutral;
  this.gamesLostAsGood = doc.gamesLostAsGood;
  this.gamesLostAsEvil = doc.gamesLostAsEvil;
  this.gamesLostAsNeutral = doc.gamesLostAsNeutral;
  this.items = doc.items;
}
