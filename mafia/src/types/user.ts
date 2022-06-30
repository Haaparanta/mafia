


export interface userInterface {
  setUser: (doc: any) => void;
  getUser: () => any;
  name: string;
  lastGame: string;
  active: boolean;
  addFree: boolean;
  gamesNarrated: number;
  gamesWonAsGood: number;
  gamesWonAsEvil: number;
  gamesWonAsNeutral: number;
  gamesLostAsGood: number;
  gamesLostAsEvil: number;
  gamesLostAsNeutral: number;
  items: string[];
}
