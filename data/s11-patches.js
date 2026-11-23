/* Season 11 patch data. Primary source: official Marvel Rivals Balance Post,
   https://www.marvelrivals.com/balancepost/20261110/41667_1319209.html
   Numbers are transcribed from that post; nothing here is inferred. */
var S11_PATCH = {
  id: "11.0",
  version: "20261113",
  season: "S11",
  name: "Doomsday",
  date: "13 Nov 2026",
  title: "Season 11 balance update",
  lede: "Nightcrawler joins the roster and 29 heroes are adjusted. Supports lose a slice of survivability and get combat power back; the top of the ban list takes direct hits.",
  counts: { buff: 9, nerf: 12, mixed: 7, rework: 1, new: 1 },
  roles: [
    { role: "Vanguard", entries: [
      { h: "Angela", k: "buff", note: "Small numbers, real payoff. The Divine Judgement window now extends past the domain.",
        lines: [
          ["Axes of Ichors", "first three strikes 30 → 35"],
          ["Divine Judgement", "movement speed and bonus health persist 6s outside the domain, lost early if Wingblade Ascent is used"],
          ["Dual-axe", "bonus health per Axes hit 50 → 55"],
          ["Divine Judgement", "continuous damage 12.5/s → 15/s"]
        ], tu: [] },
      { h: "Deadpool (Vanguard)", k: "rework", note: "No longer a walking shield for the team. The health swing is now personal.",
        lines: [
          ["The Big Test", "no longer grants 50 bonus health to nearby allies"],
          ["The Big Test", "self bonus health 300 → 400"],
          ["The Big Test – Upgraded", "loses ally bonus health per strike; self damage-to-bonus-health ratio 1 → 1.5"]
        ], tu: [] },
      { h: "Devil Dinosaur", k: "nerf", note: "The 44.7% ban rate finally earns a response. Engage chain is shorter, barrier is thinner.",
        lines: [
          ["Savage Predation", "control 0.8s → 0.6s, post-control launch 1.5s → 1.2s"],
          ["Buddy Barrier", "15% slow removed, duration 6s → 4s, shield 450 → 400"],
          ["Apex Advantage", "bleed conversion 150% → 125%"],
          ["Primal Punishment", "cooldown 12s → 18s"]
        ], tu: [["The Punisher", "Primal Punishment cooldown 12s → 18s"]] },
      { h: "Doctor Strange", k: "nerf", note: "Shield tax. Still the most-picked hero in the game at 35% pick rate.",
        lines: [
          ["Shield of the Seraphim", "850 → 800, recovery 60/s → 50/s"],
          ["Gamma Maelstrom", "minimum energy retained with Hulk team-up 50 → 25"]
        ], tu: [["Invisible Woman", "bonus shield 150 → 100; Psionic Vortex no longer grants allies bonus health; self conversion 0.5 → 0.7"],
                 ["Hulk", "minimum Gamma Maelstrom energy retained 50 → 25"]] },
      { h: "Emma Frost", k: "nerf", note: "Aegis down, spear conversion changed. The 20% ban rate will probably hold.",
        lines: [
          ["Mind's Aegis", "400 → 350, recovery 80/s → 65/s"],
          ["Psychic Spear", "sentience damage 25% max health → 60 + 10% max health"]
        ], tu: [["Luna Snow", "Iced Out Diamond 350 → 300"]] },
      { h: "Groot", k: "mixed", note: "Wall damage up, wall health down. Trade one for the other.",
        lines: [
          ["Thornlash Wall", "Flora Colossus damage 60 → 65"],
          ["Ironwood Wall", "health 600 → 550"]
        ], tu: [["Mantis", "Wild Wall now also triggers Flora Colossus"]] },
      { h: "Peni Parker", k: "nerf", note: "65.8% win rate and 29.9% ban rate at Diamond+. Mines are slower and weaker.",
        lines: [
          ["Cyber-Web Cluster", "explosion 15 → 12"],
          ["Arachno-Mine", "detonation delay 0.6s → 0.7s"]
        ], tu: [] },
      { h: "Rogue", k: "mixed", note: "Punch buff, team-up gutted, stance tightened.",
        lines: [
          ["Power Surge Punch", "first two hits 35 → 40"],
          ["Defensive Stance", "absorption radius 2m → 1.2m, damage-to-energy 0.55 → 0.6"]
        ], tu: [["Gambit", "Mr. & Mrs. X cooldown 30s → 15s; kinetic explosion per hit 5 + 1% max health → 3 + 1% max health; ally healing 15 → 10"]] },
      { h: "Venom", k: "mixed", note: "Better detection, worse dive payoff, thinner emergency health.",
        lines: [
          ["Dark Predation", "detection radius increased"],
          ["Frenzied Arrival", "falloff now starts at 3m and maxes at 60% by 6m (was 2m / 40%)"],
          ["Symbiotic Resilience", "base 100 → 75, lost-health scaling 110% → 100% (595 → 525 at 300 HP)"]
        ], tu: [] }
    ]},
    { role: "Duelist", entries: [
      { h: "Black Cat", k: "buff", note: "Fortune ceiling raised. The Panther team-up is a real win condition now.",
        lines: [
          ["Feline Fury", "max Fortune 50 → 75"]
        ], tu: [["Black Panther", "bonus health after Feline Alliance 25 → 50; Fortune per enemy hit 50 → 100, cap 100 → 200"]] },
      { h: "Black Widow", k: "buff", note: "Three separate nudges. Still a low pick-rate hero, but no longer a throw pick.",
        lines: [
          ["Electro-Plasma Blast", "50–70 → 55–75"]
        ], tu: [["Phoenix", "Electro-Plasma Blast 70 → 75"],
                 ["Hawkeye", "Allied Agents now grants bonus health equal to 50% of damage dealt in Focused state, cap 75"]] },
      { h: "Elsa Bloodstone", k: "nerf", note: "Falloff start halved. The 23.5% ban rate was about range, so this lands.",
        lines: [
          ["Double-Barrel Blaster", "falloff start 20m → 10m"]
        ], tu: [["Devil Dinosaur", "enhanced effect loses one charge; Smoky Snare cooldown 15s → 12s"]] },
      { h: "Human Torch", k: "buff", note: "Quality of life. Fixed spread instead of random.",
        lines: [
          ["Fire Cluster", "projectile spread is now fixed instead of random"]
        ], tu: [] },
      { h: "Phoenix", k: "nerf", note: "38.5% ban rate, now trimmed twice. Still the scariest pick in the lobby.",
        lines: [
          ["Spark", "detonation direct damage 45 → 40, area 20 → 15"],
          ["Endsong Inferno", "shockwave applies 1 Spark stack instead of 2"]
        ], tu: [] },
      { h: "Squirrel Girl", k: "rework", note: "40.7% win rate, the worst in the game. Barrier becomes a marking tool, plus a new attack speed button.",
        lines: [
          ["Burst Acorn", "110 → 95, max falloff at 3m 70% → 60%"],
          ["Squirrel Blockade", "speed 20–60 → 60–90 m/s, imprison 1.3s → 0.8s, damage 50 → 25, new Acorn Rain: 5m radius, 30/s for 2s, +20% slow"],
          ["Mammal Bond", "new: +100% attack speed for 5s, projectile 80 → 150 m/s, Burst Acorn at 65% damage while active, gravity removed"],
          ["Tail Bounce", "+25 bonus health"]
        ], tu: [] },
      { h: "Star-Lord", k: "buff", note: "Ult ammo and a faster team-up revive.",
        lines: [
          ["Galactic Legend", "Element Guns ammo 40 → 50"]
        ], tu: [["Human Torch", "Cosmic Soul cooldown 30s → 25s, resurrection 120s → 105s"]] },
      { h: "Winter Soldier", k: "nerf", note: "Range tax. Damage now drops sooner and bottoms out earlier.",
        lines: [
          ["Roterstern", "falloff maxes at 65% by 30m (was 70% at 40m)"],
          ["Spell field", "damage 45 → 40"]
        ], tu: [] },
      { h: "Wolverine", k: "nerf", note: "15s leap is a real commitment. Tank-shredding drops about 17%.",
        lines: [
          ["Feral Leap", "cooldown 12s → 15s"],
          ["Last Stand", "rage impact 0.3% → 0.2% max health per Rage (250 HP enemy 150 → 125, 700 HP 330 → 260)"]
        ], tu: [] }
    ]},
    { role: "Strategist", entries: [
      { h: "Adam Warlock", k: "mixed", note: "More bounces, less per bounce. Sustained healing up slightly, burst down hard.",
        lines: [
          ["Avatar Life Stream", "initial heal 95 → 55, bounces 2 → 4 (total 285 → 275)"]
        ], tu: [["Storm", "Soaring Surge speed 67% → 100%; Soul Bond ally damage boost 12% → 8%"]] },
      { h: "Cloak & Dagger", k: "mixed", note: "30.9% pick rate, the most-played support at Diamond+. Cooldown loop tightened, mobility buffed.",
        lines: [
          ["Dagger Storm", "cooldown 12s → 15s, self-heal 50/s → 35/s"],
          ["Darkforce Cloak", "80/s → 85/s"],
          ["Terror Cape", "blind 1.5s → 1s"],
          ["Veil of Lightforce / Terror Cape", "speed 20 → 35 m/s, each ally or enemy hit reduces Dagger Storm cooldown by 0.6s"]
        ], tu: [["The Hood", "Twilight and Void Veil now knock back enemies along the path"]] },
      { h: "Gambit", k: "nerf", note: "18% ban rate, now easier to punish. Spread widens, self-heal drops.",
        lines: [
          ["Kinetic Cards", "outer spread 2° → 3°, must be 3–5m closer for full value"],
          ["Healing Hearts", "self-heal 30/s → 20/s"]
        ], tu: [] },
      { h: "Invisible Woman", k: "nerf", note: "35.7% pick rate. Escape button is slower, vortex slow is thinner.",
        lines: [
          ["Veiled Step", "cooldown 6s → 8s"],
          ["Psionic Vortex", "centre slow 50% → 40%, edge 0% → 20%"]
        ], tu: [] },
      { h: "Jubilee", k: "mixed", note: "Healing boost removed, ult healing and rotation slightly up.",
        lines: [
          ["Sparkle Mark", "detonation loses the 20% ally healing boost"],
          ["Firework Finale", "heal 180/s → 190/s, outer plasmoid rotation 20 → 25 m/s"]
        ], tu: [["Blade", "Vampiric Kin lifesteal 30% → 40%"]] },
      { h: "Loki", k: "nerf", note: "18s deception is a long time to stand still.",
        lines: [
          ["Deception", "cooldown 15s → 18s"]
        ], tu: [["Hela", "a destroyed illusion grants 1s cooldown to Doppelganger and Devious Exchange"],
                 ["Mantis", "Regeneration Domain loses the ally damage boost"]] },
      { h: "Luna Snow", k: "nerf", note: "Freeze cut from 2.7s to 1.5s, the single biggest control change of the patch.",
        lines: [
          ["Absolute Zero", "freeze 2.7s → 1.5s"]
        ], tu: [["White Fox", "Spirit Fox loses Charm; ally heal 70 → 80, enemy damage 35 → 45"],
                 ["Adam Warlock", "Duality Dance self-heal conversion 25% → 35%"]] },
      { h: "Mantis", k: "mixed", note: "Sleep gutted, orb economy squeezed, but non-crit damage now pays out.",
        lines: [
          ["Life Energy Blast", "non-crit hits now grant 0.3 Life Orbs"],
          ["Spore Slumber", "sleep 3.5s → 1.5s"],
          ["Allied Inspiration", "Life Orb cost 1 → 2"],
          ["Nature's Favor", "self-heal 12.5/s → 8/s"]
        ], tu: [] },
      { h: "Rocket Raccoon", k: "mixed", note: "Heals trimmed, range extended, jetpack gains health. A repositioning hero now.",
        lines: [
          ["Repair Mode", "heal per ally pass 55 → 50, self-heal 30/s → 20/s"],
          ["Damage falloff", "now starts at 15m and maxes at 55% by 30m (was 10m / 40% at 20m)"],
          ["Jetpack Dash", "now grants 25 bonus health"]
        ], tu: [] },
      { h: "Ultron", k: "nerf", note: "Firewall gives half the speed and a much thinner buffer.",
        lines: [
          ["Imperative: Firewall", "ally bonus health 40 → 25, ally movement speed 20% → 10%"]
        ], tu: [] },
      { h: "White Fox", k: "mixed", note: "Sanctuary halved and invincibility removed, but the fox form lasts up to 12s now.",
        lines: [
          ["Spirit Sanctuary", "shield 200 → 100"],
          ["Spectral Surge", "loses ally invincibility, charm radius 0.6m → 0.4m"],
          ["Fox Form Awakening", "base 7s → 8s, per-tail bonus 1s → 2s (max 9s → 12s)"],
          ["Fox Form", "Claw Strike 35 → 40, Predatory Pounce 6s → 4s"],
          ["Kumiho Unleashed", "can now be healed by allies, health 1200 → 1000"]
        ], tu: [] }
    ]}
  ]
};

/* Mid-season fix pass, version 20261119 (19 Nov 2026, no downtime).
   Source: official patch notes, https://www.marvelrivals.com/20261118/41525_1319867.html
   Hero fixes only — no balance numbers in this one. */
var S11_PATCH2 = {
  id: "11.0b",
  version: "20261119",
  label: "Mid-season \u00b7 19 Nov",
  season: "S11",
  name: "Doomsday",
  date: "19 Nov 2026",
  title: "Anniversary fix pass",
  lede: "The anniversary update carried no balance numbers, but three hero fixes matter: one new Nightcrawler setting, one Black Cat bug that was costing steals, and one Mantis orb-economy correction.",
  roles: [
    { role: "Vanguard", entries: [] },
    { role: "Duelist", entries: [
      { h: "Black Cat", k: "buff", note: "Bugfix. Turn of Fortune occasionally failed to steal Fortune at all, which is her whole kit.",
        lines: [
          ["Turn of Fortune", "fixed: no longer occasionally fails to steal Fortune"]
        ], tu: [] }
    ]},
    { role: "Strategist", entries: [
      { h: "Nightcrawler", k: "buff", note: "Quality of life. Tandem Teleport can now auto-accept, so the grab no longer dies to a missed confirmation click.",
        lines: [
          ["Tandem Teleport", "new \u201cAutomatically Accept Invites\u201d setting: teleport invites are accepted without manual confirmation"]
        ], tu: [] },
      { h: "Mantis", k: "mixed", note: "Correction. Hitting barriers and summons no longer mints Life Orbs, so orb income drops a little against shield-heavy teams.",
        lines: [
          ["Life Energy Blast", "fixed: no longer grants Life Orbs when hitting barriers or summons"]
        ], tu: [] }
    ]}
  ]
};

/* New to the roster in 11.0. He now has a live two-week competitive sample,
   so the dossier shows real numbers (see s11-stats.js). */
var S11_NEW = {
  h: "Nightcrawler", role: "Strategist",
  tagline: "Teleport support with a duelist's engage.",
  text: "Three-round brimstone bombs heal allies and damage enemies; alt fire is a three-sword melee flurry. Swift Intervention teleports him to an ally with an instant heal, the shared teleport pulls an ally to his position on confirm, and the spin-teleport engage dashes in twice before bamfing back to the start. His ult moves allies to a target location and then yanks every enemy in the area onto him.",
  note: "The most mechanically demanding support in the game. Rewards map knowledge and a mic; punishes panic."
};

/* Archive. One card per season from 11.0 forward; 10.5 is the baseline
   snapshot the Season 10.5 boards were built from. */
var PATCH_ARCHIVE = [
  { id: "10.5", version: "20261009", season: "S10.5", name: "Godbomb", date: "9 Oct 2026",
    lede: "The season 11.0 replaced. No balance digest was archived for this build, so the record is the final stat sample the boards were priced on.",
    bans: [["Devil Dinosaur", 44.67], ["Phoenix", 38.52], ["Peni Parker", 29.90], ["Elsa Bloodstone", 23.45]],
    picks: [["Invisible Woman", 35.68], ["Doctor Strange", 35.02], ["Cloak & Dagger", 30.97]],
    counts: { buff: 0, nerf: 0, mixed: 0, rework: 0, new: 0 }, roles: [] }
];

/* Pick or ban calls for 11.0, recomputed from the live Season 11 sample
   (RivalsTracker WR/PR + marvelrivals.gg ban rates, 23 Nov 2026). */
var BROKEN = {
  "Devil Dinosaur": { tag: "ban", why: "73% ban rate and a 56.1% win rate. The 11.0 nerfs did not land hard enough." },
  "Gambit":         { tag: "ban", why: "64% ban rate. Kinetic Cards spread widened, the healing cut is what stings." },
  "Elsa Bloodstone":{ tag: "ban", why: "64% ban rate. The falloff nerf trimmed her range, not her ban rate." },
  "Daredevil":      { tag: "ban", why: "42% ban rate on a 55.3% win rate. The quiet S-tier duelist." },
  "Phoenix":        { tag: "ban", why: "53% ban rate. Spark nerfed twice and she still bans herself." },
  "Emma Frost":     { tag: "ban", why: "45% ban rate. Aegis nerf did not touch the spear conversion." },
  "Peni Parker":    { tag: "ban", why: "30% ban rate on a 64.8% win rate. Mines slower, zone still unbeatable." },
  "Psylocke":       { tag: "ban", why: "28% ban rate at a 54.0% win rate. The flank nobody wants to guess at." },
  "Rocket Raccoon": { tag: "pick", why: "13.0% pick rate and a 56.0% win rate. Beacon plus falloff buff is a full rotation." },
  "Mantis":         { tag: "pick", why: "59.7% win rate, best in the game, at 7.7% pick rate. Underdrafted." },
  "Magik":          { tag: "pick", why: "57.2% win rate and untouched by both patches. Free wins if she is open." },
  "Doctor Strange": { tag: "pick", why: "32.1% pick rate. Loses 50 shield and keeps the best space tool in the game." },
  "Invisible Woman":{ tag: "pick", why: "29.8% pick rate. Slower escape, still the strongest defensive support." }
};

/* Nightcrawler has no legacy HEROES entry, so the profile content ships here
   and is merged into HEROES at boot. No win/pick/ban sample exists yet. */
var S11_HERO_ADD = {
  "Nightcrawler": {
    r: "Strategist",
    t: ["Dive support","Teleport","High skill"],
    c: [
      "Brimstone bombs (primary) heal allies and damage enemies; the three-sword flurry (alt fire) is your damage when nothing is in the air",
      "Swift Intervention has two charges: teleport to an ally, land the instant heal, then keep the recast for the escape instead of spending both going in",
      "The spin-teleport engage runs twice before it bamfs you back, so treat the third press as your exit rather than a third attack"
    ],
    s: [
      "The only support who can reposition an ally mid-fight",
      "Instant heal on arrival rewards targets you placed before the engage",
      "Once the engage is learned, the best escape in the role"
    ],
    w: [
      "No passive healing: every point of sustain is a cooldown",
      "Anti-mobility zones end the engage outright and strand you",
      "A mistimed bamf leaves the team with no support, so the floor is low"
    ],
    m: ["Hall of Djalia","Shin-Shibuya","Yggdrasill Path"],
    p: ["Magik","Rogue","Hela","Doctor Strange"],
    x: ["The Thing","Namor","Hela","Winter Soldier"]
  }
};
