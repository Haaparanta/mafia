# Mafia

# Game rules
Narrator leads the game and sees everybody's roles.
Narrator's word is law.
You cannot show your role to anybody and dead cannot tell anything about the game
Mafia tries to kill towns people enough that there is same amount towns people and mafia people.
Mafia can kill at night and vote them out at day.
Towns people tries to kill mafia by voting them out in daytime.
Doctor can save anybody from killing at night time for one turn.
Detective can see the role of anybody. But only return value is: Good if town people or jester. Bad if mafia or jackal.

# Games
Database: Firebase (Firebase Realtime Database)
games: # game lobby. where players can join and play.
  - lobbyName: # Game name 6 character(contains letters and numbers) unique (Uppercase)  eg. GH1234 of ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 possible combinations are: 36^6

    # lobby rules for the next game.
    - private: # Is the game public or private. Private can only join by using lobbyName. Values: true or false
    - names: # List of player names by uid. Let players chose their player name everytime they join the game/lobby. (contains letters and numbers)
    - possibleRoles: # List of possible roles for the game.
    - createdBy: # uid of the creator of the lobby.
    - narrator: # Has the Game Narrator or not values: true or false. Narrator is always creator of lobby
    - delay: # how long between actions without the narrator. Values: numbers in seconds. Default: 30 seconds. Program does the job of narrator. 
    - voteTime: # how long between votes. Values: numbers in seconds. Default: 30 seconds.
    - nightTime: # how long between night actions. Values: numbers in seconds. Default: 30 seconds.
    - dayTime: # how long between day actions. Values: numbers in seconds. Default: 180 seconds.
    - showRoles: # Show the roles of the players or not. Values: true or false. Default: false.
    - mafiaNumbers: # how many mafia players. Values: numbers. Default: 1. Every 4th player should be a mafia.
    - doctorNumbers: # how many doctor players. Values: numbers. Default: 0.
    - detectiveNumbers: # how many detective players. Values: numbers. Default: 0.
    - jesterNumbers: # how many jester players. Values: numbers. Default: 0. Tries to get voted out of the game.
    - jackalNumbers: # how many jackal/ Serial killer players. Values: numbers. Default: 0. Tries to kill everybody. Game cannot end before this player is dead. Imposter kills before jackal.

    # Game Start
    - gameStarted: # Has the game started values: true or false
    - gameRoles: # roles of players by uid. 

    # Playing Game.
    - gameAlivePlayers: # List of players who are still alive by uid.
    - gameStateDayOrNight: # Is it day or night values: true or false. true = day false = night
    - gameRound: # which day? Values: numbers Default: 0
    - gameMafiaSelected: # List of players who are selected by mafia. and mafia member uid also
    - gameMafiaKill: # who was killed by mafia. Value: uid
    - gameJackalKill: # who was killed by jackal. Value: uid
    - gameDoctorHeal: # who was healed by doctor. Value: uid
    - gameStateVote: # Is it vote or not? values: numbers of positive votes
    - gameVotePlayer: # list of players who got voted by uid. Majority vote get killed. if tie vote, revote until there is no tie. between tied players.

    # Game End
    - gameEnded: # Has the game ended values: true or false
    - gameEndedReason: # Why the game ended values: Possible values: "no players", "Good won", "Evil won", "Neutrals won", "Game ended by narrator"
    - gameWinner: # List of player names by uid. Who won the game.


# Users
users: # Firebase Realtime Database
  - uid: # Unique id of user.
    - name: # User name from last time.
    - addFree: # Is the user added free or not. Values: true or false Default: false
    - items: # List of items.
    - gamesNarrated: # List of games that user has narrated.
    - gamesWonAsGood: # Number of games won as good.
    - gamesLostAsGood: # Number of games lost as good.
    - gamesWonAsEvil: # Number of games won as evil.
    - gamesLostAsEvil: # Number of games lost as evil.
    - gamesWonAsNeutral: # Number of games won as neutral.
    - gamesLostAsNeutral: # Number of games lost as neutral.

Screens:
  - Login Screen
  - Menu Screen
    - Create Game Screen
    - Join Game Screen
    - Store Screen
    - Statistics Screen
    - Settings Screen
    - Log out Button
  - Lobby Screen
    - Narrator Screen
    - Player Screen
  - Game Screen
    - Night Screen
      - Narrator Screen
      - Mafia Screen
      - Doctor Screen
      - Detective Screen
      - Jackal Screen
    - Day Screen
      - Event Screen
      - List screen
        - Narrator Screen with also roles and names
        - player Screen with only names and suspicion
      - Vote Screen
      - Execution Screen
    - Game End Screen

Content of screen:
  - Login Screen
    - Login with google
    - Show only if player are not logged in
  - Menu Screen
    - Show only if player are logged in
    - There is 5 big buttons which lead to other creens and also smaller log out button:
      - Create Game Button:
        - Create Game Screen
          - You can chose lobbyName or use auto generated one.
          - You can chose if the game is public or private.
      - Join Game Button:
        - Join Game Screen
          - You can join game with 6 character lobbyName.
          - long list of public lobbys
      - Store Button:
        - Store Screen
          - You can purchase addfree and also items. You can also buy items with money. Longlisted
      - Statistics Button:
        - Statistics Screen
          - You can see your statistics:
            - Number of games narrated
            - Pierchart of wins divided by different roles
            - Pierchart of loses divided by different roles
            - Win % of different roles and overall
      - Settings Button:
        - Settings Screen:
          - You can change your name
      - Log out Button:
        - Log out and lead to Login Screen.
  - Lobby Screen
    - Narrator Screen
      - You can define game rules and start the game.
      - you can add roles to the game.
      - you can remove roles from the game.
    - Player Screen
      - you can see players and rules of the game.
  - Game Screen
    - Night Screen
      - Narrator Screen:
        - You can see the roles of the players.
        - You can see the names of the players.
        - you can see actions of the players.
      - Mafia Screen
        - You can see the names of the players.
        - you can chose to kill player together or miss. 
          - If all mafia chose to kill same guy he dies.
          - if there is multiple chose ones random of them dies
          - if all of mafia chose miss nobody dies.
          - if there is 2 mafia one chose another player and another player miss. 
      - Doctor Screen
        - You can see the names of the players.
        - you can chose to save player.
      - Detective Screen
        - You can see the names of the players.
        - you can chose to inspect player.
          - Detective can see the role of anybody. But only return value is: Good if town people or jester. Bad if mafia or jackal.
      - Jackal Screen
        - You can see the names of the players.
        - you can chose to kill player.
    - Day Screen
      - Event Screen
        - List of actions of last night. 
          - Who died
      - List screen
        - Narrator Screen with also roles and names
        - player Screen with only names and suspicion
          - suspicion Longlisted
      - Vote Screen
        - First vote is there gonna be a vote for
        - if first vote wins then second vote is for execution of player.
          - most votes wins if tie nobody dies.
      - Execution Screen
        - Shows of execution of player. Player name and if showRoles on then also role.
    - Game End Screen
      - Shows who won the game.
      - Also how won the game.





 
