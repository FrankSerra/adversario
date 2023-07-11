const adversaries = {
      "prussia": {
        "name": "Brandenburg-Prussia",
        "combiningnotes": "If Brandenburg-Prussia is level 2 or higher: Treat the level 2 Invader Deck modifier as \"Move the bottom-most Stage III card to just below the bottom-most Stage I card\" instead of its normal text.",
        "loss": {
            "name": "None",
            "desc": "No additional loss condition."
        },
        "escalation": {
          "name": "Land Rush",
          "desc": "On each board with {T}/{C}, add 1 {T} to a land without {T}."
        },
        "fear": [
          "3 / 3 / 3",
          "3 / 3 / 3",
          "3 / 4 / 3",
          "4 / 4 / 3",
          "4 / 4 / 3",
          "4 / 4 / 4"
        ],
        "invader": [
          {
            "name": "Surge of Colonists",
            "desc": "111-3-2222-3333",
            "level": 2
          },
          {
            "name": "Efficient",
            "desc": "11-3-2222-3333",
            "level": 3
          },
          {
            "name": "Aggressive Timetable",
            "desc": "11-3-222-3333",
            "level": 4
          },
          {
            "name": "Ruthlessly Efficient",
            "desc": "1-3-222-3333",
            "level": 5
          },
          {
            "name": "Terrifyingly Efficient",
            "desc": "3-222-3333",
            "level": 5
          }
        ],
        "setup": [
          {
            "name": "Fast Start",
            "desc": "On each board, add 1 {T} to land #3.",
            "level": 1
          }
        ],
        "explore": [],
        "build": [],
        "ravage": [],
        "other": []
      }, 

      "england": {
        "name": "England",
        "loss": {
          "name": "Proud & Mighty Capital",
          "desc": "If 7 or more {T}/{C} are ever in a single land, the Invaders win."
        },
        "escalation": {
          "name": "Building Boom",
          "desc": "On each board with {T}/{C}, Build in the land with the most {T}/{C}."
        },
        "fear": [
          "3 / 4 / 3",
          "4 / 4 / 3",
          "4 / 5 / 4",
          "4 / 5 / 5",
          "4 / 5 / 4",
          "5 / 5 / 4"
        ],
        "invader": [],
        "setup": [
          {
            "name": "Criminals and Malcontents",
            "desc": "On each board, add 1 {T} to land #1 and 1 {T} to land #2.",
            "level": 2
          },
          {
            "name": "High Immigration (I)",
            "desc": "Put the \"High Immigration\" tile on the Invader Board, to the left of \"Ravage\". Cards slide left from Ravage to it, and then from it to the discard.",
            "level": 3
          },
          {
            "name": "Independent Resolve",
            "desc": "Add 1 additional {Fear} per player to the fear pool for the game.",
            "level": 6
          }
        ],
        "explore": [],
        "build": [
          {
            "name": "Indentured Servants Earn Land",
            "desc": "Invader Build Cards affect matching lands without Invaders if they are adjacent to at least 2 {T}/{C}.",
            "level": 1
          },
          {
            "name": "High Immigration (I)",
            "desc": "The Invaders take the High Immigration Build action each Invader phase before Ravaging. Remove the High Imigration tile when a Stage II card slides into it, putting that card in the discard.",
            "level": 3
          },
          {
            "name": "High Immigration (II)",
            "desc": "The Invaders take the High Immigration Build action each Invader phase before Ravaging.",
            "level": 4,
            "replaces": "High Immigration (I)"
          },
          {
            "name": "Independent Resolve",
            "desc": "During any Invader Phase where you resolve no Fear Cards, perform the High Immigration Build twice. Ignore this if the High Immigration Build slot has no cards in it.",
            "level": 6
          }
        ],
        "ravage": [],
        "other": [
          {
            "name": "Local Autonomy",
            "desc": "{T}/{C} have +1 Health.",
            "level": 5
          }
        ]
      },
      
      "france": {
        "name": "France (Plantation Colony)",
        "combiningnotes": "If France is level 2 or higher: increase the starting pool of {T} by 1 per player per level of the paired Adversary.",
        "loss": {
          "name": "Sprawling Plantations",
          "desc": "Before Setup, return all but 7 {T} per player to the box. Invaders win if you ever cannot place a {T}."
        },
        "escalation": {
          "name": "Demand for New Cash Crops",
          "desc": "After Exploring, on each board, pick a land of the shown terrain. If it has {T}/{C}, add 1 {B}. Otherwise, add 1 {T}."
        },
        "fear": [
          "3 / 3 / 3",
          "3 / 4 / 3",
          "4 / 4 / 3",
          "4 / 4 / 4",
          "4 / 5 / 4",
          "4 / 5 / 5"
        ],
        "invader": [],
        "setup": [
          {
            "name": "Setup Exception",
            "desc": "The \"Frontier Explorers\" ability is ignored during Setup.",
            "level": 1
          },
          {
            "name": "Slave Labour",
            "desc": "Put the \"Slave Rebellion\" event under the top 3 cards of the Event Deck.",
            "level": 2
          },
          {
            "name": "Early Plantation",
            "desc": "On each board, add 1 {T} to the highest-numbered land without {T}, then add 1 {T} to land #1.",
            "level": 3
          }
        ],
        "explore": [
          {
            "name": "Frontier Explorers",
            "desc": "After Invaders successfully Explore into a land which had no {T}/{C}, add 1 {E} there.",
            "level": 1
          },
          {
            "name": "Persistent Explorers",
            "desc": "After resolving an Explore card, on each board add 1 {E} to a land without any {E}.",
            "level": 6
          }
        ],
        "build": [
          {
            "name": "Slave Labour",
            "desc": "After Invaders Build in a land with 2 {E} or more, replace all but 1 {E} there with an equal number of {T}.",
            "level": 2
          },
          {
            "name": "Triangle Trade",
            "desc": "Whenever Invaders build a Coastal {C}, add 1 {T} to the adjacent land with the fewest {T}.",
            "level": 4
          }
        ],
        "ravage": [],
        "other": [
          {
            "name": "Slow-Healing Ecosystem",
            "desc": "When you remove {B} from the board, put it on the Adversdary Card instead of the Blight Card. Once the Adversary Card has 3 {B} per player, move it all back to the Blight Card.",
            "level": 5
          },
          {
            "name": "Persistent Explorers",
            "desc": "Fear Cards cannot remove {E}. If one would remove {E}, you may Push them instead.",
            "level": 6
          }
        ]
      },

      "habsburglivestock": {
        "name": "Habsburg Monarchy (Livestock Colony)",
        "loss": {
          "name": "Irreparable Damage",
          "desc": "Track how much {B} comes off the Blight Card during Ravages that do 8+ damage to the land, including cascades. If that number ever exceeds the number of players, the Invaders win."
        },
        "escalation": {
          "name": "Seek Prime Territory",
          "desc": "After Exploring: On each board with 4 or fewer {B}, add 1 {T} to a land without {T}/{C}. On each board with 2 or fewer {B}, do so again."
        },
        "fear": [
          "3 / 4 / 3",
          "4 / 5 / 2",
          "4 / 5 / 3",
          "4 / 5 / 3",
          "4 / 6 / 3",
          "5 / 6 / 3"
        ],
        "invader": [
          {
            "name": "Fast Spread",
            "desc": "11-2222-33333",
            "level": 3
          }
        ],
        "setup": [
          {
            "name": "More Rural Than Urban",
            "desc": "On each board, add 1 {T} to land #2, and then add 1 {T} to the highest-numbered land without any setup symbols.",
            "level": 2
          },
          {
            "name": "Wave of Immigration",
            "desc": "Before the initial Explore, put the Habsburg Reminder Card under the top 5 Invaders cards. Perform its instructions when revealed, after performing the Explore action for the card that reveals it.",
            "level": 5
          }
        ],
        "explore": [],
        "build": [
          {
            "name": "Migratory Herders",
            "desc": "After the Build Step, in each land matching a Build Card, Gather 1 {T} from a land not matching a Build Card. Do this in board/land order.",
            "level": 1
          },
          {
            "name": "More Rural Than Urban",
            "desc": "When Invaders would Build 1 {C} in an Inland land, they instead Build 2 {T}.",
            "level": 2
          }
        ],
        "ravage": [
          {
            "name": "Far-Flung Herds",
            "desc": "Ravages do +2 Damage (total) if any adjacent lands have {T}. Ignore this in lands with no Invaders.",
            "level": 6
          }
        ],
        "other": [
          {
            "name": "Herds Thrive in Verdant Lands",
            "desc": "{T} in lands without {B} are Durable. They have +2 Health and any \"Destroy {T}\" effects instead deal 2 Damage per {T} they could destroy. Effects that say \"Destroy all {T}\" work normally.",
            "level": 4
          }
        ]
      },

      "habsburgmining": {
        "name": "Habsburg Mining Expedition",
        "loss": {
          "name": "Land Stripped Bare",
          "desc": "At the end of the Fast Phase, the Invaders win if any land has at least 8 total Invaders/{B} (combined)."
        },
        "escalation": {
          "name": "Mining Tunnels",
          "desc": "After advancing Invader Cards: on each board, Explore in 2 lands whose terrains don't match a Ravage or Build Card (no source required)."
        },
        "fear": [
          "3 / 3 / 3",
          "3 / 3 / 4",
          "3 / 4 / 4",
          "4 / 4 / 4",
          "4 / 5 / 4",
          "4 / 5 / 4"
        ],
        "invader": [
          {
            "name": "Untapped Salt Deposits",
            "desc": "111-2-Salt-22-33333",
            "level": 4
          }
        ],
        "setup": [
          {
            "name": "Miners Come From Far and Wide",
            "desc": "Add 1 {E} in each land with no {Dahan}. Add 1 Disease and 1 {C} in the highest-numbered land with a {T} Setup symbol.",
            "level": 2
          },
          {
            "name": "Untapped Salt Deposits",
            "desc": "Remove the Stage II \"Costal Lands\" card before randomly choosing Invader Cards. Place the \"Salt Deposits\" card as the second Stage II card as shown.",
            "level": 4
          },
          {
            "name": "The Empire Ascendant",
            "desc": "On boards with 3 or fewer {B}: Add +1 {E} in each land successfully explored by the inital Explore. (max 2 lands per board per Explore Card)",
            "level": 6
          }
        ],
        "explore": [
          {
            "name": "The Empire Ascendant",
            "desc": "On boards with 3 or fewer {B}: Add +1 {E} in each land successfully explored. (max 2 lands per board per Explore Card)",
            "level": 6
          }
        ],
        "build": [
          {
            "name": "Ceaseless Mining",
            "desc": "In Mining Lands: During the Build Step, Build Cards cause Ravage Actions (instead of Build Actions). Disease and modifiers to Disease affect Ravage Actions as though they were Build Actions.",
            "level": 1
          },
          {
            "name": "Mining Boom (I)",
            "desc": "After the Build Step, on each board: choose a land with {E}. Upgrade 1 {E} there.",
            "level": 3
          },
          {
            "name": "Mining Boom (II)",
            "desc": "After the Build Step, on each board: choose a land with {E}. Build there, then upgrade 1 {E}. (if the chosen land is a Mining Land, build there normally)",
            "level": 5,
            "replaces": "Mining Boom (I)"
          }
        ],
        "ravage": [
          {
            "name": "Avarice Rewarded",
            "desc": "When {B} added by a Ravage Action would cascade, instead Upgrade 1 {E}/{T} (before the {Dahan} counterattack).",
            "level": 1
          },
        ],
        "other": [
          {
            "name": "Ceaseless Mining",
            "desc": "Lands with 3+ Invaders are Mining Lands.",
            "level": 1
          },
        ]
      },

      "russia": {
        "name": "The Tsardom of Russia",
        "loss": {
          "name": "Hunters Swarm the Land",
          "desc": "Put {Beast} Destroyed by Adversary rules on this panel. If there are ever more {Beast} on this panel than on the island, the Invaders win."
        },
        "escalation": {
          "name": "Stalk the Predators",
          "desc": "Before performing the Explore: On each board, add 2 {E} (total) among lands with {Beast}. If you can't, instead add 2 {E} among lands with {Beast} on a different board."
        },
        "fear": [
          "3 / 3 / 4",
          "4 / 3 / 4",
          "4 / 4 / 3",
          "4 / 4 / 4",
          "4 / 5 / 4",
          "5 / 5 / 4"
        ],
        "invader": [
          {
            "name": "Accelerated Exploitation",
            "desc": "111-2-3-2-3-2-3-2-33",
            "level": 4
          }
        ],
        "setup": [
          {
            "name": "Hunters Bring Home Shell and Hide",
            "desc": "On each board, add 1 {Beast} and 1 {E} to the highest-numbered land without {T}/{C}.",
            "level": 1
          },
          {
            "name": "Entrench in the Face of Fear",
            "desc": "Put an unused Stage II Invader Card under the top 3 Fear cards. Put an unused Stage III Invader Card under the top 7 Fear cards.",
            "level": 5
          }
        ],
        "explore": [],
        "build": [],
        "ravage": [
          {
            "name": "Hunters Bring Home Shell and Hide",
            "desc": "{E} do +1 Damage. When Ravage adds {B} to a land (including cascades), Destroy 1 {Beast} in that land.",
            "level": 1
          },
          {
            "name": "Competition Among Hunters",
            "desc": "Ravage Cards also match lands with 3 or more {E}. If the land already matched the Ravage card, it still only Ravages once.",
            "level": 3
          },
          {
            "name": "Pressure for Fast Profit",
            "desc": "After the Ravage Step, on each board where it added no {B}: In the land with the most {E} (min. 1), add 1 {E} and 1 {T}. Ignore this ability on the first turn of the game.",
            "level": 6
          }
        ],
        "other": [
          {
            "name": "A Sense for Impending Disaster",
            "desc": "The first time each Action would Destroy {E}: If possible, 1 of those {E} is instead Pushed; 1 {Fear} when you do so.",
            "level": 2
          },
          {
            "name": "Entrench in the Face of Fear",
            "desc": "When an Invader Card is revealed from the Fear deck, immediately place it face-up in the Build space.",
            "level": 5
          }
        ]
      },

      "scotland": {
        "name": "Scotland",
        "combiningnotes": "If the other Adversary's setup instructions would add {C} to a Coastal land other than land #2, instead add {C} to an adjacent Inland land.",
        "loss": {
          "name": "Trade Hub",
          "desc": "If the number of Coastal lands with {C} is ever greater than (2 x # of boards), the Invaders win."
        },
        "escalation": {
          "name": "Ports Sprawl Outward",
          "desc": "On the single board with the most Coastal {T}/{C}: add 1 {T} to the N lands with the fewest {T}, where N = # of players."
        },
        "fear": [
          "3 / 4 / 3",
          "4 / 4 / 3",
          "4 / 5 / 4",
          "5 / 5 / 4",
          "5 / 6 / 4",
          "6 / 6 / 4"
        ],
        "invader": [
          {
            "name": "Seize Opportunity",
            "desc": "11-22-1-C-2-33333",
            "level": 2
          },
          {
            "name": "Ambition of a Minor Nation",
            "desc": "11-22-3-C-2-3333",
            "level": 4
          }
        ],
        "setup": [
          {
            "name": "Setup Exception",
            "desc": "The \"Trading Port\" ability is ignored during Setup.",
            "level": 1
          },
          {
            "name": "Seize Opportunity",
            "desc": "On each board, add {C} to land #2. When modifying the Invader Deck, \"C\" refers to the Coastal Lands Stage II card.",
            "level": 2
          }
        ],
        "explore": [
          {
            "name": "Trading Port",
            "desc": "In Coastal lands, Explore cards add 1 {T} instead of 1 {E}. The \"Coastal Lands\" Stage II Invader card only adds 2 {T} maximum per board.",
            "level": 1
          }
        ],
        "build": [
          {
            "name": "Chart the Coastline",
            "desc": "In Coastal lands, Build Cards affect lands without Invaders, so long as there is an adjacent {C}.",
            "level": 3
          }
        ],
        "ravage": [
          {
            "name": "Runoff and Bilgewater",
            "desc": "After a Ravage Action adds {B} to a Coastal land, add 1 {B} to that board's ocean. {B} placed in the ocean this way does not cascade. For this rule and for {B} removal/movement, the ocean counts as a Coastal Wetland land.",
            "level": 5
          },
          {
            "name": "Exports Fuel Inward Growth",
            "desc": "After the Ravage step, add {T} to each Inland land that matches a Ravage card and is within {Range} 1 of {T}/{C}.",
            "level": 6
          }
        ],
        "other": []
      },

      "sweden": {
        "name": "Sweden",
        "loss": {
          "name": "None",
          "desc": "No additional loss condition."
      },
        "escalation": {
          "name": "Swayed by the Invaders",
          "desc": "After Invaders Explore into each land this Phase, if that land has at least as many Invaders as {Dahan}, replace 1 {Dahan} with 1 {T}."
        },
        "fear": [
          "3 / 3 / 3",
          "3 / 4 / 3",
          "3 / 4 / 3",
          "3 / 4 / 4",
          "4 / 4 / 4",
          "4 / 4 / 5"
        ],
        "invader": [],
        "setup": [
          {
            "name": "Population Pressure at Home",
            "desc": "On each board, add {C} to land #4. On boards where land #4 starts with {B}, move that {B} to land #5 instead.",
            "level": 2
          },
          {
            "name": "Royal Backing",
            "desc": "At the end of Setup, after performing the initial Explore, discard the top card of the Invader Deck. On each board, add 1 {T} to the land of that terrain with the fewest total Invaders.",
            "level": 4
          },
          {
            "name": "Prospecting Outpost",
            "desc": "On each board, add {T} and {B} to land #8. The {B} comes from the box, not the Blight Card.",
            "level": 6
          }
        ],
        "explore": [],
        "build": [],
        "ravage": [
          {
            "name": "Heavy Mining",
            "desc": "If the Invaders do at least 6 Damage to the land during Ravage, add an extra {B}. This additional {B} does not destroy Presence or cause cascades.",
            "level": 1
          },
          {
            "name": "Fine Steel for Tools and Guns",
            "desc": "{T} deal 3 Damage, {C} deal 5 Damage. Health for both remains the same.",
            "level": 3
          },
          {
            "name": "Mining Rush",
            "desc": "When Ravaging adds at least 1 {B} to a land, add {T} to an adjacent land without {T}/{C}. {B} placed by cascades does not trigger this effect.",
            "level": 5
          }
        ],
        "other": []
      },
};