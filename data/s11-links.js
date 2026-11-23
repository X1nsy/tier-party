/* Season 11 synergy + counter map.
   p = pairs well with · x = struggles against
   Each entry: [hero, why]. 4-6 per side, never fewer. */
var LINKS = {
"Angela": {
  p: [["Mantis","Sleep makes the charged Spear of Ichors a guaranteed hit."],["Magneto","Bubble lets her commit the axe line without eating the first burst."],["Doctor Strange","Portal drops her straight onto the backline angle."],["Rocket Raccoon","Beacon means her all-in trade has a second life."],["Storm","Weather damage stacks with Divine Judgement's burn."]],
  x: [["Devil Dinosaur","Savage Predation punishes her Wingblade commitment."],["The Thing","Yancy Street Charge stops the flight line cold."],["Luna Snow","Absolute Zero cancels the domain on entry."],["Peni Parker","Mines punish every landing spot she can pick."]]
},
"Bruce Banner": {
  p: [["Gorr","Necro-Power softens whoever Banner leaps onto."],["Magik","Her dive pulls peel away from his stun window."],["Doctor Strange","Shield covers the small-form poke phase."],["Rocket Raccoon","Repair Mode keeps the Hulk form alive through the trade."],["Mantis","Inspire turns Heavy Blow into a real damage window."]],
  x: [["Devil Dinosaur","Beam plus predation out-trades the leap every time."],["Peni Parker","Nest and mines punish the post-leap landing."],["Wolverine","Feral Leap takes the Hulk out of his own fight."],["Hela","Long-range thorn punishes the Banner phase."]]
},
"Captain America": {
  p: [["Ultron","Firewall speed turns Leading Dash into a real engage."],["Mantis","Inspire on the slam target makes it a kill window."],["Storm","Her slow keeps the group inside the Super-Soldier Slam."],["Rocket Raccoon","Beacon covers the all-cooldown dive."],["Doctor Strange","Portal sets up the dash from an unexpected angle."]],
  x: [["Devil Dinosaur","Primal Bite out-sustains the shield trade."],["Peni Parker","Nest denies the flat ground he needs to dash across."],["Magneto","Bulwark eats the slam and the cannon answers."],["Winter Soldier","Hook pulls him out of the leap arc."]]
},
"Deadpool (Vanguard)": {
  p: [["Storm","Weather slows the target he needs to hammer."],["Mantis","Sleep covers the Bunny Hop landing."],["Rocket Raccoon","Repair Mode offsets the loss of ally Bonus Health."],["Ultron","Firewall replaces the support shielding 11.0 removed."],["Peni Parker","Nest holds the ground he hops back to."]],
  x: [["Jubilee","Blind cancels the Ban Hammer finish."],["Cloak & Dagger","Cape blind and shroud break the hop-in line."],["The Punisher","Turret deletes the Bunny Hop approach."],["Winter Soldier","Hook cancels the Hazardous Hijinks exit."]]
},
"Devil Dinosaur": {
  p: [["Storm","Weather slow keeps targets inside Savage Predation."],["Groot","Roots keep them inside the Primal Punishment cone."],["Luna Snow","He is her bodyguard: Buddy Barrier exists for her."],["Rocket Raccoon","Repair Mode sustains the bleed trade."],["Mantis","Inspire boosts the Apex Advantage bleed."]],
  x: [["Squirrel Girl","Acorn Rain burns him out of the point."],["Phoenix","Spark detonations out-range the melee kit."],["Peni Parker","Mines punish the beam-and-predation walk."],["Hawkeye","Focused shots punish the 4s barrier downtime."]]
},
"Doctor Strange": {
  p: [["Ultron","Firewall speed buys the Eye of Agamotto cast."],["Peni Parker","Nest covers the channel while he builds Dark Magic."],["Magik","Her dive forces the peel he then ults."],["Rocket Raccoon","Beacon covers the shield break."],["Hela","Thorn punishes whoever walks out of the portal."]],
  x: [["Wolverine","Leap takes him out of the shield entirely."],["Devil Dinosaur","Predation out-trades the 800 shield."],["Iron Fist","Counter beats the Maelstrom dump."],["Winter Soldier","Hook cancels the ult cast."]]
},
"Emma Frost": {
  p: [["Mantis","Sleep sets the Crystal Kick wall angle."],["Ultron","Firewall sustains the 350 shield line."],["Magneto","Two shields make a genuinely unkillable front."],["Storm","Slow stacks with the crush."],["Magneto","Bubble covers the spear wind-up and the walk out."]],
  x: [["Wolverine","Leap ignores Diamond Form and takes her out of position."],["Rocket Raccoon","Falloff poke now reaches her shield line."],["Hela","Thorn headshots punish the harden channel."],["Peni Parker","Mines force the form before she wants it."]]
},
"Groot": {
  p: [["Mantis","Wild Wall team-up now triggers Flora Colossus."],["Storm","Weather inside the wall box is a kill zone."],["Peni Parker","Two sets of walls make a real cage."],["Rocket Raccoon","Repair Mode keeps the 550 wall line alive."],["Hela","Thorn through the prison is free damage."]],
  x: [["Wolverine","Leap drags him out of the wall line."],["Devil Dinosaur","Beam clears walls and bodies together."],["The Punisher","Turret shreds walls from range."],["Phoenix","Detonations punish the static box."]]
},
"Magneto": {
  p: [["Storm","Weather slow makes the charged cannon land."],["Mantis","Sleep sets the Meteor M."],["Doctor Strange","Portal puts the bubble line behind their healers."],["Rocket Raccoon","Beacon covers the absorb phase."],["Hela","Thorn punishes the exit from the curtain."]],
  x: [["Wolverine","Leap removes him from the cannon line."],["Emma Frost","Crystal Kick beats the curtain."],["Iron Fist","Counter punishes the volley rhythm."],["Squirrel Girl","Acorn Rain ignores the directional shield."]]
},
"Peni Parker": {
  p: [["Ultron","Firewall keeps the nest line alive."],["Storm","Slow stacks with the snare."],["Doctor Strange","Portal puts the nest behind them."],["Mantis","Sleep buys time for the mine delay."],["Namor","Squid turrets widen the zone the nest already owns."]],
  x: [["Rocket Raccoon","Falloff poke now clears the nest from range."],["The Punisher","Turret out-ranges the whole kit."],["Devil Dinosaur","Beam clears nests and mines together."],["Iron Man","Air angle ignores the ground trap entirely."]]
},
"Rogue": {
  p: [["Storm","Weather holds them inside the absorption radius."],["Ultron","Firewall speed closes the 1.2m gap."],["Gambit","Mr. & Mrs. X now comes back every 15s."],["Mantis","Sleep sets the Fatal Attraction pull."],["Rocket Raccoon","Beacon covers the stance drop."]],
  x: [["Devil Dinosaur","Bleed ignores her stance."],["Peni Parker","Mines punish every approach."],["Phoenix","Range keeps her outside absorption."],["Hawkeye","Focused shots punish the stance window."]]
},
"The Thing": {
  p: [["Mantis","Sleep guarantees the Clobberin Time."],["Storm","Slow keeps them in the charge path."],["Ultron","Firewall speed makes the blitz real."],["Rocket Raccoon","Beacon covers the wall slam commit."],["Hela","Thorn punishes whoever leaves the clobber."]],
  x: [["The Punisher","Turret out-ranges every tool he has."],["Peni Parker","Nest denies the charge lane."],["Hawkeye","Hypersonic knocks him out of the charge."],["Namor","Summons body-block the blitz."]]
},
"Thor": {
  p: [["Storm","Weather damage stacks with Lightning Realm."],["Ultron","Firewall sustains the Awakening Rune."],["Mantis","Inspire pushes the rune damage over the line."],["Rocket Raccoon","Beacon covers the rune lock-in."],["Hela","Thorn punishes the rune exit."]],
  x: [["Devil Dinosaur","Predation beats the Thorforce trade."],["Peni Parker","Nest punishes the Storm Surge landing."],["Magneto","Curtain eats the Hammer Throw."],["Luna Snow","Freeze cancels the rune."]]
},
"Venom": {
  p: [["Ultron","Firewall keeps the low-health resilience line alive."],["Mantis","Inspire boosts the corrosion trade."],["Gorr","Necro-Power follows the dive."],["Storm","Slow keeps them in the corrosion."],["Rocket Raccoon","Repair Mode covers the second entry."]],
  x: [["Devil Dinosaur","Bleed out-damages the resilience shield."],["Wolverine","Leap pulls him off the support."],["Peni Parker","Mines punish the swing landing."],["Hawkeye","Focused shots punish the 525 health window."]]
},
"Black Cat": {
  p: [["Spider-Man","Feline Alliance team-up pays Fortune per enemy hit."],["Black Panther","Double dive on the same backline target."],["Mantis","Sleep guarantees the hook lands."],["Rocket Raccoon","Beacon covers the no-escape flank."],["Storm","Slow keeps them inside Feline Fury."]],
  x: [["Emma Frost","Diamond Form ignores the hook burst."],["The Punisher","Turret covers the flank lane."],["Peni Parker","Mines punish the Cats Cradle landing."],["Luna Snow","Freeze ends the Fortune cycle."]]
},
"Black Panther": {
  p: [["Ultron","Firewall speed extends the dive range."],["Storm","Slow keeps them marked in place."],["Magik","Two divers split the peel."],["Mantis","Sleep sets the second rend."],["Rocket Raccoon","Beacon covers the double dive."]],
  x: [["The Thing","Charge stops the kick approach."],["Peni Parker","Nest punishes every landing."],["Emma Frost","Form eats the spirit rend."],["Namor","Summons body-block the wall run."]]
},
"Black Widow": {
  p: [["Hawkeye","Allied Agents now converts focused damage to Bonus Health."],["Phoenix","Team-up pushes the plasma blast to 75."],["Mantis","Sleep buys the charge window."],["Rocket Raccoon","Beacon covers the static aim."],["Doctor Strange","Shield covers the focus hold."]],
  x: [["Venom","Predation removes her from the angle instantly."],["Spider-Man","Web pull cancels the charge."],["Peni Parker","Nest makes the long angle unusable."],["Hela","Thorn out-ranges her."]]
},
"Blade": {
  p: [["Moon Knight","Ankh bounce damage follows the dash."],["Captain America","Slam sets the awakening window."],["Rocket Raccoon","Beacon covers the all-in dash."],["Mantis","Inspire pushes the Bloodline window."],["Storm","Slow keeps them in the shroud range."]],
  x: [["Hawkeye","Focused shots punish the shroud timing."],["The Punisher","Turret deletes the dash lane."],["Peni Parker","Mines punish the awakening commit."],["Emma Frost","Form ignores the sword chain."]]
},
"Cyclops": {
  p: [["Phoenix","Team-up stacks blasts on grouped targets."],["Gambit","Anti-heal makes the chip stick."],["Mantis","Sleep lines up the propulsion burst."],["Rocket Raccoon","Beacon covers the static poke."],["Doctor Strange","Shield covers the charge up."]],
  x: [["Spider-Man","Pull cancels the ricochet setup."],["Black Panther","Dive ends the corner line."],["Peni Parker","Nest denies the angle."],["Magneto","Curtain eats every blast."]]
},
"Daredevil": {
  p: [["Iron Fist","Two counters make dive comps unplayable."],["Black Widow","Plasma slow sets the latch."],["Mantis","Sleep guarantees the blind chain."],["Rocket Raccoon","Beacon covers the melee commit."],["Storm","Slow keeps them inside Fury Devils Chain."]],
  x: [["Peni Parker","Nest punishes the latch approach."],["Namor","Summons out-number the melee."],["The Punisher","Turret out-ranges the chain."],["Luna Snow","Freeze cancels Objection!."]]
},
"Deadpool (Duelist)": {
  p: [["Gambit","Anti-heal makes the Slice and Dice lethal."],["Hela","Thorn punishes whoever leaves the taunt."],["Rocket Raccoon","Beacon covers the hop commitment."],["Mantis","Inspire boosts the katana window."],["Storm","Slow keeps them in eagles range."]],
  x: [["Emma Frost","Form ignores the dice burst."],["Squirrel Girl","Rain field denies the hop landing."],["Peni Parker","Mines punish the melee line."],["Winter Soldier","Hook cancels the taunt."]]
},
"Elsa Bloodstone": {
  p: [["Deadpool (Duelist)","Two close-range bodies on the same target."],["Devil Dinosaur","Team-up snare comes back in 12s."],["Mantis","Sleep sets the Monster-Piercer."],["Rocket Raccoon","Beacon covers the 10m fight."],["Storm","Slow keeps them inside the falloff range."]],
  x: [["Iron Fist","Counter beats the shotgun rhythm."],["Gambit","Anti-heal negates the snare pressure."],["Peni Parker","Mines punish the pursuit landing."],["Hela","Thorn punishes the 10m commit."]]
},
"Gorr": {
  p: [["Venom","Team-up softens before the warp."],["Hela","Thorn punishes whoever survives the scythe."],["Ultron","Firewall sustains the berserker line."],["Mantis","Sleep covers the Shadow Harvest entry."],["Mantis","Sleep holds them in the tendril pull."]],
  x: [["Storm","Weather out-ranges the whole kit."],["Iron Man","Air angle ignores the berserker entirely."],["Peni Parker","Nest kills the warp target."],["Hawkeye","Focused shots delete the berserker."]]
},
"Hawkeye": {
  p: [["Psylocke","Team-up marks give a second damage window."],["Cloak & Dagger","Veil covers the charge hold."],["Groot","Walls pin the target for the charged shot."],["Mantis","Sleep buys a free charged shot."],["Doctor Strange","Shield covers the focus."]],
  x: [["Black Panther","Dive cancels the charge instantly."],["Spider-Man","Web pull removes the angle."],["Peni Parker","Nest makes his position unplayable."],["Venom","Predation ends the sit-and-aim."]]
},
"Hela": {
  p: [["Ultron","Firewall covers the stationary drain."],["Mantis","Inspire boosts the thorn line."],["Gorr","Two long-range threats split attention."],["Doctor Strange","Portal gives her a new angle free."],["Rocket Raccoon","Beacon covers the sky ult."]],
  x: [["Invisible Woman","Push displaces the angle."],["Black Panther","Dive cancels the drain."],["Peni Parker","Nest denies the long sightline."],["Iron Man","Height removes her whole lane."]]
},
"Human Torch": {
  p: [["Storm","Team-up burns fields harder."],["Jubilee","Blind keeps them in the wall box."],["Invisible Woman","Shield covers the meteor channel."],["Rocket Raccoon","Beacon covers the static fields."],["Mantis","Inspire boosts the detonation."]],
  x: [["Hela","Thorn punishes the airborne channel."],["The Punisher","Turret out-ranges the fields."],["Peni Parker","Mines clear the point he needs."],["Spider-Man","Pull cancels Plasma Body."]]
},
"Iron Fist": {
  p: [["Mantis","Sleep sets the Dragon's Kick."],["Ultron","Firewall speed closes the gap."],["Mantis","Sleep sets the launcher."],["Rocket Raccoon","Beacon covers the counter line."],["Storm","Slow keeps them in the chain."]],
  x: [["Peni Parker","Mines punish every approach."],["Scarlet Witch","Chaos Control out-ranges the counter."],["The Punisher","Turret deletes the melee walk."],["Luna Snow","Freeze cancels Dragons Defense."]]
},
"Iron Man": {
  p: [["Ultron","Two aerial threats split the hitscan."],["Thor","Lightning Realm punishes the ground under him."],["Mantis","Inspire boosts the missile barrage."],["Rocket Raccoon","Beacon covers the static hover."],["Storm","Weather hides the ult line."]],
  x: [["Spider-Man","Pull cancels Overdrive."],["Black Widow","Focused rifle out-ranges him."],["Hela","Thorn punishes the hover."],["Hawkeye","Hypersonic knocks flyers down."]]
},
"Magik": {
  p: [["Groot","Walls close the exit the Umbral dive leaves."],["Ultron","Firewall sustains the whirl."],["Storm","Slow keeps them in the Soulsword."],["Mantis","Sleep sets the Eldritch Whirl."],["Rocket Raccoon","Beacon covers the all-in."]],
  x: [["Peni Parker","Mines kill the disc line."],["The Thing","Charge stops the incursion."],["Hawkeye","Focused shot punishes the spin."],["Luna Snow","Freeze cancels the ult transform."]]
},
"Mister Fantastic": {
  p: [["Invisible Woman","Barrier covers the stretch wind-up."],["Ultron","Firewall covers the elongated frame."],["Mantis","Sleep sets the grip pull."],["Rocket Raccoon","Beacon covers the inflated commit."],["Storm","Slow keeps them in Stretch Punch range."]],
  x: [["Devil Dinosaur","Beam punishes the long frame."],["The Thing","Charge cancels the elongation."],["Peni Parker","Mines punish the pull target."],["Hawkeye","Focused shots hit the inflated body."]]
},
"Moon Knight": {
  p: [["Blade","Dash into the ankh field."],["Doctor Strange","Portal stacks them for the ankh spread."],["Groot","Walls funnel them into the ankh."],["Mantis","Sleep sets the bounce line."],["Storm","Slow keeps them in the ankh cluster."]],
  x: [["Ultron","Flight removes the bounce surface."],["Black Panther","Dive cancels the ankh cast."],["Peni Parker","Nest denies the perch."],["Spider-Man","Pull ends the channel."]]
},
"Namor": {
  p: [["Luna Snow","Team-up freeze holds them in the summons."],["Bruce Banner","Front line covers the summon build."],["Storm","Slow stacks with Wrath."],["Rocket Raccoon","Beacon covers the static command."],["Mantis","Inspire boosts the spawn."]],
  x: [["Magneto","Curtain eats the trident pressure."],["Moon Knight","Bounce hits the summons too."],["Peni Parker","Nest punishes the summon placement."],["Hela","Thorn out-ranges the dominion."]]
},
"Phoenix": {
  p: [["Ultron","Firewall sustains the rebirth trade."],["Invisible Woman","Barrier holds the channel while she builds the stack."],["Black Widow","Her plasma blast hits 75 with the Phoenix team-up"],["Mantis","Inspire boosts the spark burst."],["Storm","Slow keeps them in the detonation radius."]],
  x: [["Cloak & Dagger","Veil dodges the detonation."],["Jubilee","Blind cancels the stack."],["Peni Parker","Mines punish the rebirth spot."],["Hawkeye","Focused shots beat the 15 area."]]
},
"Psylocke": {
  p: [["Invisible Woman","Barrier covers the stealth exit."],["Mantis","Sleep sets the crossbow."],["Hawkeye","Marks feed the team-up window."],["Rocket Raccoon","Beacon covers the double dash."],["Storm","Slow keeps them in shuriken range."]],
  x: [["Daredevil","Blind cancels stealth."],["Black Panther","Faster dive wins the mirror."],["Peni Parker","Mines reveal the entry."],["Luna Snow","Freeze ends the dash."]]
},
"Scarlet Witch": {
  p: [["Storm","Team-up slow stacks with Dark Seal."],["Ultron","Firewall covers the short-range sweep."],["Mantis","Sleep sets the Chaos sweep."],["Rocket Raccoon","Beacon covers the floating angle."],["Peni Parker","Nest holds the ground she sweeps."]],
  x: [["Squirrel Girl","Rain out-ranges the hex."],["Hela","Thorn punishes the hover."],["The Punisher","Turret deletes the sweep lane."],["Hawkeye","Focused shots hit the slow float."]]
},
"Spider-Man": {
  p: [["Doctor Strange","Portal repositions the pull target."],["Ultron","Firewall sustains the double pull."],["Mantis","Sleep sets the Amazing Combo."],["Black Cat","Two mobile bodies split the peel."],["Rocket Raccoon","Beacon covers the no-escape dive."]],
  x: [["The Thing","Charge stops the swing landing."],["Angela","Axe trade beats the burst."],["Peni Parker","Mines punish every landing."],["Luna Snow","Freeze cancels the pull."]]
},
"Squirrel Girl": {
  p: [["Groot","Walls bank the acorn around cover."],["Iron Man","Air angle covers the blockade arc."],["Storm","Slow keeps them in Acorn Rain."],["Rocket Raccoon","Beacon covers the static siege."],["Mantis","Sleep guarantees the direct acorn."]],
  x: [["Ultron","Flight ignores ground traps."],["Spider-Man","Dive cancels the Mammal Bond window."],["Hela","Thorn out-ranges the blockade."],["Peni Parker","Nest punishes the trap placement."]]
},
"Star-Lord": {
  p: [["Mantis","Inspire boosts the Galactic Legend clip."],["Ultron","Firewall sustains the barrage commit."],["Human Torch","Team-up shortens the res."],["Rocket Raccoon","Beacon covers the flank."],["Storm","Slow keeps them in element gun range."]],
  x: [["Jubilee","Blind cancels the barrage."],["Mister Fantastic","Grip pulls him out of flight."],["Peni Parker","Nest denies the flank lane."],["Hawkeye","Focused shots hit the flight path."]]
},
"Storm": {
  p: [["Thor","Weather plus Lightning Realm is a kill zone."],["Human Torch","Team-up burns the field."],["Mantis","Inspire boosts Bolt Rush."],["Rocket Raccoon","Beacon covers the weather hold."],["Peni Parker","Nest holds the choke she slows."]],
  x: [["The Punisher","Turret out-ranges the weather."],["Luna Snow","Freeze cancels Omega Hurricane."],["Hawkeye","Knocks her out of the sky."],["Winter Soldier","Hook pulls her into the fight."]]
},
"The Hood": {
  p: [["Mantis","Sleep holds the clap target."],["Magik","Dive pulls attention off the rifles."],["Ultron","Firewall sustains the energy build."],["Storm","Slow keeps them in rifle range."],["Rocket Raccoon","Beacon covers the static poke."]],
  x: [["Wolverine","Leap ends the veil hold."],["Cloak & Dagger","Shroud cancels the angle."],["Peni Parker","Nest denies the perches."],["Hela","Thorn out-ranges the rifles."]]
},
"The Punisher": {
  p: [["Rocket Raccoon","Ammo Overload on the turret line."],["Daredevil","Blind peels the dive."],["Doctor Strange","Shield covers the turret."],["Peni Parker","Nest guards the firing angle."],["Mantis","Inspire boosts the rifle."]],
  x: [["Magneto","Curtain eats the whole clip."],["Venom","Predation removes him from the turret."],["Spider-Man","Pull cancels the hold."],["Black Panther","Dive ends the angle."]]
},
"Winter Soldier": {
  p: [["Rogue","Her grab lines up the hook."],["Ultron","Firewall sustains the hook commit."],["Mantis","Sleep guarantees the fist."],["Rocket Raccoon","Beacon covers the ult chain."],["Storm","Slow keeps them in the 30m line."]],
  x: [["Invisible Woman","Push displaces the hook line."],["Jeff the Land Shark","Swallow removes him mid-ult."],["Peni Parker","Mines punish the hook."],["Hela","Thorn out-ranges the 30m falloff."]]
},
"Wolverine": {
  p: [["Cyclops","Team-up adds range to the grab."],["Gambit","Anti-heal keeps the target killable."],["Mantis","Sleep covers the leap."],["Rocket Raccoon","Beacon covers the all-in."],["Storm","Slow keeps them in claw range."]],
  x: [["Peni Parker","Mines punish every leap."],["The Punisher","Turret out-ranges the grab."],["Hawkeye","Focused shots hit the Rage build."],["Luna Snow","Freeze cancels Undying Animal."]]
},
"Adam Warlock": {
  p: [["Ultron","Two sustain supports make a genuinely unbreakable backline."],["Mantis","Inspire stacks with Soul Bond."],["Luna Snow","Duality Dance converts her self-heal to 35%."],["Storm","Soaring Surge now doubles to 100% speed."],["Rocket Raccoon","Beacon plus Karmic Revival is two lives."]],
  x: [["Black Panther","Dive deletes the stream cast."],["Venom","Predation removes him from the backline."],["Peni Parker","Nest makes his position unplayable."],["Hela","Thorn out-ranges the cluster."]]
},
"Cloak & Dagger": {
  p: [["Psylocke","Shroud covers the stealth entry."],["Mantis","Sleep stacks on top of the blind."],["Groot","Walls box the Dagger Storm."],["Namor","Squids hold the edge of the healing pool."],["Mantis","Two heal lines make a very sticky backline."]],
  x: [["Peni Parker","Mines force the shroud early."],["Storm","Omega Hurricane clears the field."],["Black Panther","Dive beats the 15s storm cooldown."],["Hawkeye","Focused shots punish the static veil."]]
},
"Deadpool (Strategist)": {
  p: [["Gambit","Anti-heal plus Eagles pressure."],["Mantis","Sleep buys the revive window."],["Rocket Raccoon","Two healing lines behind a beacon."],["Mantis","Inspire boosts the katana heal"],["Storm","Slow keeps the taunt relevant."]],
  x: [["Peni Parker","Nest punishes the healing hop."],["Blade","Shroud beats the katana timing."],["Black Panther","Dive out-paces the range heal."],["Hela","Thorn ends the melee healing."]]
},
"Gambit": {
  p: [["Jubilee","Two mid-range supports with mark synergy."],["Magneto","Shield covers the card juggle."],["Rogue","Mr. & Mrs. X every 15s."],["Deadpool (Duelist)","Anti-heal sets the dice kill."],["Mantis","Inspire boosts the spade line."]],
  x: [["Black Panther","Dive beats the 20/s self-heal."],["Spider-Man","Pull cancels the cleanse timing."],["Peni Parker","Mines punish the card line."],["Hawkeye","Focused shots out-range the spread."]]
},
"Invisible Woman": {
  p: [["Mister Fantastic","Team-up plus displacement on the same target."],["Human Torch","Shield covers his meteor channel."],["Groot","Walls extend the barrier line."],["Mantis","Two peels make dive unplayable."],["Storm","Slow stacks with the vortex."]],
  x: [["Peni Parker","Mines punish the forward vortex."],["Venom","Predation beats the 8s veiled step."],["Black Panther","Kick ends the push line."],["Hela","Thorn out-ranges the displacement."]]
},
"Jeff the Land Shark": {
  p: [["Groot","Walls hold them where the bubbles are."],["Luna Snow","Two heal lines, one very slippery backline."],["Namor","Squids guard the bubble angle."],["Storm","Slow keeps them in the bubble line."],["Mantis","Inspire boosts the splash."]],
  x: [["Hawkeye","Focused shots punish the surface."],["Cloak & Dagger","Shroud dodges the swallow."],["Black Panther","Dive ends the bubble loop."],["Peni Parker","Mines punish the Hide and Seek exit."]]
},
"Jubilee": {
  p: [["Blade","Team-up pushes lifesteal to 40%."],["Gambit","Anti-heal keeps them in the field."],["Storm","Slow keeps them in the plasmoid field."],["Storm","Slow keeps them in Firework Finale."],["Mantis","Inspire boosts the plasmoids."]],
  x: [["Black Panther","Dive cancels the static field."],["Spider-Man","Pull removes her from the point."],["Peni Parker","Mines punish the field placement."],["Hela","Thorn out-ranges Blooming Ball."]]
},
"Loki": {
  p: [["Mantis","Team-up domain is now pure healing."],["Bruce Banner","Front line covers the clone setup."],["Magneto","Bubble sells the clone hold."],["Storm","Slow keeps them in the domain."],["Mantis","Sleep covers the illusion swap."]],
  x: [["Spider-Man","Pull removes him before the swap."],["Black Panther","Dive kills the clone and the body."],["Peni Parker","Mines clear the illusion line."],["Hela","Thorn out-ranges the missiles."]]
},
"Luna Snow": {
  p: [["White Fox","Team-up spirit fox adds damage and heal."],["Adam Warlock","Duality Dance converts 35% self-heal."],["Peni Parker","Nest guards the channel."],["Storm","Slow holds them in the freeze follow-up."],["Rocket Raccoon","Beacon covers the standing channel."]],
  x: [["Mantis","Sleep beats the 1.5s freeze."],["Invisible Woman","Push displaces the channel."],["Black Panther","Dive ends the arts line."],["Hawkeye","Focused shots punish the standing heal."]]
},
"Mantis": {
  p: [["Adam Warlock","Double long-range heals with bond coverage."],["Groot","Wild Wall team-up now deals real damage."],["Storm","Slow buys the sleep cast."],["Storm","Inspire boosts Bolt Rush."],["Rocket Raccoon","Two heal lines plus a beacon."]],
  x: [["Black Panther","Dive beats the 1.5s sleep."],["Black Cat","Hook cancels the inspire window."],["Peni Parker","Mines punish the static position."],["Hela","Thorn out-ranges the blast."]]
},
"Nightcrawler": {
  p: [["Magik","Hinted team-up plus a second dive threat."],["Rogue","Hinted team-up and a body to teleport to."],["Doctor Strange","A shielded Strange forward is a deep teleport anchor, and the ult pull stacks enemies into his range."],["Mantis","Inspire boosts the spin engage."],["Rocket Raccoon","Beacon covers the five-second commit."]],
  x: [["The Thing","Yancy Street Charge grounds the teleport line."],["Namor","Wrath punishes the stacked ult."],["Peni Parker","Mines cover every landing."],["Hela","Thorn out-ranges his burst."]]
},
"Rocket Raccoon": {
  p: [["The Punisher","Ammo Overload on the turret is the best duo in the role."],["Groot","Walls protect the beacon."],["Venom","Dive body pulls the pressure off the beacon."],["Storm","Slow keeps them off the beacon."],["Doctor Strange","Shield covers the repair line."]],
  x: [["Black Panther","Dive clears the beacon and the body."],["Daredevil","Latch reaches the backline."],["Peni Parker","Mines deny the beacon spot."],["Hela","Thorn out-ranges the poke."]]
},
"Ultron": {
  p: [["Iron Man","Two aerial threats split hitscan attention."],["Adam Warlock","Two sustain supports cover the dive."],["Doctor Strange","Portal extends the drone angle."],["Storm","Slow keeps them in the encephalo-ray."],["Mantis","Inspire boosts the drone line."]],
  x: [["Hela","Thorn punishes the hover."],["Hawkeye","Knocks him out of the sky."],["Spider-Man","Pull cancels the flight."],["Peni Parker","Mines punish the landing."]]
},
"White Fox": {
  p: [["Luna Snow","Team-up spirit fox plus the freeze."],["Psylocke","Shield covers the stealth entry."],["Namor","Squids cover the fox swap."],["Storm","Slow holds them in the tail sweep."],["Mantis","Two heal lines cover the ult form."]],
  x: [["Squirrel Girl","Rain burns the sanctuary down."],["Black Panther","Dive beats the 0.4m charm."],["Peni Parker","Mines punish the form drop."],["Hela","Thorn out-ranges the claw line."]]
}
};
