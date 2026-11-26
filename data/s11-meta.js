/* Tier Party — S11 meta layer
   TAGS/TYPES/definitions, per-hero tier reasoning, quick tips,
   and the 10.5 snapshot used for "since last patch" deltas.
   Player-facing copy is editorial; all numbers come from STATS_D/STATS_A. */

/* ---------------- tag ladder ---------------- */
/* Priority when a hero qualifies for more than one:
   pick-ban > ban > bis > sleeper > trap. */
var TAG_DEFS = {
  "pick-ban": {
    label: "Pick or ban",
    rule: "Ban rate 25% or higher and win rate 53% or higher.",
    why: "Contested at both ends of the draft. If it is open you take it, and if it is not you ban it.",
    color: "#f2c14e",
    ink: "#14152b"
  },
  "ban": {
    label: "Ban target",
    rule: "Ban rate 20% or higher, win rate under 53%.",
    why: "Banned far more than it wins. Lobbies fear this hero more than its record justifies.",
    color: "#e8323c",
    ink: "#fff"
  },
  "bis": {
    label: "Best in slot",
    rule: "Top win rate in its role with real pick volume and a low ban rate.",
    why: "The default pick for the job. Strong, uncontested, and always available.",
    color: "#4a4bd0",
    ink: "#fff"
  },
  "sleeper": {
    label: "Sleeper",
    rule: "Win rate 51.5% or higher on 4% pick or less.",
    why: "Wins when it is played and almost nobody plays it. Free value if you know the kit.",
    color: "#2fa8a0",
    ink: "#062a28"
  },
  "trap": {
    label: "Trap",
    rule: "Pick rate 20% or higher and win rate under 49%.",
    why: "Popular, not strong. Played constantly and losing more than it wins.",
    color: "#d9862a",
    ink: "#2a1503"
  }
};

var TAG_ORDER = ["pick-ban","ban","bis","sleeper","trap"];

/* hero -> {tag, why}. One label per hero, cast from the live sample. */
var TAGS = {
  "Devil Dinosaur":   {tag:"pick-ban", why:"73% ban rate on a 56.1% win rate. The one hero both lobbies agree on."},
  "Peni Parker":      {tag:"pick-ban", why:"64.8% win rate, the highest in the game, and still banned in 30% of Diamond+ games."},
  "Daredevil":        {tag:"pick-ban", why:"55.3% win rate with a 42% ban rate. Removed from most drafts before the match starts."},
  "Psylocke":         {tag:"pick-ban", why:"54.0% win rate and a 28% ban rate. Banned as a duelist answer, not as a mercy ban."},

  "Gambit":           {tag:"ban", why:"Banned 64% of the time and winning 49.8%. The ban is habit, not evidence."},
  "Elsa Bloodstone":  {tag:"ban", why:"64% ban rate against a 49.2% win rate after the falloff cut. Feared, not dominant."},
  "Phoenix":          {tag:"ban", why:"Still banned in 53% of games while winning 47.9%. The 11.0 Spark nerf landed."},
  "Emma Frost":       {tag:"ban", why:"45% ban rate on 47.5% win rate. The shield cuts cost her more than the lobby noticed."},

  "Bruce Banner":     {tag:"bis", why:"55.0% win rate on 13.5% pick. The tank that never gets banned and never loses the point."},
  "Magik":            {tag:"bis", why:"57.2% win rate, the best duelist record in Diamond+, and barely banned."},
  "Mantis":           {tag:"bis", why:"59.7% win rate, second highest in the game, on 7.7% pick and a 1% ban rate."},

  "Storm":            {tag:"sleeper", why:"54.7% win rate on 2.7% pick. Quietly the strongest value in the duelist pool."},
  "Human Torch":      {tag:"sleeper", why:"53.2% win rate on 3.6% pick. The fixed spread did more than the pick rate shows."},
  "Adam Warlock":     {tag:"sleeper", why:"51.9% win rate on 2.9% pick. Soul Bond still decides teamfights nobody attributes to him."},

  "Nightcrawler":     {tag:"trap", why:"41% pick rate on a 47.7% win rate. The most-played hero in Diamond+ and a losing one."},
  "Magneto":          {tag:"trap", why:"25.7% pick on 47.3% win rate. Played as comfort, loses as a plan."},
  "Cloak & Dagger":   {tag:"trap", why:"20.5% pick on 42.9% win rate, the worst support record in the game."},
  "Winter Soldier":   {tag:"trap", why:"20.9% pick on 45.4% win rate. The falloff nerf removed his mid-range threat."}
};

/* ---------------- hero types ---------------- */
var TYPE_DEFS = {
  "Anchor": {
    group:"Vanguard",
    why:"Holds a fixed piece of space with static tools and refuses to give it back.",
    does:"Provides the ground the rest of the team fights off. Its body is the objective.",
    goal:"Take the point first, then hold it without giving up depth.",
    fails:"Mobile comps walk past it and it never reaches the fight."
  },
  "Brawl": {
    group:"Vanguard",
    why:"Trades sustained damage at close range on the objective. Wins the slow fight.",
    does:"Absorbs pressure while putting damage back out at contact range.",
    goal:"Win the slow fight on the point, not the fast one in the open.",
    fails:"Kited on long sightlines by poke it can never reach."
  },
  "Dive": {
    group:"Vanguard",
    why:"Leaves the front line to attack the backline. The initiation, not the wall.",
    does:"Removes the enemy backline from the fight entirely, or forces it to retreat.",
    goal:"Enter on a committed angle, kill the support, leave alive.",
    fails:"Goes in alone, or arrives after the front line has already lost."
  },
  "Poke": {
    group:"Duelist",
    why:"Chips health from range before the fight commits. Damage without exposure.",
    does:"Deletes health bars before anyone touches the point.",
    goal:"Trade cooldowns from range until the enemy has to walk into you.",
    fails:"Caught in a committed engage with no mobility left to reset."
  },
  "Sniper": {
    group:"Duelist",
    why:"Precision burst from long sightlines. One shot, one opening.",
    does:"Turns a single sightline into a permanent threat the enemy must respect.",
    goal:"Hold a long angle and convert one opening into a kill.",
    fails:"The fight closes to short range, where its scope is dead weight."
  },
  "Anti-dive": {
    group:"Duelist",
    why:"Punishes or denies the enemy dive. Turns their engage into your kill.",
    does:"Makes the enemy's engage the worst decision available to them.",
    goal:"Save the cooldown for the diver instead of spending it on chip damage.",
    fails:"Fires early and has nothing left when the dive actually arrives."
  },
  "Flanker": {
    group:"Duelist",
    why:"Takes off-angles, wins isolated duels, never holds the front line.",
    does:"Creates pressure the front line cannot see, which forces the enemy to split.",
    goal:"Take an off-angle, win the isolated duel, leave before the rotation.",
    fails:"Duels in the open or stays for the second fight."
  },
  "Sustain": {
    group:"Strategist",
    why:"Main healer. Keeps the front line alive through sustained damage.",
    does:"Keeps the front line standing long enough to win the trade.",
    goal:"Hold healing on the tank so a trade never becomes a loss.",
    fails:"Forced to heal through burst it cannot outpace, or caught by the dive."
  },
  "Boost": {
    group:"Strategist",
    why:"Offensive buffs and damage amplification. Makes someone else the threat.",
    does:"Turns an average teammate into the highest damage on the field.",
    goal:"Bank the buff for the committed engage, not the poke phase.",
    fails:"Buffs the wrong target, or spends the cooldown on a fight already lost."
  },
  "Roam": {
    group:"Strategist",
    why:"Mobile healer that follows a dive instead of standing behind the tank.",
    does:"Follows the dive so the dive has a healer behind it.",
    goal:"Stay attached to the engage, heal it, and leave with it.",
    fails:"Outruns its own escape and dies in the enemy backline."
  },
  "Utility": {
    group:"Strategist",
    why:"Shields, crowd control and resurrection instead of raw healing throughput.",
    does:"Wins fights with shields, control and second chances rather than healing volume.",
    goal:"Place the tool where it changes the fight, then place it again.",
    fails:"Uses utility reactively, after the fight is already decided."
  }
};

var TYPE_ORDER = ["Anchor","Brawl","Dive","Poke","Sniper","Anti-dive","Flanker","Sustain","Boost","Roam","Utility"];

/* hero -> primary type, plus a second only where the kit genuinely does both jobs. */
var TYPES = {
  "Doctor Strange":   ["Anchor"],
  "Groot":            ["Anchor"],
  "Peni Parker":      ["Anchor","Anti-dive"],
  "Magneto":          ["Anchor"],
  "Emma Frost":       ["Anchor"],
  "Bruce Banner":     ["Brawl"],
  "Thor":             ["Brawl"],
  "The Thing":        ["Brawl"],
  "Angela":           ["Brawl"],
  "Devil Dinosaur":   ["Brawl"],
  "Deadpool (Vanguard)":["Brawl"],
  "Rogue":            ["Brawl"],
  "Wolverine":        ["Brawl"],
  "Daredevil":        ["Brawl"],
  "Blade":            ["Brawl"],
  "Elsa Bloodstone":  ["Brawl"],
  "Deadpool (Duelist)":["Brawl"],
  "Gorr":             ["Brawl"],
  "Venom":            ["Dive"],
  "Captain America":  ["Dive"],
  "Spider-Man":       ["Dive"],
  "Black Panther":    ["Dive"],
  "Magik":            ["Dive"],
  "Iron Fist":        ["Dive"],
  "Hela":             ["Poke"],
  "Iron Man":         ["Poke"],
  "Storm":            ["Poke"],
  "Scarlet Witch":    ["Poke"],
  "Phoenix":          ["Poke"],
  "Human Torch":      ["Poke"],
  "Moon Knight":      ["Poke"],
  "Cyclops":          ["Poke"],
  "Winter Soldier":   ["Poke"],
  "The Punisher":     ["Poke"],
  "Hawkeye":          ["Sniper"],
  "Black Widow":      ["Sniper"],
  "Namor":            ["Anti-dive"],
  "Mister Fantastic": ["Anti-dive"],
  "Squirrel Girl":    ["Anti-dive"],
  "Psylocke":         ["Flanker","Dive"],
  "Star-Lord":        ["Flanker"],
  "Black Cat":        ["Flanker"],
  "The Hood":         ["Flanker"],
  "Cloak & Dagger":   ["Sustain"],
  "Invisible Woman":  ["Sustain"],
  "Luna Snow":        ["Sustain"],
  "Adam Warlock":     ["Boost"],
  "Gambit":           ["Boost"],
  "Mantis":           ["Boost"],
  "Nightcrawler":     ["Roam"],
  "Rocket Raccoon":   ["Roam"],
  "Jeff the Land Shark":["Roam"],
  "Loki":             ["Utility"],
  "Ultron":           ["Utility"],
  "Jubilee":          ["Utility"],
  "White Fox":        ["Utility"],
  "Deadpool (Strategist)":["Utility"]
};

/* ---------------- 10.5 snapshot (Diamond+, competitive) ----------------
   [win, pick, ban] as published in the final week of Season 10.5.
   Used only to compute "since last patch" deltas in the info panel. */
var STATS_PREV = {
  "Peni Parker":[65.75,4.68,29.90], "Devil Dinosaur":[60.42,5.58,44.67], "Magik":[56.99,8.44,3.58],
  "Rocket Raccoon":[56.59,18.30,0.35], "Gorr":[56.13,6.74,10.68], "Ultron":[55.84,4.30,0.15],
  "Bruce Banner":[55.42,12.04,1.07], "Storm":[55.28,3.46,0.20], "Mantis":[54.98,3.60,0.09],
  "Daredevil":[54.88,5.84,4.82], "Captain America":[53.80,4.53,0.23], "Loki":[53.69,5.69,0.89],
  "Human Torch":[53.58,2.88,0.52], "Thor":[52.88,10.81,0.69], "Mister Fantastic":[52.81,6.75,0.35],
  "Psylocke":[52.35,7.25,6.85], "Doctor Strange":[52.31,35.02,0.77], "Rogue":[51.81,8.74,0.64],
  "Iron Man":[51.80,4.88,0.54], "Iron Fist":[51.78,7.08,1.59], "Groot":[51.76,5.78,1.11],
  "Black Cat":[51.28,2.53,0.78], "Venom":[51.24,8.50,0.93], "Invisible Woman":[51.18,35.68,1.23],
  "Spider-Man":[51.13,12.48,15.94], "Angela":[51.10,4.36,0.61], "Hela":[50.94,13.47,6.46],
  "Adam Warlock":[50.43,3.31,0.21], "Jubilee":[49.88,28.73,1.51], "Black Panther":[49.72,4.25,6.07],
  "Star-Lord":[49.66,4.32,0.25], "Scarlet Witch":[49.60,15.08,4.33], "The Hood":[49.37,18.58,1.13],
  "Blade":[49.08,4.60,0.68], "Wolverine":[49.04,5.39,4.42], "Phoenix":[48.98,6.46,38.52],
  "Emma Frost":[48.94,24.29,20.11], "Deadpool (Duelist)":[48.91,3.39,0.40], "Gambit":[48.85,22.55,18.07],
  "Hawkeye":[48.79,3.19,0.31], "Elsa Bloodstone":[48.77,7.11,23.45], "Jeff the Land Shark":[48.24,9.88,0.31],
  "Magneto":[47.18,27.89,1.77], "Winter Soldier":[47.08,23.31,14.02], "Luna Snow":[46.91,22.65,0.40],
  "The Thing":[46.62,9.50,2.01], "Deadpool (Vanguard)":[46.62,4.24,0.10], "White Fox":[46.53,12.28,0.17],
  "Moon Knight":[46.47,6.08,0.55], "Namor":[45.40,13.87,7.96], "The Punisher":[45.25,8.61,1.08],
  "Deadpool (Strategist)":[45.13,10.66,0.19], "Cloak & Dagger":[44.40,30.97,4.75],
  "Black Widow":[44.40,3.28,0.24], "Cyclops":[44.32,12.44,1.72], "Squirrel Girl":[40.70,3.72,0.35]
};

/* ---------------- why this tier ----------------
   One paragraph per hero. Names the tier in each lobby, the number behind it,
   and the patch context. Tier letters must match TIER_D / TIER_A. */
var TIER_WHY = {
  "Peni Parker": "S in both lobbies. A 64.8% Diamond+ win rate on a 3.4% pick rate is the strongest single record in the game, and the 11.0 mine-delay nerf trimmed her ceiling rather than her floor. Low elo walks into the nest even more often than Diamond does.",
  "Devil Dinosaur": "S in Diamond+, A in low elo. A 56.1% win rate against a 73% ban rate makes him the most contested hero in the game. Diamond removes him before the question comes up; low elo tries to fight him in the open instead.",
  "Bruce Banner": "S in both. A 55.0% win rate on 13.5% pick with a 4% ban rate makes him the only S-tier hero nobody removes. The job is unglamorous and stable, which is why the tier holds across lobbies.",
  "Daredevil": "S in Diamond+, A in low elo. A 55.3% win rate with a 42% ban rate: drafted as an answer, banned as a threat. Low elo does not punish his engage timing the way Diamond does.",
  "Magik": "S in both. A 57.2% Diamond+ win rate with only a 4% ban rate is the best uncontested duelist record in the game. Her dive converts on ladder at every rank because the counter needs coordinated peeling.",
  "Gorr": "S in both. 55.1% Diamond+ and 56.5% across all ranks on 7.9% pick. The kit does not depend on team structure, so the tier survives the lobby switch.",
  "Psylocke": "S in Diamond+, B in low elo. A 54.0% win rate and 28% ban rate reflect a flanker that Diamond teams actually enable. Low elo cannot convert her off-angles, so the record falls with the rank.",
  "Hela": "A in both. 52.4% on 13.5% pick. The 11.0 changes passed her by, and she remains the safest long-range damage in the duelist pool.",
  "Storm": "A in both. 54.7% on 2.7% pick is a sleeper line held back by a kit that needs the team to walk forward. Low elo respects the damage aura more than Diamond does.",
  "Spider-Man": "A in Diamond+, B in low elo. 50.6% on 12.9% pick: popular everywhere, efficient only where teammates follow the dive.",
  "Star-Lord": "A in Diamond+, B in low elo. 51.7% on 6.1% pick. The Galactic Legend ammo buff helped, but his value depends on angles low elo does not create.",
  "Iron Fist": "B in both. 51.2% on 7.8% pick. He wins his own fights and needs somebody else to time the dive with him.",
  "Black Cat": "B in Diamond+, C in low elo. 51.0% on 3.3% pick. The Turn of Fortune fix removed a real failure state, but the pick rate has not caught up.",
  "Mister Fantastic": "B in Diamond+, A in low elo. 50.9% win rate. Low elo rewards the self-sustain and Diamond punishes the range.",
  "Human Torch": "B in both. 53.2% on 3.6% pick, another sleeper line. The fixed Fire Cluster spread made his damage reliable instead of lucky.",
  "Scarlet Witch": "B in Diamond+, A in low elo. 49.8% in Diamond against 51.6% across all ranks: her escape and chaos damage punish uncoordinated teams, which is precisely what low elo is.",
  "The Hood": "B in both. 49.4% on 17.7% pick. Played far more than he wins; the kit is fun and the record is not.",
  "Iron Man": "B in both. 51.3% on 3.7% pick. Free flight is still the best escape in the game and still not enough to make him a Diamond pick.",
  "Phoenix": "B in Diamond+, D in low elo. The 11.0 Spark nerf cut the detonation loop, leaving 47.9% Diamond+ and 45.6% overall. She holds B on reputation; the 53% ban rate, not the win rate, keeps her visible.",
  "Elsa Bloodstone": "B in Diamond+, D in low elo. 49.2% in Diamond with a 64% ban rate and a falloff cut that starts at 10m. She is banned like an S tier and performs like a C.",
  "Deadpool (Duelist)": "B in Diamond+, D in low elo. 49.6% on 3.4% pick. A high-skill kit with a low floor, which is the worst combination on ladder.",
  "Wolverine": "C in Diamond+, D in low elo. The Feral Leap cooldown and rage-impact cuts removed his tank-killing ceiling: 46.1% Diamond+, 45.8% overall.",
  "Winter Soldier": "C in both. 45.4% on 20.9% pick. The falloff change moved his effective range to 30m and his win rate moved with it.",
  "Black Widow": "C in Diamond+, D in low elo. 47.4% win rate. The Electro-Plasma buff helped a hero whose problem is the lobby, not the damage.",
  "Hawkeye": "C in both. 48.5% on 2.7% pick. Precision damage is worth less when every dive has two ways to reach you.",
  "Blade": "C in Diamond+, B in low elo. 48.2% on 3.9% pick. Sustain in melee is not the same thing as winning in melee.",
  "Black Panther": "C in both. 47.8% win rate. His dive needs resets that coordinated teams refuse to give.",
  "Cyclops": "C in both. 45.2% on 11.3% pick. Popular, visible and losing; the beam does not convert into picks.",
  "Moon Knight": "D in Diamond+, C in low elo. 46.8% win rate. Low elo clusters around the ankhs; Diamond spreads out and denies the bounce value.",
  "Squirrel Girl": "D in both. 38.8% in Diamond is the lowest win rate in the game after the rework took 15 damage off Burst Acorn and cut the falloff.",
  "The Punisher": "D in both. 45.0% on 7.3% pick. The most straightforward kit in the game is also the most solved.",
  "Namor": "D in Diamond+, C in low elo. 44.2% win rate. Squid zoning needs a dive to punish; when nobody dives, he has no job.",
  "Groot": "A in both. 54.4% on 6.7% pick, the quiet best of the vanguard pool. The Ironwood health cut trimmed 50 points and the walls still decide the point.",
  "Venom": "A in both. 52.9% on 11.8% pick. The falloff change and Resilience cut lowered his ceiling, but the dive still trades for a support every time.",
  "Rogue": "A in both. 52.6% on 11.9% pick. The Gambit team-up cooldown halved and the stance radius tightened; she remains the best second tank.",
  "Thor": "A in both. 52.4% on 10.8% pick. No 11.0 changes and no reason to move: the hammer still owns the objective.",
  "Angela": "A in both. 53.8% win rate after the Ichors buff. Low pick, high conversion, and the only vanguard whose buffs were not offset by a nerf elsewhere in the kit.",
  "Captain America": "A in both. 53.8% on 4.3% pick. The shield is still the cheapest way to make a dive survivable.",
  "Doctor Strange": "A in both. 51.3% on 32.1% pick, the most-played hero in the game. The 11.0 shield cut cost 50 points and 10 recovery per second; his floor held anyway.",
  "Emma Frost": "B in both. 47.5% in Diamond with a 45% ban rate. The shield and Psychic Spear cuts removed the dominance the ban rate still assumes.",
  "Magneto": "B in both. 47.3% on 25.7% pick. The bubble is still the best single defensive tool in the game and his own damage is still the reason he loses.",
  "The Thing": "C in both. 44.8% on 9.0% pick. A brawler with no reliable way to start the fight he wants.",
  "Deadpool (Vanguard)": "C in Diamond+, D in low elo. 46.7% in Diamond, 44.8% overall. The Big Test rework pushed him toward self-sustain and away from the ally utility that made him a tank.",
  "Mantis": "S in both. 59.7% in Diamond, second in the game, on 7.7% pick and a 1% ban rate. The Spore Slumber and self-heal cuts lowered her ceiling without touching the Life Orb economy that wins games.",
  "Rocket Raccoon": "S in both. 56.0% on 13.0% pick. Jetpack Dash granting 25 bonus health was a real survivability buff; the healing and falloff cuts cost less than the beacon saves.",
  "Ultron": "S in both despite the Firewall nerf. 55.8% on 3.6% pick: the nerf cost him ceiling, not floor. A 25 HP ally shield still survives a dive, and nobody spends a ban on him.",
  "Loki": "A in Diamond+, B in low elo. 53.4% on 4.2% pick. The Deception cooldown increase hurts, but Diamond teams use the clone healing and low elo does not.",
  "Nightcrawler": "A in Diamond+, B in low elo. 47.7% on 41.0% pick, the most-picked hero in the game on a losing record. The tier reflects his ceiling; the trap tag reflects what the sample actually says.",
  "Adam Warlock": "A in both. 51.9% on 2.9% pick. Soul Bond and a four-bounce Life Stream make him the best anti-burst support nobody drafts.",
  "Invisible Woman": "A in Diamond+, B in low elo. 50.2% on 29.8% pick. The Veiled Step cooldown and vortex slow cuts cost her escape; Diamond still converts the barrier.",
  "Jubilee": "B in Diamond+, A in low elo. 50.7% on 22.5% pick. Low elo stands in the sparkles; Diamond steps out of them.",
  "Gambit": "B in both. 49.8% on 19.8% pick against a 64% ban rate. The outer spread and self-heal cuts turned a contested pick into a habit.",
  "Jeff the Land Shark": "B in Diamond+, C in low elo. 50.0% in Diamond against 47.2% overall: his healing requires positioning low elo has not learned.",
  "White Fox": "B in both. 45.9% on 12.1% pick. The Sanctuary shield halved and Spectral Surge lost ally invincibility; the Fox Form buffs did not cover the gap.",
  "Luna Snow": "B in Diamond+, C in low elo. 46.2% on 15.7% pick. Cutting Absolute Zero from 2.7s to 1.5s removed the setup that made her a pick.",
  "Deadpool (Strategist)": "C in Diamond+, B in low elo. 46.9% in Diamond against 47.9% overall. Low elo tolerates the randomness; Diamond prices it.",
  "Cloak & Dagger": "C in both. 42.9% in Diamond is the worst support record in the game on a 20.5% pick rate. The Dagger Storm cooldown and self-heal cuts landed on the part that kept them alive."
};

/* ---------------- season brief (info panel) ---------------- */
var META_BRIEF = {
  season: "Season 11 · Doomsday",
  window: "Patch 20261113 · live 13 Nov",
  bullets: [
    "29 heroes changed in 11.0. Strategists lost survivability and gained combat power across the board.",
    "Devil Dinosaur became the ban of the season: 44.7% to 73% while holding a 56.1% win rate.",
    "Phoenix, Gambit and Elsa kept their ban rates and lost their win rates. The lobbies have not caught up.",
    "Nightcrawler arrived and instantly became the most-picked hero in Diamond+ at a 47.7% win rate."
  ]
};

/* ---------------- quick tips ----------------
   Three practical lines per hero. Structural advice over exact numbers,
   so nothing here goes stale the next time a cooldown moves. */
var TIPS = {
  "Peni Parker": [
    "Place the nest where the fight will happen, not where the enemy is standing now.",
    "Mines are area denial, not damage. Seed the flank your supports are next to.",
    "Hold the web snare for the second diver. The first one is bait."
  ],
  "Devil Dinosaur": [
    "Savage Predation is a pick tool. Grab the support, never the tank.",
    "Buddy Barrier lasts four seconds now. Drop it for the burst window, not on cooldown.",
    "Apply bleed before you commit to the grab so the follow-up lands on a target already losing health."
  ],
  "Bruce Banner": [
    "Use Banner form to build ult charge before you transform, not after.",
    "Land the leap behind your target so the knockback pushes them into your team.",
    "Save Monster Hulk for the support ult you need to cancel, not the first fight."
  ],
  "Daredevil": [
    "His value is the engage, not the damage. Start on a support and leave before the peel arrives.",
    "Play the second engage. Let the tank eat the first round of cooldowns.",
    "Track the enemy's escape before you commit; his own way out is shorter than it feels."
  ],
  "Magik": [
    "Stepping Discs are your escape as much as your engage. Always keep one for the way out.",
    "Umbral Incursion over the front line, not through it. You want the backline, not the tank.",
    "Eldritch Whirl after the dive lands, not before, so the damage overlaps the target's escape."
  ],
  "Gorr": [
    "His damage comes from staying in the fight. Do not chase the kill out of your own range.",
    "Trade on your terms: step in for the burst, step out before the enemy cooldowns come back.",
    "Play near cover so the enemy dive has to commit twice to reach you."
  ],
  "Psylocke": [
    "Take the off-angle before the fight starts, not during it. Arriving late wastes the flank.",
    "Her ult is a zoning tool as much as damage; drop it where the enemy must walk.",
    "Leave the fight on your own cooldown, never on the enemy's terms."
  ],
  "Hela": [
    "Height is the whole kit. Take a platform and make the enemy come to you.",
    "Do not duel a dive. Reposition first, then punish the landing.",
    "Her escape is loud. Use it early enough that they cannot follow the trail."
  ],
  "Storm": [
    "Her aura is worth more than her damage. Stand where the team fight is, not where the kills are.",
    "Save the slow for the enemy engage, not for chasing.",
    "She needs the team to walk forward with her. Play her when your tank actually initiates."
  ],
  "Spider-Man": [
    "Web-Cluster first so the target cannot escape the follow-up.",
    "Get Over Here is a repositioning tool as much as a pull. Use it to leave as often as to enter.",
    "Do not open the fight. You are the second engage, always."
  ],
  "Star-Lord": [
    "His value is the angle. Fly wide, shoot the backline, never stand behind the tank.",
    "Save the dash for the enemy dive, not for damage.",
    "Ult from height and behind the team, so the enemy has to turn to answer it."
  ],
  "Iron Fist": [
    "His sustain is the resource. Trade only while it is up.",
    "Target the support, not the tank. He loses every long fight against armour.",
    "Leave on your own cooldown; his escape is the slowest part of the kit."
  ],
  "Black Cat": [
    "Fortune is the resource. Bank it before the fight, not during it.",
    "Her value is the steal, not the damage. Play for the debuff and let the team convert it.",
    "Do not commit to a duel without a Fortune lead."
  ],
  "Mister Fantastic": [
    "Stretch the engage, not the damage. Pull the enemy out of position and let the team hit them.",
    "His self-sustain lets him hold space nobody else can. Use it to buy time, not kills.",
    "Stay near cover; his range is longer than his escape."
  ],
  "Human Torch": [
    "The fixed spread means his damage is now reliable. Hold the angle and keep firing.",
    "Fire walls are for cutting the retreat, not for opening the fight.",
    "Fly for the angle, land for the damage. Do not fight in the air."
  ],
  "Scarlet Witch": [
    "Her escape is instant. Use it to bait a dive, then punish the commitment.",
    "The chaos damage does the work. Stay near the fight and let it tick.",
    "Do not chase. She wins by making the enemy miss, not by out-damaging them."
  ],
  "The Hood": [
    "He is a flanker with a gun. Take the angle first, then commit.",
    "His demon form is the second engage, not the opener.",
    "Play for the isolated target; he loses every even fight."
  ],
  "Iron Man": [
    "Flight is the whole hero. Attack from an angle nobody is covering.",
    "Unibeam is the burst window. Land it on a target already stuck in a fight.",
    "Do not hover in the open. Move between shots or you are a free pick."
  ],
  "Phoenix": [
    "One Spark stack per shockwave now. Do not build the old two-stack detonation, it will not land.",
    "Her value is the sustained burn. Play behind the tank and keep the dot running.",
    "The resurrect is a tempo tool. Use it on a support, not on the first body."
  ],
  "Elsa Bloodstone": [
    "Falloff starts at 10 metres. Fight inside that range or do not fight.",
    "Her snares are the setup. Land one before you spend the shotgun.",
    "Play the flank, not the front. She has no answer to sustained poke."
  ],
  "Deadpool (Duelist)": [
    "His kit rewards aggression with an exit. Always keep the exit up.",
    "Play for the chaos, not the pick. His value is what the enemy cannot predict.",
    "Do not open on a full-health tank; spend the cooldowns on someone who can die."
  ],
  "Wolverine": [
    "Feral Leap is 15 seconds now. Miss it and you are a body with no escape.",
    "Rage is the resource. Build it on the tank, spend it on the support.",
    "His job is the tank-kill. Do not get pulled into duels he cannot win."
  ],
  "Winter Soldier": [
    "Falloff caps at 30 metres now. Close the range before you take the shot.",
    "The pull is the pick tool. Use it on a target already out of cover.",
    "Do not stand and trade at range; that is exactly what the nerf punished."
  ],
  "Black Widow": [
    "One shot, one reposition. Standing still after the shot is how you die.",
    "The scope is a commitment. Use it on targets already fighting someone else.",
    "Her kick is the escape. Save it for the dive, not for the kill."
  ],
  "Hawkeye": [
    "Take the angle nobody is watching, then move after every shot.",
    "Charge the shot while the target is distracted. A duel with a dive is a loss.",
    "His value is picks before the fight, not damage during it."
  ],
  "Blade": [
    "His sustain is the trade. Fight only while it is running.",
    "Play the flank and force the duel; he loses the front-line brawl.",
    "Ult on the second engage so the enemy has no cooldowns left to answer it."
  ],
  "Black Panther": [
    "His resets are the whole kit. Do not dive without a target that will die.",
    "Wall-run to the angle, then commit. Arriving on foot wastes the opener.",
    "Kill the support or leave. A half-dive is a death."
  ],
  "Cyclops": [
    "The beam needs a target that cannot move. Use it on someone already fighting.",
    "Play behind the tank and keep the pressure on; his value is constant damage.",
    "Do not flank. He has no escape worth the risk."
  ],
  "Moon Knight": [
    "Ankh placement decides the fight. Put it where the enemy must walk, not where they are.",
    "Play the high ground and let the bounces do the work.",
    "He is a zoning hero. Damage the space, not the target."
  ],
  "Squirrel Girl": [
    "Acorn Rain is the new value. Drop it on the point before the fight, not after.",
    "Mammal Bond is the escape. Use it to leave, not to engage.",
    "Her damage is area denial. Bounce the acorns into chokes, not at open targets."
  ],
  "The Punisher": [
    "Turret is a commitment. Place it where it covers the point, not where it covers you.",
    "His value is sustained fire. Stay behind the tank and keep shooting.",
    "Do not flank. The kit has no exit and no burst."
  ],
  "Namor": [
    "Squids are the damage. Place them where they cover the dive, not the point.",
    "His job is anti-dive. Stand near your supports and punish the commit.",
    "Do not chase. He has no gap closer and no escape."
  ],
  "Groot": [
    "Walls are the fight. Split the enemy team before you walk in.",
    "Ironwood is 550 now. Place it where it blocks the damage, not just the path.",
    "Thornlash does more to targets pinned against a wall. Build the wall first."
  ],
  "Venom": [
    "Frenzied Arrival falloff starts at 3 metres now. Land close or do not land.",
    "Resilience is 525 at full lost health. Use it as the exit, not the opener.",
    "His job is drawing cooldowns. Dive, eat the response, leave alive."
  ],
  "Rogue": [
    "The grab is the pick. Take the support, not the tank.",
    "Defensive Stance is smaller now. Stand closer to the damage you want to absorb.",
    "Her value is the steal. Take the ability the enemy needs, not the one they have spare."
  ],
  "Thor": [
    "The hammer is the engage and the escape. Do not spend it on damage.",
    "Play the objective, not the kill. His value is the space he holds.",
    "Ult when the enemy is already committed, never as an opener."
  ],
  "Angela": [
    "Her buffs persist outside the domain now. Step out and keep the damage.",
    "The axes are the damage; the domain is the sustain. Do not confuse the two.",
    "Play the front line. She has no way to reach the backline."
  ],
  "Captain America": [
    "The shield is the whole hero. Lead with it so the dive survives the first burst.",
    "His job is making space, not getting kills. Push the enemy off the point.",
    "Do not chase the backline alone. He has no burst to finish."
  ],
  "Doctor Strange": [
    "The shield is 800 now. Do not hold it until it breaks; drop it and let it recover.",
    "Portal is a tempo tool. Use it to move the team, not to escape alone.",
    "Eye of Agamotto wins the fight it lands in. Save it for the enemy commit."
  ],
  "Emma Frost": [
    "The shield is 350 now. Use it for the burst window, not as a permanent wall.",
    "Psychic Spear scales off max health. Point it at the tank, not the support.",
    "Her value is the space she denies. Stand where the enemy wants to be."
  ],
  "Magneto": [
    "The bubble is the best single defensive tool in the game. Spend it on the dive, not on yourself.",
    "His damage is the weakness. Do not pick him expecting kills.",
    "Play the front line and let the bubble buy your support a second of life."
  ],
  "The Thing": [
    "He needs someone else to start the fight. Play him with a dive tank, not alone.",
    "His value is the disruption. Break the enemy formation, not the enemy health bar.",
    "Do not chase. He has no way to close the distance twice."
  ],
  "Deadpool (Vanguard)": [
    "The Big Test is self-sustain now. Do not expect it to save an ally.",
    "His value is the second life. Play forward, die late, come back.",
    "Do not build the kit around team utility; 11.0 took that away."
  ],
  "Mantis": [
    "Life Orbs on non-crit hits now. Fire into the fight even when nobody needs healing.",
    "Spore Slumber is 1.5 seconds. It is an interrupt, not a setup.",
    "Allied Inspiration costs two orbs now. Spend them on the dive, not the tank."
  ],
  "Rocket Raccoon": [
    "The beacon is the hero. Place it before the fight, out of sight.",
    "Jetpack grants bonus health now. Use it to survive the dive, not to reposition.",
    "His damage is real. Fire between heals instead of holding the beam."
  ],
  "Ultron": [
    "Firewall is 25 bonus health now. Use it to survive a burst, not to sustain.",
    "Play high and behind. He has no escape once the dive reaches him.",
    "His value is the uptime. Keep the beam on the tank and stay alive."
  ],
  "Loki": [
    "Deception is 18 seconds now. Place the clone before the fight, not during it.",
    "The clone healing is the value. Put it where the team will retreat to.",
    "His ult is the enemy's best cooldown. Copy something that ends a fight."
  ],
  "Nightcrawler": [
    "Swift Intervention has two charges. Keep one for the exit.",
    "Tandem Teleport needs a willing ally; the new auto-accept setting removes the delay.",
    "The spin-teleport is an engage with a return leg. Do not spend the recast on damage."
  ],
  "Adam Warlock": [
    "Life Stream bounces four times now. Aim it so the bounces reach the backline.",
    "Soul Bond is the anti-burst tool. Cast it before the dive lands, not after.",
    "His heal is smaller per target. Do not let the tank take the first bounce."
  ],
  "Invisible Woman": [
    "Veiled Step is 8 seconds now. Treat the escape as expensive.",
    "The barrier is the value, not the damage. Place it to split the fight.",
    "Her vortex slows at the edge now. Drop it where the enemy will retreat."
  ],
  "Jubilee": [
    "Sparkle Mark lost the healing boost. Play her for damage, not for support.",
    "Firework Finale is the fight-ending tool. Use it on the point, not on a chase.",
    "Her value is the zone. Keep the sparkles where the enemy must stand."
  ],
  "Gambit": [
    "The outer spread is wider now. You need to be closer to land the full fan.",
    "Healing Hearts self-heal is 20. Do not rely on it to survive a dive.",
    "His value is the damage amp. Play behind the duelist, not beside the tank."
  ],
  "Jeff the Land Shark": [
    "His healing is a projectile. Lead the target or it misses entirely.",
    "The ult is a displacement tool. Use it to move the enemy off the point.",
    "He needs to play close. Standing behind the tank wastes his range."
  ],
  "White Fox": [
    "Spirit Sanctuary is 100 now. It is a reaction, not a plan.",
    "Spectral Surge lost the invincibility. Do not use it as a save.",
    "Fox Form is the damage window. Build tails before the fight, not during it."
  ],
  "Luna Snow": [
    "Absolute Zero is 1.5 seconds. It is an interrupt, not a setup for a kill.",
    "Her value is the sustained heal. Stay behind the tank and keep the beam moving.",
    "The freeze still cancels a dive. Save it for the commit, not the approach."
  ],
  "Deadpool (Strategist)": [
    "His value is unpredictability. Play the chaos, not the plan.",
    "Do not build the team around his healing; it is a bonus, not a foundation.",
    "Use his mobility to reach the dive, not to run from the fight."
  ],
  "Cloak & Dagger": [
    "Dagger Storm is 15 seconds now. Spend it on the fight that matters.",
    "The self-heal is 35. They cannot sustain a dive alone anymore.",
    "Swap forms for the job: Dagger to heal, Cloak to deny the enemy's escape."
  ]
};

/* Role corrections for hero records that the legacy donor table got wrong.
   The tier boards have always filed The Hood under Duelist; the hero record
   still says Vanguard, which mis-tints his card and breaks his tier lookup. */
var ROLE_FIX = {"The Hood":"Duelist"};
