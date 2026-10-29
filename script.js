const games = [
  { title: 'Rooftop Snipers', category: 'Action', tags: ['Arena', 'Shooter', 'Two-player'], url: 'https://poki.com/en/g/rooftop-snipers' },
  { title: 'Subway Surfers', category: 'Runner', tags: ['Endless', 'Arcade', 'High score'], url: 'https://poki.com/en/g/subway-surfers' },
  { title: 'Drive Mad', category: 'Racing', tags: ['Car', 'Stunt', 'Physics'], url: 'https://poki.com/en/g/drive-mad' },
  { title: '2048', category: 'Puzzle', tags: ['Numbers', 'Logic', 'Brain'], url: 'https://poki.com/en/g/2048' },
  { title: 'Basketball Stars', category: 'Sports', tags: ['Basketball', 'Arcade', 'Multiplayer'], url: 'https://poki.com/en/g/basketball-stars' },
  { title: 'Slope', category: 'Arcade', tags: ['Speed', 'Jump', 'Skill'], url: 'https://poki.com/en/g/slope' },
  { title: 'Color Switch', category: 'Arcade', tags: ['Timing', 'Reflex', 'Neon'], url: 'https://poki.com/en/g/color-switch' },
  { title: 'Madalin Stunt Cars 2', category: 'Racing', tags: ['Driving', 'Stunts', 'Open world'], url: 'https://poki.com/en/g/madalin-stunt-cars-2' },
  { title: 'Stick Merge', category: 'Strategy', tags: ['Merge', 'Idle', 'Tower'], url: 'https://poki.com/en/g/stick-merge' },
  { title: 'Gun Mayhem 2', category: 'Action', tags: ['Shooter', 'Battle', 'Weapons'], url: 'https://poki.com/en/g/gun-mayhem-2' },
  { title: 'Tunnel Rush', category: 'Arcade', tags: ['Rhythm', 'Reaction', '3D'], url: 'https://poki.com/en/g/tunnel-rush' },
  { title: 'Temple Run 2', category: 'Runner', tags: ['Endless', 'Action', 'Temple'], url: 'https://poki.com/en/g/temple-run-2' },
  { title: 'Block Blast', category: 'Puzzle', tags: ['Tiles', 'Match', 'Strategy'], url: 'https://poki.com/en/g/block-blast' },
  { title: 'Snake', category: 'Arcade', tags: ['Classic', 'Retro', 'Growth'], url: 'https://poki.com/en/g/snake' },
  { title: 'Stickman Hook', category: 'Action', tags: ['Platformer', 'Swing', 'Skill'], url: 'https://poki.com/en/g/stickman-hook' },
  { title: 'Piano Tiles 2', category: 'Music', tags: ['Rhythm', 'Tap', 'Speed'], url: 'https://poki.com/en/g/piano-tiles-2' },
  { title: 'Basket Bros', category: 'Sports', tags: ['Basketball', 'Arcade', 'One-on-one'], url: 'https://poki.com/en/g/basket-bros' },
  { title: 'FNF', category: 'Music', tags: ['Rhythm', 'Battle', 'Keyboard'], url: 'https://poki.com/en/g/fnf' },
  { title: 'A Small World Cup', category: 'Sports', tags: ['Football', 'Arcade', 'Manager'], url: 'https://poki.com/en/g/a-small-world-cup' },
  { title: 'Dinosaur Game', category: 'Arcade', tags: ['Runner', 'Chrome', 'Retro'], url: 'https://poki.com/en/g/dinosaur-game' },
  { title: 'Water Color Sort', category: 'Puzzle', tags: ['Sorting', 'Logic', 'Color'], url: 'https://poki.com/en/g/water-color-sort' },
  { title: 'Merge Cakes', category: 'Strategy', tags: ['Merge', 'Cooking', 'Idle'], url: 'https://poki.com/en/g/merge-cakes' },
  { title: 'Bouncy Ball', category: 'Arcade', tags: ['Physics', 'Reflex', 'Bounce'], url: 'https://poki.com/en/g/bouncy-ball' },
  { title: 'Big Tower Tiny Square', category: 'Platformer', tags: ['Jump', 'Precision', 'Difficult'], url: 'https://poki.com/en/g/big-tower-tiny-square' },
  { title: 'Doodle Jump', category: 'Arcade', tags: ['Jump', 'Arcade', 'Vertical'], url: 'https://poki.com/en/g/doodle-jump' },
  { title: 'Penalty Shooters 2', category: 'Sports', tags: ['Football', 'Reflex', 'Arcade'], url: 'https://poki.com/en/g/penalty-shooters-2' },
  { title: 'House of Evil', category: 'Action', tags: ['Horror', 'Weapon', 'Survival'], url: 'https://poki.com/en/g/house-of-evil' },
  { title: 'Idle Breakout', category: 'Strategy', tags: ['Idle', 'Breakout', 'Upgrade'], url: 'https://poki.com/en/g/idle-breakout' },
  { title: 'Wheely 7', category: 'Puzzle', tags: ['Driving', 'Adventure', 'Logic'], url: 'https://poki.com/en/g/wheely-7' },
  { title: 'Sling Drift', category: 'Racing', tags: ['Driving', '3D', 'Skill'], url: 'https://poki.com/en/g/sling-drift' },
  { title: 'Minesweeper', category: 'Puzzle', tags: ['Classic', 'Logic', 'Board'], url: 'https://poki.com/en/g/minesweeper' },
  { title: 'Bloxorz', category: 'Puzzle', tags: ['Logic', 'Cube', 'Brain'], url: 'https://poki.com/en/g/bloxorz' },
  { title: 'Bubbles', category: 'Arcade', tags: ['Casual', 'Puzzle', 'Relax'], url: 'https://poki.com/en/g/bubbles' },
  { title: 'Cookie Clicker', category: 'Idle', tags: ['Clicker', 'Idle', 'Upgrade'], url: 'https://poki.com/en/g/cookie-clicker' },
  { title: 'Ludo King', category: 'Board', tags: ['Multiplayer', 'Dice', 'Classic'], url: 'https://poki.com/en/g/ludo-king' },
  { title: 'Crazy Kitchen', category: 'Cooking', tags: ['Time', 'Fast', 'Fun'], url: 'https://poki.com/en/g/crazy-kitchen' },
  { title: 'Solitaire', category: 'Card', tags: ['Classic', 'Single-player', 'Relax'], url: 'https://poki.com/en/g/solitaire' },
  { title: 'Word Search', category: 'Word', tags: ['Brain', 'Classic', 'Puzzle'], url: 'https://poki.com/en/g/word-search' },
  { title: 'Murder', category: 'Action', tags: ['Strategy', 'Crime', 'Mystery'], url: 'https://poki.com/en/g/murder' },
  { title: 'Tetris', category: 'Puzzle', tags: ['Classic', 'Retro', 'Stacking'], url: 'https://poki.com/en/g/tetris' },
  { title: 'Zombie Mission', category: 'Action', tags: ['Zombie', 'Shooter', 'Battle'], url: 'https://poki.com/en/g/zombie-mission' },
  { title: 'Happy Wheels', category: 'Physics', tags: ['Ragdoll', 'Obstacle', 'Funny'], url: 'https://poki.com/en/g/happy-wheels' },
  { title: 'King of Fighters', category: 'Fighting', tags: ['Beat-em-up', 'Arena', 'Combat'], url: 'https://poki.com/en/g/king-of-fighters' },
  { title: 'Moto X3M', category: 'Racing', tags: ['Bike', 'Trick', 'Obstacle'], url: 'https://poki.com/en/g/moto-x3m' },
  { title: 'Flip Bottle', category: 'Arcade', tags: ['Physics', 'Timing', 'Cool'], url: 'https://poki.com/en/g/flip-bottle' },
  { title: 'Yohoho.io', category: 'Action', tags: ['Multiplayer', 'Pirate', 'Combat'], url: 'https://poki.com/en/g/yohoho-io' },
  { title: 'Rocket Bot Royale', category: 'Action', tags: ['Battle', 'Arena', 'Multiplayer'], url: 'https://poki.com/en/g/rocket-bot-royale' },
  { title: 'Castle Wars', category: 'Strategy', tags: ['Defense', 'Battle', 'Build'], url: 'https://poki.com/en/g/castle-wars' },
  { title: 'Fireball.io', category: 'Action', tags: ['Arena', 'Survival', 'Multiplayer'], url: 'https://poki.com/en/g/fireball-io' },
  { title: 'Bloxd.io', category: 'Adventure', tags: ['Sandbox', 'Multiplayer', 'Building'], url: 'https://poki.com/en/g/bloxd-io' },
  { title: 'Vex 3', category: 'Platformer', tags: ['Precision', 'Difficult', 'Run'], url: 'https://poki.com/en/g/vex-3' },
  { title: 'Perfect Peel', category: 'Arcade', tags: ['Timing', 'Skill', 'Funny'], url: 'https://poki.com/en/g/perfect-peel' },
  { title: 'Papa’s Freezeria', category: 'Simulation', tags: ['Cooking', 'Tycoon', 'Time management'], url: 'https://poki.com/en/g/papa-s-freezeria' },
  { title: 'Backrooms', category: 'Horror', tags: ['Survival', 'Explore', 'Scary'], url: 'https://poki.com/en/g/backrooms' },
  { title: 'Snow Rider 3D', category: 'Racing', tags: ['Winter', 'Ski', 'Speed'], url: 'https://poki.com/en/g/snow-rider-3d' },
  { title: 'Lemonade Tycoon', category: 'Simulation', tags: ['Business', 'Idle', 'Upgrade'], url: 'https://poki.com/en/g/lemonade-tycoon' },
  { title: 'Frog Jumps', category: 'Arcade', tags: ['Jump', 'Reflex', 'Cute'], url: 'https://poki.com/en/g/frog-jumps' },
  { title: 'Football Legends', category: 'Sports', tags: ['Soccer', 'Arcade', 'One-v-one'], url: 'https://poki.com/en/g/football-legends' },
  { title: 'ZigZag', category: 'Arcade', tags: ['Endless', 'Reflex', 'Minimal'], url: 'https://poki.com/en/g/zigzag' },
  { title: 'Cookie Run', category: 'Adventure', tags: ['Runner', 'Fantasy', 'Cute'], url: 'https://poki.com/en/g/cookie-run' },
  { title: 'Falling Balls', category: 'Puzzle', tags: ['Stack', 'Color', 'Quick'], url: 'https://poki.com/en/g/falling-balls' },
  { title: 'Idle Dice', category: 'Idle', tags: ['Dice', 'Upgrade', 'Numbers'], url: 'https://poki.com/en/g/idle-dice' },
  { title: 'Impossible Quiz', category: 'Quiz', tags: ['Trivia', 'Funny', 'Brain'], url: 'https://poki.com/en/g/impossible-quiz' },
  { title: 'Tiny Fishing', category: 'Simulation', tags: ['Fishing', 'Idle', 'Relax'], url: 'https://poki.com/en/g/tiny-fishing' },
  { title: 'Cubes King', category: 'Strategy', tags: ['Battle', 'Tower', 'Upgrade'], url: 'https://poki.com/en/g/cubes-king' },
  { title: 'Aqua Throne', category: 'Adventure', tags: ['Puzzle', 'Fantasy', 'Story'], url: 'https://poki.com/en/g/aqua-throne' },
  { title: 'Vex 4', category: 'Platformer', tags: ['Speed', 'Challenge', 'Skill'], url: 'https://poki.com/en/g/vex-4' },
  { title: 'Ragdoll Runners', category: 'Runner', tags: ['Physics', 'Funny', 'Obstacle'], url: 'https://poki.com/en/g/ragdoll-runners' },
  { title: 'Wordle', category: 'Word', tags: ['Brain', 'Daily', 'Logic'], url: 'https://poki.com/en/g/wordle' },
  { title: 'Buster', category: 'Action', tags: ['Shooter', 'Retro', 'Bullet'], url: 'https://poki.com/en/g/buster' },
  { title: 'Red Ball 4', category: 'Platformer', tags: ['Ball', 'Adventure', 'Jump'], url: 'https://poki.com/en/g/red-ball-4' },
  { title: 'Parking Fury', category: 'Driving', tags: ['Car', 'Parking', 'Precision'], url: 'https://poki.com/en/g/parking-fury' },
  { title: 'Snail Bob', category: 'Adventure', tags: ['Puzzle', 'Cute', 'Logic'], url: 'https://poki.com/en/g/snail-bob' },
  { title: 'The Impossible Quiz', category: 'Quiz', tags: ['Funny', 'Brain', 'Trick'], url: 'https://poki.com/en/g/the-impossible-quiz' },
  { title: 'One More Bounce', category: 'Arcade', tags: ['Bounce', 'Skill', 'Reflex'], url: 'https://poki.com/en/g/one-more-bounce' },
  { title: 'Flappy Bird', category: 'Arcade', tags: ['Endless', 'Tap', 'Classic'], url: 'https://poki.com/en/g/flappy-bird' },
  { title: 'Ragdoll Hit', category: 'Physics', tags: ['Funny', 'Action', 'Combat'], url: 'https://poki.com/en/g/ragdoll-hit' },
  { title: 'Cut the Rope', category: 'Puzzle', tags: ['Physics', 'Brain', 'Cute'], url: 'https://poki.com/en/g/cut-the-rope' },
  { title: 'Goalkeeper Challenge', category: 'Sports', tags: ['Soccer', 'Reflex', 'Goal'], url: 'https://poki.com/en/g/goalkeeper-challenge' },
  { title: 'Stack', category: 'Arcade', tags: ['Balance', 'Tower', 'Skill'], url: 'https://poki.com/en/g/stack' },
  { title: 'Mine Block', category: 'Puzzle', tags: ['Mining', 'Logic', 'Puzzle'], url: 'https://poki.com/en/g/mine-block' },
  { title: 'Winter Clash 3D', category: 'Action', tags: ['Arena', 'Battle', 'Snow'], url: 'https://poki.com/en/g/winter-clash-3d' },
  { title: 'Lifes American', category: 'Adventure', tags: ['Story', 'Decision', 'Dating'], url: 'https://poki.com/en/g/lifes-american' },
  { title: 'Sound Jump', category: 'Music', tags: ['Rhythm', 'Timing', 'Jump'], url: 'https://poki.com/en/g/sound-jump' },
  { title: 'Tiny Town', category: 'Simulation', tags: ['Build', 'City', 'Relax'], url: 'https://poki.com/en/g/tiny-town' },
  { title: 'Bouncy Race 3D', category: 'Racing', tags: ['Speed', 'Fun', 'Color'], url: 'https://poki.com/en/g/bouncy-race-3d' },
  { title: 'Hook', category: 'Action', tags: ['Swing', 'Precision', 'Skill'], url: 'https://poki.com/en/g/hook' },
  { title: 'Ball Sort Puzzle', category: 'Puzzle', tags: ['Sort', 'Logic', 'Color'], url: 'https://poki.com/en/g/ball-sort-puzzle' },
  { title: 'Shark.io', category: 'Action', tags: ['Arena', 'Growth', 'Survival'], url: 'https://poki.com/en/g/shark-io' },
  { title: 'Parking Mania 3D', category: 'Driving', tags: ['Car', 'Parking', 'Precision'], url: 'https://poki.com/en/g/parking-mania-3d' },
  { title: 'Jelly Collapse', category: 'Puzzle', tags: ['Match', 'Color', 'Relax'], url: 'https://poki.com/en/g/jelly-collapse' },
  { title: 'Get The Blue Cube', category: 'Puzzle', tags: ['Logic', 'Color', 'Skill'], url: 'https://poki.com/en/g/get-the-blue-cube' },
  { title: 'Bumper Cars', category: 'Racing', tags: ['Arena', 'Crash', 'Fun'], url: 'https://poki.com/en/g/bumper-cars' },
  { title: 'Mini Golf', category: 'Sports', tags: ['Golf', 'Precision', 'Arcade'], url: 'https://poki.com/en/g/mini-golf' },
  { title: 'Prison', category: 'Action', tags: ['Adventure', 'Escape', 'Skill'], url: 'https://poki.com/en/g/prison' },
  { title: 'Ninja Kiwi', category: 'Action', tags: ['Strategy', 'Defense', 'Tower'], url: 'https://poki.com/en/g/ninja-kiwi' },
  { title: 'Poppy Playtime', category: 'Horror', tags: ['Survival', 'Scary', 'Adventure'], url: 'https://poki.com/en/g/poppy-playtime' },
  { title: 'Colored Trails', category: 'Puzzle', tags: ['Speed', 'Trail', 'Logic'], url: 'https://poki.com/en/g/colored-trails' },
  { title: 'A Dark Room', category: 'Adventure', tags: ['Text', 'Survival', 'Strategy'], url: 'https://poki.com/en/g/a-dark-room' },
  { title: 'Cell to Singularity', category: 'Simulation', tags: ['Evolution', 'Science', 'Sandbox'], url: 'https://poki.com/en/g/cell-to-singularity' },
  { title: 'G-Switch 3', category: 'Arcade', tags: ['Gravity', 'Timing', 'Skill'], url: 'https://poki.com/en/g/g-switch-3' },
  { title: 'Blob Opera', category: 'Music', tags: ['Creative', 'Sound', 'Fun'], url: 'https://poki.com/en/g/blob-opera' },
  { title: 'Tiger Simulator 3D', category: 'Simulation', tags: ['Animal', 'Explore', 'Open world'], url: 'https://poki.com/en/g/tiger-simulator-3d' },
  { title: 'Poop Clicker', category: 'Idle', tags: ['Clicker', 'Funny', 'Progression'], url: 'https://poki.com/en/g/poop-clicker' },
  { title: 'The Last Survivor', category: 'Action', tags: ['Battle', 'Survival', 'Arcade'], url: 'https://poki.com/en/g/the-last-survivor' },
  { title: 'Meme Run 3', category: 'Runner', tags: ['Endless', 'Funny', 'Animation'], url: 'https://poki.com/en/g/meme-run-3' },
  { title: 'Dodge Ball', category: 'Action', tags: ['Arena', 'Survival', 'Reflex'], url: 'https://poki.com/en/g/dodge-ball' },
  { title: 'Venge.io', category: 'Action', tags: ['Arena', 'Multiplayer', 'Shooter'], url: 'https://poki.com/en/g/venge-io' },
  { title: 'Rolly Vortex', category: 'Arcade', tags: ['Tunnel', 'Spin', 'Speed'], url: 'https://poki.com/en/g/rolly-vortex' },
  { title: 'Merge Numbers', category: 'Puzzle', tags: ['Merge', 'Numbers', 'Strategy'], url: 'https://poki.com/en/g/merge-numbers' },
  { title: 'Pipes', category: 'Puzzle', tags: ['Connection', 'Logic', 'Flow'], url: 'https://poki.com/en/g/pipes' },
  { title: 'Moby Dick', category: 'Adventure', tags: ['Story', 'Ocean', 'Puzzle'], url: 'https://poki.com/en/g/moby-dick' },
  { title: 'Tiny Cars', category: 'Racing', tags: ['Mini', 'Speed', 'Circuit'], url: 'https://poki.com/en/g/tiny-cars' },
  { title: 'Monkey Mart', category: 'Simulation', tags: ['Management', 'Idle', 'Cart'], url: 'https://poki.com/en/g/monkey-mart' },
  { title: 'Cosmic Smash', category: 'Arcade', tags: ['Space', 'Blast', 'High score'], url: 'https://poki.com/en/g/cosmic-smash' },
  { title: 'Tetris 99', category: 'Puzzle', tags: ['Classic', 'Multiplayer', 'Retro'], url: 'https://poki.com/en/g/tetris-99' },
  { title: 'Tiny Room', category: 'Puzzle', tags: ['Escape', 'Logic', 'Brain'], url: 'https://poki.com/en/g/tiny-room' },
  { title: 'Long Cat', category: 'Arcade', tags: ['Mini', 'Funny', 'Reaction'], url: 'https://poki.com/en/g/long-cat' },
  { title: 'Swords and Sandals', category: 'RPG', tags: ['Combat', 'Fantasy', 'Battle'], url: 'https://poki.com/en/g/swords-and-sandals' },
  { title: 'Super Battle', category: 'Action', tags: ['Shooter', 'Arena', 'Multiplayer'], url: 'https://poki.com/en/g/super-battle' },
  { title: 'Integrations', category: 'Puzzle', tags: ['Logic', 'Pattern', 'Brain'], url: 'https://poki.com/en/g/integrations' },
  { title: 'Swerve', category: 'Arcade', tags: ['Reflex', 'Skill', 'Minimal'], url: 'https://poki.com/en/g/swerve' },
  { title: 'Whack Your Boss', category: 'Action', tags: ['Comedy', 'Funny', 'Skill'], url: 'https://poki.com/en/g/whack-your-boss' },
  { title: 'Tower Defense', category: 'Strategy', tags: ['Defense', 'Build', 'Battle'], url: 'https://poki.com/en/g/tower-defense' },
  { title: 'Yummy', category: 'Cooking', tags: ['Fast food', 'Management', 'Time'], url: 'https://poki.com/en/g/yummy' },
  { title: 'Draw Rider', category: 'Racing', tags: ['Drawing', 'Physics', 'Challenge'], url: 'https://poki.com/en/g/draw-rider' },
  { title: 'The Cube', category: 'Puzzle', tags: ['Logic', 'Cube', 'Minimal'], url: 'https://poki.com/en/g/the-cube' },
  { title: 'Pinewood Builders', category: 'Simulation', tags: ['Build', 'Crafting', 'Creative'], url: 'https://poki.com/en/g/pinewood-builders' },
  { title: 'Caterpillar', category: 'Arcade', tags: ['Growth', 'Classic', 'Skill'], url: 'https://poki.com/en/g/caterpillar' },
  { title: 'Bubbles Shooter', category: 'Puzzle', tags: ['Match', 'Classic', 'Arcade'], url: 'https://poki.com/en/g/bubbles-shooter' },
  { title: 'Sonic The Hedgehog', category: 'Platformer', tags: ['Fast', 'Classic', 'Run'], url: 'https://poki.com/en/g/sonic-the-hedgehog' },
  { title: 'Cannon Balls 3D', category: 'Action', tags: ['Shooter', 'Physics', 'Arcade'], url: 'https://poki.com/en/g/cannon-balls-3d' },
  { title: 'Duck Life', category: 'Simulation', tags: ['Care', 'Upgrade', 'Animal'], url: 'https://poki.com/en/g/duck-life' },
  { title: 'Shark Tank', category: 'Business', tags: ['Strategy', 'Tycoon', 'Pitch'], url: 'https://poki.com/en/g/shark-tank' },
  { title: 'Merge Round Racers', category: 'Racing', tags: ['Merge', 'Cars', 'Upgrade'], url: 'https://poki.com/en/g/merge-round-racers' },
  { title: 'Crazy Taxi', category: 'Driving', tags: ['Cab', 'Traffic', 'Arcade'], url: 'https://poki.com/en/g/crazy-taxi' },
  { title: 'Hidden Objects', category: 'Puzzle', tags: ['Search', 'Spot', 'Relax'], url: 'https://poki.com/en/g/hidden-objects' },
  { title: 'Dino Run', category: 'Runner', tags: ['Endless', 'Jump', 'Retro'], url: 'https://poki.com/en/g/dino-run' },
  { title: 'Mole Heroes', category: 'Adventure', tags: ['Puzzle', 'Action', 'Cute'], url: 'https://poki.com/en/g/mole-heroes' },
  { title: 'Cyber Cars Punk Racing', category: 'Racing', tags: ['Neon', 'Traffic', '3D'], url: 'https://poki.com/en/g/cyber-cars-punk-racing' },
  { title: 'Jelly Pop', category: 'Puzzle', tags: ['Match', 'Color', 'Sweet'], url: 'https://poki.com/en/g/jelly-pop' },
  { title: 'Goblin vs Shrimp', category: 'Action', tags: ['Battle', 'Funny', 'Arcade'], url: 'https://poki.com/en/g/goblin-vs-shrimp' },
  { title: 'Bluey', category: 'Adventure', tags: ['Kids', 'Story', 'Casual'], url: 'https://poki.com/en/g/bluey' },
  { title: 'Bottle Flip 3D', category: 'Arcade', tags: ['Physics', 'Timing', 'Fun'], url: 'https://poki.com/en/g/bottle-flip-3d' },
  { title: 'Crown Rush', category: 'Adventure', tags: ['Runner', 'Fantasy', 'Battle'], url: 'https://poki.com/en/g/crown-rush' },
  { title: 'Halloween Merge', category: 'Strategy', tags: ['Merge', 'Seasonal', 'Upgrade'], url: 'https://poki.com/en/g/halloween-merge' },
  { title: 'Bubble Trouble', category: 'Arcade', tags: ['Puzzle', 'Bubble', 'Classic'], url: 'https://poki.com/en/g/bubble-trouble' },
  { title: 'Gravity Guy', category: 'Platformer', tags: ['Gravity', 'Skill', 'Speed'], url: 'https://poki.com/en/g/gravity-guy' },
  { title: 'EvoWorld', category: 'Simulation', tags: ['Creatures', 'Evolution', 'Adventure'], url: 'https://poki.com/en/g/evoworld' },
  { title: 'Ballerz', category: 'Sports', tags: ['Basketball', 'Arena', 'Arcade'], url: 'https://poki.com/en/g/ballerz' },
  { title: 'Aviator', category: 'Arcade', tags: ['Flight', 'Skill', 'High score'], url: 'https://poki.com/en/g/aviator' },
  { title: 'Dino Park', category: 'Simulation', tags: ['Dinosaurs', 'Builder', 'Cute'], url: 'https://poki.com/en/g/dino-park' },
  { title: 'Emoji Match', category: 'Puzzle', tags: ['Match', 'Brain', 'Relax'], url: 'https://poki.com/en/g/emoji-match' },
  { title: 'Mini Brawl', category: 'Action', tags: ['Arena', 'Combat', 'Fighting'], url: 'https://poki.com/en/g/mini-brawl' },
  { title: 'Ninja Slide', category: 'Arcade', tags: ['Slide', 'Action', 'Speed'], url: 'https://poki.com/en/g/ninja-slide' },
  { title: 'Cubefield', category: 'Arcade', tags: ['Avoid', 'Reflex', '3D'], url: 'https://poki.com/en/g/cubefield' },
  { title: 'Paper.io 2', category: 'Action', tags: ['Arena', 'Multiplayer', 'Territory'], url: 'https://poki.com/en/g/paper-io-2' },
  { title: 'Getaway Shootout', category: 'Action', tags: ['Platform', 'Arcade', 'Multiplayer'], url: 'https://poki.com/en/g/getaway-shootout' },
  { title: 'Pill Color', category: 'Puzzle', tags: ['Color', 'Match', 'Logic'], url: 'https://poki.com/en/g/pill-color' },
  { title: 'Murder in the Dark', category: 'Horror', tags: ['Mystery', 'Scary', 'Story'], url: 'https://poki.com/en/g/murder-in-the-dark' },
  { title: 'Nimble Quest', category: 'Action', tags: ['Rogue', 'Unlock', 'Arcade'], url: 'https://poki.com/en/g/nimble-quest' }
];

const categories = ['All', ...new Set(games.map((game) => game.category))];
const state = {
  selectedCategory: 'All',
  query: '',
  lastGameUrl: ''
};

const searchInput = document.getElementById('searchInput');
const categoryFilters = document.getElementById('categoryFilters');
const gameGrid = document.getElementById('gameGrid');
const gameCount = document.getElementById('gameCount');
const playTitle = document.getElementById('playTitle');
const gameFrame = document.getElementById('gameFrame');
const fallbackMessage = document.getElementById('fallbackMessage');
const openExternalBtn = document.getElementById('openExternalBtn');
const closePlayBtn = document.getElementById('closePlayBtn');

function openGameInNewTab(game) {
  state.lastGameUrl = game.url;
  playTitle.textContent = `${game.title} — opening...`;
  const newWindow = window.open(game.url, '_blank', 'noopener,noreferrer');

  if (!newWindow) {
    fallbackMessage.textContent = 'Popup blocked. Please allow pop-ups or use the Open in new tab button.';
    fallbackMessage.classList.remove('hidden');
    return;
  }

  fallbackMessage.textContent = `Opening ${game.title} in a new tab...`;
  fallbackMessage.classList.remove('hidden');
  gameFrame.src = 'about:blank';

  setTimeout(() => {
    fallbackMessage.classList.add('hidden');
  }, 1600);
}

function buildCategoryFilters() {
  categoryFilters.innerHTML = '';
  categories.forEach((category) => {
    const button = document.createElement('button');
    button.className = `filter-chip ${category === state.selectedCategory ? 'active' : ''}`;
    button.textContent = category;
    button.addEventListener('click', () => {
      state.selectedCategory = category;
      renderFilters();
      renderGames();
    });
    categoryFilters.appendChild(button);
  });
}

function renderFilters() {
  const chips = categoryFilters.querySelectorAll('.filter-chip');
  chips.forEach((chip) => {
    chip.classList.toggle('active', chip.textContent === state.selectedCategory);
  });
}

function getFilteredGames() {
  return games.filter((game) => {
    const matchesCategory = state.selectedCategory === 'All' || game.category === state.selectedCategory;
    const haystack = `${game.title} ${game.category} ${game.tags.join(' ')}`.toLowerCase();
    const matchesQuery = haystack.includes(state.query.toLowerCase());
    return matchesCategory && matchesQuery;
  });
}

function renderGames() {
  const filteredGames = getFilteredGames();
  gameCount.textContent = filteredGames.length;
  gameGrid.innerHTML = '';

  filteredGames.forEach((game) => {
    const card = document.createElement('article');
    card.className = 'game-card';
    card.setAttribute('tabindex', '0');

    const initials = game.title
      .split(' ')
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase();

    card.innerHTML = `
      <div class="game-thumb"><span>${initials}</span></div>
      <div class="card-body">
        <div class="card-top">
          <h3 class="card-title">${game.title}</h3>
          <span class="badge">${game.category}</span>
        </div>
        <p class="card-meta">Public web game</p>
        <div class="card-tags">
          ${game.tags.slice(0, 3).map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      </div>
    `;

    const openGame = () => {
      openGameInNewTab(game);
      const tabButtons = document.querySelectorAll('.tab-button');
      tabButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.tab === 'play'));
      document.getElementById('libraryTab').classList.remove('active');
      document.getElementById('playTab').classList.add('active');
    };

    card.addEventListener('click', openGame);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openGame();
      }
    });

    gameGrid.appendChild(card);
  });
}

searchInput.addEventListener('input', (event) => {
  state.query = event.target.value.trim();
  renderGames();
});

const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;
    const libraryTab = document.getElementById('libraryTab');
    const playTab = document.getElementById('playTab');

    tabButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    libraryTab.classList.toggle('active', target === 'library');
    playTab.classList.toggle('active', target === 'play');
  });
});

openExternalBtn.addEventListener('click', () => {
  if (state.lastGameUrl) {
    window.open(state.lastGameUrl, '_blank', 'noopener,noreferrer');
  }
});

closePlayBtn.addEventListener('click', () => {
  gameFrame.src = 'about:blank';
  playTitle.textContent = 'Choose a game';
  fallbackMessage.classList.add('hidden');
  tabButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.tab === 'library'));
  document.getElementById('libraryTab').classList.add('active');
  document.getElementById('playTab').classList.remove('active');
});

buildCategoryFilters();
renderGames();
