var BASE = "https://efnrodzdhzvdgmctpjdx.supabase.co/storage/v1/object/public/gd-images/thumb/marvel-rivals";
var WR = {
"Peni Parker":[57.5,8],"Devil Dinosaur":[52.2,15],"Angela":[52.0,5],"Thor":[52.0,7],"Bruce Banner":[51.9,6],"The Hood":[51.7,32],"Captain America":[51.4,4],"Rogue":[51.0,9],"The Thing":[50.5,12],"Doctor Strange":[50.0,14],"Magneto":[49.8,26],"Venom":[49.6,10],"Groot":[49.2,5],"Emma Frost":[48.7,20],"Deadpool (Vanguard)":[45.8,5],"Storm":[56.5,4],"Magik":[55.3,10],"Gorr":[54.7,11],"Mister Fantastic":[53.4,4],"Blade":[52.2,5],"Scarlet Witch":[52.0,16],"Hela":[51.5,12],"Iron Man":[51.5,6],"Daredevil":[51.2,5],"Iron Fist":[51.2,6],"Black Panther":[50.7,6],"Human Torch":[50.3,3],"Psylocke":[50.2,7],"Black Cat":[50.1,7],"Spider-Man":[49.6,18],"Winter Soldier":[49.5,17],"Wolverine":[48.9,4],"Star-Lord":[48.6,6],"Moon Knight":[48.0,9],"Black Widow":[47.8,7],"Hawkeye":[47.8,4],"Elsa Bloodstone":[47.6,9],"Deadpool (Duelist)":[47.2,4],"Namor":[47.1,12],"Cyclops":[45.8,13],"The Punisher":[45.6,11],"Squirrel Girl":[45.3,8],"Phoenix":[44.2,7],"Ultron":[57.0,6],"Mantis":[56.5,11],"Rocket Raccoon":[53.5,14],"Loki":[50.8,6],"Adam Warlock":[50.6,4],"Jubilee":[50.3,35],"White Fox":[49.4,19],"Gambit":[49.0,22],"Cloak & Dagger":[48.7,34],"Invisible Woman":[48.0,18],"Deadpool (Strategist)":[47.6,8],"Luna Snow":[47.3,21],"Jeff the Land Shark":[46.7,15]
};
var DIAMOND = {
"Vanguard":{"S":["The Thing","Devil Dinosaur","Deadpool (Vanguard)","Emma Frost"],"A":["Magneto","The Hood","Groot","Peni Parker","Rogue","Venom"],"B":["Angela","Doctor Strange","Captain America"],"C":["Bruce Banner","Thor"]},
"Duelist":{"S":["Elsa Bloodstone","Winter Soldier","Black Widow","Wolverine","Hela","Phoenix"],"A":["Spider-Man","Namor","Magik","Scarlet Witch","Daredevil","Star-Lord","Gorr","Psylocke","Cyclops"],"B":["Black Panther","Hawkeye","Iron Man","Deadpool (Duelist)","Human Torch","Iron Fist","Moon Knight","Storm","Black Cat","The Punisher"],"C":["Mister Fantastic","Blade","Squirrel Girl"]},
"Strategist":{"S":["Mantis","Gambit","Invisible Woman","Luna Snow","Rocket Raccoon","Loki"],"A":["Ultron","Adam Warlock","Cloak & Dagger","Jubilee"],"B":["White Fox","Jeff the Land Shark"],"C":["Deadpool (Strategist)"]}
};
var CASUAL = {
"Vanguard":{"S":["Devil Dinosaur","Peni Parker","Doctor Strange","The Thing","Deadpool (Vanguard)"],"A":["Bruce Banner","Captain America","Angela","The Hood"],"B":["Magneto","Groot","Thor","Venom"],"C":["Emma Frost","Rogue"]},
"Duelist":{"S":["Namor","Black Widow","Hela","Scarlet Witch","Moon Knight","Mister Fantastic","The Punisher"],"A":["Black Panther","Iron Fist","Phoenix","Squirrel Girl","Star-Lord","Iron Man","Hawkeye","Gorr","Winter Soldier"],"B":["Elsa Bloodstone","Black Cat","Cyclops","Magik","Wolverine","Daredevil"],"C":["Blade","Storm","Human Torch","Psylocke","Spider-Man","Deadpool (Duelist)"]},
"Strategist":{"S":["Jeff the Land Shark","Rocket Raccoon","Cloak & Dagger","Invisible Woman"],"A":["Adam Warlock","Ultron","White Fox","Jubilee"],"B":["Luna Snow","Mantis","Deadpool (Strategist)","Gambit"],"C":["Loki"]}
};
var OVER = {"Gorr":["gorr-the-god-butcher","gorr"],"Bruce Banner":["bruce-banner","hulk"],"Jeff the Land Shark":["jeff-the-land-shark","jeff"],"Cloak & Dagger":["cloak-dagger","cloak-and-dagger"],"Invisible Woman":["invisible-woman"],"Mister Fantastic":["mister-fantastic"],"Winter Soldier":["winter-soldier"],"Scarlet Witch":["scarlet-witch"],"Black Panther":["black-panther"],"Black Widow":["black-widow"],"Black Cat":["black-cat"],"Star-Lord":["star-lord"],"Iron Fist":["iron-fist"],"Iron Man":["iron-man"],"Spider-Man":["spider-man"],"Captain America":["captain-america"],"Doctor Strange":["doctor-strange"],"Peni Parker":["peni-parker"],"Devil Dinosaur":["devil-dinosaur"],"The Hood":["the-hood"],"The Thing":["the-thing"],"The Punisher":["the-punisher","punisher"],"White Fox":["white-fox"],"Rocket Raccoon":["rocket-raccoon"],"Adam Warlock":["adam-warlock"],"Luna Snow":["luna-snow"],"Elsa Bloodstone":["elsa-bloodstone"],"Squirrel Girl":["squirrel-girl"],"Human Torch":["human-torch"],"Moon Knight":["moon-knight"]};
var HEROES={};
Object.assign(HEROES,{
"Ultron":{r:"Strategist",t:["Flex Support","Poke"],c:["Imperative: Patch then Imperative: Firewall to heal and bolster","Dynamic Flight to reposition, Encephalo-Ray for angles"],s:["Persistent drone healing","Mobile firing angles"],w:["Exposed to ranged fire","Drones depend on positioning"],m:["Yggdrasill Path","Lower Manhattan"],p:["Iron Man","Adam Warlock"],x:["Hela","Hawkeye"]},
"Mantis":{r:"Strategist",t:["Main Support","Poke"],c:["Healing Flower into Allied Inspiration on an engaging teammate","Spore Slumber to stop a diver, Life Energy Blast to punish"],s:["Damage amplification","Strong sleep peel"],w:["Limited Life Orbs","Vulnerable after sleep is spent"],m:["Yggdrasill Path","Thebes"],p:["Adam Warlock","Groot"],x:["Black Panther","Black Cat"]},
"Rocket Raccoon":{r:"Strategist",t:["Main Support","Brawl"],c:["Place B.R.B. then Repair Mode to protect a push","Ammo Overload while The Punisher fires from the device"],s:["Revive beacon","Bouncing area heals"],w:["Beacon can be destroyed","Weak direct dueling"],m:["Lower Manhattan","Hall of Djalia"],p:["The Punisher","Groot"],x:["Black Panther","Daredevil"]},
"Loki":{r:"Strategist",t:["Main Support","Off-Angle"],c:["Doppelganger into Mystical Missile for multi-angle heals","Deception then Devious Exchange to swap away"],s:["Illusion misdirection","Powerful Regeneration Domain"],w:["Clones can be cleared","Setup takes time"],m:["Hall of Djalia","Museum of Contemplation"],p:["Mantis","Bruce Banner"],x:["Spider-Man","Black Panther"]},
"Adam Warlock":{r:"Strategist",t:["Main Support","Anchor"],c:["Soul Bond then Avatar Life Stream to spread and restore","Karmic Revival then Avatar Life Stream to stabilize"],s:["Regenerative Cocoon self-revive","Team resurrection"],w:["Long Soul Bond cooldown","Vulnerable to focused dive"],m:["Thebes","Yggdrasill Path"],p:["Ultron","Mantis"],x:["Black Panther","Venom"]},
"Jubilee":{r:"Strategist",t:["Flex Support","Brawl"],c:["Blooming Ball into Dazzling Detonation, heal or 0.8s blind","Firework Finale field at 180/s, Energy Plasmoids to trigger marks"],s:["Strong clustered healing","Sparking Sprint self-heals 25/s"],w:["Shorter blind window","Field rewards grouping"],m:["Hall of Djalia","Museum of Contemplation"],p:["Blade","Gambit"],x:["Black Panther","Spider-Man"]},
"White Fox":{r:"Strategist",t:["Flex Support","Dive"],c:["Spirit Sanctuary then Spectral Surge to reach and shield","Fox Form Awakening into Tail Sweep to heal and repel"],s:["Ally teleport","Charm plus brief invulnerability"],w:["Spirit Tail management","Close-range exposure"],m:["Arakko","Symbiotic Surface"],p:["Luna Snow","Psylocke"],x:["Squirrel Girl","Black Panther"]},
"Gambit":{r:"Strategist",t:["Flex Support","Brawl"],c:["Healing Hearts into Purifying Pick-Up, heal plus cleanse","Breaking Spades into Explosive Trick, damage plus anti-heal"],s:["Flexible healing and anti-heal","Hearts and Spades charge every 7s"],w:["Must manage card stacks","Ragin Royal Flush only within 30m"],m:["Museum of Contemplation","Lower Manhattan"],p:["Jubilee","Magneto"],x:["Black Panther","Spider-Man"]},
"Cloak & Dagger":{r:"Strategist",t:["Main Support","Brawl"],c:["Dagger Storm into Veil of Lightforce to layer healing","Shadows Embrace, Dark Teleportation, Lights Embrace to shroud then heal"],s:["Flexible healing and escape","Teamwide phasing"],w:["Switching delays the other kit","Limited long-range pressure"],m:["Hall of Djalia","Museum of Contemplation"],p:["Psylocke","Hawkeye"],x:["Peni Parker","Storm"]},
"Invisible Woman":{r:"Strategist",t:["Main Support","Anchor"],c:["Guardian Shield on an ally then Force Physics to push threats","Psionic Vortex to gather, Force Physics to displace"],s:["Shield-based sustain","Strong displacement"],w:["Shield can be pressured","Close divers force cooldowns"],m:["Lower Manhattan","Museum of Contemplation"],p:["Mister Fantastic","Human Torch"],x:["Peni Parker","Venom"]},
"Deadpool (Strategist)":{r:"Strategist",t:["Flex Support","Dive"],c:["Dual Desert Eagles into Deadpool In Your Area, heal at range","Healing Hop in, Kick@$$ Katana to heal through hits"],s:["Heals while attacking","Disruptive taunt"],w:["Melee healing risks exposure","Range-dependent area heal"],m:["Arakko","Symbiotic Surface"],p:["Gambit","Hela"],x:["Peni Parker","Blade"]},
"Luna Snow":{r:"Strategist",t:["Main Support","Poke"],c:["Absolute Zero to freeze, Ice Arts to follow up","Ice Arts into Light and Dark Ice for sustained healing"],s:["Reliable freeze peel","Fate of Both Worlds sustains fights"],w:["Aim-dependent healing","Vulnerable without freeze"],m:["Thebes","Yggdrasill Path"],p:["White Fox","Adam Warlock"],x:["Mantis","Invisible Woman"]},
"Jeff the Land Shark":{r:"Strategist",t:["Main Support","Brawl"],c:["Healing Bubble then Joyful Splash to boost and sustain","Hide and Seek in, Its Jeff to swallow grouped heroes"],s:["Mobile self-sustain","Powerful displacement ultimate"],w:["Limited long-range threat","Swallow can catch allies too"],m:["Museum of Contemplation","Lower Manhattan"],p:["Groot","Luna Snow"],x:["Hawkeye","Cloak & Dagger"]},
"Scarlet Witch":{r:"Duelist",t:["Poke","Brawl"],c:["Scarlet Hex then Chaos Control across marked enemies","Dark Seal into Chthonian Burst on slowed targets"],s:["Multi-target mark pressure","Bonus Health sustain from marked damage"],w:["Loses long sightlines","Dark Seal stuns only on initial detonation"],m:["Hall of Djalia","Lower Manhattan","Symbiotic Surface"],p:["Storm","Ultron"],x:["Squirrel Girl","Hela"]},
"Hela":{r:"Duelist",t:["Poke","Sniper"],c:["Soul Drainer into Nightsword Thorn headshots","Piercing Night then Thorn on a trapped angle"],s:["Strong ranged picks","Crowd control plus escape"],w:["Exposed once Astral Flock is spent","Dive pressure ruins her angles"],m:["Central Park","Yggdrasill Path","Shin-Shibuya"],p:["Ultron","Mantis"],x:["Invisible Woman","Black Panther"]},
"Phoenix":{r:"Duelist",t:["Poke","Dive"],c:["Psionic Detonation then Cosmic Flames to trigger Sparks","Illusion detonation into Flames to finish the stack"],s:["Burst plus splash damage","Flight and teleport escape"],w:["Needs hits to build Sparks","Vulnerable when movement is spent"],m:["Midtown","Thebes","Symbiotic Surface"],p:["Ultron","Peni Parker"],x:["Cloak & Dagger","Jubilee"]},
"Magik":{r:"Duelist",t:["Dive","Flanker"],c:["Umbral Incursion into Soulsword then Magik Slash","Stepping Discs in, Eldritch Whirl, disc out"],s:["Close-range sustain","Evasive teleport repositioning"],w:["Ranged poke keeps her out","Anti-dive control stops her"],m:["Arakko","Museum of Contemplation","Heart of Heaven"],p:["Peni Parker","Ultron"],x:["Peni Parker","The Thing"]},
"Psylocke":{r:"Duelist",t:["Flanker","Dive"],c:["Psychic Stealth in, Crossbow, Psi-Blade Dash","Wing Shurikens, Crossbow, recall for Bonus Health"],s:["Stealth flank access","High close-range burst"],w:["Durable brawlers survive her","Caught without dash means death"],m:["Midtown","Thebes","Shin-Shibuya"],p:["Peni Parker","Mantis"],x:["Daredevil","Black Panther"]},
"Star-Lord":{r:"Duelist",t:["Flanker","Dive"],c:["Rocket Propulsion flank, Element Guns, Stellar Shift reload","Close in, Blaster Barrage, Shift out"],s:["Excellent mobility","Dodge-based survivability"],w:["Barrage needs close range","Control punishes commitment"],m:["Heart of Heaven","Yggdrasill Path","Krakoa"],p:["Mantis","Ultron"],x:["Jubilee","Mister Fantastic"]},
"Winter Soldier":{r:"Duelist",t:["Brawl","Poke"],c:["Bionic Hook into Roterstern then Troopers Fist","Tainted Voltage, Roterstern, Troopers Fist"],s:["Pick-making displacement","Pressure on grouped targets"],w:["Ability-timing dependent","Denied pulls leave him exposed"],m:["Hall of Djalia","Museum of Contemplation","Thebes"],p:["Peni Parker","Ultron"],x:["Invisible Woman","Jeff the Land Shark"]},
"Black Panther":{r:"Duelist",t:["Dive","Flanker"],c:["Spear Toss, Spirit Rend, Spinning Kick, Rend again","Kick in, Rend, Basts Descent, Rend"],s:["Repeatable dash resets","Strong isolated-target pressure"],w:["Missed marks end the dive","Anti-dive heroes shut him down"],m:["Arakko","Heart of Heaven","Krakoa"],p:["Ultron","Storm"],x:["The Thing","Peni Parker"]},
"Iron Fist":{r:"Duelist",t:["Dive","Brawl"],c:["Dragons Defense into Yat Jee Chung Kuen counter","KUn-Lun Kick then Jeet Kune Do to the launcher"],s:["Close-range pursuit","Block plus self-healing"],w:["No ranged game","Traps and control stop him"],m:["Hall of Djalia","Thebes","Symbiotic Surface"],p:["Peni Parker","Ultron"],x:["Peni Parker","Scarlet Witch"]},
"Moon Knight":{r:"Duelist",t:["Poke","Brawl"],c:["Ancient Ankh then Crescent Dart ricochets","Ankh into Moon Blade through the cluster"],s:["Grouped-target splash","Strong elevated positions"],w:["Ankhs can be played around","Flankers reach him easily"],m:["Museum of Contemplation","Thebes","Central Park"],p:["Blade","Ultron"],x:["Ultron","Black Panther"]},
"Mister Fantastic":{r:"Duelist",t:["Brawl","Dive"],c:["Distended Grip pull into Stretch Punch","Flexible Elongation, Stretch Punch, Reflexive Rubber Inflated"],s:["Displacement plus disruption","Shields and damage absorption"],w:["No long-range pressure","Heavy frontliners out-brawl him"],m:["Lower Manhattan","Hall of Djalia","Symbiotic Surface"],p:["Peni Parker","Ultron"],x:["Devil Dinosaur","The Thing"]},
"Iron Man":{r:"Duelist",t:["Poke"],c:["Hyper-Velocity, Micro-Missile Barrage, Repulsor Blast","Armor Overdrive into tracking missiles then Unibeam"],s:["Vertical angle control","Reliable lock-on missile pressure"],w:["Aerial pursuit kills him","Exposed to ranged hitscan"],m:["Spider-Islands","Yggdrasill Path","Lower Manhattan"],p:["Ultron","Thor"],x:["Spider-Man","Black Widow"]},
"Spider-Man":{r:"Duelist",t:["Dive","Flanker"],c:["Web-Cluster, Get Over Here, Amazing Combo","Cluster, Spider-Power, Combo, swing out"],s:["Backline access","Rapid disengagement"],w:["Demanding execution","Anti-dive tanks stop the finish"],m:["Midtown","Shin-Shibuya","Krakoa"],p:["Peni Parker","Ultron"],x:["The Thing","Angela"]},
"Squirrel Girl":{r:"Duelist",t:["Poke","Brawl"],c:["Squirrel Blockade then Burst Acorn on the trapped","Mammal Bond into refreshed Blockade chains"],s:["Ricochet choke pressure","Simple target lockdown"],w:["Fast flankers run her over","Weak against airborne targets"],m:["Museum of Contemplation","Central Park","Hall of Djalia"],p:["Peni Parker","Iron Man"],x:["Ultron","Spider-Man"]},
"Gorr":{r:"Duelist",t:["Dive","Brawl"],c:["Black Berserker out, Necro-Power onto a target, All-Black","Berserker placed, Shadow Harvest warp in, Scythe slashes"],s:["Berserker Bonus Health","Invulnerable Living Abyss engage"],w:["Must close to melee","Airborne targets dodge him"],m:["Arakko","Midtown","Symbiotic Surface"],p:["Venom","Hela"],x:["Storm","Iron Man"]},
"Black Widow":{r:"Duelist",t:["Sniper","Poke"],c:["Electro-Plasma slow into Assassins Focus rifle shot","Edge Dancer launch, grapple kick, Fleet Foot out"],s:["Piercing sniper shots","Escape plus close disruption"],w:["Slow while scoped","Coordinated dives kill her"],m:["Spider-Islands","Yggdrasill Path","Central Park"],p:["Hawkeye","Phoenix"],x:["Venom","Spider-Man"]},
"Wolverine":{r:"Duelist",t:["Dive","Brawl"],c:["Feral Leap grab into enhanced Berserk Claw Strikes","Undying Animal, Vicious Rampage in, Rage Last Stand"],s:["Target displacement","Healing plus damage reduction"],w:["Very short reach","Stopped or focused after committing"],m:["Hall of Djalia","Arakko","Thebes"],p:["Cyclops","Gambit"],x:["Peni Parker","The Punisher"]},
"Namor":{r:"Duelist",t:["Poke"],c:["Aquatic Dominion then trident hits to accelerate summons","Monstro Spawn into Wrath of the Seven Seas focus"],s:["Autonomous spawn pressure","Brief invulnerable escape"],w:["Summons get cleared","Shields blunt his poke"],m:["Central Park","Spider-Islands","Heart of Heaven"],p:["Luna Snow","Bruce Banner"],x:["Magneto","Moon Knight"]},
"Human Torch":{r:"Duelist",t:["Poke"],c:["Two Blazing Blast fields then Pyro-Prison wall","Field down, Flaming Meteor detonation, Plasma Body up"],s:["Choke control","Aerial repositioning"],w:["Hitscan shoots him down","Wall needs fields first"],m:["Museum of Contemplation","Thebes","Central Park"],p:["Storm","Jubilee"],x:["Hela","The Punisher"]},
"Blade":{r:"Duelist",t:["Dive","Brawl"],c:["Daywalker Dash sword in, Bloodline Awakening slashes","Shotgun pressure, Scarlet Shroud parry, dash as it returns"],s:["Lifesteal plus healing reduction","Strong frontal parry"],w:["Kept out at range","Reduced incoming healing in Awakening"],m:["Hall of Djalia","Symbiotic Surface","Thebes"],p:["Moon Knight","Captain America"],x:["Hawkeye","The Punisher"]},
"Daredevil":{r:"Duelist",t:["Dive","Flanker"],c:["Devils Latch, Righteous Cross, Fury Devils Chain","Sonic Pursuit blind, Justice Jab, Objection! the reply"],s:["Rapid target access","Projectile-deflecting defense"],w:["Needs close contact","Peel and chokes disrupt dives"],m:["Midtown","Shin-Shibuya","Arakko"],p:["Iron Fist","Black Widow"],x:["Peni Parker","Namor"]},
"Cyclops":{r:"Duelist",t:["Poke"],c:["Optic Blast hits to refresh Ricochet Force off terrain","Propulsion Burst slow and separate, then blast"],s:["Terrain-tracking ricochets","Barrier-breaking Ruby Rage"],w:["Dive pressure","Long repositioning cooldowns"],m:["Central Park","Yggdrasill Path","Shin-Shibuya"],p:["Phoenix","Gambit"],x:["Spider-Man","Black Panther"]},
"Hawkeye":{r:"Duelist",t:["Sniper","Poke"],c:["Hold aim for Archers Focus then Piercing Arrow","Hypersonic slow or flyer knockdown into Piercing Arrow"],s:["Long-range burst","Anti-flyer control"],w:["Dive vulnerability","Slow while drawing Piercing Arrow"],m:["Spider-Islands","Yggdrasill Path","Central Park"],p:["Psylocke","Cloak & Dagger"],x:["Black Panther","Spider-Man"]},
"Storm":{r:"Duelist",t:["Poke"],c:["Thunder weather, Wind Blade hits, improved Bolt Rush in","Tornado Boost slow and approach into Omega Hurricane"],s:["Teamwide weather buffs","Fight-changing area ult"],w:["Hitscan exposure","Damage falls off at range"],m:["Spider-Islands","Heart of Heaven","Central Park"],p:["Thor","Human Torch"],x:["The Punisher","Luna Snow"]},
"Black Cat":{r:"Duelist",t:["Flanker","Dive"],c:["Turn of Fortune hook, Fortunes Favor, Feline Fury","Climb or double jump flank, Cats Cradle through, retreat"],s:["Vertical mobility","Rapid isolated-target access"],w:["Short melee reach","Fortune-dependent commits"],m:["Shin-Shibuya","Midtown","Krakoa"],p:["Spider-Man","Black Panther"],x:["Emma Frost","The Punisher"]},
"Deadpool (Duelist)":{r:"Duelist",t:["Flanker","Dive"],c:["Desert Eagles poke, Bunny Hop stomp, Slice and Dice","Hop in, Deadpool In Your Area taunt, katana pressure"],s:["Refreshable jumps","Self-heal plus brief invulnerability"],w:["Needs XP and Style online","Control and ranged pressure between defenses"],m:["Shin-Shibuya","Midtown","Symbiotic Surface"],p:["Gambit","Hela"],x:["Emma Frost","Squirrel Girl"]},
"The Punisher":{r:"Duelist",t:["Poke"],c:["Adjudication rifle pressure into Culling Turret hold","Vantage Connection angle, Deliverance up close, grenade out"],s:["Heavy sustained damage","Turret frontal protection"],w:["Shields block his output","Turret and ult root him"],m:["Midtown","Spider-Islands","Central Park"],p:["Rocket Raccoon","Daredevil"],x:["Magneto","Venom"]},
"Elsa Bloodstone":{r:"Duelist",t:["Poke","Brawl"],c:["Ruthless Pursuit launch, shotgun, empowered Monster-Piercer","Smoky Snare catch, Living Bullet mark, Piercer"],s:["Piercing burst","Trap control plus dashes"],w:["Weak once movement is spent","Diablo can be destroyed to escape"],m:["Museum of Contemplation","Thebes","Central Park"],p:["Deadpool (Duelist)","Devil Dinosaur"],x:["Iron Fist","Gambit"]},
"The Thing":{r:"Vanguard",t:["Brawl","Dive"],c:["Battle Blitz into Stone Haymaker then Rocky Jab","Yancy Street Charge to engage, Clobberin Time when they group"],s:["Displacement immunity holds the frontline","Strong close-range disruption"],w:["Short reach, kited in open lanes","Large hitbox eats poke"],m:["Museum of Contemplation","Thebes"],p:["Mantis","Storm"],x:["The Punisher","Peni Parker"]},
"Devil Dinosaur":{r:"Vanguard",t:["Brawl","Dive"],c:["Primal Bite then Frenzied Feast to sustain","Impact Beam into Savage Predation, Buddy Barrier to save Luna Snow"],s:["Bleed-fuelled sustain in long fights","Displacement immunity on engage"],w:["Focused down at range","Useless without melee access"],m:["Arakko","Birnin TChalla","Spider-Islands"],p:["Storm","Peni Parker"],x:["Squirrel Girl","Phoenix"]},
"Deadpool (Vanguard)":{r:"Vanguard",t:["Brawl","Flanker"],c:["Unicorn Shield up, pistols down, Ban Hammer to finish","Bunny Hop in, Hazardous Hijinks out"],s:["Disruptive taunts break setups","Shield plus self-recovery"],w:["Weak before upgrades come online","Punished when dashes miss"],m:["Hells Heaven","Hall of Djalia","Birnin TChalla"],p:["Storm","Mantis"],x:["Jubilee","Cloak & Dagger"]},
"Emma Frost":{r:"Vanguard",t:["Anchor","Brawl"],c:["Psychic Spear into Telepathic Pulse at range","Diamond Form, Crystal Kick into wall, Carbon Crush"],s:["Barrier plus melee flex defense","Strong peel for backline"],w:["Beam loses pressure past sight breaks","Diamond Form gets kited"],m:["Shin-Shibuya","Lower Manhattan"],p:["Mantis","Ultron"],x:["Wolverine","Rocket Raccoon"]},
"Magneto":{r:"Vanguard",t:["Anchor","Poke"],c:["Bulwark an ally, absorb fire, release charged Mag-Cannon","Metallic Curtain into Iron Volley, Meteor M on grouped pushes"],s:["Projectile protection for the team","Steady ranged pressure"],w:["Folds to melee pressure","Barriers demand good timing"],m:["Symbiotic Surface","Yggdrasill Path"],p:["Storm","Mantis"],x:["Wolverine","Emma Frost"]},
"The Hood":{r:"Vanguard",t:["Brawl","Off-Angle"],c:["Abyssal Veil, pistols, Void Walk at high energy into Half-Demon rifles","Veil into Mantle of Oblivion against return fire"],s:["Heavy close-range pressure","Burst-blocking barrier"],w:["Severe long-range falloff","No Mantle during Half-Demon"],m:["Hall of Djalia","Midtown","Shin-Shibuya"],p:["Peni Parker","Magik"],x:["Wolverine","Cloak & Dagger"]},
"Groot":{r:"Vanguard",t:["Anchor","Brawl"],c:["Ironwood Wall then fight nearby for Bonus Health","Thornlash Wall into Strangling Prison, Spore Bomb the trapped"],s:["Best lane control in the role","Walls feed his own sustain"],w:["Walls can block allies too","Low mobility, dived freely"],m:["Lower Manhattan","Celestial Husk","Krakoa"],p:["Mantis","Storm"],x:["Wolverine","Devil Dinosaur"]},
"Peni Parker":{r:"Vanguard",t:["Anchor","Poke"],c:["Spider-Nest, Arachno-Mines, Cyber-Web Snare the dive","Cyber-Bond in, Snare, retract to nest"],s:["Locks down objectives","Web sustain wins long stalls"],w:["Needs a defensible setup","Helpless once nest is cleared"],m:["Lower Manhattan","Museum of Contemplation","Celestial Husk"],p:["Ultron","Storm"],x:["Rocket Raccoon","The Punisher"]},
"Rogue":{r:"Vanguard",t:["Dive","Brawl"],c:["Defensive Stance into Southern Brawl","Fatal Attraction, Chrono Kick combo, Power Surge Punch"],s:["Strong damage reduction","Flexible engage plus ability theft"],w:["Must get close to work","Theft value depends on target"],m:["Shin-Shibuya","Heart of Heaven","Celestial Husk"],p:["Storm","Ultron"],x:["Devil Dinosaur","Peni Parker"]},
"Venom":{r:"Vanguard",t:["Dive","Flanker"],c:["Swing in, Frenzied Arrival, Cellular Corrosion","Dive deep, Dark Predation, Resilience at low health, swing out"],s:["Best backline access","Huge emergency Bonus Health"],w:["Tethers can be escaped","No exit planned means death"],m:["Midtown","Celestial Husk","Heart of Heaven"],p:["Ultron","Mantis"],x:["Devil Dinosaur","Wolverine"]},
"Angela":{r:"Vanguard",t:["Dive","Off-Angle"],c:["Wingblade Ascent, charged Spear of Ichors, Assassins Charge","Divine Judgement then Axes of Ichors inside the zone"],s:["Aerial engage angles","Strong zone sustain"],w:["Mostly close-range damage","Grounded and focused means death"],m:["Midtown","Spider-Islands","Symbiotic Surface"],p:["Mantis","Peni Parker"],x:["Devil Dinosaur","The Thing"]},
"Doctor Strange":{r:"Vanguard",t:["Anchor","Poke"],c:["Daggers of Denak to build Dark Magic, Maelstrom of Madness","Shield of the Seraphim, Eye of Agamotto, burst separated souls"],s:["Reliable team barrier","Portal plus fight-winning ult"],w:["Dark Magic can self anti-heal","Divers run him over"],m:["Arakko","Spider-Islands","Thebes"],p:["Ultron","Peni Parker"],x:["Wolverine","Devil Dinosaur"]},
"Captain America":{r:"Vanguard",t:["Dive","Flanker"],c:["Leading Dash, Fearless Leap, Super-Soldier Slam","Liberty Rush into Sentinel Strike, Energy Saw supports"],s:["Mobile disruption","Shield deflects projectiles"],w:["Little sustained range","Stuck vs entrenched defenses"],m:["Heart of Heaven","Krakoa","Yggdrasill Path"],p:["Ultron","Mantis"],x:["Devil Dinosaur","Peni Parker"]},
"Bruce Banner":{r:"Vanguard",t:["Dive","Brawl"],c:["Incredible Leap, Radioactive Lockdown, Heavy Blow beside target","Indestructible Guard, Gamma Burst, Hulk Smash"],s:["Strong dive plus ally shielding","Monster Hulk resets fights"],w:["Banner form is vulnerable","Hulk needs melee access"],m:["Celestial Husk","Yggdrasill Path","Spider-Islands"],p:["Gorr","Magik"],x:["Devil Dinosaur","Peni Parker"]},
"Thor":{r:"Vanguard",t:["Brawl","Dive"],c:["Storm Surge, Mjolnir Bash, Hammer Throw","Lightning Realm to restore Thorforce, Awakening Rune"],s:["Bonus-Health brawling","Close-range area control"],w:["Short base attack reach","Thorforce management or bust"],m:["Hells Heaven","Central Park","Thebes"],p:["Storm","Ultron"],x:["Devil Dinosaur","Peni Parker"]}
});
function slugify(n){return n.toLowerCase().replace(" (vanguard)","").replace(" (duelist)","").replace(" (strategist)","").replace(/ & /g,"-").replace(/ /g,"-").replace(/\./g,"").replace(/'/g,"").replace(/!/g,"")}
function cands(hero){
  if(hero==="Deadpool (Vanguard)") return ["deadpool-vanguard","deadpool"];
  if(hero==="Deadpool (Duelist)") return ["deadpool-duelist","deadpool"];
  if(hero==="Deadpool (Strategist)") return ["deadpool-strategist","deadpool"];
  var c=[slugify(hero)];
  (OVER[hero]||[]).forEach(function(s){if(c.indexOf(s)<0)c.push(s)});
  return c;
}
function displayName(hero){
  if(hero.indexOf("Deadpool (")==0){
    var tag=hero.indexOf("Vanguard")>0?"*V":(hero.indexOf("Duelist")>0?"*D":"*S");
    return {base:"Deadpool",tag:tag};
  }
  return {base:hero,tag:""};
}
var TIER_BLURB={S:"Must-pick. Ban-worthy.",A:"Strong meta core.",B:"Situational.",C:"Niche. Needs a comp."};
var ROLE_BLURB={Vanguard:"Tanks. Frontline and space.",Duelist:"Damage. Picks and pressure.",Strategist:"Support. Healing and utility."};
var MAPS=[
{map:"Hall of Djalia",mode:"Convergence",tags:["COMP ROTATION"],sides:{
attack:{comps:[
{name:"Wakanda Dive",v:["Venom","The Thing"],d:["Magik","Spider-Man"],s:["Mantis","Luna Snow"],why:"Split entries across the courtyard doorways and delete the backline before the defenders set the mid-map hold."},
{name:"Corridor Break",v:["Doctor Strange","The Hood"],d:["Cyclops","Gorr"],s:["Rocket Raccoon","Mantis"],why:"Portal-sync the split entry, then Cyclops beams the long middle corridor while Gorr pressures the staircase room."}],
best:["Gorr","Magik","Storm","Doctor Strange","Mantis","Cyclops"],subs:["Spider-Man","Phoenix","Rocket Raccoon"],
counters:"Peni nest on the gate? Swap Gorr for Phoenix, clear mines first, and never feed all six through main.",
bans:["Peni Parker","Luna Snow"],
path:{flank:"Frontline through one doorway, Storm and Gorr through another. Split every courtyard entry.",high:"Own the cylindrical-staircase room and its health pack through the middle phase.",ult:"Eye into Storm hurricane on capture, Cyclops Ruby Rage down the corridor."}},
defense:{comps:[
{name:"Golden City Poke",v:["Magneto","Peni Parker"],d:["Hela","Namor"],s:["Rocket Raccoon","Ultron"],why:"Mines and walls guard the main entries while Hela and Namor farm the corridor from safe perches."},
{name:"Smoke Finish",v:["Groot","Peni Parker"],d:["Hawkeye","Scarlet Witch"],s:["Ultron","Jubilee"],why:"Hawkeye owns the long middle sightline, then Wanda casts a protected Reality Erasure in the cramped smoky finish."}],
best:["Peni Parker","Groot","Scarlet Witch","Hawkeye","Ultron","Magik"],subs:["Luna Snow","Jubilee","Mantis"],
counters:"Strange syncing their split push? Mine every doorway and keep one watcher on the top-floor bridge flank.",
bans:["Doctor Strange","Gorr"],
path:{flank:"Cover the top-floor door and bridge. The split entry is their whole plan.",high:"Balconies overlook the cramped endpoint. Smoke conceals the short-range retake.",ult:"Prison a doorway group into Wanda ult. Save Peni Sweeper to retake the cart."}}}},
{map:"Symbiotic Surface",mode:"Convergence",tags:["COMP ROTATION"],sides:{
attack:{comps:[
{name:"Nest Breakers",v:["The Hood","Groot"],d:["Scarlet Witch","Elsa Bloodstone"],s:["Gambit","Invisible Woman"],why:"Walls plus Wanda burst crack the tight corridors while IW shield walks the team through the capture point."},
{name:"Stall Breakers",v:["Emma Frost","Magneto"],d:["Phoenix","Gorr"],s:["Mantis","Cloak & Dagger"],why:"Phoenix area damage plus Gorr pressure ends packed escort stalls before defender ults cycle back."}],
best:["Scarlet Witch","Phoenix","The Hood","Gambit","Invisible Woman","Gorr"],subs:["Elsa Bloodstone","The Punisher","Jubilee"],
counters:"Peni mined the cart route? Activate a bridge, attack behind the nest, and swap Gorr for Phoenix area damage.",
bans:["Peni Parker","Invisible Woman"],
path:{flank:"Take the activated symbiote bridge to the second floor behind the point.",high:"Fight for the jump-pad high ground and balcony. Break the wall for a second angle.",ult:"Storm hurricane groups the point for Gorr Twilight; Groot prison holds the interior exit for Phoenix Endsong."}},
defense:{comps:[
{name:"Nest Watch",v:["Peni Parker","Groot"],d:["Scarlet Witch","Storm"],s:["Ultron","Rocket Raccoon"],why:"Hold behind the ground-level choke, ride the symbiote elevator to answer upper flanks, and let nests tax every entry."},
{name:"Interior Ambush",v:["Groot","Magneto"],d:["Magik","Elsa Bloodstone"],s:["Ultron","Gambit"],why:"Magik hunts the jump-pad high ground while walls sever the connecting hallway and split the push."}],
best:["Peni Parker","Groot","Scarlet Witch","Storm","Ultron","Magik"],subs:["Elsa Bloodstone","Rocket Raccoon","Iron Man"],
counters:"Phoenix burning the deployables? Spread the hold, guard the upper symbiote controls, and ban her next round.",
bans:["Phoenix","Doctor Strange"],
path:{flank:"Watch the cliffside and cave routes plus the small high route under the mushroom trees.",high:"Hold the balcony and answer upper flanks with the elevator, not the long way.",ult:"Prison into Wanda Reality Erasure at a forced doorway. Hold Sweeper for the cart retake."}}}},
{map:"Central Park",mode:"Convergence",tags:["COMP ROTATION"],sides:{
attack:{comps:[
{name:"Patrol Dive",v:["Captain America","Venom"],d:["Iron Fist","Magik"],s:["Luna Snow","Adam Warlock"],why:"Mobile dive ignores the long lanes and punishes the immobile poke backline holding them."},
{name:"Castle Stairs",v:["Doctor Strange","Groot"],d:["Phoenix","Cyclops"],s:["Mantis","Rocket Raccoon"],why:"Strange enables the side entry at the ritual site, then Cyclops Ruby Rage clears the long narrow castle approach."}],
best:["Hela","Phoenix","Magik","Doctor Strange","Mantis","Cyclops"],subs:["Iron Fist","Luna Snow","Captain America"],
counters:"Peni blocking the stairs? Clear the nest before committing, and challenge a defending Hawkeye from the tower flank.",
bans:["Peni Parker","Luna Snow"],
path:{flank:"Contest the tower-and-bridge high route and the rebuilt-tower cut-through, not just main.",high:"Take the building overlooking the cart turn. Mobile heroes can cross the gap.",ult:"Prison holds the point for Phoenix Endsong; Eye keeps targets inside Cyclops Ruby Rage on the stairs."}},
defense:{comps:[
{name:"Uptown Poke",v:["Magneto","Groot"],d:["Hela","Hawkeye"],s:["Loki","Rocket Raccoon"],why:"Park snipers farm the long lanes while walls cut off flanker routes into the escort."},
{name:"Staircase",v:["Peni Parker","Groot"],d:["Hela","Scarlet Witch"],s:["Ultron","Rocket Raccoon"],why:"Mines and walls guard the main entry and bridge; Wanda casts at the tight final staircase when attackers reach it."}],
best:["Peni Parker","Hela","Hawkeye","Groot","Ultron","Scarlet Witch"],subs:["Loki","Rocket Raccoon","Magneto"],
counters:"Strange syncing a side entry? Mark the rebuilt-tower and gap routes and never stack all six on main.",
bans:["Doctor Strange","Phoenix"],
path:{flank:"Watch the rebuilt-tower cut-through. Mobile attackers cross the gap freely.",high:"Hold the tower-and-bridge route and the interior crossfire perches at the final.",ult:"Prison sets up Hela ult on capture; protected Wanda Reality Erasure only at the final choke."}}}},
{map:"Heart of Heaven",mode:"Convergence",tags:["COMP ROTATION"],sides:{
attack:{comps:[
{name:"Temple Dive",v:["The Thing","Captain America"],d:["Iron Fist","Magik"],s:["Luna Snow","Jeff the Land Shark"],why:"Dive owns the vertical temple. Thing slams the high ground while Fist deletes supports in the side rooms."},
{name:"Fog Push",v:["Doctor Strange","Thor"],d:["Storm","Gorr"],s:["Mantis","Rocket Raccoon"],why:"Take balconies and roofs first, then push into fog where short sightlines favor Gorr over their snipers."}],
best:["Iron Fist","Magik","Storm","Gorr","Luna Snow","Doctor Strange"],subs:["Spider-Man","Thor","Mantis"],
counters:"Peni holding the gate? Clear mines first, then use the fog and side routes to dive instead of crossing sightlines.",
bans:["Peni Parker","Luna Snow"],
path:{flank:"Use side routes and tunnels around the triple choke. Save the portal for crossing together.",high:"Clear temple balconies and roofs before touching the point.",ult:"Eye into Gorr Twilight turns a fog-side entry into a won teamfight."}},
defense:{comps:[
{name:"Dragon Hold",v:["Peni Parker","The Hood"],d:["Namor","Cyclops"],s:["Rocket Raccoon","Ultron"],why:"Nests plus turrets plus beams turn the narrow temple gates into a no-entry zone."},
{name:"Fog Hold",v:["Groot","Peni Parker"],d:["Scarlet Witch","Magik"],s:["Ultron","Mantis"],why:"When fog kills sniper sightlines, pull the defense into temple corners and punish entries at the triple choke."}],
best:["Peni Parker","Groot","Namor","Storm","Ultron","Scarlet Witch"],subs:["Magik","Mantis","Rocket Raccoon"],
counters:"Gorr diving through fog? Keep Peni and Ultron up, pull into corners, and post someone on the tunnel bridge flank.",
bans:["Gorr","Doctor Strange"],
path:{flank:"Assign a watcher to the tunnel and bridge flank. Fog hides the approach.",high:"Namor summons plus Storm hold the elevated angles on clear-visibility fights.",ult:"Prison into Wanda Reality Erasure blocks a temple entry; prison into Storm hurricane collapses the rooftop point."}}}},
{map:"Shin-Shibuya",mode:"Convergence",tags:["COMP ROTATION"],sides:{
attack:{comps:[
{name:"Neon Brawl",v:["Doctor Strange","Emma Frost"],d:["Scarlet Witch","Gorr"],s:["Mantis","Cloak & Dagger"],why:"Shields walk the team through the street chokes, then Wanda and Gorr detonate the grouped defenders."},
{name:"Street Break",v:["Doctor Strange","Magneto"],d:["Cyclops","Iron Man"],s:["Rocket Raccoon","Mantis"],why:"Break the suspended-roof wall, then Cyclops beams the long street corner while Iron Man holds the aerial angle."}],
best:["Scarlet Witch","Gorr","Hela","Doctor Strange","Mantis","Cyclops"],subs:["Iron Man","Cloak & Dagger","Emma Frost"],
counters:"Peni denying the funnel? Break the wall or cut the ninja shop instead of testing her mines.",
bans:["Peni Parker","Hawkeye"],
path:{flank:"Break the corridor wall, cut the ninja shop, or fly over the buildings. Never queue at the funnel.",high:"Clear the shop windows over the capture point, then own the central top floor above the cart turn.",ult:"Eye into Cyclops Ruby Rage clears the street; Iron Man ult follows the first-capture catch."}},
defense:{comps:[
{name:"Window Duty",v:["Magneto","The Thing"],d:["Hela","Black Widow"],s:["Loki","Invisible Woman"],why:"Snipers hold the high windows over the capture point while the tanks escort untouched."},
{name:"Final Room",v:["Peni Parker","Doctor Strange"],d:["Hela","Scarlet Witch"],s:["Ultron","Rocket Raccoon"],why:"Hold the roofed corridor from split perches, then pull the last fight into the enclosed final room for Wanda."}],
best:["Peni Parker","Hawkeye","Hela","Doctor Strange","Ultron","Scarlet Witch"],subs:["Loki","Rocket Raccoon","Invisible Woman"],
counters:"Strange bypassing the choke with portal? Shift the crossfire to the new opening and split perches so one bypass never catches both duelists.",
bans:["Doctor Strange","Gorr"],
path:{flank:"Cover the ninja shop cut and side-room routes into the final. File them through the last doorway, not around it.",high:"Perch the two duelists separately above the roofed corridor, never both at street level.",ult:"Eye into Hela ult punishes the stacked first push; save Wanda for a protected final-room cast."}}}},
{map:"Lower Manhattan",mode:"Convergence",tags:["COMP ROTATION"],sides:{
attack:{comps:[
{name:"Rooftop Dive",v:["Venom","Captain America"],d:["Spider-Man","Star-Lord"],s:["Luna Snow","Rocket Raccoon"],why:"The map is built for vertical dive. Venom and Spidey live on the rooftops while Luna keeps them up."},
{name:"Vault Push",v:["The Thing","Doctor Strange"],d:["Phoenix","Blade"],s:["Mantis","Rocket Raccoon"],why:"Thing draws the courtyard arch while the team threatens the Smile Deli; Blade clears the close corners around Charging Jeff."}],
best:["Spider-Man","Phoenix","Luna Snow","Venom","Blade","Mantis"],subs:["Star-Lord","Iron Man","The Thing"],
counters:"Peni locking both school approaches? Strike just after a UAV sweep with a Deli or store flank, then dive before nests reset.",
bans:["Peni Parker","Invisible Woman"],
path:{flank:"Hit the Smile Deli and Van Dyne store flanks right after the UAV scan passes.",high:"Rooftops are the map. Clear them before the final push.",ult:"Eye into Phoenix Endsong wins the school entry; bait revealed defensives before committing at the bridge."}},
defense:{comps:[
{name:"Blockade",v:["Groot","Peni Parker"],d:["Cyclops","Hela"],s:["Ultron","Adam Warlock"],why:"Walls plus beams lock the street escort while drones and Adam out-sustain the poke war."},
{name:"Bridge Watch",v:["Groot","Magneto"],d:["Iron Man","Scarlet Witch"],s:["Ultron","Jubilee"],why:"Contest the Charging Jeff balconies from the air, then lock the narrow Vault Bridge with walls and a confined Wanda cast."}],
best:["Peni Parker","Storm","Scarlet Witch","Groot","Ultron","Iron Man"],subs:["Rocket Raccoon","Hawkeye","Jubilee"],
counters:"Iron Man owning the bridge airspace? Track the Vault windows and never pre-commit the conspicuous Wanda cast while the scan is up.",
bans:["Iron Man","Spider-Man"],
path:{flank:"Trap both school approaches and watch the store flank. Split courtyard entries with walls.",high:"Hold the capture-point high ground, then the Jeff balconies and Vault guardposts.",ult:"Prison into Wanda Reality Erasure closes a courtyard or bridge doorway. Cast between scans."}}}},
{map:"Midtown",mode:"Convoy",tags:["COMP ROTATION"],sides:{
attack:{comps:[
{name:"Rush Hour",v:["Magneto","Peni Parker"],d:["Hela","Phoenix"],s:["Rocket Raccoon","Invisible Woman"],why:"The long street is a shooting gallery. Shields up, Hela and Phoenix farm, IW walks the payload through the second checkpoint."},
{name:"Subway Dive",v:["The Thing","Venom"],d:["Magik","Psylocke"],s:["Mantis","Adam Warlock"],why:"Dive skips the street entirely and murders the backline holding the high ground."}],
best:["Hela","Phoenix","Magik","Magneto","Invisible Woman","Gorr"],subs:["Psylocke","Rocket Raccoon","Venom"],
counters:"Peni mines stopping the Gorr entry? Clear the nest first, dislodge the rooftop Hawkeye, and flank through Grand Central before committing main.",
bans:["Peni Parker","Hawkeye"],
path:{flank:"Send the flanker through Grand Central subway corridors while the main group pressures the street.",high:"Clear office ledges and the overhead platform before pushing the cart under them.",ult:"Eye into Phoenix Endsong breaks the terminal hold. Save a support ult for the corner spam."}},
defense:{comps:[
{name:"Terminal Hold",v:["Groot","Peni Parker"],d:["Hawkeye","Cyclops"],s:["Mantis","Loki"],why:"Make the terminal doors costly with mines and walls while Hawkeye farms the street and Cyclops punishes the final corners."},
{name:"Rooftop Watch",v:["Doctor Strange","Magneto"],d:["Hawkeye","Storm"],s:["Luna Snow","Ultron"],why:"Shield the retake angles and own the Stark Tower rooftops; Storm and Hawkeye crossfire every street commit."}],
best:["Peni Parker","Groot","Hawkeye","Cyclops","Mantis","Loki"],subs:["Doctor Strange","Storm","Ultron"],
counters:"Venom or Psylocke breaking the hold from behind? Post Loki on the side-hall route and never stack all six at the front door.",
bans:["Venom","Phoenix"],
path:{flank:"Watch the side halls and subway exits, not just the front door.",high:"Hold Baxter Building street first, then the Grand Central platform and Stark Tower rooftops.",ult:"Prison into Cyclops Ruby Rage when they commit through a corner."}}}},
{map:"Spider-Islands",mode:"Convoy",tags:["COMP ROTATION"],sides:{
attack:{comps:[
{name:"Web Swingers",v:["The Thing","Venom"],d:["Magik","Spider-Man"],s:["Mantis","Adam Warlock"],why:"Gaps and bridges punish slow comps. Swingers pick the isolated payload guards one by one."},
{name:"Upper Take",v:["Doctor Strange","Magneto"],d:["Hawkeye","Iron Man"],s:["Luna Snow","Ultron"],why:"Shield the long opening lane, seize the upper exit angles with Iron Man and Ultron, and beam the second-section water fight."}],
best:["Magik","Hawkeye","Iron Man","Spider-Man","Luna Snow","Magneto"],subs:["Venom","Ultron","Star-Lord"],
counters:"Hawkeye controlling the first lane from elevation? Break the left walls to widen the choke, and stay off the water edge.",
bans:["Hawkeye","Peni Parker"],
path:{flank:"Destroy the left-side walls at the first choke, then use the side building to bypass the next bend.",high:"Take the upper exit and side-building angles before the finish. Never push the front hallway only.",ult:"Eye into Iron Man ult after taking an upper angle. Save Magneto displacement for the water-ledge fight."}},
defense:{comps:[
{name:"Bridge Toll",v:["The Hood","Groot"],d:["Namor","Hawkeye"],s:["Gambit","Jubilee"],why:"Walls plus turrets tax every bridge crossing while Hawkeye deletes from the far side."},
{name:"Ledge Guard",v:["Peni Parker","Venom"],d:["Storm","Hawkeye"],s:["Mantis","Invisible Woman"],why:"Anchor the first entrance with the nest, contest upper routes with Venom, and hold the inside of the second-point ledge."}],
best:["Peni Parker","Hawkeye","Storm","Venom","Mantis","Namor"],subs:["Invisible Woman","Ultron","Groot"],
counters:"Iron Man and Hawkeye pressuring from above? Scout the side-building exit and meet them at the upper routes with Venom.",
bans:["Iron Man","Magik"],
path:{flank:"Scout the side-building exit every fight. Stand inside the second-point ledge, never on the edge.",high:"Hold the far cliffs and upper routes over both checkpoints.",ult:"Snare and mines hold the first choke for the Storm ult. Save a support ult for their committed push."}}}},
{map:"Yggdrasill Path",mode:"Convoy",tags:["COMP ROTATION"],sides:{
attack:{comps:[
{name:"Root Brawl",v:["The Hood","Groot"],d:["Scarlet Witch","Gorr"],s:["Gambit","Jubilee"],why:"The narrow path is a blender. Walls compress them, Wanda and Gorr blend them, Gambit heals through it."},
{name:"Branch Poke",v:["Magneto","Emma Frost"],d:["Cyclops","Hela"],s:["Ultron","Loki"],why:"If they mirror brawl, beams down the straight path out-trade it before the blender starts."}],
best:["Scarlet Witch","Gorr","Hawkeye","Groot","Gambit","Phoenix"],subs:["Magneto","Cyclops","Venom"],
counters:"Hawkeye farming the exposed lanes? Send Venom at the overlook before walking the chariot path.",
bans:["Hawkeye","Peni Parker"],
path:{flank:"Attack through the side-spawn route or the breakable-glass walkway, never single-file down the chariot path.",high:"Contest the second-checkpoint overlook before advancing past the bend.",ult:"Prison into Phoenix Endsong opens the bend. Keep a support ult for the overlook retake."}},
defense:{comps:[
{name:"Balcony Hold",v:["Peni Parker","Doctor Strange"],d:["Hawkeye","Cyclops"],s:["Mantis","Loki"],why:"Hold from the balcony and the mid-route bend. Hawkeye takes the long lane, Peni seals the narrow approach, Cyclops fires the predictable turns."},
{name:"Overlook",v:["Groot","Magneto"],d:["Hawkeye","Scarlet Witch"],s:["Luna Snow","Ultron"],why:"Wall the winding choke, farm the exposed lanes from the overlook, and drop Wanda burst on the forced turn."}],
best:["Peni Parker","Hawkeye","Cyclops","Doctor Strange","Mantis","Groot"],subs:["Loki","Scarlet Witch","Ultron"],
counters:"Phoenix and Hawkeye dislodging the balcony? Guard the health-pack flank and the glass walkway, and meet the dive before it sets up.",
bans:["Phoenix","Gorr"],
path:{flank:"Post coverage on the side-spawn route and the health-pack flank.",high:"Own the balcony, the glass walkway, and the second-checkpoint overlook.",ult:"Eye into Cyclops Ruby Rage across a forced turn. Spend a support ult to keep the overlook hold."}}}},
{map:"Arakko",mode:"Convoy",tags:["COMP ROTATION"],sides:{
attack:{comps:[
{name:"Desert Storm",v:["Emma Frost","Magneto"],d:["Cyclops","Hela"],s:["Ultron","Loki"],why:"Open ruins mean open lanes. Beams and Hela picks walk the payload from range for the open finish."},
{name:"Ruin Divers",v:["Venom","The Thing"],d:["Gorr","Magik"],s:["Luna Snow","Mantis"],why:"The wide ruins let divers flank free. Venom and Thing reach the bridge while Gorr follows onto isolated supports."}],
best:["Gorr","Magik","Venom","Cyclops","Mantis","Phoenix"],subs:["Hawkeye","Black Panther","Luna Snow"],
counters:"Peni nest plus Hawkeye bridge control? Clear the nest first, pressure Hawkeye off the bridge, and portal around the main lane.",
bans:["Peni Parker","Hawkeye"],
path:{flank:"Use Magik portals and side routes onto the first high ground. Dive the supports together, never solo.",high:"Take the defender high ground at checkpoint one before escorting the bridge below.",ult:"Venom engage opens Gorr Twilight on a Mantis boost. Save a second ult for the fast final re-contest."}},
defense:{comps:[
{name:"Bridge Hold",v:["Peni Parker","Doctor Strange"],d:["Hawkeye","Scarlet Witch"],s:["Invisible Woman","Ultron"],why:"Mine the teleporter exits, shield the bridge hold, and mark grouped attackers in the confined factory sections."},
{name:"Ring Watch",v:["Groot","Magneto"],d:["Hawkeye","Namor"],s:["Mantis","Loki"],why:"Wall the tight factory routes, cover the long inclines, and hold the Great Ring with short defender returns."}],
best:["Peni Parker","Hawkeye","Scarlet Witch","Doctor Strange","Ultron","Groot"],subs:["Invisible Woman","Namor","Mantis"],
counters:"Venom and Magik overwhelming the portal exits? Mine the exits, call the flank early, and keep the team off the first-section pit edge.",
bans:["Venom","Magik"],
path:{flank:"Mine teleporter exits and call every flank. Destructible side passages bypass the main hold.",high:"Hold the first-checkpoint high ground, then the elevated bridge over the factory.",ult:"Eye into Wanda Reality Erasure at a factory or checkpoint choke. Never cast it without setup."}}}},
{map:"Museum of Contemplation",mode:"Convoy",tags:["COMP ROTATION"],sides:{
attack:{comps:[
{name:"Quiet Tour",v:["Doctor Strange","Magneto"],d:["Phoenix","Psylocke"],s:["Cloak & Dagger","Luna Snow"],why:"Shields plus Phoenix ult clear one room at a time. Never fight two doors at once."},
{name:"Gallery Breach",v:["Doctor Strange","The Thing"],d:["Gorr","Magik"],s:["Jubilee","Luna Snow"],why:"Breach the Gallery door with the frontline while Magik takes the service-door flank; Jubilee sustains the close push."}],
best:["Phoenix","Gorr","Magik","Doctor Strange","Luna Snow","Psylocke"],subs:["Iron Man","Hawkeye","Cloak & Dagger"],
counters:"Peni guarding the doors for a Gorr push? Ult one door and walk through it. At the plaza, swap a diver for Iron Man or Hawkeye.",
bans:["Peni Parker","Hawkeye"],
path:{flank:"Take the service door and service halls around the exhibit rooms. Never fight two doors at once.",high:"Take the Garden bridge before leaving the cart in open ground, then the Censer walkways.",ult:"Eye into Gorr Twilight at the Gallery breach; outdoors, Eye into Iron Man ult is the ranged follow-up."}},
defense:{comps:[
{name:"Exhibit Smash",v:["Peni Parker","The Hood"],d:["Elsa Bloodstone","Winter Soldier"],s:["Invisible Woman","Gambit"],why:"Indoor rooms are shotgun range. Nests hold doors while Elsa and WS delete anyone who enters."},
{name:"Garden Watch",v:["Groot","Peni Parker"],d:["Moon Knight","Hawkeye"],s:["Mantis","Invisible Woman"],why:"Wall the Gallery corridor, mine the Garden bridge, and let Moon Knight punish grouped entrants until the plaza."}],
best:["Elsa Bloodstone","Winter Soldier","Peni Parker","Groot","Invisible Woman","Moon Knight"],subs:["Hawkeye","Mantis","Magneto"],
counters:"Magik and Gorr abusing the service door? Guard it and the bridge, then counter-swap to ranged pressure outside.",
bans:["Magik","Gorr"],
path:{flank:"Post a guard on the service door and the Garden bridge every fight.",high:"Hold the mezzanine over the second checkpoint, then the Censer pillars and walkways.",ult:"Prison into Moon Knight Hand of Khonshu in the Gallery or under the bridge."}}}},
{map:"Thebes",mode:"Convoy",tags:["COMP ROTATION"],sides:{
attack:{comps:[
{name:"Sands Control",v:["Doctor Strange","The Thing"],d:["Gorr","Namor"],s:["Rocket Raccoon","Cloak & Dagger"],why:"Balanced map, balanced push. Shields for the street, Namor turrets for flanks, Gorr for the finisher."},
{name:"Mirage Dive",v:["Venom","Captain America"],d:["Magik","Star-Lord"],s:["Luna Snow","Mantis"],why:"Fast divers punish the slow control hold before turrets come online."}],
best:["Gorr","Phoenix","Psylocke","Doctor Strange","Luna Snow","Namor"],subs:["Magik","Iron Man","Cyclops"],
counters:"Peni mines stopping the push early? Send Psylocke through a sand tunnel before committing the main lane.",
bans:["Peni Parker","Hawkeye"],
path:{flank:"Run the sand tunnels and interior off-angles. The pyramid turn is a death lane head-on.",high:"Contest the pyramid balconies and overlooks before the Temple doorway.",ult:"Eye into Phoenix Endsong crosses an entrance or the final doorway."}},
defense:{comps:[
{name:"Pyramid Gate",v:["Peni Parker","The Thing"],d:["Hawkeye","Moon Knight"],s:["Jubilee","Invisible Woman"],why:"Mine the early entrance, farm the exposed opening sightlines, and stack the tight Temple doorway with Thing and Moon Knight."},
{name:"Steps Hold",v:["Groot","Magneto"],d:["Hawkeye","Cyclops"],s:["Mantis","Luna Snow"],why:"Wall the pyramid turn, beam the sand-tunnel exits, and hold the temple steps with support ults cycling."}],
best:["Peni Parker","Hawkeye","Moon Knight","The Thing","Jubilee","Invisible Woman"],subs:["Namor","Luna Snow","Groot"],
counters:"Psylocke and Iron Man taking the overlooks? Watch the final windows and doors instead of aiming all six at the doorway.",
bans:["Psylocke","Iron Man"],
path:{flank:"Cover the sand alleys and final windows. The backcap is always coming.",high:"Hold the temple steps and the pyramid overlooks.",ult:"Peni snare into Moon Knight Hand of Khonshu on the forced doorway; Jubilee Firework Finale sustains the contest."}}}},
{map:"Birnin T'Challa",mode:"Domination",tags:["COMP ROTATION"],comps:[
{name:"Throne Brawl",v:["Emma Frost","The Hood"],d:["Scarlet Witch","Magik"],s:["Gambit","Mantis"],why:"The point is a pit. Emma and Hood hold the edge while Wanda and Magik delete anyone who drops in."},
{name:"Sky Hold",v:["Magneto","Peni Parker"],d:["Hela","Storm"],s:["Ultron","Rocket Raccoon"],why:"Hold the side high ground and farm the point below. Storm ult clears the pit on command."}],
best:["Scarlet Witch","Magik","Emma Frost","Hela","Gambit","Storm"],subs:["Mantis","Peni Parker","Ultron"],
counters:"Losing the pit? Stop dropping in. Hold high ground and poke them off.",
bans:["Scarlet Witch","Emma Frost"],
path:{flank:"Side halls feed the point from both sides. Post one duelist each.",high:"Side platforms rule the map. The point is a trap without them.",ult:"Storm or Magik ult the pit when both teams stack. Free reset."}},
{map:"God Quarry",mode:"Domination",tags:["COMP ROTATION","NEW S10"],comps:[
{name:"Quarry Brawl",v:["Emma Frost","Doctor Strange"],d:["Gorr","The Punisher"],s:["Gambit","Jubilee"],why:"The zones are tight. Shields walk in, Gorr and Punisher shred the stack, Gambit sustains the trade."},
{name:"Sky Split",v:["Magneto","The Thing"],d:["Phoenix","Storm"],s:["Luna Snow","Ultron"],why:"Open quarry sightlines let fliers farm while Thing contests the point solo."}],
best:["Gorr","Emma Frost","Gambit","Phoenix","The Punisher","Doctor Strange"],subs:["Jubilee","Storm","Magneto"],
counters:"New map chaos? Play simple. Group up, one angle, ult together.",
bans:["Gorr","Gambit"],
path:{flank:"Quarry tunnels wrap every zone. Expect the backcap.",high:"Overlooks watch the zones. Park a sniper or lose the angle.",ult:"Gambit ult the stacked zone fight. Zones are too small to dodge."}},
{map:"Hell's Heaven",mode:"Domination",tags:["COMP ROTATION"],comps:[
{name:"Chapel Lock",v:["The Hood","Magneto"],d:["Scarlet Witch","Elsa Bloodstone"],s:["Invisible Woman","Luna Snow"],why:"The point is a kill box. Shields at the door, Wanda and Elsa inside, IW keeps the box closed."},
{name:"Pews Poke",v:["Peni Parker","Groot"],d:["Cyclops","Hawkeye"],s:["Ultron","Adam Warlock"],why:"If they hold the box, beams and arrows delete them through the doorways from safety."}],
best:["Scarlet Witch","Elsa Bloodstone","The Hood","Invisible Woman","Cyclops","Magneto"],subs:["Luna Snow","Hawkeye","Peni Parker"],
counters:"Box comp walling you? Do not enter. Poke the doors until ults are up, then combo.",
bans:["Scarlet Witch","Magneto"],
path:{flank:"Side chapel doors skip the main entrance. Send divers.",high:"Choir loft watches the point. Clear it or get farmed.",ult:"Wanda ult through the main door while Magneto holds the exit."}},
{map:"Krakoa",mode:"Domination",tags:["COMP ROTATION"],comps:[
{name:"Garden Dive",v:["The Thing","Venom"],d:["Hela","Phoenix"],s:["Luna Snow","Adam Warlock"],why:"The open point punishes statues. Divers delete the backline while Phoenix ult resets the fight."},
{name:"Bloom Hold",v:["Groot","Peni Parker"],d:["Namor","Hawkeye"],s:["Rocket Raccoon","Jubilee"],why:"Walls plus turrets plus nests turn the open point into a fortress. Make them come to you."}],
best:["Phoenix","Hela","The Thing","Luna Snow","Namor","Groot"],subs:["Adam Warlock","Hawkeye","Peni Parker"],
counters:"Fortress comp? Dive over the walls. The point holders cannot peel.",
bans:["Phoenix","Luna Snow"],
path:{flank:"Jungle wraps the whole point. Divers are always behind you.",high:"Flower platforms watch the point. Contest them early.",ult:"Phoenix ult the open point when both teams stack. Nowhere to hide."}},
{map:"Celestial Husk",mode:"Domination",tags:["COMP ROTATION"],comps:[
{name:"Husk Watch",v:["Peni Parker","Magneto"],d:["Hawkeye","Cyclops"],s:["Ultron","Rocket Raccoon"],why:"The map is all sightlines. Beams and arrows farm from the husk while drones sustain forever."},
{name:"Husk Crash",v:["Captain America","The Thing"],d:["Iron Fist","Magik"],s:["Luna Snow","Mantis"],why:"Divers climb the husk and murder the snipers. The poke comp has no peel up close."}],
best:["Hawkeye","Cyclops","Ultron","Peni Parker","Iron Fist","Luna Snow"],subs:["Rocket Raccoon","Magik","Magneto"],
counters:"Snipers farming? Climb. The husk has five routes up, use one.",
bans:["Hawkeye","Ultron"],
path:{flank:"Husk ribs give climbers covered routes to the top.",high:"The husk IS high ground. Whoever holds the top holds the point.",ult:"Storm ult the top platform clears the sniper nest in one cast."}},
{map:"Royal Palace",mode:"Domination",tags:["COMP ROTATION"],comps:[
{name:"Throne Hold",v:["Groot","Doctor Strange"],d:["Namor","Winter Soldier"],s:["Cloak & Dagger","Jeff the Land Shark"],why:"Walls plus turrets lock the side rooms while WS farms the main door. The classic that still works."},
{name:"Coup Dive",v:["Venom","Emma Frost"],d:["Magik","Black Panther"],s:["Mantis","Loki"],why:"Divers skip the locked doors and behead the supports hiding behind the walls."}],
best:["Namor","Winter Soldier","Groot","Cloak & Dagger","Magik","Doctor Strange"],subs:["Jeff the Land Shark","Black Panther","Mantis"],
counters:"Door comp? Do not knock. Dive the back room and kill the supports first.",
bans:["Namor","Groot"],
path:{flank:"Servant halls bypass the main door into the point room.",high:"Balcony watches the point. One duelist holds it all game.",ult:"Jeff ult from the balcony into the packed point. Classic wipe."}}
];
var MG="https://marvelrivals.gg/wp-content/uploads/sites/47/";
var MAPIMG={
"Hall of Djalia":"2024/11/Intergalactic-Empire-of-Wakanda-Marvel-Rivals-Map-768x432.webp",
"Symbiotic Surface":"2024/11/Klyntar-Symbiotic-Surface-Marvel-Rivals-Map-768x432.webp",
"Central Park":"2025/02/Marvel-Rivals-Map-Empire-Of-Eternal-Night-Central-Park-768x432.webp",
"Heart of Heaven":"2025/09/Heart-of-Heaven-Map-Guide-768x432.webp",
"Shin-Shibuya":"2024/11/Tokyo-2099-Traditional-Futuristic-Shin-Shibuya-Marvel-Rivals-Map-768x432.webp",
"Lower Manhattan":"2026/03/Marvel-Rivals-Lower-Manhattan-Map-Guide-768x432.webp",
"Midtown":"2025/01/Empire-Of-Eternal-Night-Midtown-768x432.webp",
"Spider-Islands":"2024/11/Tokyo-2099-Spider-Islands-Journey-Into-Life-and-Destiny-Marvel-Rivals-Map.webp",
"Yggdrasill Path":"2024/11/Yggsgard-World-Tree-Kingdom-of-Gods-Marvel-Rivals-Map.webp",
"Arakko":"2025/05/Marvel-Rivals-Hellfire-Gala-Arakko-Sister-Island-of-Krakoa-Map-768x432.webp",
"Museum of Contemplation":"2026/01/Rivals-Museum-of-Contemplation-768x432.webp",
"Thebes":"2026/07/Thebes-Map-Marvel-Rivals-768x432.webp",
"Birnin T'Challa":"2024/11/Intergalactic-Empire-of-Wakanda-Marvel-Rivals-Map-768x432.webp",
"God Quarry":"2026/09/Marvel-Rivals-God-Quarry-768x432.webp",
"Hell's Heaven":"2024/11/Hydra-Charteris-Base-Marvel-Rivals-Map-768x432.webp",
"Krakoa":"2025/04/Hellfire-Gala-Krakoa-768x377.webp",
"Celestial Husk":"2025/07/Marvel-Rivals-Klyntar-Celestial-Husk-768x432.webp",
"Royal Palace":"2024/11/Yggsgard-World-Tree-Kingdom-of-Gods-Marvel-Rivals-Map-768x432.webp"
};
var TRIPLE={
"Birnin T'Challa":{name:"Throne Room",v:["Emma Frost"],d:["Scarlet Witch","Magik"],s:["Gambit","Mantis","Invisible Woman"],why:"The pit point is a sustain check. Emma holds the edge, IW walls the drop-ins, and three support ults rotate every pit fight so the point never flips on cooldown disadvantage."},
"God Quarry":{name:"Claim Jumpers",v:["Emma Frost"],d:["Gorr","The Punisher"],s:["Gambit","Jubilee","Mantis"],why:"New-map chaos means grouped zone brawls, and grouped brawls favor the team with more healing. Triple support stabilizes every zone while Gorr and Punisher shred the stack."},
"Hell's Heaven":{name:"Choir Practice",v:["The Hood"],d:["Scarlet Witch","Elsa Bloodstone"],s:["Invisible Woman","Luna Snow","Gambit"],why:"The kill-box point cannot be entered, only outlasted. Triple support holds the box through every ult combo; Wanda and Elsa punish the team that overcommits into it."},
"Krakoa":{name:"Greenhouse",v:["Groot"],d:["Hela","Namor"],s:["Rocket Raccoon","Jubilee","Luna Snow"],why:"The fortress gets a third gardener. Walls, turrets, nests, and three sustain ults make the open point unpushable without a full six-man ult combo."},
"Celestial Husk":{name:"Summit Bid",v:["Captain America","The Thing"],d:["Iron Fist","Magik","Spider-Man"],s:["Luna Snow"],why:"Five climbing routes beat two snipers. The whole team climbs at once from different ribs and the sniper nest dies in the crossfire; Luna ult answers the stall ult."},
"Royal Palace":{name:"Court Healers",v:["Groot"],d:["Namor","Winter Soldier"],s:["Cloak & Dagger","Jeff the Land Shark","Luna Snow"],why:"The door comp becomes unbreakable. Walls plus turrets plus three support ults hold both rooms indefinitely; WS farms anyone patient enough to keep knocking."}
};
/* STRIPLE: one situational triple per SIDE for Convoy/Convergence maps. */
var STRIPLE={
"Hall of Djalia":{
attack:{name:"Plaza Blitz",v:["Venom","The Thing"],d:["Magik","Spider-Man","Star-Lord"],s:["Mantis"],why:"One support is enough when the dive ends fights in seconds. Triple DPS collapses the courtyard before the mid-map stall sets in; Mantis ult covers the single commit."},
defense:{name:"Door Tax",v:["Groot"],d:["Scarlet Witch"],s:["Ultron","Rocket Raccoon","Mantis"],why:"Three support ults rotate across capture and both escort gates while Wanda punishes the stacked courtyard. Every doorway costs an ult to enter."}},
"Symbiotic Surface":{
attack:{name:"Bridge Rush",v:["Venom","Captain America"],d:["Magik","Spider-Man","Iron Fist"],s:["Mantis"],why:"Cross the bridge before nests come online. Five flankers collapse the point from the second floor while Mantis ult covers the commit."},
defense:{name:"Corridor Clinic",v:["The Hood"],d:["Scarlet Witch","Elsa Bloodstone"],s:["Gambit","Invisible Woman","Mantis"],why:"Triple support out-sustains the corridor spam war. Wanda and Elsa play off cooldowns while three support ults rotate one per gate."}},
"Central Park":{
attack:{name:"Park Hunt",v:["Captain America","Venom"],d:["Magik","Iron Fist","Black Panther"],s:["Luna Snow"],why:"Snipers cannot aim at five divers. Triple DPS abandons the lanes entirely and lives in the enemy backline; Luna ult is the only reset button."},
defense:{name:"Castle Clinic",v:["Groot"],d:["Hela"],s:["Ultron","Rocket Raccoon","Mantis"],why:"Three sustain ults rotate across capture and escort while Hela farms the lanes. Nothing dies on the bridge without a full combo."}},
"Heart of Heaven":{
attack:{name:"Temple Swarm",v:["The Thing","Captain America"],d:["Iron Fist","Magik","Spider-Man"],s:["Luna Snow"],why:"The vertical temple rewards bodies on high ground, not shields at gates. Swarm every balcony at once; Luna keeps the swarm alive through the focus fire."},
defense:{name:"Monastery",v:["Groot"],d:["Namor"],s:["Ultron","Rocket Raccoon","Mantis"],why:"Concealed summons plus three sustain ults deny every temple route in fog. Attackers run out of cooldowns before the defense runs out of healing."}},
"Shin-Shibuya":{
attack:{name:"Neon Rush",v:["Venom","The Thing"],d:["Magik","Black Panther","Star-Lord"],s:["Mantis"],why:"Rush the street before shields set up. Triple DPS turns the opening choke into a spawn camp; Mantis damage boost makes the two-second kills possible."},
defense:{name:"Ward 2099",v:["Peni Parker"],d:["Hawkeye"],s:["Ultron","Rocket Raccoon","Mantis"],why:"Mined funnel plus three sustain ults outlast every street push. The corridor never opens without a full six-man combo."}},
"Lower Manhattan":{
attack:{name:"Rooftop Gang",v:["Venom","Captain America"],d:["Spider-Man","Star-Lord","Iron Fist"],s:["Luna Snow"],why:"The map is vertical, so play all vertical. Five divers hold every rooftop and the street escort pushes itself; Luna ult answers the one defensive combo."},
defense:{name:"Precinct",v:["Groot"],d:["Cyclops"],s:["Ultron","Rocket Raccoon","Adam Warlock"],why:"Walls, beams, and three sustain ults lock the street escort and the Vault Bridge. The cart never moves without a full combo."}},
"Midtown":{
attack:{name:"Gridlock Dive",v:["The Thing","Venom"],d:["Magik","Psylocke","Spider-Man"],s:["Mantis"],why:"Skip the shooting-gallery street completely. Triple DPS enters through the subway tunnels and the payload guards die facing the wrong way."},
defense:{name:"Lockdown",v:["Peni Parker"],d:["Hawkeye"],s:["Mantis","Luna Snow","Loki"],why:"Mined doors plus three sustain ults hold the terminal and both corners. The street never opens without a full combo."}},
"Spider-Islands":{
attack:{name:"Bridge Ambush",v:["Venom","The Thing"],d:["Magik","Spider-Man","Black Panther"],s:["Adam Warlock"],why:"Bridges are single-file, so be the team that is already across. Divers cross early through the under-bridge webs, then farm the crossing defenders; Adam cocoons the one picked diver."},
defense:{name:"Toll Booth",v:["Peni Parker"],d:["Hawkeye"],s:["Mantis","Gambit","Jubilee"],why:"Nest, walls, and three sustain ults tax every bridge crossing. Nothing crosses without a full combo."}},
"Yggdrasill Path":{
attack:{name:"Wild Hunt",v:["Venom","The Thing"],d:["Magik","Black Panther","Spider-Man"],s:["Mantis"],why:"Run the exposed lanes instead of escorting down them. Divers take the overlook first and the cart follows."},
defense:{name:"Root Siege",v:["The Hood"],d:["Scarlet Witch","Gorr"],s:["Gambit","Mantis","Jubilee"],why:"The flat narrow path is a war of attrition, so bring the most sustain. Triple support heals through the blender while Wanda and Gorr trade cooldowns up; three ults rotate across both checkpoints."}},
"Arakko":{
attack:{name:"Ruin Pack",v:["Captain America","The Thing"],d:["Black Panther","Wolverine","Magik"],s:["Luna Snow"],why:"Open ruins cannot protect a backline from five flankers. The pack splits wide, converges on the supports, and Luna ult covers the reset after first picks."},
defense:{name:"Great Ring",v:["Peni Parker"],d:["Hawkeye"],s:["Invisible Woman","Ultron","Mantis"],why:"Mined exits and three sustain ults hold the factory and the Ring. Short defender returns win every trade."}},
"Museum of Contemplation":{
attack:{name:"Field Trip",v:["Venom","The Thing"],d:["Magik","Psylocke","Spider-Man"],s:["Mantis"],why:"Clear one room at a time with five divers. The doors never get to shoot back; Mantis ult covers the single commit."},
defense:{name:"Docent Duty",v:["Peni Parker"],d:["Elsa Bloodstone","Winter Soldier"],s:["Invisible Woman","Gambit","Cloak & Dagger"],why:"Indoor rooms are one-door fights, and one door is healable. Nests hold the door, IW shields it, and three support ults mean the room never falls once taken."}},
"Thebes":{
attack:{name:"Sandstorm",v:["Venom","Captain America"],d:["Magik","Star-Lord","Black Panther"],s:["Mantis"],why:"Turrets need setup time that triple DPS never grants. Kill the builders in the first twenty seconds and the control hold has no hold."},
defense:{name:"Pharaoh's Court",v:["The Thing"],d:["Moon Knight"],s:["Jubilee","Invisible Woman","Mantis"],why:"One doorway, three sustain ults. The Temple entrance never opens; Moon Knight farms everyone who queues at it."}}
};