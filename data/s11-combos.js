/* Season 11 combo patterns.
   d = difficulty: 1 Entry · 2 Core · 3 Advanced · 4 Expert
   Ordered easiest -> hardest, always. */
var COMBO_LVL = ["Entry", "Core", "Advanced", "Expert"];
var COMBOS = {
"Angela": [
  { n: "Spear opener", d: 1, steps: ["Wingblade Ascent", "Charged Spear of Ichors", "Assassins Charge"], use: "Standard engage from high ground: take the angle, land the charged spear, close the gap before they can turn.", cost: "Wingblade Ascent is your only vertical reset, so you cannot leave the way you came." },
  { n: "Domain bruising", d: 2, steps: ["Divine Judgement", "Axes of Ichors", "Axes of Ichors"], use: "Ult first, then fight inside the domain where the axe swings build Bonus Health while the burn ticks.", cost: "Needs the ult. Never open with Divine Judgement if their support ult is still up." },
  { n: "Dual-axe grind", d: 3, steps: ["Wingblade Ascent", "Axes of Ichors", "Second Axes cast", "Spear of Ichors to reset spacing"], use: "Post-11.0 the dual-axe line stacks Bonus Health per hit, so you win long trades against other vanguards instead of short bursts.", cost: "You are standing still through two axe casts. Bait the stun before committing." },
  { n: "Judgement escape", d: 4, steps: ["Divine Judgement", "Axes of Ichors inside the zone", "Wingblade Ascent out at the 6s mark"], use: "Use the persisting buffs after leaving the domain as the actual win condition: fight in it, then keep the damage and health while you reposition.", cost: "The 11.0 buff is cancelled the moment you use Wingblade Ascent, so the timing is everything." }
],
"Bruce Banner": [
  { n: "Banner poke", d: 1, steps: ["Gamma pistol shots", "Radioactive Lockdown", "Heavy Blow"], use: "Stay small, chip from range, and lock down whoever walks into your line before swapping to Hulk.", cost: "Small Banner dies fast. Do not hold this form to prove a point." },
  { n: "Leap engage", d: 2, steps: ["Incredible Leap", "Radioactive Lockdown", "Heavy Blow beside target"], use: "Jump the backline, stun on landing, then swing from the side the stun is not covering.", cost: "One cooldown in, no cooldown out. Leap only when your supports can see you." },
  { n: "Guard trade", d: 3, steps: ["Indestructible Guard", "Gamma Burst", "Hulk Smash"], use: "Frontline trade pattern: absorb the burst with Guard, then punish the reload window with Gamma Burst into Smash.", cost: "Guard up means no damage. Watch for the flank while you are a wall." },
  { n: "Two-form fight", d: 4, steps: ["Hulk form engage", "Guard the burst", "Die down to Banner deliberately", "Radioactive Lockdown from range"], use: "Trade Hulk health for tempo, then re-enter as Banner to re-stun the same target instead of leaving the fight.", cost: "Resets your whole kit and your ult charge. Only in a fight you are already winning." }
],
"Captain America": [
  { n: "Shield pressure", d: 1, steps: ["Sentinel Strike", "Sentinel Strike", "Energy Saw"], use: "Chip from mid-range while your Energy Saw keeps the ground behind you covered.", cost: "No mobility spent, but no kill pressure either. Pure tempo." },
  { n: "Dive line", d: 2, steps: ["Leading Dash", "Fearless Leap", "Super-Soldier Slam"], use: "The bread-and-butter engage: dash the flat, leap the wall, slam the group so your duelists get a free second.", cost: "All three cooldowns gone. Slam only if someone follows." },
  { n: "Rush and hold", d: 3, steps: ["Liberty Rush", "Sentinel Strike", "Energy Saw", "Fearless Leap out"], use: "Push the angle, hold it with shield pressure, then leap back through your own team instead of walking.", cost: "Leap out is the escape. Do not spend it to re-engage." },
  { n: "Slam into ult", d: 4, steps: ["Leading Dash", "Super-Soldier Slam", "Ult on the stacked group", "Sentinel Strike through the survivors"], use: "Stack the slam stun into the ult so the enemy cannot walk out of it, then clean up with shield throws.", cost: "If the slam misses, the ult is wasted. One whiff, whole fight." }
],
"Deadpool (Vanguard)": [
  { n: "Shield first", d: 1, steps: ["Unicorn Shield up", "Pistols down", "Ban Hammer to finish"], use: "The safe default: block while you walk in, shoot while you close, hammer whatever is left.", cost: "Pistol damage is low. This is a lane-holding line, not a pick line." },
  { n: "Hop in, hijinks out", d: 2, steps: ["Bunny Hop in", "Ban Hammer", "Hazardous Hijinks out"], use: "In and out in under three seconds. Post-11.0 you keep more of your own health, so you can take the trade and leave.", cost: "Big Test no longer gives allies Bonus Health, so nobody is saved by your ult." },
  { n: "Ult trade", d: 3, steps: ["The Big Test", "Ban Hammer", "Unicorn Shield", "Bunny Hop to reset"], use: "Ult to convert your own health into damage, then shield the return fire while the rest of the team pushes through you.", cost: "The 400 self Bonus Health is all you get. No ally shields, no second life." },
  { n: "Upgraded line", d: 4, steps: ["The Big Test - Upgraded", "Ban Hammer chain", "Hazardous Hijinks cancel on whiff"], use: "The upgraded ult is now a pure self-buff with a 1.5 damage-to-health ratio: play it as a duelist, not a tank.", cost: "Loses the old ally Bonus Health entirely. Your team gets nothing from this ult." }
],
"Devil Dinosaur": [
  { n: "Bite and feed", d: 1, steps: ["Primal Bite", "Frenzied Feast"], use: "Sustain loop on a single target: bite, eat, walk out at half health instead of dying.", cost: "Both are melee. Ranged heroes are the actual problem." },
  { n: "Beam into control", d: 2, steps: ["Impact Beam", "Savage Predation", "Frenzied Feast"], use: "Beam to soften, predation to control, feast to heal through the response. The 11.0 numbers are shorter, so the chain is tighter.", cost: "Control is 0.6s now and the launch is 1.2s. Do not rely on it to set up someone else's ult." },
  { n: "Barrier save", d: 3, steps: ["Buddy Barrier", "Impact Beam", "Savage Predation out"], use: "Barrier is a 400 shield for 4s now: use it to eat the enemy engage, not as a full-team defensive ult.", cost: "Lost the 15% Slow and two seconds of uptime. It is a personal shield with a team-shaped hole." },
  { n: "Punishment timing", d: 4, steps: ["Buddy Barrier", "Primal Punishment", "Apex Advantage bleed", "Savage Predation to hold them in it"], use: "Punisher team-up is now an 18s cooldown, so it has to land on a grouped fight: hold them with predation while the bleed does the work.", cost: "Bleed conversion dropped to 125%. Missing the predation means losing both cooldowns for nothing." }
],
"Doctor Strange": [
  { n: "Dagger build", d: 1, steps: ["Daggers of Denak", "Maelstrom of Madness"], use: "Standard ranged pressure: build Dark Magic with daggers, dump it with Maelstrom when someone steps inside.", cost: "Dark Magic caps. Sitting on it does nothing." },
  { n: "Shield and burst", d: 2, steps: ["Shield of the Seraphim", "Eye of Agamotto", "Bursted Daggers on separated souls"], use: "Hold the shield through their engage, then ult the stack and burst the souls that get pulled out.", cost: "Shield is 800 with 50/s recovery now. It breaks faster than you remember." },
  { n: "Portal flank", d: 3, steps: ["Pentagram of Farallah", "Daggers of Denak", "Maelstrom of Madness", "Cloak of Levitation out"], use: "Rotate the whole team behind them, then play the normal dagger line from the angle they are not facing.", cost: "Portal is slow, loud, and tells everyone where you are going." },
  { n: "Soul pick", d: 4, steps: ["Eye of Agamotto", "Shield of the Seraphim to block the peel", "Maelstrom of Madness", "Daggers on the retreating soul"], use: "The full ult pick: ult one target, shield the retaliation, and finish the soul before the stun ends.", cost: "Everything at once, and you cannot escape with Cloak while shielding." }
],
"Emma Frost": [
  { n: "Spear poke", d: 1, steps: ["Psychic Spear", "Telepathic Pulse"], use: "Ranged chip while you look for a wall to kick someone into.", cost: "Sentience damage is flat now, so old max-health scaling kills are gone." },
  { n: "Wall kick", d: 2, steps: ["Diamond Form", "Crystal Kick into wall", "Carbon Crush"], use: "The real Emma combo: harden, kick them into geometry for the stun, crush while they are stuck.", cost: "Crystal Kick needs a wall. Open ground gives you nothing but a dash." },
  { n: "Aegis hold", d: 3, steps: ["Mind's Aegis", "Diamond Form", "Psychic Spear on the approach", "Telepathic Pulse on the peel"], use: "Hold the frontline with a 350 shield, then punish the dive that commits to you instead of your backline.", cost: "350 shield at 65/s recovers slower. You cannot chain-hold like before 11.0." },
  { n: "Form bait", d: 4, steps: ["Diamond Form to bait cooldowns", "Drop form on the reload", "Crystal Kick", "Carbon Crush", "Mind's Aegis to leave"], use: "Bait their burst while hard, then hit them in the window where they have nothing and you have everything.", cost: "Dropping form mid-fight is a roll of the dice. Only against predictable burn." }
],
"Groot": [
  { n: "Wall and brawl", d: 1, steps: ["Ironwood Wall", "Basic attacks beside the wall"], use: "Plant a wall and fight next to it: Flora Colossus pays you Bonus Health for standing in the brawl.", cost: "Wall health is 550 now. It dies fast under focus." },
  { n: "Thornlash trap", d: 2, steps: ["Thornlash Wall", "Strangling Prison", "Spore Bomb the trapped"], use: "Split the enemy with the thorn wall, prison whoever gets caught on the wrong side, bomb the group.", cost: "Prison is the only setup you have. Missing it wastes the wall." },
  { n: "Wall surgery", d: 3, steps: ["Ironwood Wall behind them", "Strangling Prison", "Thornlash Wall between them and their support", "Spore Bomb"], use: "Two walls, two purposes: one blocks the retreat, one blocks the healing. The prison lands in the box you just made.", cost: "You have spent every cooldown and you are standing in the open mid-box." },
  { n: "Mantis wall", d: 4, steps: ["Wild Wall", "Thornlash Wall", "Strangling Prison", "Spore Bomb"], use: "The Mantis team-up now makes Wild Wall trigger Flora Colossus too, so the team-up wall is a real damage source, not just utility.", cost: "Requires Mantis on your team. Without her, this line is just a normal double wall." }
],
"Magneto": [
  { n: "Curtain poke", d: 1, steps: ["Metallic Curtain", "Iron Volley"], use: "Shield the poke, return the poke. The default ranged vanguard line.", cost: "Curtain is directional. Flankers do not care about it." },
  { n: "Cannon trade", d: 2, steps: ["Bulwark an ally", "Absorb fire", "Release charged Mag-Cannon"], use: "Shield the diver, eat their burst, and fire the charged cannon back into the fight they just committed to.", cost: "The cannon is your only real damage spike. Whiff it and you are a body." },
  { n: "Volley into meteor", d: 3, steps: ["Metallic Curtain", "Iron Volley on the grouped push", "Meteor M"], use: "Curtain to hold the choke, volley to stack them, meteor on the stack.", cost: "Meteor is slow and telegraphed. Anyone with a movement cooldown walks out." },
  { n: "Bodyguard line", d: 4, steps: ["Bulwark the support", "Metallic Curtain over their retreat", "Iron Volley", "Meteor M to re-engage"], use: "Play as a support bodyguard: bulwark the healer under dive, curtain the exit, then meteor the dive as they leave.", cost: "You give up all frontline pressure. Only correct against a committed dive comp." }
],
"Peni Parker": [
  { n: "Nest hold", d: 1, steps: ["Spider-Nest", "Arachno-Mines around it", "Cyber-Web Snare the dive"], use: "Set the nest, ring it with mines, snare whatever comes in. The whole hero in three buttons.", cost: "You are immobile. If they walk past the nest, you have nothing." },
  { n: "Web cluster chip", d: 2, steps: ["Cyber-Web Cluster", "Arachno-Mines on their path", "Snare to hold them in the mines"], use: "Push mines forward, snare the target over them, let the cluster finish. Explosion damage is 12 now, so placement matters more than spam.", cost: "Mine delay is 0.7s. Fast heroes walk out before they pop." },
  { n: "Bond aggression", d: 3, steps: ["Cyber-Bond in", "Cyber-Web Snare", "Retract to nest"], use: "Leave the nest on purpose to bait the dive, snare them, then pull back to the mines you already set.", cost: "The retract is the only way home. Lose the nest and you are a slow body in the open." },
  { n: "Mine wall", d: 4, steps: ["Spider-Nest forward", "Arachno-Mines across the choke", "Cyber-Web Snare on the tank", "Cyber-Bond over the top"], use: "Turn a choke into a no-go zone, then use Bond to take the high ground nobody expects a Peni to hold.", cost: "Expensive setup that dies to one ranged clear. Only on defence." }
],
"Rogue": [
  { n: "Stance brawl", d: 1, steps: ["Defensive Stance", "Southern Brawl"], use: "Absorb, then punch. The stance is your only defence, so it always comes first.", cost: "Absorption radius is 1.2m now. You have to be almost touching them." },
  { n: "Pull and punch", d: 2, steps: ["Fatal Attraction", "Chrono Kick", "Power Surge Punch"], use: "Yank them out of position, stun the landing, finish with the surge. First two surge hits are 40 now.", cost: "Fatal Attraction is the whole combo. Miss it and you are walking at them." },
  { n: "Kinetic detonation", d: 3, steps: ["Defensive Stance", "Absorb damage", "Southern Brawl into the stack", "Mr. & Mrs. X detonation"], use: "The Gambit team-up is a 15s cooldown now, so you can use it every fight: absorb, then detonate the kinetic charge on a grouped push.", cost: "Per-hit explosion is 3+1% max health and the ally heal dropped to 10. It is a damage tool now, not a support one." },
  { n: "Stance weave", d: 4, steps: ["Power Surge Punch in", "Defensive Stance for the burst", "Chrono Kick the peel", "Power Surge Punch out"], use: "Alternate offence and stance so you are never hard when they are reloading and never soft when they are bursting.", cost: "Stance swap has a window. Good players hit you inside it." }
],
"The Thing": [
  { n: "Blitz and jab", d: 1, steps: ["Battle Blitz", "Stone Haymaker", "Rocky Jab"], use: "Close the gap, heavy, light. The straightforward frontline trade.", cost: "Battle Blitz is linear. Roots and walls stop it clean." },
  { n: "Charge and clobber", d: 2, steps: ["Yancy Street Charge", "Clobberin Time"], use: "Charge through the choke to split them, then clobber the group you just scattered.", cost: "Clobberin Time is your ult. Charging into a support ult is a wasted season." },
  { n: "Wall slam", d: 3, steps: ["Battle Blitz", "Yancy Street Charge into a wall", "Stone Haymaker on the rebound"], use: "Charge into geometry instead of open ground: the wall stops you and the stun leaves them in your face.", cost: "Needs the map to cooperate. Bad angles make this a self-stun." },
  { n: "Anti-mobility body", d: 4, steps: ["Yancy Street Charge at the flying lane", "Battle Blitz", "Rocky Jab", "Clobberin Time when they group"], use: "Play the anti-mobility role: park in the lane that flying and dashing heroes want, and charge the moment they commit.", cost: "You abandon the frontline. Only in a comp that already has a second body." }
],
"Thor": [
  { n: "Bash and throw", d: 1, steps: ["Mjolnir Bash", "Hammer Throw"], use: "Build Thorforce in melee, throw the hammer at range while you reposition.", cost: "Bash is short range. Throwing without Thorforce is chip." },
  { n: "Surge engage", d: 2, steps: ["Storm Surge", "Mjolnir Bash", "Hammer Throw"], use: "Fly the gap, land on the backline, hold them with bash while the throw finishes the escape.", cost: "Storm Surge is your only engage. Land it or walk." },
  { n: "Realm sustain", d: 3, steps: ["Lightning Realm", "Mjolnir Bash", "Hammer Throw", "Awakening Rune"], use: "Realm first to refill Thorforce, then spend it all in one burst instead of trickling.", cost: "Realm is a sitting target marker. Everyone knows where the fight is now." },
  { n: "Rune timing", d: 4, steps: ["Storm Surge", "Mjolnir Bash to charge", "Awakening Rune as the stun lands", "Hammer Throw the retreat"], use: "Confirm the stun before the rune: the ult is wasted on a target who can walk away from it.", cost: "Rune lock-in means you cannot chase. Wrong target, dead Thor." }
],
"Venom": [
  { n: "Swing dive", d: 1, steps: ["Venom Swing", "Frenzied Arrival", "Cellular Corrosion"], use: "Swing in, land on them, corrosion the stack. Falloff now starts at 3m, so land close to get full damage.", cost: "Swing is the only way in and out. Burning it on a whiff is a death sentence." },
  { n: "Predation pick", d: 2, steps: ["Venom Swing", "Dark Predation", "Cellular Corrosion", "Swing out"], use: "Grab the support, corrosion them, and leave before the peel arrives. Detection radius went up, so the grab is more forgiving.", cost: "Predation is the pick. If you miss, you are a tank with no abilities in their backline." },
  { n: "Low-health reset", d: 3, steps: ["Frenzied Arrival", "Take the trade", "Symbiotic Resilience at 40%", "Dark Predation out"], use: "Deliberately fight low: the resilience shield is 75 base plus 100% of lost health, so it is biggest exactly when you look dead.", cost: "525 at 300 HP now, down from 595. You cannot absorb the same burst as before 11.0." },
  { n: "Double dip", d: 4, steps: ["Swing in", "Dark Predation", "Corrosion", "Resilience", "Swing out", "Re-swing on their cooldowns"], use: "Two entries on one target: bait the peel with the first dive, then come back when their stun is spent.", cost: "The whole line is 25 seconds of setup for one kill. Only in an organised dive." }
],
"Black Cat": [
  { n: "Hook poke", d: 1, steps: ["Turn of Fortune hook", "Fortunes Favor", "Feline Fury"], use: "Hook to close, spend Fortune favor on the swing, dump the fury. The default pick line.", cost: "If the hook misses you are a melee hero with no Fortune banked." },
  { n: "Fortune cycle", d: 2, steps: ["Feline Fury", "Fortunes Favor", "Feline Fury again"], use: "Post-11.0 you hold 75 Fortune instead of 50, so you can bank a full fury, refill, and fire a second one in the same fight.", cost: "Banking means not spending. Holding 75 while you die is the common mistake." },
  { n: "Cats Cradle flank", d: 3, steps: ["Climb or double jump", "Cats Cradle through", "Hook", "Feline Fury out"], use: "Vertical entry that skips the choke entirely: cradle across the sightline, hook the support, fury, leave.", cost: "No escape once the hook is spent. Only from an angle your team is already holding." },
  { n: "Feline Alliance", d: 4, steps: ["Black Panther Feline Alliance", "Hook", "Feline Fury with 200 Fortune cap", "Fortunes Favor"], use: "The Panther team-up now gives 50 Bonus Health and 100 Fortune per enemy hit, capped at 200: hit a grouped pair and the fury never stops.", cost: "Requires Black Panther, and the health only lands if the alliance hits before their burst." }
],
"Black Panther": [
  { n: "Spear into rend", d: 1, steps: ["Spear Toss", "Spirit Rend", "Spinning Kick", "Spirit Rend"], use: "Mark with the spear, rend, kick to re-mark, rend again. Two rends off one spear.", cost: "Pure single-target. Walking in without the spear mark is a wasted dive." },
  { n: "Kick opener", d: 2, steps: ["Spinning Kick in", "Spirit Rend", "Basts Descent", "Spirit Rend"], use: "Start from the kick instead of the spear when they are already looking at you.", cost: "Kick has no range. You are visible from the moment you commit." },
  { n: "Wall run reset", d: 3, steps: ["Wall run overhead", "Spear Toss down", "Spirit Rend", "Double jump", "Spirit Rend"], use: "Use the vertical to re-mark without spending a cooldown, then rend from a different angle than you entered.", cost: "The wall is your escape. Spending it on re-entry leaves you standing in their backline." },
  { n: "Double dive", d: 4, steps: ["Spear Toss", "Spirit Rend", "Leave", "Return on their cooldowns", "Kick", "Rend"], use: "Never take the second rend in the same window: leave, let them break formation, then come back for the actual kill.", cost: "Long setup. Their support will have healed the first chunk by the time you return." }
],
"Black Widow": [
  { n: "Slow into shot", d: 1, steps: ["Electro-Plasma", "Assassins Focus", "Charged rifle shot"], use: "Slow them, charge, shoot the head. Post-11.0 the plasma blast is 55-75, so the chip alone is real damage.", cost: "Charging in the open. Anyone with a dash closes on you while you hold the shot." },
  { n: "Edge Dancer", d: 2, steps: ["Edge Dancer launch", "Grapple kick", "Fleet Foot out"], use: "Melee pressure when someone dives you: launch over them, kick on the way down, run on the landing.", cost: "It is an escape that looks like an engage. Do not chase with it." },
  { n: "Focused reposition", d: 3, steps: ["Assassins Focus", "Fleet Foot to a new angle", "Shot on the re-peek"], use: "Hold focus, move with Fleet Foot, and fire the moment the angle opens instead of standing still to charge.", cost: "Fleet Foot cancels the charge window. Timing the release is the whole skill." },
  { n: "Allied Agents", d: 4, steps: ["Hawkeye Allied Agents", "Assassins Focus", "Shot", "Bonus Health from the hit"], use: "The Hawkeye team-up now converts 50% of your focused damage into Bonus Health, capped at 75, so you can hold the same angle through return fire.", cost: "You have to be in focus for the whole exchange. Outside it, no health, no shield." }
],
"Blade": [
  { n: "Dash and slash", d: 1, steps: ["Daywalker Dash", "Sword swings", "Bloodline Awakening"], use: "The straightforward melee open: dash the gap, swing, awaken when they start to run.", cost: "Dash is your engage and your only gap closer. Missing it means walking." },
  { n: "Shotgun into shroud", d: 2, steps: ["Shotgun pressure", "Scarlet Shroud parry", "Dash as it returns"], use: "Trade at range, parry their answer, and dash out on the return animation so you never stand still.", cost: "Parry is timing-only. Whiff and you take the full burst." },
  { n: "Awakening trade", d: 3, steps: ["Daywalker Dash in", "Bloodline Awakening", "Swings through the stun", "Scarlet Shroud the peel"], use: "Awaken before the stun lands so the damage keeps going while you are controlled.", cost: "You cannot shroud and swing at once. Choose the parry only when someone is actually peeling." },
  { n: "Shroud cancel", d: 4, steps: ["Dash in", "Swing once", "Scarlet Shroud on their burst", "Swing through the end", "Dash out"], use: "Use the shroud as a mid-fight button rather than an escape: eat the burst, keep the swing chain alive.", cost: "The shroud window is short. Late by a beat and you eat everything." }
],
"Cyclops": [
  { n: "Blast pressure", d: 1, steps: ["Optic Blast", "Optic Blast", "Ricochet Force"], use: "Hits refresh Ricochet Force, so keep firing and let the bounces do the work around corners.", cost: "Ricochet needs terrain. Open lanes give you a worse rifle." },
  { n: "Burst and separate", d: 2, steps: ["Propulsion Burst", "Optic Blast on the separated target"], use: "Burst shoves them out of the formation and slows, which is the free shot.", cost: "Propulsion Burst moves you too. It is not a pure offensive tool." },
  { n: "Corner carom", d: 3, steps: ["Pre-aim the wall", "Optic Blast", "Ricochet Force off the angle", "Propulsion Burst on the exit"], use: "Play the geometry: blast into the wall so the ricochet hits the support standing behind cover.", cost: "Angles are map-specific. This is a study-the-map line, not a reaction." },
  { n: "Phoenix link", d: 4, steps: ["Phoenix team-up", "Propulsion Burst", "Optic Blast chain on the grouped pair"], use: "With Phoenix the blasts hit harder on grouped targets, so burst them together rather than separating them.", cost: "Contradicts your normal separation instinct. Only with Phoenix and only on a stack." }
],
"Daredevil": [
  { n: "Latch and cross", d: 1, steps: ["Devils Latch", "Righteous Cross", "Fury Devils Chain"], use: "Latch to close, cross to stagger, chain to finish. The basic melee loop.", cost: "Latch is the only approach. It is slow and telegraphed." },
  { n: "Blind and jab", d: 2, steps: ["Sonic Pursuit blind", "Justice Jab", "Objection! the reply"], use: "Blind first so the jab lands free, then counter whatever they throw blind.", cost: "Objection! is a reaction window. Blind targets still swing." },
  { n: "Chain reset", d: 3, steps: ["Devils Latch", "Fury Devils Chain", "Sonic Pursuit", "Chain again"], use: "Chain, blind to reset the angle, chain again: two full chains off one approach.", cost: "Every cooldown spent. If the second chain misses, you are standing in front of a support with nothing." },
  { n: "Counter-duelist", d: 4, steps: ["Wait on their engage", "Objection! the burst", "Sonic Pursuit", "Latch", "Chain"], use: "Play him as a counter-pick: hold the counter, then convert their own commit into your full chain.", cost: "Passive until they engage. Against a poke comp you do nothing." }
],
"Deadpool (Duelist)": [
  { n: "Poke and stomp", d: 1, steps: ["Desert Eagles", "Bunny Hop stomp", "Slice and Dice"], use: "Chip from range, hop onto them, dice to finish. Standard mid-range line.", cost: "Hop is a commitment with no cancel. Land it or eat the punish." },
  { n: "Taunt into katana", d: 2, steps: ["Bunny Hop in", "Deadpool In Your Area taunt", "Katana pressure"], use: "Taunt to pull their attention, then katana the distracted target while they look at the taunt.", cost: "The taunt is not a stun. It buys attention, not time." },
  { n: "Dice reset", d: 3, steps: ["Eagles poke", "Slice and Dice", "Hop back", "Eagles on the re-peek"], use: "Never take the dice in melee range: use it as the mid-range finisher, then reset to eagles.", cost: "Dice is your burst. Spending it at 20m does almost nothing." },
  { n: "Gambit pressure", d: 4, steps: ["Gambit team-up", "Deadpool In Your Area", "Slice and Dice", "Katana on the anti-heal"], use: "With Gambit the anti-heal sticks, so the dice kill happens after their support has already failed to heal.", cost: "Requires Gambit and a target who actually needs healing." }
],
"Elsa Bloodstone": [
  { n: "Rush and blast", d: 1, steps: ["Ruthless Pursuit launch", "Double-Barrel Blaster", "Empowered Monster-Piercer"], use: "Launch in, shotgun at close range, pierce to finish. Falloff now starts at 10m, so stay closer than you used to.", cost: "You are inside their range the whole time. 10m is a knife fight." },
  { n: "Snare into bullet", d: 2, steps: ["Smoky Snare", "Living Bullet mark", "Monster-Piercer"], use: "Snare to hold, mark, pierce. The 12s snare cooldown means this is available almost every fight.", cost: "Snare is the setup. Missing it means no mark and no pierce value." },
  { n: "Piercer chain", d: 3, steps: ["Living Bullet", "Piercer", "Ruthless Pursuit reset", "Piercer again"], use: "Mark, pierce, use the pursuit to re-mark, pierce again: two empowered piercers per engagement.", cost: "Pursuit was your escape. Using it to re-engage is all-in." },
  { n: "Devil team-up", d: 4, steps: ["Devil Dinosaur team-up", "Smoky Snare at 12s", "Enhanced Piercer", "Blaster through the snare"], use: "The team-up snare comes back faster, so you can chain two snares and hold the target through both piercers.", cost: "The 11.0 enhanced effect lost a charge. You get one big piercer, not two." }
],
"Gorr": [
  { n: "Berserker setup", d: 1, steps: ["Black Berserker out", "Necro-Power onto a target", "All-Black"], use: "Send the berserker, put Necro-Power on whoever it is hitting, then swing All-Black through them.", cost: "The berserker has to still be alive when you commit. It is not a fire-and-forget." },
  { n: "Shadow Harvest warp", d: 2, steps: ["Berserker placed", "Shadow Harvest warp in", "Scythe slashes"], use: "Warp to the berserker for the flank nobody is watching, then slash from behind.", cost: "Warp target must exist. Losing the berserker kills the whole angle." },
  { n: "Necro spread", d: 3, steps: ["Necro-Power", "Shadow Harvest across the stack", "All-Black", "Scythe through the retreat"], use: "Warp through a grouped team so the Necro-Power spreads across all of them before the scythe swing.", cost: "Warping into a group means eating every stun they have." },
  { n: "Venom link", d: 4, steps: ["Venom team-up", "Berserker", "Necro-Power", "Warp in behind the corrosion"], use: "With Venom the team-up damage lands first, so your warp arrives on targets already softened and looking the wrong way.", cost: "Needs Venom and a corrosive target. Pure win-more." }
],
"Hawkeye": [
  { n: "Focused shot", d: 1, steps: ["Hold aim for Archers Focus", "Piercing Arrow"], use: "Charge to full, release. The entire hero in two buttons.", cost: "You are stationary for the charge. Every dive knows exactly where you are." },
  { n: "Hypersonic setup", d: 2, steps: ["Hypersonic slow", "Piercing Arrow"], use: "Slow first so the charged shot lands on a moving target, and knock flyers out of the air with the same arrow.", cost: "Hypersonic is on a cooldown. Waste it and the next shot is a guess." },
  { n: "Angle hold", d: 3, steps: ["Reposition", "Archers Focus", "Shot", "Hypersonic the dive", "Focused shot on the landing"], use: "Play two angles: shoot from one, and have the hypersonic ready for the diver who comes to punish it.", cost: "Requires you to hit the diver. Miss and you cannot charge again in time." },
  { n: "Psylocke team-up", d: 4, steps: ["Psylocke team-up", "Archers Focus", "Piercing Arrow into the marked target", "Hypersonic reset"], use: "The team-up marks give you a second damage window, so the first full charge is a setup rather than the kill.", cost: "Depends entirely on Psylocke landing her mark before you release." }
],
"Hela": [
  { n: "Soul and thorn", d: 1, steps: ["Soul Drainer", "Nightsword Thorn headshot"], use: "Drain to line them up, thorn the head. The basic long-range pick.", cost: "Both are slow projectiles. Moving targets are the whole difficulty." },
  { n: "Piercing night", d: 2, steps: ["Piercing Night", "Nightsword Thorn on the trapped angle"], use: "Pierce through the choke so the thorn hits whoever is hiding behind the tank.", cost: "Requires a straight line through two bodies. Narrow corridors only." },
  { n: "Drain sustain", d: 3, steps: ["Soul Drainer on the tank", "Thorn the support", "Drainer again"], use: "Drain the tank for health while you shoot the support behind them: the heal is what keeps you on the angle.", cost: "Drain needs a body in front of you. Dive comps remove it." },
  { n: "Ult reposition", d: 4, steps: ["Ult to take the sky", "Soul Drainer from above", "Thorn on the exposed backline"], use: "The ult is a position change first and damage second: use it to get an angle no one can contest, then play the normal line from there.", cost: "Everyone can see you in the air. You are the easiest target in the fight." }
],
"Human Torch": [
  { n: "Field first", d: 1, steps: ["Blazing Blast", "Blazing Blast", "Pyro-Prison wall"], use: "Two fields on the point, wall the choke, let them walk into both.", cost: "Fields are static. Mobile comps just leave." },
  { n: "Meteor detonation", d: 2, steps: ["Blazing Blast down", "Flaming Meteor detonation", "Plasma Body up"], use: "Detonate your own field for the burst, then body up before the return fire. Post-11.0 the cluster spread is fixed, so your field is where you aimed it.", cost: "Detonating early wastes the field. Body-up is your only defence." },
  { n: "Wall then meteor", d: 3, steps: ["Pyro-Prison behind them", "Blazing Blast in front", "Flaming Meteor", "Plasma Body"], use: "Wall the retreat, field the front, then meteor a team that has nowhere to step.", cost: "Three cooldowns and no escape. You are committed to the point." },
  { n: "Storm link", d: 4, steps: ["Storm team-up", "Pyro-Prison", "Blazing Blast", "Meteor through the buff"], use: "With Storm the fields burn harder, so the wall becomes a kill zone rather than a delay.", cost: "Needs Storm and a team that actually holds the choke." }
],
"Iron Fist": [
  { n: "Kick into jeet", d: 1, steps: ["Kun-Lun Kick", "Jeet Kune Do to the launcher", "Basic chain"], use: "Kick to stagger, jeet to launch, then the standard chain on the airborne target.", cost: "Launch is short. You have to be in their face before the kick." },
  { n: "Dragon defense", d: 2, steps: ["Dragons Defense", "Yat Jee Chung Kuen counter", "Chain"], use: "Absorb the first hit, counter into the chain. This is how you beat duelists who swing first.", cost: "Defense window is small and directional. Turning your back loses it." },
  { n: "Flank chain", d: 3, steps: ["Flank high", "Jeet Kune Do", "Kick", "Yat Jee", "Chain out"], use: "Open from behind with the launcher so the kick and counter both land on a target who never faced you.", cost: "No escape on the way out. It is a trade line." },
  { n: "Counter-punch", d: 4, steps: ["Bait their cooldown", "Dragons Defense", "Counter the burst", "Jeet", "Kick", "Chain"], use: "Bait the big cooldown, counter it, and convert the whole fight off their own mistake.", cost: "Requires you to know their kit. Against an unknown duelist this is a coin flip." }
],
"Iron Man": [
  { n: "Missile poke", d: 1, steps: ["Hyper-Velocity", "Micro-Missile Barrage", "Repulsor Blast"], use: "Hover, barrage, blast. The default air poke line.", cost: "You are a floating target with no cover. Hitscan eats you." },
  { n: "Overdrive beam", d: 2, steps: ["Armor Overdrive", "Tracking missiles", "Unibeam"], use: "Overdrive first so the missiles track, then the beam on a target who cannot dodge both.", cost: "Overdrive is loud and the beam roots your aim. One dive ends it." },
  { n: "Ground dip", d: 3, steps: ["Drop low", "Repulsor Blast", "Hyper-Velocity out", "Missiles on the re-peek"], use: "Come down to the deck so hitscan loses the angle, then climb back out and barrage.", cost: "Ground level is where every duelist wants you. Only for a beat." },
  { n: "Ult from height", d: 4, steps: ["Climb to max altitude", "Armor Overdrive", "Ult on the stack", "Hyper-Velocity out"], use: "The ult is a line, not an area: fire it down the length of the point from directly above where no one looks.", cost: "Any vertical hero or flyer cancels you mid-cast." }
],
"Magik": [
  { n: "Incursion opener", d: 1, steps: ["Umbral Incursion", "Soulsword", "Magik Slash"], use: "Dash in, sword, slash. The default three-button pick.", cost: "Incursion is the engage. Whiffing it leaves you in their backline with nothing." },
  { n: "Disc in, whirl", d: 2, steps: ["Stepping Discs in", "Eldritch Whirl", "Disc out"], use: "Disc gives you an exit: whirl the group, then leave through the second disc before the peel lands.", cost: "Disc placement is pre-planned. Panic discs go nowhere." },
  { n: "Soulsword reset", d: 3, steps: ["Umbral Incursion", "Soulsword", "Stepping Discs", "Magik Slash from the new angle", "Soulsword"], use: "Two sword windows on one target by using the disc to reset the angle mid-fight.", cost: "All cooldowns spent, no exit. This is the all-in line." },
  { n: "Demon rage", d: 4, steps: ["Disc in", "Eldritch Whirl", "Ult", "Soulsword through the transform", "Incursion out"], use: "Whirl to stack them, ult mid-fight so the transformation lands on a group that is already committed.", cost: "Ulting inside a fight means eating the burst during the transform. Timing is everything." }
],
"Mister Fantastic": [
  { n: "Grip and punch", d: 1, steps: ["Distended Grip pull", "Stretch Punch"], use: "Pull them into the punch. The whole hero at beginner level.", cost: "Grip is a pull, not a stun. They can still shoot on the way in." },
  { n: "Elongation trade", d: 2, steps: ["Flexible Elongation", "Stretch Punch", "Reflexive Rubber"], use: "Extend into the fight, punch, then rubber the return fire so the trade stays even.", cost: "Elongation leaves your body forward. Any stun catches the long frame." },
  { n: "Inflated commit", d: 3, steps: ["Flexible Elongation", "Stretch Punch", "Inflated", "Punch through the peel"], use: "Inflate only after they commit their cooldowns, then punch through a peel that cannot stop you.", cost: "Inflated is slow. Popping it first is a free target." },
  { n: "Grip the support", d: 4, steps: ["Elongation to the angle", "Grip the healer", "Stretch Punch", "Rubber out"], use: "Pull the support out of the formation rather than the tank in front of you: one grip changes the whole fight.", cost: "You give up the frontline entirely. Your team has to hold without you." }
],
"Moon Knight": [
  { n: "Ankh then dart", d: 1, steps: ["Ancient Ankh", "Crescent Dart ricochets"], use: "Place the ankh, then dart so the bounce hits every body near it.", cost: "Ankh placement is everything. A bad ankh makes the darts single-target." },
  { n: "Blade through cluster", d: 2, steps: ["Ankh into the cluster", "Moon Blade through them"], use: "Blade is the piercing shot: line it up with the ankh so it passes through the whole group.", cost: "Straight line required. Scattered teams take nothing." },
  { n: "Double ankh", d: 3, steps: ["Ankh one angle", "Ankh a second angle", "Darts between them", "Moon Blade on the pinch"], use: "Two ankhs make two bounce sources, so the darts hit the same target from both directions.", cost: "You are stationary placing both. Dive food." },
  { n: "Ult on the ankh", d: 4, steps: ["Ankh on the point", "Ult", "Darts into the bounce field"], use: "The ult and the ankh stack: drop the ankh first so the ult's bounces find bodies immediately.", cost: "Everyone hears the ult. If they leave the ankh, you have wasted both." }
],
"Namor": [
  { n: "Dominion and trident", d: 1, steps: ["Aquatic Dominion", "Trident hits to accelerate summons"], use: "Set the dominion, then hit things so the summons come up faster.", cost: "The dominion needs time. Playing it in an open lane wastes it." },
  { n: "Monstro focus", d: 2, steps: ["Monstro Spawn", "Wrath of the Seven Seas"], use: "Send the spawn at the support, wrath to focus it down while they deal with the body.", cost: "Spawn is killable. It does nothing alone." },
  { n: "Summon wall", d: 3, steps: ["Aquatic Dominion", "Monstro Spawn", "Trident chain", "Wrath on the retreat"], use: "Build three summons before engaging, then wrath the target who is already boxed in by bodies.", cost: "Long setup that dies to one area clear." },
  { n: "Luna link", d: 4, steps: ["Luna Snow team-up", "Dominion", "Spawn", "Wrath through the frozen target"], use: "The team-up lets you freeze, so wrath lands on a target who cannot walk out of the summons.", cost: "Requires Luna and her cooldown, not yours." }
],
"Phoenix": [
  { n: "Spark stack", d: 1, steps: ["Cosmic Flames", "Psionic Detonation"], use: "Apply the spark with flames, detonate it. Post-11.0 the detonation is 40 direct and 15 area, so the stack matters more than the button.", cost: "Detonating a single spark is a waste. You want two or three." },
  { n: "Illusion detonation", d: 2, steps: ["Illusion", "Cosmic Flames", "Psionic Detonation"], use: "Illusion first so the flames land from an angle they are not blocking, then detonate the stack.", cost: "Illusion dies fast. Late by a second and there is no stack." },
  { n: "Endsong chain", d: 3, steps: ["Cosmic Flames", "Endsong Inferno", "Detonation", "Flames again"], use: "The ult now applies one spark instead of two, so you have to land the flames yourself rather than relying on the shockwave.", cost: "You must be in range to apply sparks after the ult. It is no longer a ranged combo." },
  { n: "Rebirth trade", d: 4, steps: ["Commit low", "Die into rebirth", "Flames immediately", "Detonate on the regroup"], use: "Trade your first life on purpose: the rebirth is the engage, and their cooldowns are spent on the body you left behind.", cost: "Rebirth puts you back where you died. If they are still there, you die twice." }
],
"Psylocke": [
  { n: "Stealth opener", d: 1, steps: ["Psychic Stealth in", "Crossbow", "Psi-Blade Dash"], use: "Invisible entry, crossbow at close range, dash out. The standard pick.", cost: "Stealth is the only way in. Breaking it early ends the attempt." },
  { n: "Shuriken chip", d: 2, steps: ["Wing Shurikens", "Crossbow", "Recall for Bonus Health"], use: "Shurikens soften from range and the recall gives you health for the commit.", cost: "Chip before commit means they are looking at you when you dash." },
  { n: "Double dash", d: 3, steps: ["Stealth in", "Crossbow", "Psi-Blade Dash through", "Wing Shurikens", "Dash again"], use: "Use the dash as a pass-through rather than an exit, and the second dash as the escape once the shot lands.", cost: "You need two dash charges. Burning both means walking out in the open." },
  { n: "Mark hunter", d: 4, steps: ["Stealth", "Mark with shurikens", "Crossbow the marked target", "Dash the recoil"], use: "Marks change the crossbow damage enough that the kill does not need a full clip: mark, shoot, leave.", cost: "Slow setup in stealth, and any reveal cancels the whole plan." }
],
"Scarlet Witch": [
  { n: "Hex pressure", d: 1, steps: ["Scarlet Hex", "Chaos Control across marked enemies"], use: "Mark with hex, sweep with chaos. Simple, wide, forgiving.", cost: "Both are short range. You are always in their face." },
  { n: "Seal and burst", d: 2, steps: ["Dark Seal", "Chthonian Burst on the slowed target"], use: "Seal to slow, burst to punish. The reliable damage line.", cost: "Seal is the setup. Missing it leaves the burst as a worse basic attack." },
  { n: "Sweep angle", d: 3, steps: ["Flank high", "Scarlet Hex on the backline", "Chaos Control through the group", "Float out"], use: "Use the flight to take an angle nobody covers, then sweep the supports rather than the frontline.", cost: "Floating is slow and visible. Any hitscan tracks you easily." },
  { n: "Storm link", d: 4, steps: ["Storm team-up", "Dark Seal", "Hex", "Chaos Control on the stacked slow"], use: "With Storm the slow stacks with the seal, so chaos holds a group in place long enough to kill two.", cost: "Requires both ults of coordination from your team, not just yours." }
],
"Spider-Man": [
  { n: "Cluster combo", d: 1, steps: ["Web-Cluster", "Get Over Here", "Amazing Combo"], use: "The tutorial combo: web, pull, uppercut. Works at any rank as a starter.", cost: "Everyone has seen it. It is a setup, not a kill." },
  { n: "Full burst", d: 2, steps: ["Web-Cluster", "Spider-Power", "Amazing Combo", "Swing out"], use: "Add Spider-Power between the pull and the combo so the burst lands before the peel.", cost: "Swing out is the escape. Using it to re-engage is a death." },
  { n: "Swing cancel", d: 3, steps: ["Swing in", "Web-Cluster mid-air", "Get Over Here", "Combo", "Swing cancel out"], use: "Cancel the swing arc so you arrive from an angle their crosshair is not on, then run the full burst.", cost: "Cancel timing is tight. Bad cancel means landing in front of the tank." },
  { n: "Double pull", d: 4, steps: ["Cluster", "Pull", "Combo", "Leave", "Cluster", "Pull again on the cooldown"], use: "Two pulls on one target across two swings: the second lands while their stun is spent.", cost: "Twenty seconds of setup for one kill. Only in coordinated dive." }
],
"Squirrel Girl": [
  { n: "Blockade trap", d: 1, steps: ["Squirrel Blockade", "Burst Acorn on the trapped"], use: "Trap them, acorn them. Post-11.0 the blockade travels 60-90 m/s and imprisons for 0.8s, so it is a fast poke, not a wall.", cost: "Imprison is short and the acorn is 95 now. You need the direct hit." },
  { n: "Acorn rain", d: 2, steps: ["Burst Acorn into the group", "Acorn Rain on the landing"], use: "The new rain field drops 30/s for 2s plus a 20% slow, so the second acorn hits a team that cannot step out of it.", cost: "Rain is on the acorn's landing spot. Bad aim means a field in an empty lane." },
  { n: "Mammal Bond burst", d: 3, steps: ["Mammal Bond", "Burst Acorn at 150 m/s", "Blockade chain"], use: "Mammal Bond gives 100% attack speed for 5s with no gravity on the projectile, so this is the whole damage window.", cost: "Everything is committed to five seconds. Miss and you have no cooldowns and no damage." },
  { n: "Chain trap", d: 4, steps: ["Blockade", "Acorn", "Blockade again with the tail bounce", "Rain on the second landing"], use: "The tail bounce gives 25 Bonus Health and a re-entry: trap, punish, re-trap the same target before they can move.", cost: "Needs the bounce to land. The whole line is one missed input from nothing." }
],
"Star-Lord": [
  { n: "Gun pressure", d: 1, steps: ["Element Guns", "Stellar Shift reload"], use: "Fire, shift to reload, fire again. The core loop and most of your damage.", cost: "Shift is your dodge too. Using it only to reload wastes the dodge." },
  { n: "Propulsion flank", d: 2, steps: ["Rocket Propulsion", "Element Guns at the backline", "Stellar Shift out"], use: "Fly the angle, shoot the support, shift away before the peel turns.", cost: "Propulsion is loud and slow. Everyone sees the flank coming." },
  { n: "Barrage commit", d: 3, steps: ["Rocket Propulsion in", "Blaster Barrage", "Shift out", "Guns on the re-peek"], use: "Barrage is the burst: commit it at close range, then shift before the return fire.", cost: "Barrage roots you. Any stun during it is a death sentence." },
  { n: "Galactic Legend", d: 4, steps: ["Ult with 50 rounds", "Element Guns through the whole clip", "Shift reload mid-ult", "Finish the stragglers"], use: "The 11.0 buff gives 50 ammo in the ult instead of 40, which is a full extra second of fire on a team that cannot move.", cost: "The ult is a stationary beam: if they break line of sight you have spent it." }
],
"Storm": [
  { n: "Wind blade poke", d: 1, steps: ["Thunder weather", "Wind Blade hits", "Bolt Rush"], use: "Set the weather, chip with blades, bolt the gap. The default ranged line.", cost: "Weather swap has a cast. Changing mid-fight costs you a beat." },
  { n: "Tornado approach", d: 2, steps: ["Tornado Boost slow", "Approach", "Omega Hurricane"], use: "Slow them with the boost so the hurricane catches the group instead of the air.", cost: "Omega Hurricane is your ult. Using it to open means they walk out the far side." },
  { n: "Weather swap", d: 3, steps: ["Thunder weather for damage", "Swap to the heal weather mid-fight", "Wind Blade through the swap"], use: "The swap is a team tool: damage weather on the engage, support weather when the fight turns.", cost: "Every swap is a window where you are not dealing damage." },
  { n: "Hurricane hold", d: 4, steps: ["Tornado Boost", "Omega Hurricane on the choke", "Wind Blade the edge", "Bolt Rush the exit"], use: "Use the hurricane to hold ground rather than to kill: they cannot cross, so the blades and bolts pick them off at the edge.", cost: "Requires your team to actually use the space. Alone it is a slow area denial." }
],
"The Hood": [
  { n: "Veil poke", d: 1, steps: ["Abyssal Veil", "Pistols", "Void Walk at high energy"], use: "Veil for cover, shoot from behind it, walk the energy when it fills.", cost: "The veil is one-directional. Flanks ignore it." },
  { n: "Half-demon rifles", d: 2, steps: ["High energy", "Void Walk", "Half-Demon rifles"], use: "At high energy the rifles hit harder, so build first and commit second.", cost: "Low energy rifles are a pea shooter. Never fight from empty." },
  { n: "Mantle return", d: 3, steps: ["Veil", "Pistols", "Mantle of Oblivion on the return fire", "Rifles through it"], use: "Mantle is the answer to poke: absorb their volley, then trade with the empowered rifles.", cost: "Mantle is the only defensive button. Their second volley kills you." },
  { n: "Veil reposition", d: 4, steps: ["Veil the escape lane", "Pistols to bait", "Void Walk through the veil", "Rifles from the new angle"], use: "The veil doubles as a wall you walk through: bait from one side, shoot from the other.", cost: "Veil placement must be pre-planned. Panic veils trap you." }
],
"The Punisher": [
  { n: "Rifle hold", d: 1, steps: ["Adjudication", "Culling Turret"], use: "Rifle the lane, turret the hold. Straightforward and still the highest sustained damage in the role.", cost: "Both root you. Dive comps are your whole problem." },
  { n: "Vantage angle", d: 2, steps: ["Vantage Connection", "Deliverance up close", "Grenade out"], use: "Turret from a high angle, shotgun anything that climbs to you, grenade the retreat.", cost: "The turret is a fixed target. One flank and it is gone." },
  { n: "Turret trade", d: 3, steps: ["Culling Turret down", "Adjudication until dived", "Deliverance the diver", "Grenade the second"], use: "The turret is bait: let them dive it, then shotgun the diver who is now out of position.", cost: "You give up the turret every time. Only worth it in a counter-dive comp." },
  { n: "Rocket link", d: 4, steps: ["Rocket Ammo Overload", "Culling Turret", "Adjudication through the buff", "Grenade the push"], use: "With Rocket the turret fires through the reload buff, which is how you actually hold a choke against a full commit.", cost: "Two anchors standing still. Any area ult deletes both." }
],
"Winter Soldier": [
  { n: "Hook and fist", d: 1, steps: ["Bionic Hook", "Roterstern", "Troopers Fist"], use: "Hook them in, shoot, punch. The default pick line.", cost: "Hook is the engage and the setup. Miss it and you are a short-range rifle." },
  { n: "Voltage chain", d: 2, steps: ["Tainted Voltage", "Roterstern", "Troopers Fist"], use: "Voltage first so the follow-up is on a slowed target. Post-11.0 the rifle falls off to 65% at 30m, so close the gap.", cost: "You must be inside 30m to do damage now. The old 40m poking is gone." },
  { n: "Hook reset", d: 3, steps: ["Hook", "Roterstern", "Fist", "Reposition", "Hook again"], use: "Hook is your only way in, so use the first one to bait the stun and the second to actually convert.", cost: "Two hooks in one fight means no escape at all." },
  { n: "Ult catches", d: 4, steps: ["Hook the support", "Ult", "Roterstern during the reset", "Fist the stragglers"], use: "The ult resets on kills, so hook the support first and let the chain carry you through their team.", cost: "If the first kill does not happen, the ult is a normal clip." }
],
"Wolverine": [
  { n: "Leap grab", d: 1, steps: ["Feral Leap grab", "Enhanced Berserk Claw Strikes"], use: "Grab, then shred. The basic kidnap line.", cost: "Leap is a 15s cooldown now. One miss and you are out of the fight for the whole window." },
  { n: "Undying trade", d: 2, steps: ["Undying Animal", "Berserk Claw Strikes", "Vicious Rampage"], use: "Pop the damage reduction first so the trade is survivable, then rampage through the target.", cost: "Undying is your only defensive tool. Opening without it into a stun loses the fight." },
  { n: "Rage conversion", d: 3, steps: ["Build Rage on the tank", "Leap the support", "Last Stand"], use: "Rage is built on whoever you can hit, then spent on the target you actually want: farm the tank, kill the healer.", cost: "Last Stand is 0.2% max health per Rage now, so low-Rage ults are a waste." },
  { n: "Double grab", d: 4, steps: ["Leap the support out", "Kill", "Re-leap the second support on cooldown"], use: "Take the healer out of the map entirely, then come back for the second one before their team reorganises.", cost: "Requires you to survive the first kill alone. Only with a dive partner." }
],
"Adam Warlock": [
  { n: "Stream heals", d: 1, steps: ["Avatar Life Stream", "Second cast on the nearest ally"], use: "The heal now bounces 4 times instead of 2, so one cast covers the whole group if they are standing together.", cost: "Initial heal is 55 now. Single-target saves are much weaker than before 11.0." },
  { n: "Soul Bond engage", d: 2, steps: ["Soul Bond", "Avatar Life Stream", "Cosmic Cluster pressure"], use: "Bond first so the chip damage is shared, then stream everyone back up at once.", cost: "Bond does not stop burst. It spreads it." },
  { n: "Revival stabilise", d: 3, steps: ["Karmic Revival", "Avatar Life Stream immediately", "Soul Bond to hold"], use: "The revive puts someone back at low health: stream them instantly or you have revived a corpse twice.", cost: "Revive is your ult. Using it on a bad position just feeds again." },
  { n: "Bond spread", d: 4, steps: ["Soul Bond before the dive lands", "Stream through the bounce", "Cluster the diver", "Second Stream on the retreat"], use: "Pre-bond before the engage, not during: the shared damage is what makes the stream bounce worth the cast time.", cost: "Bond on a split team is a wasted button and a wasted ult charge." }
],
"Cloak & Dagger": [
  { n: "Storm and veil", d: 1, steps: ["Dagger Storm", "Veil of Lightforce"], use: "Heal field down, veil through it. The basic sustain loop.", cost: "Storm is a 15s cooldown now and the self-heal is 35/s, so you cannot sit in your own field forever." },
  { n: "Terror blind", d: 2, steps: ["Terror Cape", "Veil of Lightforce", "Dagger Storm on the blind"], use: "Blind first so the heal field lands without being contested. The blind is 1s now, so it is a beat, not a window.", cost: "Cape and veil are the same cooldown family. Spending both leaves nothing." },
  { n: "Shroud heal", d: 3, steps: ["Shadows Embrace", "Dark Teleportation", "Lights Embrace to heal"], use: "Shroud the team to dodge the burst, teleport out, then heal from the new angle.", cost: "Shroud hides you from your own team's line of sight too. Do not do it mid-fight without warning." },
  { n: "Cooldown refund", d: 4, steps: ["Veil through the whole team", "Terror Cape", "Storm immediately", "Veil again"], use: "Post-11.0 every ally you veil and every enemy you cape shaves 0.6s off Storm, so the veil is a cooldown engine, not just mobility.", cost: "You have to physically pass through everyone. That is a lot of exposed walking." }
],
"Deadpool (Strategist)": [
  { n: "Eagles heal", d: 1, steps: ["Dual Desert Eagles", "Deadpool In Your Area", "Heal at range"], use: "Shoot to heal from range, then drop the area heal on the group.", cost: "Range healing is low throughput. Burst fights outrun it." },
  { n: "Hop and katana", d: 2, steps: ["Healing Hop in", "Kick@$$ Katana", "Heal through the hits"], use: "Hop to the fight and heal by hitting: the katana is the healing uptime.", cost: "You have to be in melee to heal. That is a support standing where a duelist stands." },
  { n: "Taunt peel", d: 3, steps: ["In Your Area taunt", "Katana the taunted diver", "Healing Hop out"], use: "Peel for yourself: taunt the diver, punish them with the katana, hop out before the second one arrives.", cost: "Taunt does not stop damage. It only redirects attention." },
  { n: "Gambit link", d: 4, steps: ["Gambit team-up", "Eagles anti-heal pressure", "In Your Area on the push"], use: "With Gambit the anti-heal sticks to your shots, so the Eagles become a real pressure tool while you heal.", cost: "Splits your attention between healing and anti-heal upkeep." }
],
"Gambit": [
  { n: "Hearts heal", d: 1, steps: ["Healing Hearts", "Purifying Pick-Up"], use: "Heal, then cleanse. The default support loop and your only real burst heal.", cost: "Self-heal is 20/s now. You cannot sustain yourself through a dive." },
  { n: "Spades anti-heal", d: 2, steps: ["Breaking Spades", "Explosive Trick"], use: "Anti-heal the tank so your team's damage actually sticks, then trick the group.", cost: "The outer spread is wider post-11.0, so you need to be 3-5m closer for the same coverage." },
  { n: "Cleanse timing", d: 3, steps: ["Purifying Pick-Up on the stun", "Healing Hearts", "Spades on the follow-up"], use: "Hold the cleanse for the stun, not the damage: that is the cast that saves a life.", cost: "Cleanse on cooldown is a wasted cleanse. Patience is the skill." },
  { n: "Card juggle", d: 4, steps: ["Hearts on the tank", "Spades the diver", "Pick-Up the peel", "Hearts again"], use: "Alternate the two card lines so you are healing and anti-healing in the same breath instead of choosing.", cost: "Every swap is a gap. High APM line with no room for a misread." }
],
"Invisible Woman": [
  { n: "Shield and physics", d: 1, steps: ["Guardian Shield on an ally", "Force Physics to push threats"], use: "Shield the diver, push the chaser. The basic peel.", cost: "Veiled Step is 8s now. You have fewer escapes than you are used to." },
  { n: "Vortex gather", d: 2, steps: ["Psionic Vortex", "Force Physics to displace"], use: "Gather them with the vortex, then push the group out of position.", cost: "Vortex slow is 40% center and 20% edge now. It is a soft gather, not a hold." },
  { n: "Double peel", d: 3, steps: ["Vortex on the dive", "Shield the target", "Physics push out", "Veiled Step"], use: "Layer all three defensives on one diver: slow, shield, shove, then leave. Nobody dies through that.", cost: "You have spent every cooldown on one player. The second diver arrives free." },
  { n: "Push for space", d: 4, steps: ["Vortex forward", "Physics the tank into your team", "Shield the follow-up", "Veiled Step behind"], use: "Use the displacement offensively: pull a tank out of their line and let your duelists collapse on the isolated body.", cost: "Playing forward as a support. Any stun lands on you first." }
],
"Jeff the Land Shark": [
  { n: "Bubble sustain", d: 1, steps: ["Healing Bubble", "Joyful Splash to boost"], use: "Bubble the group, splash for the boost. The standard heal loop.", cost: "Bubbles are static and eatable. Slow healing for a moving fight." },
  { n: "Hide and seek", d: 2, steps: ["Hide and Seek in", "Its Jeff to swallow"], use: "Go under, come up on the support, swallow them and spit them off the map.", cost: "Swallow is your ult. Missing it means surfacing in their backline with nothing." },
  { n: "Bubble chain", d: 3, steps: ["Bubble behind", "Splash forward", "Bubble again on the retreat"], use: "Bubbles as breadcrumbs: leave a heal line behind you so the team can fall back through it.", cost: "Requires your team to move backwards through your bubbles, which they will not do." },
  { n: "Ult line", d: 4, steps: ["Swallow two", "Carry to the edge", "Spit off the map", "Hide and Seek out"], use: "Two bodies in one swallow is the win condition: go for the pair, not the lone support.", cost: "Long carry, and anyone can shoot you the whole way." }
],
"Jubilee": [
  { n: "Bloom detonation", d: 1, steps: ["Blooming Ball", "Dazzling Detonation"], use: "Ball down, detonate. Heals allies or blinds enemies for 0.8s depending on who is standing in it.", cost: "The blind is 0.8s. It buys a step, not a fight." },
  { n: "Firework field", d: 2, steps: ["Firework Finale", "Energy Plasmoids to trigger marks"], use: "Field down at 190/s, then trigger the marks with the plasmoids so the heal keeps rolling.", cost: "The field is static. Your team has to fight inside it." },
  { n: "Mark uptime", d: 3, steps: ["Sparkle Mark on the tank", "Plasmoids", "Blooming Ball on the mark"], use: "Marks are the healing multiplier: apply first, then heal through the marked body.", cost: "Marks lost the 20% ally healing boost in 11.0. They are a trigger now, not a buff." },
  { n: "Blade link", d: 4, steps: ["Blade team-up", "Firework Finale", "Plasmoids through the lifesteal"], use: "With Blade the lifesteal goes to 40%, so his damage becomes your healing and you can spend casts on marks instead.", cost: "Depends entirely on Blade staying in the field." }
],
"Loki": [
  { n: "Clone heals", d: 1, steps: ["Doppelganger", "Mystical Missile"], use: "Clone for the angle, missile for the heal. Multi-angle healing is the whole point.", cost: "Deception is 18s now. You have fewer escapes and fewer clone resets." },
  { n: "Swap out", d: 2, steps: ["Deception", "Devious Exchange"], use: "Illusion, then swap to it: the classic Loki escape.", cost: "A destroyed illusion now gives Doppelganger a 1s cooldown with Hela, so the swap can be punished." },
  { n: "Domain hold", d: 3, steps: ["Regeneration Domain", "Doppelganger inside it", "Mystical Missile through the field"], use: "Domain on the point, clone inside, heal through it: the field is the ground you fight on.", cost: "The Mantis team-up no longer gives an ally damage boost. It is healing only now." },
  { n: "Triple angle", d: 4, steps: ["Doppelganger back", "Doppelganger side", "Missiles from three lines", "Deception the dive"], use: "Three healing sources from three directions means the enemy cannot body-block all of them.", cost: "Three clones to maintain, and every one of them is killable." }
],
"Luna Snow": [
  { n: "Freeze follow", d: 1, steps: ["Absolute Zero", "Ice Arts"], use: "Freeze, then follow with the arts. Post-11.0 the freeze is 1.5s, so the follow-up has to be immediate.", cost: "1.5s is a beat. Do not plan a second action around it." },
  { n: "Sustained heal", d: 2, steps: ["Ice Arts", "Light and Dark Ice"], use: "The main throughput line: arts into the dark/light switch for sustained healing.", cost: "Highest healing in the role, but you are locked into the channel." },
  { n: "Freeze peel", d: 3, steps: ["Absolute Zero on the diver", "Ice Arts the trapped body", "Light and Dark Ice on the team"], use: "Freeze the diver, kill them with the arts, then switch straight back to the team heal.", cost: "Every second on the diver is a second the team is not being healed." },
  { n: "Dance conversion", d: 4, steps: ["Duality Dance with Adam Warlock", "Self-heal conversion", "Ice Arts through the buff"], use: "The Adam team-up converts 35% of your self-heal into the dance, which is how you survive a dive without leaving the fight.", cost: "Requires Adam, and requires you to be taking damage to get value." }
],
"Mantis": [
  { n: "Flower into inspiration", d: 1, steps: ["Healing Flower", "Allied Inspiration on the engaging teammate"], use: "Heal, then inspire whoever is going in. The core support pattern.", cost: "Life Orb costs went up: Inspired costs 2 now, so you bank fewer casts." },
  { n: "Sleep peel", d: 2, steps: ["Spore Slumber", "Life Energy Blast to punish"], use: "Sleep the diver, blast them while they are down. The sleep is 1.5s now, so the punish is short.", cost: "Sleep is your only hard peel and it is half as long as it was." },
  { n: "Orb economy", d: 3, steps: ["Life Energy Blast chaining", "Healing Flower on the crit window", "Allied Inspiration"], use: "Non-crit blasts now grant 0.3 Life Orbs, so chipping the tank is how you fund the heals.", cost: "Nature's Favor self-heal is 8/s now. You cannot sustain yourself off it." },
  { n: "Inspire window", d: 4, steps: ["Allied Inspiration on the duelist", "Blast the target they dive", "Flower through the inspire", "Slumber the peel"], use: "Inspire is a damage window for them and a heal window for you: pick the target together, not separately.", cost: "Mismatched targets waste the inspire entirely." }
],
"Nightcrawler": [
  { n: "Bomb burst", d: 1, steps: ["Brimstone bomb burst", "Flurry to finish"], use: "The honest starter: three-round burst from range, then the sword flurry if they close on you.", cost: "Bombs heal allies and damage enemies, so standing in your own line is a skill in itself." },
  { n: "Intervention heal", d: 2, steps: ["Swift Intervention to an ally", "Burst heal", "Recast lock 3s"], use: "Two charges of a teleport heal: the escape and the save are the same button.", cost: "Both charges spent means you are a slow support in the open for 3s." },
  { n: "Spin engage", d: 3, steps: ["E spin-teleport in", "Sword flurry", "Recast spin", "Recast bamf back"], use: "The engage line: spin through the group for damage, flurry the target, then bamf back to where you started.", cost: "Five seconds of commitment. If you bamf early you waste the line; late and you are dead." },
  { n: "Drag and pull", d: 4, steps: ["F grab an ally", "Teleport them to you", "Ult", "Pull the enemies into the stack"], use: "The ult teleports your team in one by one, then yanks every enemy in the area to you: grab your carry first so they arrive armed.", cost: "The pull centres on you. Every enemy ult that wants a stacked team wants this too." }
],
"Rocket Raccoon": [
  { n: "Beacon hold", d: 1, steps: ["B.R.B.", "Repair Mode to protect the push"], use: "Beacon down, then repair through the push. Revive and sustain in one.", cost: "Beacon can be destroyed. Place it behind cover or it is a wasted ult charge." },
  { n: "Ammo overload", d: 2, steps: ["B.R.B.", "Ammo Overload", "Repair Mode on the firing line"], use: "Overload the Punisher or whoever is holding, then heal them through the reload buff.", cost: "Overload on a bad shooter is a wasted cooldown." },
  { n: "Falloff poke", d: 3, steps: ["Repair Mode", "Damage at 15m", "Jetpack Dash out"], use: "Post-11.0 your damage holds to 55% at 30m, so you can actually poke from the backline: 15m is the new full-damage line.", cost: "Heal per pass is 50 and self-heal is 20/s. You cannot out-sustain a committed dive." },
  { n: "Jetpack trade", d: 4, steps: ["Jetpack Dash into the diver", "Shotgun at point blank", "Repair Mode out"], use: "The dash now gives 25 Bonus Health, which turns a panic escape into a real duel against a half-health flanker.", cost: "Using the dash to fight means you have no dash to leave." }
],
"Ultron": [
  { n: "Patch and firewall", d: 1, steps: ["Imperative: Patch", "Imperative: Firewall"], use: "Heal then shield. The whole support kit in two orders.", cost: "Firewall ally Bonus Health is 25 now and the speed boost is 10%, so it is a nudge, not a save." },
  { n: "Flight angle", d: 2, steps: ["Dynamic Flight", "Encephalo-Ray"], use: "Fly to an angle the enemy is not covering, then heal and poke from above.", cost: "Flight is slow and you are the most visible target in the sky." },
  { n: "Drone line", d: 3, steps: ["Patch on the tank", "Firewall on the duelist", "Encephalo-Ray through the gap", "Dynamic Flight out"], use: "Split the imperatives: heal the body that is holding, shield the body that is diving, and keep your own damage on the angle.", cost: "Two imperatives, two targets, one positioning mistake from dying." },
  { n: "Aerial peel", d: 4, steps: ["Dynamic Flight up", "Patch on the target being dived", "Firewall as the burst lands", "Encephalo-Ray the diver"], use: "The dive comes from above as often as the ground: hover to see it first, then patch through the flight path.", cost: "While flying you are not healing. It is a scouting tax." }
],
"White Fox": [
  { n: "Sanctuary and surge", d: 1, steps: ["Spirit Sanctuary", "Spectral Surge to reach and shield"], use: "Shield down, surge to the target. The default save.", cost: "Sanctuary is 100 now, not 200, and the surge no longer grants invincibility. It is a shield, not a save." },
  { n: "Fox form", d: 2, steps: ["Fox Form Awakening", "Tail Sweep to heal and repel"], use: "Awaken to heal in an area, sweep to push the dive off your team.", cost: "Awakening is 8s base with 2s per tail, so it is a real window: waste it and you are a support with no form." },
  { n: "Charm radius", d: 3, steps: ["Fox Form", "Claw Strike the dive", "Charm at 0.4m", "Predatory Pounce out"], use: "Charm is 0.4m now and Pounce is 4s, so the sequence has to be tighter but comes back faster.", cost: "0.4m is nearly touching them. One step back and the charm misses." },
  { n: "Kumiho trade", d: 4, steps: ["Kumiho Unleashed", "Claw Strike at 40", "Let allies heal you to 1000", "Pounce reset"], use: "The ult form can now be healed by teammates and sits at 1000 health, so it is a frontline body rather than a burst threat.", cost: "You are the front line in a support ult. If they burst through 1000, the fight is over." }
]
};
