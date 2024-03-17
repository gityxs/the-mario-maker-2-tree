// 特殊层：成就
addLayer("achievements", {
    name: "achievements",
    symbol: "🏆",
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#FFE125",                       // The color for this layer, which affects many elements.
    resource: "achievement points",            // The name of this layer's main prestige resource.
    row: "side",                                 // The row this layer is on (0 is the first row).

    layerShown() { return true },          // Returns a bool for if this layer's node should be visible in the tree.

    achievements: {
        11: {
            name: "Mario disliked eating mushroom before",
            tooltip: "Unlock Super Mushroom layer. <br> Reward: 1 AP",
            done() {return hasUpgrade('coin', 14)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1")
            },
        },
        12: {
            name: "Rank 1 on total clears",
            tooltip: "Get 821,000 cleared courses. <br> Reward: 3 AP",
            done() {return player.points.gte("821000")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("3")
            },
        },
        13: {
            name: "The enemies",
            tooltip: "Unlock first super mushroom challenge. <br> Reward: 10 AP",
            done() {return hasMilestone('coin', 2)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("10")
            },
        },
        14: {
            name: "The absolute limit of course IDs",
            tooltip: "Get 3.518e13 cleared courses. <br> Reward: 50 AP",
            done() {return player.points.gte("3.518e13")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("50")
            },
        },
        15: {
            name: "Fire attack!",
            tooltip: "Unlock Fire Flower layer. <br> Reward: 333 AP",
            done() {return hasUpgrade('super_mushroom', 15)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("333")
            },
        },
        21: {
            name: "Googol courses cleared!",
            tooltip: "Get 1e100 cleared courses. <br> Reward: 2024 AP",
            done() {return player.points.gte("1e100")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("2024")
            },
        },
        22: {
            name: "Open the key door!",
            tooltip: "Get 10 Pink Key Coins. <br> Reward: 15267 AP",
            done() {return player.coin.pink_key_coin.gte("10")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("15267")
            },
        },
        23: {
            name: "Centillion courses cleared!",
            tooltip: "Get 1e303 cleared courses. <br> Reward: 74751 AP",
            done() {return player.points.gte("1e303")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("74751")
            },
        },
        24: {
            name: "Infinite coins",
            tooltip: "Get 1.79769e308 coins. <br> Reward: 501761 AP",
            done() {return player.coin.points.gte("1.79769313e308")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("501761")
            },
        },
        25: {
            name: "Players' instincts",
            tooltip: "Unlock Invincible Star layer. <br> Reward: 6952965 AP",
            done() {return hasUpgrade('fire_flower', 25)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("6952965")
            },
        },
        31: {
            name: "Destroy the goomba tower!",
            tooltip: "Get 3rd Invincible Star upgrade. <br> Reward: 12413170 AP <br> Autobuy coin upgrades, forever.",
            done() {return hasUpgrade('invincible_star', 13)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("12413170")
            },
        },
        32: {
            name: "Shiny!",
            tooltip: "Get 4th Invincible Star upgrade. <br> Reward: 20190628 AP <br> Super Mushroom resets nothing, forever.",
            done() {return hasUpgrade('invincible_star', 14)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("20190628")
            },
        },
        33: {
            name: "Watch out! A Gap!",
            tooltip: "Get 5th Invincible Star upgrade. <br> Reward: 178,228,909 AP <br> Autobuy coin buyables 1~3, forever.",
            done() {return hasUpgrade('invincible_star', 15)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("178228909")
            },
        },
        34: {
            name: "Invincible Stars also have drawbacks",
            tooltip: "Get 7th Invincible Star upgrade. <br> Reward: 1.68e9 AP <br> Generate 100% Coins and Super Mushrooms passively, forever.",
            done() {return hasUpgrade('invincible_star', 22)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1.68e9")
            },
        },
        35: {
            name: "1UP!",
            tooltip: "Unlock 1UP Mushroom layer. <br> Reward: 7.77e10 AP",
            done() {return hasUpgrade('invincible_star', 25)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("7.77e10")
            },
        },
        41: {
            name: "Max lives in SM3DW",
            tooltip: "Get 1110 1UP Mushroom. <br> Reward: 1.14e13 AP",
            done() {return player.oneup_mushroom.points.gte(1110)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1.14e13")
            },
        },
        42: {
            name: "The Mushroom Kingdom",
            tooltip: "Get 1e1000 Super Mushroom. <br> Reward: 2.67e15 AP",
            done() {return player.super_mushroom.points.gte("1e1000")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("2.67e15")
            },
        },
        43: {
            name: "Geometry",
            tooltip: "Unlock Bouncy Ball Flower layer. <br> Reward: 1.00e20 AP",
            done() {return hasUpgrade('invincible_star', 35)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1.00e20")
            },
        },
        44: {
            name: "Crazy amount",
            tooltip: "Get 1e10000 Cleared Courses. <br> Reward: 1.66e31 AP <br> Autobuy Invincible Star and it resets nothing, forever.",
            done() {return player.points.gte("1e10000")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1.66e31")
            },
        },
        45: {
            name: "Bounce speed like light",
            tooltip: "Get 299,792,458 Bouncy Ball Flowers. <br> Reward: 3.21e42 AP",
            done() {return player.bouncy_ball_flower.points.gte("299792458")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("3.21e42")
            },
        },
        51: {
            name: "Best star shine!",
            tooltip: "Get 20 Invincible Stars. <br> Reward: 1.00e50 AP <br>",
            done() {return player.invincible_star.points.gte(20)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e50")
            },
        },
        52: {
            name: "The giant",
            tooltip: "Unlock Big Mushroom layer. <br> Reward: 1.00e74 AP <br>",
            done() {return player.invincible_star.points.gte(20)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e74")
            },
        },
        53: {
            name: "I don't want to click the challenge anymore",
            tooltip: "Get 11th 1UP Mushroom upgrade. <br> Reward: 1.00e99 AP <br> Auto complete challenge Goomba, forever.",
            done() {return hasUpgrade('oneup_mushroom', 31)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e99")
            },
            effect() {
                if (hasUpgrade('oneup_mushroom', 31) || hasAchievement('achievements', 53))
                return player.super_mushroom.challenges[11] = new Decimal(3)
            },
        },
        54: {
            name: "Broke all the ice",
            tooltip: "Get 10000 Broken Ice Blocks. <br> Reward: 1.00e126 AP <br>",
            done() {return player.big_mushroom.broken_ice_block.gte(10000)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e126")
            },
        },
        55: {
            name: "Fly!",
            tooltip: "Unlock Super Leaf layer. <br> Reward: 1.00e200 AP <br>",
            done() {return hasUpgrade('oneup_mushroom', 35)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e200")
            },
        },
        61: {
            name: "Necessary automation",
            tooltip: "Get your first Super Leaf. <br> Reward: 1.79e308 AP <br> Keep the reward on 1st Super Leaf milestone forever.",
            done() {return hasMilestone('super_leaf', 0)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1.79e308")
            },
        },
        62: {
            name: "Clicking too much is tiring",
            tooltip: "Get your second Super Leaf. <br> Reward: 2.71e412 AP <br> Keep the reward on 2nd Super Leaf milestone forever.",
            done() {return hasMilestone('super_leaf', 1)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("2.71e412")
            },
        },
        63: {
            name: "Flying training",
            tooltip: "Get your fourth Super Leaf. <br> Reward: 5.10e541 AP <br> Keep the reward about automation on 3rd and 4th Super Leaf milestones forever.",
            done() {return hasMilestone('super_leaf', 3)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("5.10e541")
            },
        },
        64: {
            name: "Fly faster",
            tooltip: "Get your sixth Super Leaf. <br> Reward: 7.77e777 AP <br> Keep the reward on 6th Super Leaf milestone forever.",
            done() {return hasMilestone('super_leaf', 5)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("7.77e777")
            },
        },
        65: {
            name: "Flying skills",
            tooltip: "Get 1 SL Skill Point. <br> Reward: 1.66e1209 AP <br>",
            done() {return player.super_leaf.slsp.gte(1)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1.66e1209")
            },
        },
        71: {
            name: "10^elephant",
            tooltip: "Get 1e74751 Cleared Courses. <br> Reward: 1.00e1500 AP <br>",
            done() {return player.points.gte("1e74751")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e1500")
            },
        },
        72: {
            name: "Dropped from a bird?",
            tooltip: "Unlock Cape Feather layer. <br> Reward: 1.00e2024 AP <br>",
            done() {return hasUpgrade('super_leaf', 321)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e2024")
            },
        },
        73: {
            name: "10^crow",
            tooltip: "Get 1e501761 Cleared Courses. <br> Reward: 1.00e3250 AP <br>",
            done() {return player.points.gte("1e501761")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e3250")
            },
        },
        74: {
            name: "10^Vrabbit",
            tooltip: "Get 1e1666390 Cleared Courses. <br> Reward: 1.00e5000 AP <br>",
            done() {return player.points.gte("1e1666390")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e5000")
            },
        },
        75: {
            name: "Destroy the icy world",
            tooltip: "Get 1e1000 Broken Ice Blocks. <br> Reward: 1.00e7500 AP <br>",
            done() {return player.big_mushroom.broken_ice_block.gte("1e1000")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e7500")
            },
        },
        81: {
            name: "It's your friend, not your tool!",
            tooltip: "Unlock Yoshi Egg layer. <br> Reward: 1.00e11451 AP <br>",
            done() {return hasUpgrade('cape_feather', 35)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e11451")
            },
        },
        82: {
            name: "Green or red?",
            tooltip: "Get 501761 Yoshis and 501761 Red Yoshis. <br> Reward: 1.00e24500 AP <br>",
            done() {return player.yoshi_egg.yoshi.gte(501761) && player.yoshi_egg.red_yoshi.gte(501761)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e24500")
            },
        },
        83: {
            name: "Helicopter",
            tooltip: "Unlock Propeller Mushroom layer and get 1 Propeller Mushroom. <br> Reward: 1.00e47000 AP <br>Keep all the automations in row 3.",
            done() {return player.propeller_mushroom.points.gte(1)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e47000")
            },
        },
        84: {
            name: "Micrillion fire shots",
            tooltip: "Get 1e3000003 Fire Flowers. <br> Reward: 1.00e81818 AP.",
            done() {return player.fire_flower.points.gte("1e3000003")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e81818")
            },
        },
        85: {
            name: "Another flying training",
            tooltip: "Unlock 1st Propeller Mushroom challenge. <br> Reward: 1.00e100000 AP.",
            done() {return hasUpgrade('yoshi_egg', 31)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e100000")
            },
        },
        91: {
            name: "Golden power-up",
            tooltip: "Unlock Super Bell layer. <br> Reward: 1.00e300000 AP.",
            done() {return hasUpgrade('propeller_mushroom', 25)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e300000")
            },
        },
        92: {
            name: "Trialogue clears??",
            tooltip: "Get e1e10 Cleared Courses. <br> Reward: 1.00e1200000 AP.",
            done() {return player.points.gte("ee10")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e1200000")
            },
        },
        93: {
            name: "Giga bell (Bowser's Fury)",
            tooltip: "Get 1e200 Super Bells. <br> Reward: 1.00e2400000 AP.",
            done() {return player.super_bell.points.gte(1e200)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e2400000")
            },
        },
        94: {
            name: "For workers?",
            tooltip: "Unlock Super Hammer layer. <br> Reward: 1.00e3600000 AP.",
            done() {return hasUpgrade('propeller_mushroom', 35)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e3600000")
            },
        },
        95: {
            name: "Centipicillion clears",
            tooltip: "Get e3e14 Cleared Courses. <br> Reward: 1.00e7250000 AP.",
            done() {return player.points.gte("e3e14")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e7250000")
            },
        },
        101: {
            name: "Create",
            tooltip: "Unlock Super Hammer challenges. <br> Reward: 1.00e10000000 AP.",
            done() {return hasUpgrade('super_bell', 35)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e10000000")
            },
        },
        102: {
            name: "Proof of the master",
            tooltip: "Unlock Master Sword layer. <br> Reward: 1.00e19860221 AP.",
            done() {return hasUpgrade('super_hammer', 35)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e19860221")
            },
        },
        103: {
            name: "Center area",
            tooltip: "Aim the center area for explotion. <br> Reward: 1.00e31700000 AP.",
            done() {return player.master_sword.links_bomb_random == 5},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e31700000")
            },
        },
        104: {
            name: "A lot of golden rupee!",
            tooltip: "Get 300,000,000 Rupee. <br> Reward: 1.00e100,000,000 AP.",
            done() {return player.master_sword.rupee.gte(300000000)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e100000000")
            },
        },
        105: {
            name: "You still remember this",
            tooltip: "Get 1e258 Super Hammer. <br> Reward: e1.000e10 AP, unlock 33rd Master Sword upgrade.",
            done() {return player.super_hammer.points.gte(1e258)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("ee10")
            },
        },
        111: {
            name: "SMB2?",
            tooltip: "Unlock SMB2 Mushroom layer. <br> Reward: e1.111e11 AP.",
            done() {return hasUpgrade('master_sword', 75)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("e1.111e11")
            },
        },
        112: {
            name: "Grabbing is easier",
            tooltip: "Buy 'Exa Grabbing' once. <br> Reward: e1.500e13 AP.",
            done() {return player.usa_mushroom.buyables[31].gte(1)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("e1.500e13")
            },
        },
        113: {
            name: "Quetta+",
            tooltip: "Get 1e1000 Grabbing Enemies. <br> Reward: e5.500e15 AP.",
            done() {return player.usa_mushroom.grabs.gte("1e1000")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("e2.500e15")
            },
        },
        114: {
            name: "Cat, raccoon and... Frog?",
            tooltip: "Unlock Frog Suit layer. <br> Reward: e2.000e20 AP.",
            done() {return hasMilestone('oneup_mushroom', 2)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("e2.000e20")
            },
        },
        115: {
            name: "Physics does not exist!",
            tooltip: "Make Frog Mario's swimming speed over than light speed (c). <br> Reward: e2.024e24 AP.",
            done() {return player.frog_suit.swim_speed.gte(299792458)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("e2.024e24")
            },
        },
        121: {
            name: "Why balloons can't wear helmets?",
            tooltip: "Unlock Power Balloon layer. <br> Reward: e1e32 AP.",
            done() {return hasUpgrade('frog_suit', 35)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("ee32")
            },
        },
        122: {
            name: "Newton's acorn",
            tooltip: "Unlock Super Acorn layer. <br> Reward: e1e35 AP.",
            done() {return hasUpgrade('power_balloon', 15)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("ee35")
            },
        },
        123: {
            name: "Infinite Space",
            tooltip: "Get 1.79e308 Expansion Space. <br> Reward: e1e38 AP.",
            done() {return player.power_balloon.space.gte("1.79e308")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("ee38")
            },
        },
        124: {
            name: "Milestone^2",
            tooltip: "Overpower your first milestone. <br> Reward: e1e41 AP.",
            done() {return hasUpgrade('power_balloon', 45)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("ee41")
            },
        },
        125: {
            name: "The last power-up has arrived!",
            tooltip: "Unlock Boomerang Flower layer. <br> Reward: e1e50 AP.",
            done() {return hasUpgrade('super_acorn', 32)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("ee50")
            },
        },
    },
    upgrades: {
        11: {
            title: "希望不会有BUG",
             description: "但愿吧。",
            cost: new Decimal("10^^1666390"),
        },
    },
})
// 特殊层：统计
addLayer("stats", {
    name: "Statistics",
    symbol: "St",
    points: new Decimal(0),
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#FFFFFF",                       // The color for this layer, which affects many elements.
    resource: "statistics",            // The name of this layer's main prestige resource.
    row: "side",                                 // The row this layer is on (0 is the first row).

    layerShown() { return true },          // Returns a bool for if this layer's node should be visible in the tree.
    tabFormat: [
        "main-display",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Statistics": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["display-text", function() {
                        return "You have <h2 style='color: #ffffff; text-shadow: 0 0 10px #ffffff'>" + format(player.points) + "</h2> Cleared Courses."
                    }],
                    ["display-text", function() {
                        if (player.points.lte(836000))
                        return "The number of Cleared Courses is "+ format(player.points.div(3000)) + " times of Rosalina's outfits' requirment."
                        else if (player.points.lte(1e20))
                        return "The number of Cleared Courses is "+ format(player.points.div(836000)) + " times of Total Clears Rank 1's (Feb. 2024) amount."
                        else if (player.points.lte(1e180))
                        return "If you wrote 3 numbers a second, it would take you "+ format(player.points.log(10).div(3)) + " seconds to write down your Cleared Courses amount.<br>"
                        else if (player.points.lte("1e10800"))
                        return "If you wrote 3 numbers a second, it would take you "+ format(player.points.log(10).div(180)) + " minutes to write down your Cleared Courses amount.<br>Also you can clear " + format(player.points.log(10).div(180).times(1.1)) + " courses in Easy Endless."
                        else if (player.points.lte("1e259200"))
                        return "If you wrote 3 numbers a second, it would take you "+ format(player.points.log(10).div(10800)) + " hours to write down your Cleared Courses amount.<br>Also you can clear " + format(player.points.log(10).div(180).times(1.1)) + " courses in Easy Endless."
                        else if (player.points.lte("1e94608000"))
                        return "If you wrote 3 numbers a second, it would take you "+ format(player.points.log(10).div(259200)) + " days to write down your Cleared Courses amount.<br>Also you can clear " + format(player.points.log(10).div(1440)) + " courses in Super Expert Endless."
                        else
                        return "If you wrote 3 numbers a second, it would take you "+ format(player.points.log(10).div(94608000)) + " years to write down your Cleared Courses amount.<br>Also you can get a " + format(player.points.log(10).div(540).log(4)) + "-win streak in Versus Mode."
                    }],
                ]
            },
        },
    },
}),
// 第一层：金币
addLayer("coin", {
    name: "coin", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        pink_key_coin: new Decimal(0),
    }},
    color: "#FEB252",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Coins", // Name of prestige currency
    baseResource: "cleared courses", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1).times(tmp["fire_flower"].effect)
        if (hasMilestone('coin', 0)) mult = mult.times(2.5)
        if (hasMilestone('coin', 1)) mult = mult.times(3)
        if (hasUpgrade('coin', 21)) mult = mult.times(upgradeEffect('coin', 21))
        if (hasUpgrade('coin', 22)) mult = mult.times(20)
        if (hasUpgrade('coin', 23)) mult = mult.times(100)
        if (hasUpgrade('coin', 24)) mult = mult.times(2024)
        if (hasUpgrade('coin', 25)) mult = mult.times(9402011)
        if (player.coin.pink_key_coin.gte(1)) mult = mult.times(tmp.coin.effect)
        if (hasUpgrade('coin', 33)) mult = mult.times(100)
        if (hasUpgrade('invincible_star', 34)) mult = mult.times(1e100)
        if (hasMilestone('coin', 3)) mult = mult.times(1e50)
        if (hasUpgrade('yoshi_egg', 23)) mult = mult.times(Decimal.pow(1.1, player.yoshi_egg.yoshi.min(player.yoshi_egg.yoshi.max(100000000).log(100).sub(3).times(100000000)).max(1)))
        if (hasUpgrade('yoshi_egg', 23) && inChallenge('super_hammer', 11)) mult = mult.div(Decimal.pow(1.1, player.yoshi_egg.yoshi.min(player.yoshi_egg.yoshi.max(100000000).log(100).sub(3).times(100000000)).max(1)))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        if (inChallenge('invincible_star', 11)) exp = exp.times(0.1)
        if (hasChallenge('invincible_star', 12)) exp = exp.times(1.1)
        if (hasUpgrade('super_bell', 13) && player.points.lte("e1e11")) exp = exp.times(2)
        if (hasUpgrade('propeller_mushroom', 31)) exp = exp.times(3)
        return exp
    },
    softcap(){
        let Csoftcap = new Decimal("e1.8e12")
        if (hasUpgrade('super_hammer', 14)) Csoftcap = new Decimal("e3e13")
        return new Decimal(Csoftcap)
    },
    softcapPower(){
        return new Decimal(0.2)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for Coins", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    passiveGeneration() {return hasMilestone('super_mushroom', 0) || hasAchievement('achievements', 34)},
    update(multPKC) {
        multPKC = new Decimal(0.05)
        if (hasUpgrade("coin", 31)) multPKC = multPKC.times(buyableEffect('coin', 11))
        if (hasUpgrade("coin", 31)) multPKC = multPKC.times(buyableEffect('coin', 12))
        if (hasUpgrade('coin', 33)) multPKC = multPKC.times(100)
        if (hasUpgrade('invincible_star', 24)) multPKC = multPKC.times(1e100)
        if (hasUpgrade('fire_flower', 22)) multPKC = multPKC.times(buyableEffect('coin', 13))
        if (hasUpgrade('oneup_mushroom', 25)) multPKC = multPKC.times(1e30)
        if (hasChallenge('oneup_mushroom', 11)) multPKC = multPKC.times(challengeEffect('oneup_mushroom', 11).max(1))
        if (inChallenge('invincible_star', 12)) multPKC = multPKC.times(0)
		if (hasUpgrade("coin", 31)) player.coin.pink_key_coin = player.coin.pink_key_coin.add(multPKC)    
        if (hasUpgrade('super_acorn', 101)) player.coin.points = player.coin.points.add("e9e45")
    },
    autoUpgrade() {return hasUpgrade('fire_flower', 12) || hasAchievement('achievements', 31)},
    effect(){return Decimal.pow(player[this.layer].pink_key_coin.max(0), 1.5).add(1)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
                if(hasMilestone('fire_flower', 1)) {
                kept.push("milestones")
                }
                if(hasMilestone('master_sword', 8)) {
                kept.push("upgrades")
                }
            layerDataReset(this.layer, kept)
        }
    },
    upgrades: {
        11: {
            title: "It begins!",
             description: "Triple your cleared courses gain.",
            cost: new Decimal(1),
        },
        12: {
            title: "Here are more coins!",
            description: "Multiply cleared courses gain based on your current coins.",
            cost: new Decimal(5),
            unlocked() {return hasUpgrade('coin', 11)},
            effect() {
                let CU2softcap = new Decimal("e1e16")
                if (hasUpgrade('master_sword', 21)) CU2softcap = CU2softcap.pow(2)
                if (hasUpgrade('master_sword', 25)) CU2softcap = CU2softcap.pow(player.super_hammer.characters_box.max(1).log(1e10).add(1).pow(2).times(2))
                if (hasUpgrade('master_sword', 72)) CU2softcap = CU2softcap.pow(upgradeEffect('master_sword', 72))
                if (hasUpgrade('power_balloon', 45)) CU2softcap = CU2softcap.pow(25)
                if (player.coin.points.gte(CU2softcap))
                return player[this.layer].points.add(1).pow(0.1).times(CU2softcap.pow(0.4))
                else return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { 
                let CU2softcap = new Decimal("e1e16")
                if (hasUpgrade('master_sword', 21)) CU2softcap = CU2softcap.pow(2)
                if (hasChallenge('super_hammer', 11)) CU2softcap = CU2softcap.pow(player.super_hammer.characters_box.max(1).log(1e10).add(1))
                if (hasUpgrade('power_balloon', 45)) CU2softcap = CU2softcap.pow(25)
                if (player.coin.points.gte(CU2softcap))
                return format(upgradeEffect(this.layer, this.id))+"x (softcapped)"
                else return format(upgradeEffect(this.layer, this.id))+"x"}, // Add formatting to the effect
        },
        13: {
            title: "Coin reward room",
            description: "Multiply cleared courses gain based on theirselves.",
            cost: new Decimal(20),
            unlocked() {return hasUpgrade('coin', 12)},
            effect() {
                return player.points.add(1).pow(0.2).times(1.5)
            },
            effectDisplay() {
                return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        14: {
            title: "You need a power-up!",
            description: "Double your cleared courses gain and unlock a new layer",
            cost: new Decimal(125),
            unlocked() {return hasUpgrade('coin', 13)},
        }, 
        15:{
            title: "Faster and faster",
            description: "Multiply cleared courses gain based on theirselves.",
            cost: new Decimal(2024),
            unlocked() {return hasUpgrade('super_mushroom', 12)},
            effect() {
                return player.points.add(10).log(10)
            },
            effectDisplay() { 
                return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        21:{
            title: "From coins to 1-ups",
            description: "Multiply coin gain based on super mushrooms.",
            cost: new Decimal(501761),
            unlocked() {return hasUpgrade('coin', 15)},
            effect() {
                return player.super_mushroom.points.add(3).log(3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22:{
            title: "Coin pool",
            description: "20x coin gain",
            cost: new Decimal(1e19),
            unlocked() {return hasUpgrade('coin', 21)},
        },
        23:{
            title: "Lakitu throws coins",
            description: "100x coin gain",
            cost: new Decimal(1.5267e26),
            unlocked() {return hasUpgrade('coin', 22)},
        },
        24:{
            title: "Bullet launches coins",
            description: "2024x coin gain",
            cost: new Decimal(5e30),
            unlocked() {return hasUpgrade('coin', 23)},
        },
        25:{
            title: "Red pipe generates coins",
            description: "9,402,011x coin gain and unlock super mushroom upgrade 15",
            cost: new Decimal(7.777e37),
            unlocked() {return hasUpgrade('coin', 24)},
        },
        31:{
            title: "Key door",
            description: "Start to generate 1 pink key coin every second.",
            cost: new Decimal(1.234e80),
            unlocked() {return hasUpgrade('fire_flower', 13)},
        },
        32:{
            title: "Key door trolls are bad",
            description: "Unlock the 2nd coin buyable.",
            cost: new Decimal(1.111e100),
            unlocked() {return hasUpgrade('coin', 31)},
        },
        33:{
            title: "P switches affect coins",
            description: "100x Coin and Pink Key Coin gain",
            cost: new Decimal(1.111e150),
            unlocked() {return hasUpgrade('coin', 32)},
        },
        34:{
            title: "More coins and more fire?",
            description: "Gain more Fire Flower based on coins with a weak effect.",
            cost: new Decimal("3.33e333"),
            unlocked() {return hasUpgrade('coin', 33)},
            effect() {
                return player.coin.points.max(1).log(10).div(10).max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        35:{
            title: "Automate mushrooms",
            description: "Passive gain 100% Super Mushroom every second and unlock more Fire Flower upgrades.",
            cost: new Decimal("1.2e345"),
            unlocked() {return hasUpgrade('coin', 34)},
        },
    },
    buyables: {
        11: {
            title: "Fragments of the key",
            cost(x) { return new Decimal(2).pow(Decimal.pow(x, 1.5).add(1)) },
            display() { return ` Multiply 5 Pink Key Coin every level. <br>
                Effect: x${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Pink Key Coins`}, 
            canAfford() { return player[this.layer].pink_key_coin.gte(this.cost()) },
            buy() {
                player[this.layer].pink_key_coin = player[this.layer].pink_key_coin.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {return new Decimal(5).pow(x)},
            unlocked() {return hasUpgrade('fire_flower', 13)}
        },
        12: {
            title: "No key touching challenge in SM3DW",
            cost(x) { return new Decimal(5).pow(Decimal.pow(x, 1.75).add(1)) },
            display() { return ` Multiply 10 Pink Key Coin every level. <br>
                Effect: x${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Pink Key Coins`}, 
            canAfford() { return player[this.layer].pink_key_coin.gte(this.cost()) },
            buy() {
                player[this.layer].pink_key_coin = player[this.layer].pink_key_coin.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            
            },
            effect(x) {return new Decimal(10).pow(x)},
            unlocked() {return hasUpgrade('coin', 32)}
        },
        13: {
            title: "Keys are in bubbles",
            cost(x) { return new Decimal(8).pow(Decimal.pow(x, 2).add(1)) },
            display() { return ` Multiply 2019 Pink Key Coin every level. <br>
                Effect: x${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Pink Key Coins`}, 
            canAfford() { return player[this.layer].pink_key_coin.gte(this.cost()) },
            buy() {
                player[this.layer].pink_key_coin = player[this.layer].pink_key_coin.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            
            },
            effect(x) {return new Decimal(2019).pow(x)},
            unlocked() {return hasUpgrade('fire_flower', 22)}
        },
    },
    automate(){
        if (player.coin.pink_key_coin.lte(0)) return
        if (hasMilestone('fire_flower', 0)) {
            if (player.coin.pink_key_coin) {
                hasMilestone("fire_flower", 0) ? setBuyableAmount("coin",11,tmp.coin.buyables[11].canAfford?player.coin.pink_key_coin.log(2).subtract(1).pow(1/1.5).floor().add(1):getBuyableAmount("coin",11)) : buyBuyable("coin",11)
            }
            if (player.coin.pink_key_coin) {
                hasMilestone("fire_flower", 0) ? setBuyableAmount("coin",12,tmp.coin.buyables[12].canAfford?player.coin.pink_key_coin.log(5).subtract(1).pow(1/1.75).floor().add(1):getBuyableAmount("coin",12)) : buyBuyable("coin",12)
            }
            if (player.coin.pink_key_coin) {
                hasMilestone("invincible_star", 0) ? setBuyableAmount("coin",13,tmp.coin.buyables[13].canAfford?player.coin.pink_key_coin.log(8).subtract(1).pow(1/2).floor().add(1):getBuyableAmount("coin",13)) : buyBuyable("coin",13)
            }
        }
        if (hasAchievement('achievements', 33)) {
            if (player.coin.pink_key_coin) {
                hasAchievement('achievements', 33) ? setBuyableAmount("coin",11,tmp.coin.buyables[11].canAfford?player.coin.pink_key_coin.log(2).subtract(1).pow(1/1.5).floor().add(1):getBuyableAmount("coin",11)) : buyBuyable("coin",11)
            }
            if (player.coin.pink_key_coin) {
                hasAchievement('achievements', 33) ? setBuyableAmount("coin",12,tmp.coin.buyables[12].canAfford?player.coin.pink_key_coin.log(5).subtract(1).pow(1/1.75).floor().add(1):getBuyableAmount("coin",12)) : buyBuyable("coin",12)
            }
            if (player.coin.pink_key_coin) {
                hasAchievement('achievements', 33) ? setBuyableAmount("coin",13,tmp.coin.buyables[13].canAfford?player.coin.pink_key_coin.log(8).subtract(1).pow(1/2).floor().add(1):getBuyableAmount("coin",13)) : buyBuyable("coin",13)
            }
        }
    },
    milestones: {
        0: {
            requirementDescription(){des = "Reach 6871 cleared courses"
                if (hasUpgrade('power_balloon', 45)) des = des + " (Overpowered)"
                return des},
            effectDescription() {des = "x2.5 your coins gain."
            if (hasUpgrade('power_balloon', 45)) des = des + "<br> Overpowered effect: Delay 2nd Coin upgrade's softcap by ^25."
            return des},
            done() { return player.points.gte(6871) },
            style(){if (hasUpgrade('power_balloon', 45)) return{'background-color':'#ffad00'}}
        },
        1: {
            requirementDescription(){des = "Reach 74751 coins"
                if (hasUpgrade('super_acorn', 101)) des = des + " (Overpowered)"
                return des},
            effectDescription() {des = "Triple coin gain."
            if (hasUpgrade('super_acorn', 101)) des = des + "<br> Overpowered effect: You start every reset with " + format(new Decimal("e9e45")) + " Coins."
            return des},
            done() { return player.coin.points.gte(74751) },
            style(){if (hasUpgrade('super_acorn', 101)) return{'background-color':'#ffad00'}}
        },
        2: {
            requirementDescription: "Reach 50,000,000 coins",
            effectDescription: "Unlock a super mushroom challenge.",
            done() { return player.coin.points.gte(50000000) },
        },
        3: {
            requirementDescription(){return "Reach "+ format(new Decimal(1e175))+" coins"},
            effectDescription: "Cleared courses gain x1e50.",
            done() { return player.coin.points.gte(1e175) },
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["display-text", () => "Softcap starts at e1.8e12 Coins"],
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Coin is the basic resource in 2D Mario game. <br> It never has been changed!`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
                
            },
            "Pink Key Coins": {
                unlocked() {return (hasUpgrade("fire_flower", 13))},
                content: [
                    ["blank", "15px"],
                    ["display-text", () => "You have <h2 style='color: #ff746f; text-shadow: 0 0 10px #ff746f'>" + format(player.coin.pink_key_coin) + "</h2> Pink Key Coins, multiplying Coin gain by <h2 style='color: #ff746f; text-shadow: 0 0 10px #ff746f'> <br>" + format(player.coin.pink_key_coin.max(1).pow(1.5)) + "x</h2>.<br>"],
                    "buyables"
                ]
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones"
                ]    
            },
        },
    },
})
// 第二层：超级蘑菇
addLayer("super_mushroom", {
    name: "super_mushroom", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SM", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#C42533",
    requires: new Decimal(500), // Can be a function that takes requirement increases into account
    resource: "Super Mushrooms", // Name of prestige currency
    baseResource: "coins", // Name of resource prestige is based on
    baseAmount() {return player.coin.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1/3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('super_mushroom', 12)) mult = mult.times(1.5)
        mult = mult.times(challengeEffect('super_mushroom', '11'))
        if (hasMilestone('invincible_star', 1)) mult = mult.times(6879)
        if (hasAchievement('achievements', 43)) mult = mult.times(player.bouncy_ball_flower.bouncy_ball.max(1).pow(2.35))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        if (hasUpgrade('fire_flower', 24)) exp = exp.times(1.1)
        if (inChallenge('oneup_mushroom', 11)) exp = exp.times(0.01)
        return exp
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "M: Reset for Super Mushrooms", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ["coin"],
    resetsNothing() {return hasMilestone ('super_mushroom', 1) || hasAchievement('achievements', 32)},
    layerShown() {return hasUpgrade('coin', 14) || hasAchievement('achievements', 11)},
    passiveGeneration() {return hasUpgrade('coin', 35) || hasAchievement('achievements', 34)},
    autoUpgrade() {return hasMilestone('invincible_star', 3) || hasAchievement('achievements', 61)},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
                if(hasMilestone('invincible_star', 2)) {
                kept.push("milestones")
            }
                if(hasMilestone('master_sword', 9)) {
                kept.push("upgrades")
                }

        layerDataReset(this.layer, kept)
    }
},
    upgrades: {
        11: {
            title: "I'm stronger!",
            description: "Multiply cleared courses gain based on super mushrooms.",
            cost: new Decimal(1),
            effect() {
                return player.super_mushroom.points.add(1).pow(1.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            title: "Be able to break normal bricks",
            description: "x1.5 super mushroom gain and unlock more coin upgrades.",
            cost: new Decimal(3),
            unlocked() {return hasUpgrade('super_mushroom', 11)},
        },
        13: {
            title: "Jump on the enemies!",
            description: "Multiply cleared courses gain based on time spent on this super mushroom reset.",
            cost: new Decimal(1528),
            effect() {
                let SMU13factor = player.super_mushroom.resetTime + 1
                return Decimal.pow(SMU13factor, 1.5)
            },
            unlocked() {return hasUpgrade('super_mushroom', 12)},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        14: {
            title: "Life farming",
            description: "Challenge Goomba's base is 15 now.",
            cost: new Decimal(3e10),
            unlocked() {return hasUpgrade('super_mushroom', 13)},
        },
        15: {
            title: "You need a stronger power-up, right?",
            description: "Unlock a new layer",
            cost: new Decimal(5e20),
            unlocked() {return hasUpgrade('coin', 25)},
        }
    },
    milestones: {
        0: {
            requirementDescription: "Reach 125138 super mushrooms",
            effectDescription: "Gain coins 100% of your reset every second passively.",
            done() { return player.super_mushroom.points.gte(125138) },
        },
        1: {
            requirementDescription: "Reach 1.5267e105 super mushrooms",
            effectDescription: "Super mushroom resets nothing.",
            done() { return player.super_mushroom.points.gte(1.5267e105) },
        },
    },
    buyables: {
        11: {
            title: "999-coin clear condition",
            cost(x) { return new Decimal(3e24).pow(Decimal.pow(x, 1.5).add(1)) },
            display() { return ` Multiply 1e10 cleared courses every level. <br>
                Effect: x${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} super mushrooms`}, 
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {return new Decimal(1e10).pow(x)},
            unlocked() {return hasUpgrade('fire_flower', 11)}
        },
    },
    challenges: {
        11: {
            name: "Goombas",
            challengeDescription: "Square root cleared courses gain",
            goalDescription: "5000/25000000/1.25e11 cleared courses for 1st/2nd/3rd completion",
            completionLimit: new Decimal (3),
            canComplete: function() {
                let basicSMC1 = new Decimal (5000)
                let SMC1factor = ((challengeCompletions("super_mushroom", 11))) + 1
                return player.points.gte(basicSMC1.pow(SMC1factor))},
            rewardDescription: "Decuple(10x) super mushroom gain per every completion.",
            rewardEffect() {
                let SMC1C=(challengeCompletions("super_mushroom", 11)) 
                if (hasUpgrade('super_mushroom', 14))
                {return Decimal.pow(15, SMC1C)}
                else {
                return Decimal.pow(10, SMC1C)}
            },
            rewardDisplay() { return format(challengeEffect(this.layer, this.id))+"x <br> Completions: "+format(challengeCompletions(this.layer, this.id))+"/3" },
            unlocked() {return hasMilestone('coin', 2) || hasAchievement('achievements', 13)},
        },
    },
    automate(){
        if (player.super_mushroom.points.lte(0)) return
        if (hasMilestone('oneup_mushroom', 0)) {
            if (player.super_mushroom.points) {
                hasMilestone('oneup_mushroom', 0) ? setBuyableAmount("super_mushroom",11,tmp.super_mushroom.buyables[11].canAfford?player.super_mushroom.points.log(3e24).subtract(1).pow(1/1.5).floor().add(1):getBuyableAmount("super_mushroom",11)) : buyBuyable("super_mushroom",11)
            }
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Super Mushroom upgrades are stronger! <br>Super Mushroom is a kind of Power-ups, first appearance is in SMB1 (1985).`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
                
            },
            "Buyables": {
                unlocked() {return (hasUpgrade("fire_flower", 11))},
                content: [
                    ["blank", "15px"],
                    "buyables"
                ]
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones"
                ]    
            },
            "Challenges": {
                unlocked() {return hasMilestone('coin', 2) || hasAchievement('achievements', 13)},
                content: [
                    ["blank", "15px"],
                    "challenges"
                ]    
            },
        },
    },
})
// 第三层：火之花
addLayer("fire_flower", {
    effect(){
        return Decimal.pow(player[this.layer].points, 2).add(1)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
      },
effectDescription(){
    return "multiplying coin gain by " + format(tmp[this.layer].effect)
    /*
      use format(num) whenever displaying a number
    */
  },
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},
    name: "fire_flower",
    symbol: "FF",
    color: "#FF8D00",                       // The color for this layer, which affects many elements.
    resource: "Fire Flowers",            // The name of this layer's main prestige resource.
    row: 1,                                 // The row this layer is on (0 is the first row).
    position: 1,
    baseResource: "coins",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.coin.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(1e55),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent(){return new Decimal(0.015)},                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1) 
        if (hasUpgrade('coin', 34)) mult = mult.times(upgradeEffect('coin', 34))
        if (hasUpgrade('fire_flower', 15)) mult = mult.times(upgradeEffect('fire_flower', 15))
        if (hasUpgrade('fire_flower', 21)) mult = mult.times(upgradeEffect('fire_flower', 21))
        if (hasUpgrade('invincible_star', 21)) mult = mult.times(upgradeEffect('invincible_star', 21))
        if (hasChallenge('invincible_star', 11)) mult = mult.times(challengeEffect('invincible_star', 11))
        if (hasUpgrade('super_leaf', 221)) mult = mult.times(4.89e166)
        if (hasMilestone('yoshi_egg', 0)) mult = mult.times(Decimal.pow(1e35, player.yoshi_egg.red_yoshi.min(player.yoshi_egg.red_yoshi.max(1000).log(10).sub(2).times(1000)).max(1)))
        if (hasMilestone('yoshi_egg', 0) && inChallenge('super_hammer', 11)) mult = mult.div(Decimal.pow(1e35, player.yoshi_egg.red_yoshi.min(player.yoshi_egg.red_yoshi.max(1000).log(10).sub(2).times(1000)).max(1)))
        if (hasUpgrade('propeller_mushroom', 21)) mult = mult.times("1e10000000")
        return mult              // Factor in any bonuses multiplying gain here.
    },
    gainDiv() {
        div = new Decimal(1)                         // Returns your multiplier to your gain of the prestige resource.
        return div              // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        exp = new Decimal(1)
        if (hasUpgrade('invincible_star', 23)) exp = exp.times(1.5)
        if (hasUpgrade('oneup_mushroom', 24)) exp = exp.times(1.35)
        if (inChallenge('oneup_mushroom', 12)) exp = exp.times(0.05)
        return exp
    },
    softcap(){
        return new Decimal("e3e39")
    },
    softcapPower(){
        return new Decimal(1)
    },
    hotkeys: [
        {key: "f", description: "F: Reset for Fire Flowers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ["coin"],
    layerShown() { return hasUpgrade('super_mushroom', 15) || hasAchievement('achievements', 15)},          // Returns a bool for if this layer's node should be visible in the tree.

    autoUpgrade() {return hasUpgrade('invincible_star', 32) || hasAchievement('achievements', 61)},

    passiveGeneration(){return hasUpgrade('bouncy_ball_flower', 12) || hasAchievement('achievements', 61)},

    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
                if(hasMilestone('invincible_star', 3)) {
                kept.push("milestones")
                }
                if(hasMilestone('master_sword', 10)) {
                kept.push("upgrades")
                }

        layerDataReset(this.layer, kept)
        }
    },

    
    upgrades: {
        11: {
            title: "Press Y to fire attack",
            description: "Unlock a buyable in super mushroom layer.",
            cost: new Decimal(3),
        },
        12: {
            title: "Don't feel tired!",
            description: "Auto buy coin upgrades.",
            cost: new Decimal(10),
            unlocked() {return hasUpgrade('fire_flower', 11)}
        },
        13: {
            title: "A tier 2 power-up",
            description: "Unlock a coin buyable, a new resource and an upgrade in coin layer.",
            cost: new Decimal(80),
            unlocked() {return hasUpgrade('fire_flower', 12)}
        },
        14: {
            title: "Melt frozen coins",
            description: "x1.5 Fire Flower gain",
            cost: new Decimal(2020202),
            unlocked() {return hasUpgrade('coin', 35)}
        },
        15: {
            title: "Spin jump with two fire shots",
            description: "Multiply Fire Flowers gain based on Pink Key Coins.",
            cost: new Decimal(20190628),
            unlocked() {return hasUpgrade('fire_flower', 14)},
            effect() {
                return player.coin.pink_key_coin.add(100).log(10).div(2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        21: {
            title: "Get tier 1 first, then tier 2",
            description: "Multiply Fire Flowers gain based on Super Mushrooms.",
            cost: new Decimal(5e8),
            unlocked() {return hasUpgrade('fire_flower', 15)},
            effect() {
                return player.super_mushroom.points.max(1).log(10).div(10).max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22: {
            title: "Use fire to defeat goombas",
            description: "Unlock the third coin buyable.",
            cost: new Decimal(6.54e9),
            unlocked() {return hasUpgrade('fire_flower', 21)},
        },
        23: {
            title: "Mario's white hat",
            description: "^1.05 cleared courses gain",
            cost: new Decimal(3.14e13),
            unlocked() {return hasUpgrade('fire_flower', 22)},
        },
        24: {
            title: "Luigi also has a white hat",
            description: "^1.1 Super Mushroom gain",
            cost: new Decimal(4.19e14),
            unlocked() {return hasUpgrade('fire_flower', 23)},
        },
        25: {
            title: "Stronger!",
            description: "Unlock a new layer",
            cost: new Decimal(7.00e15),
            unlocked() {return hasUpgrade('fire_flower', 24)},
        },
        // Look in the upgrades docs to see what goes here!
    },
    milestones: {
        0: {
            requirementDescription: "Get 1920000 Fire Flowers",
            effectDescription: "Autobuy coin buyables 1 and 2.",
            done() { return player.fire_flower.points.gte(1920000) },
        },
        1: {
            requirementDescription: "Get 1e51 Fire Flowers",
            effectDescription: "Unlock 10th Invincible Star upgrade. Keep Coin milestones on SM and FF resets.",
            done() { return player.fire_flower.points.gte(1e51) },
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Fire Flower is the first kind of tier 2 power-ups. <br> It can fire attack.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
                
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones"
                ]    
            },
        },
    },
})
// 第四层：无敌星
addLayer("invincible_star", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},
    symbol: "IS",
    color: "#FFB15A",                       // The color for this layer, which affects many elements.
    resource: "Invincible Stars",            // The name of this layer's main prestige resource.
    row: 2,                                 // The row this layer is on (0 is the first row).
    position: 0,
    baseResource: "Fire Flowers",                 // The name of the resource your prestige gain is based on.
    branches: ["fire_flower"],
    baseAmount() { return player.fire_flower.points },  // A function to return the current amount of baseResource.
    effect(){
        let ISfactor = ((player[this.layer].points).add(10)).log(10)
        if (hasUpgrade('cape_feather', 14)) ISfactor = ISfactor.times(100)
        return Decimal.pow(10, (ISfactor).times(player[this.layer].points))
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
      },
    effectDescription(){
    return "multiplying cleared courses gain by " + format(tmp[this.layer].effect)
    /*
      use format(num) whenever displaying a number
    */
  },
    requires: new Decimal(1e16),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "static",                         // Determines the formula used for calculating prestige currency.
    exponent: 2.5,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1)               // Factor in any bonuses multiplying gain here.
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return hasUpgrade('fire_flower', 25) || hasAchievement('achievements', 25)},          // Returns a bool for if this layer's node should be visible in the tree.

    hotkeys: [
        {key: "i", description: "I: Reset for Invincible Stars", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],

    canBuyMax() { return hasMilestone("invincible_star", 2) || hasAchievement('achievements', 61)},

    resetsNothing() {return hasAchievement("achievements", 44) || hasAchievement('achievements', 61)},
    autoPrestige() {return hasAchievement("achievements", 44) || hasAchievement('achievements', 61)},
    autoUpgrade() {return hasAchievement('achievements', 63)},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
                if(hasAchievement('achievements', 63)) {
                kept.push("challenges")
                }
                if(hasMilestone('super_leaf', 7)) {
                kept.push("milestones")
                }
                if(hasMilestone('master_sword', 11)) {
                kept.push("upgrades")
                }

        layerDataReset(this.layer, kept)
        }
    },
    upgrades: {
        11: {
            title: "I'm invincible!",
            description: "x1666390 Cleared Courses gain.",
            cost: new Decimal(1),
            unlocked() {return true},
        },
        12: {
            title: "10-second rush!!!",
            description: "x12,413,170 Cleared Courses gain.",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade('invincible_star', 11)},
        },
        13: {
            title: "Star provides a speed boost!",
            description: "Autobuy coin upgrades forever, even if you don't have 2nd Fire Flower upgrade.",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade('invincible_star', 12)},
        },
        14: {
            title: "What a dazzing star!",
            description: "Super Mushroom resets nothing forever, even if you don't have 2nd Super Mushroom milestone.",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade('invincible_star', 13)},
        },
        15: {
            title: "Light the ghost house!",
            description: "Auto buy coin buyables 1~3 forever, even if you don't have 1st Fire Flower, Invincible Star milestones.",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade('invincible_star', 14)},
        },
        21: {
            title: "Running on the spikes",
            description: "Multiply Fire Flowers gain based on best Invincible Stars.",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade('invincible_star', 15)},
            effect() {
                let ISBest = player.invincible_star.best
                return Decimal.ln(ISBest.add(2.71828)).times(100)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22: {
            title: "Run into fire",
            description: "Generate 100% Coins and Super Mushrooms passively forever, even if you don't have 1st Super Mushroom milestone and 15th coin upograde.",
            cost: new Decimal(3),
            unlocked() {return hasUpgrade('invincible_star', 21)},
        },
        23: {
            title: "Hidden invincible star for a dev exit",
            description: "^1.5 Fire Flower gain.",
            cost: new Decimal(3),
            unlocked() {return hasUpgrade('invincible_star', 22)},
        },
        24: {
            title: "5 pink key coins are in a gear",
            description: "x1e100 Pink Key Coin gain",
            cost: new Decimal(5),
            unlocked() {return hasUpgrade('invincible_star', 23)},
        },
        25: {
            title: "What happened when you defeat 8 ememies in a star?",
            description: "Unlock a new layer.",
            cost: new Decimal(7),
            unlocked() {return hasMilestone('fire_flower', 1)},
        },
        31: {
            title: "Be faster when you have a star!",
            description: "Remove the 1st hardcap in 1UP Mushroom upgrade 4. (2nd hardcap is x4000)",
            cost: new Decimal(10),
            unlocked() {return hasUpgrade('invincible_star', 25)},
        },
        32: {
            title: "Share the star in co-op!",
            description: "Autobuy Fire Flower upgrades.",
            cost: new Decimal(12),
            unlocked() {return hasUpgrade('invincible_star', 31)},
        },
        33: {
            title: "Fire and Invincible",
            description: "Square 1st Invincible Star Challenge's effect.(Doesn't affact the hardcap)",
            cost: new Decimal(12),
            unlocked() {return hasUpgrade('invincible_star', 32)},
        },
        34: {
            title: "Coins among the spikes",
            description: "x1e100 Coin gain.",
            cost: new Decimal(13),
            unlocked() {return hasUpgrade('invincible_star', 33)},
        },
        35: {
            title: "And... What's next?",
            description: "Unlock a new layer.",
            cost: new Decimal(14),
            unlocked() {return hasUpgrade('invincible_star', 34)},
        },
    },
        // Look in the upgrades docs to see what goes here!
    milestones: {
        0: {
            requirementDescription: "Get 1 Invincible Star",
            effectDescription: "Autobuy coin buyable 13.",
            done() { return player.invincible_star.points.gte(1) },
        },
        1: {
            requirementDescription: "Get 2 Invincible Stars",
            effectDescription: "6879x Super Mushroom gain.",
            done() { return player.invincible_star.points.gte(2) },
        },
        2: {
            requirementDescription: "Get 4 Invincible Stars",
            effectDescription: "You can buy max Invincible Stars. Keep Super Mushroom milestones on row 3 resets.",
            done() { return player.invincible_star.points.gte(4) },
        },
        3: {
            requirementDescription: "Get 9 Invincible Stars",
            effectDescription: "Autobuy Super Mushroom upgrades and unlock 6th 1UP Mushroom upgrade. Keep Fire Flower milestones on row 3 resets.",
            done() { return player.invincible_star.points.gte(9) },
        },
        4: {
            requirementDescription: "Get 21 Invincible Stars",
            effectDescription: "x1e20 Bouncy Ball gain.",
            done() { return player.invincible_star.points.gte(20.99999) },
        },
    },
    challenges: {
        11: {
            name: "Koopa troopas",
            challengeDescription: "^0.1 Coin gain",
            goalDescription: "Get 5.55e55 Cleared Courses",
            canComplete: function() {
                return player.points.gte(5.55e55)
                },
            rewardDescription: "Multiply Fire Flower gain based on 1UP Mushroom. (Hardcap at 1e100x)",
            rewardEffect() {
                let IS1Chardcap = new Decimal(1e100)
                if (hasUpgrade('yoshi_egg', 32)) IS1Chardcap = new Decimal("10^^1.79e308")
                let IS1Cfactor = player.oneup_mushroom.points.pow(2).max(1)
                if (hasUpgrade('invincible_star', 33)) IS1Cfactor = IS1Cfactor.pow(2).min(IS1Chardcap)
                else IS1Cfactor = IS1Cfactor.min(IS1Chardcap)
            return IS1Cfactor
            },
            rewardDisplay() { return format(challengeEffect(this.layer, this.id))+"x" },
            unlocked() {return hasUpgrade('oneup_mushroom', 15) || hasAchievement('achievements', 63)},
        },
        12: {
            name: "Spikeys",
            challengeDescription: "You can't gain Pink Key Coins.",
            goalDescription: "Get 1e730 Cleared Courses",
            canComplete: function() {
                return player.points.gte("1e730")
                },
            rewardDescription: "^1.1 Super Mushroom gain",
            unlocked() {return hasChallenge('invincible_star', 11) || hasAchievement('achievements', 63)},
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Most invincible stars are for hidden reward in 2D Mario games. <br> But in SMM series, most of them are for dev exits.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
                
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones"
                ]    
            },
            "Challenges": {
                unlocked() {return hasUpgrade('oneup_mushroom', 15) || hasAchievement('achievements', 63)},
                content: [
                    ["blank", "15px"],
                    "challenges"
                ], 
            },
        },
    },
})
// 第五层：1UP蘑菇
addLayer("oneup_mushroom", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
        sacrifice: new Decimal(0),
        rotten_mushroom: new Decimal(0),
    }},

    color: "#5BBF2F",                       // The color for this layer, which affects many elements.
    resource: "1UP Mushrooms",              // The name of this layer's main prestige resource.
    symbol: "1UP",
    row: 2,  
    position: 1,                               // The row this layer is on (0 is the first row).
    branches: ["fire_flower"],

    baseResource: "Fire Flowers",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.fire_flower.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(3e51),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 1e-5,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1) 
        if (hasUpgrade("oneup_mushroom", 11)) mult = mult.times(2)              // Factor in any bonuses multiplying gain here.
        if (hasUpgrade("oneup_mushroom", 12)) mult = mult.times(upgradeEffect('oneup_mushroom', 12))
        if (hasUpgrade("oneup_mushroom", 13)) mult = mult.times(2)
        if (hasUpgrade("oneup_mushroom", 14)) mult = mult.times(upgradeEffect('oneup_mushroom', 14))
        if (hasUpgrade("oneup_mushroom", 21)) mult = mult.times(upgradeEffect('oneup_mushroom', 21))
        if (hasUpgrade("oneup_mushroom", 23)) mult = mult.times(upgradeEffect('oneup_mushroom', 23))
        if (hasUpgrade("bouncy_ball_flower", 34)) mult = mult.times(510541)
        if (hasUpgrade('big_mushroom', 22)) mult = mult.times(upgradeEffect('big_mushroom', 22))
        if (hasUpgrade('super_leaf', 23)) mult = mult.times(upgradeEffect('super_leaf', 23))
        if (hasUpgrade('oneup_mushroom', 32)) mult = mult.times(100)
        if (hasUpgrade('oneup_mushroom', 33)) mult = mult.times(100)
        if (hasUpgrade('oneup_mushroom', 34)) mult = mult.times(100)
        if (hasMilestone('super_leaf', 4)) mult = mult.times(10)
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        exp = new Decimal(1)
        if (hasUpgrade("super_leaf", 222)) exp = exp.times(1.5)
        return exp
    },

    layerShown() { return hasUpgrade('invincible_star', 25) || hasAchievement('achievements', 35)},          // Returns a bool for if this layer's node should be visible in the tree.

    autoUpgrade() {return hasMilestone('super_leaf', 6) || hasAchievement('achievements', 83)},
    passiveGeneration(){return hasMilestone('super_leaf', 5) || hasAchievement('achievements', 64)},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
                if(hasAchievement('achievements', 63)) {
                kept.push("challenges")
                }
                if(hasMilestone('super_leaf', 7)) {
                kept.push("milestones")
                }
                if(hasMilestone('master_sword', 13)) {
                kept.push("upgrades")
                }

        layerDataReset(this.layer, kept)
        }
    },
    hotkeys: [
        {key: "1", description: "1: Reset for 1UP Mushrooms", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    update(multRM) {     
        multRM = new Decimal(1)
        if (hasUpgrade('usa_mushroom', 35)) multRM = multRM.times(player.oneup_mushroom.sacrifice.max(1).log(10).max(1).log(10).max(0))
        if (hasMilestone('oneup_mushroom', 1)) multRM = multRM.times(10)
        if (hasUpgrade('frog_suit', 24)) multRM = multRM.pow(upgradeEffect('frog_suit', 24))
		if (hasUpgrade('usa_mushroom', 35)) player.oneup_mushroom.rotten_mushroom = player.oneup_mushroom.rotten_mushroom.add(multRM.times(0.05))
        if (hasMilestone('super_acorn', 1) && hasUpgrade('usa_mushroom', 35)) player.oneup_mushroom.sacrifice = player.oneup_mushroom.sacrifice.add(player.oneup_mushroom.points.times(0.05))
    },
    upgrades: {
        11: {
            title: "Nice design in the end of a course",
            description: "Double 1UP Mushroom gain.",
            cost: new Decimal(3),
            unlocked() {return true},
        },
        12: {
            title: "Softlocks with 1UP mushrooms",
            description: "Multiply 1UP Mushrooms gain based on Invincible Stars.",
            cost: new Decimal(6),
            unlocked() {return hasUpgrade('oneup_mushroom', 11)},
            effect() {
                let oneUPU2factor = player.invincible_star.points.add(1)
                if (hasUpgrade('oneup_mushroom', 22)) oneUPU2factor = oneUPU2factor.pow(2)
                return oneUPU2factor
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "Don't be greedy!",
            description: "Double 1UP Mushroom gain, again.",
            cost: new Decimal(45),
            unlocked() {return hasUpgrade('oneup_mushroom', 12)},
        },
        14: {
            title: "Use shell to farm lives",
            description: "Multiply 1UP Mushroom based on itself. (Hardcap at 20x)",
            cost: new Decimal(99),
            unlocked() {return hasUpgrade('oneup_mushroom', 13)},
            effect() {
                let oneUPU4factor = Decimal.cbrt(player.oneup_mushroom.points.add(1))
                if (hasUpgrade('invincible_star', 31)) oneUPU4factor = oneUPU4factor.min(4000)
                else oneUPU4factor = oneUPU4factor.min(20)
                return oneUPU4factor
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        15: {
            title: "Life farming master",
            description: "Unlock two Invincible Star challenges.",
            cost: new Decimal(512),
            unlocked() {return hasUpgrade('oneup_mushroom', 14)},
        },
        21: {
            title: "In hidden blocks",
            description: "Multiply 1UP Mushroom gain besed on Fire Flowers.",
            cost: new Decimal(1888),
            unlocked() {return hasMilestone('invincible_star', 3)},
            effect() {
                return player.fire_flower.points.add(10).log(10).pow(1.25).max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22: {
            title: "Reward for beating the extra challenge",
            description: "Square 2nd 1UP Mushroom upgrade's effect.",
            cost: new Decimal(1234567),
            unlocked() {return hasUpgrade('oneup_mushroom', 21)},
        },
        23: {
            title: "Reward in minigames",
            description: "Multiply 1UP Mushroom based on Super Mushroom.",
            cost: new Decimal(1.985e8),
            unlocked() {return hasUpgrade('oneup_mushroom', 22)},
            effect() {
                return player.super_mushroom.points.add(10).log(10).sqrt()
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        24: {
            title: "999-1UP Mushroom condition",
            description: "^1.35 Fire Flower gain.",
            cost: new Decimal(5e10),
            unlocked() {return hasUpgrade('oneup_mushroom', 23)},
        },
        25: {
            title: "Better rewards",
            description: "x1e30 Pink Key Coin gain.",
            cost: new Decimal(2.019e11),
            unlocked() {return hasUpgrade('oneup_mushroom', 24)},
        },
        31: {
            title: "Auto defeating Goombas",
            description: "Auto complete challenge Goomba",
            cost: new Decimal(1e19),
            unlocked() {return hasUpgrade('oneup_mushroom', 25)},
            effect() {
                if (hasUpgrade('oneup_mushroom', 31) || hasAchievement('achievements', 53))
                return player.super_mushroom.challenges[11] = new Decimal(3)
            },
        },
        32: {
            title: "A nice sound effect",
            description: "x100 1UP Mushroom gain",
            cost: new Decimal(1.82e30),
            unlocked() {return hasUpgrade('big_mushroom', 35)},
        },
        33: {
            title: "A nicer sound effect",
            description: "x100 1UP Mushroom gain, again",
            cost: new Decimal(2.82e32),
            unlocked() {return hasUpgrade('oneup_mushroom', 32)},
        },
        34: {
            title: "Important life farming",
            description: "x100 1UP Mushroom gain, again^2.",
            cost: new Decimal(3.82e34),
            unlocked() {return hasUpgrade('oneup_mushroom', 33)},
        },
        35: {
            title: "Go to a new style",
            description: "Unlock a new layer at the row 4.",
            cost: new Decimal(4.82e36),
            unlocked() {return hasUpgrade('oneup_mushroom', 34)},
        },
        // Look in the upgrades docs to see what goes here!
    },
    milestones: {
        0: {
            requirementDescription: "Life Maxed - Get 99 1UP Mushrooms",
            effectDescription: "Autobuy Super Mushroom buyable 1.",
            done() { return player.oneup_mushroom.points.gte(99) },
        },
        1: {
            requirementDescription: "Get 3000 Rotten Mushrooms",
            effectDescription: "10x Rotten Mushroom gain.",
            done() { return player.oneup_mushroom.rotten_mushroom.gte(3000) },
            unlocked() {return hasUpgrade('usa_mushroom', 35)},
            style() {if (hasMilestone('oneup_mushroom',1)) return {"background-color":"#9600b1"}}
        },
        2: {
            requirementDescription: "Get 50000 Rotten Mushrooms",
            effectDescription: "Finally, unlock the last layer on row 6.",
            done() { return player.oneup_mushroom.rotten_mushroom.gte(50000) },
            unlocked() {return hasUpgrade('usa_mushroom', 35)},
            style() {if (hasMilestone('oneup_mushroom',2)) return {"background-color":"#9600b1"}}
        },
    },
    challenges: {
        11: {
            name: "Bob-ombs",
            challengeDescription: "^0.01 Super Mushroom gain",
            goalDescription: "Get 1e1205 Cleared Courses",
            canComplete: function() {
                return player.points.gte("1e1205")
                },
            rewardDescription: "Multiply Pink Key Coin gain based on 1UP Mushrooms. (Hardcap at 1e5000)",
            rewardEffect() {
                if (hasUpgrade('super_leaf', 25)) return player.oneup_mushroom.points.pow(Decimal.log10((player.oneup_mushroom.points.add(10))).min(75)).max(1)
                else return player.oneup_mushroom.points.pow(Decimal.log10((player.oneup_mushroom.points.add(10)))).min("1e5000").max(1)
            },
            rewardDisplay() { return format(challengeEffect(this.layer, this.id))+"x" },
            unlocked() {return true},
        },
        12: {
            name: "Fire bubbles",
            challengeDescription: "^0.05 Fire Flower gain.",
            goalDescription: "Get 1e7818 Cleared Courses",
            canComplete: function() {
                return player.points.gte("1e7818")
                },
            rewardDescription: "x15 Bouncy Ball Flower and unlock 6th Bounce Ball upgrade.",
            unlocked() {return hasChallenge('oneup_mushroom', 11) || hasAchievement('achievements', 63)},
        },
    },
    clickables: {
        11: {
            title: "Sacrifice",
            display() {
                return "Sacrifice your 1UP Mushroom to gain Rotten Mushrooms."
            },
            canClick() {return true},
            onClick() {
                return player.oneup_mushroom.sacrifice = player.oneup_mushroom.sacrifice.add(player.oneup_mushroom.points),
                player.oneup_mushroom.points = new Decimal(0)
            },
            style: {'background-color':'#9600b1'},
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">1UP Mushroom is a rare reward in 2D Mario games. When you get one, you can get 1 extra life. <br> In SMM series endless mode, you can only get 3 extra lives at most in one course.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
                
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones"
                ]    
            },
            "Challenges": {
                unlocked() {return hasUpgrade('bouncy_ball_flower', 15) || hasAchievement('achievements', 63)},
                content: [
                    ["blank", "15px"],
                    "challenges"
                ], 
            },
            "Rotten Mushroom": {
                unlocked() {return hasUpgrade('usa_mushroom', 35)},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Rotten mushroom follows you and wants to hurt you. But if you are invincible, it will escape from you.`],
                    ["display-text", function() {
                        let RMpsec = format(player.oneup_mushroom.sacrifice.max(1).log(10).max(1).log(10).max(0))
                        if (hasMilestone('oneup_mushroom', 1)) RMpsec = format(player.oneup_mushroom.sacrifice.max(1).log(10).max(1).log(10).max(0).times(10))
                        if (hasUpgrade('frog_suit', 24)) RMpsec = format(player.oneup_mushroom.sacrifice.max(1).log(10).max(1).log(10).max(0).times(10).pow(upgradeEffect('frog_suit', 24)))
                        return "You have sacrificed <h2 style='color: #5bbf2f; text-shadow: 0 0 10px #5bbf2f'>" + format(player.oneup_mushroom.sacrifice) + "</h2> 1UP Mushrooms, generating <h2 style='color: #9600b1; text-shadow: 0 0 10px #9600b1'>" + RMpsec + " </h2> Rotten Mushrooms every second."
                    }],
                    ["display-text", function() {
                        let normal = "You have <h2 style='color: #9600b1; text-shadow: 0 0 10px #9600b1'>" + format(player.oneup_mushroom.rotten_mushroom) + "</h2> Rotten Mushrooms."
                    return normal
                    }],
                    "clickables",
                    "buyables",
                ]              
            },
        },
    },
})
// 第六层：弹力球之花
addLayer("bouncy_ball_flower", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
        bouncy_ball: new Decimal(0),
        upgrade_bought: new Decimal(0),
    }},

    color: "#606040",                       // The color for this layer, which affects many elements.
    resource: "Bouncy Ball Flowers",            // The name of this layer's main prestige resource.
    row: 2,                                 // The row this layer is on (0 is the first row).
    position: 2,
    symbol: "BBF",
    branches: ["super_mushroom"],

    baseResource: "Super Mushrooms",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.super_mushroom.points },  // A function to return the current amount of baseResource.
            // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    
    exponent: 1/1825.6,                          // "normal" prestige gain is (currency^exponent).

    requires: new Decimal("1e1700"),

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1) 
        if (hasUpgrade("bouncy_ball_flower", 14)) mult = mult.times(upgradeEffect('bouncy_ball_flower', 14))
        if (hasChallenge("oneup_mushroom", 12)) mult = mult.times(15)
        if (hasUpgrade("bouncy_ball_flower", 21)) mult = mult.times(2)
        if (hasUpgrade("bouncy_ball_flower", 22)) mult = mult.times(3)
        if (hasUpgrade("bouncy_ball_flower", 23)) mult = mult.times(4)
        if (hasUpgrade("bouncy_ball_flower", 24)) mult = mult.times(5)
        if (hasUpgrade("bouncy_ball_flower", 25)) mult = mult.times(6)
        if (hasUpgrade("bouncy_ball_flower", 31)) mult = mult.times(upgradeEffect('bouncy_ball_flower', 31))
        if (hasUpgrade("big_mushroom", 23)) mult = mult.times(upgradeEffect("big_mushroom", 23))
        if (hasMilestone('super_leaf', 4)) mult = mult.times(10)
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return hasUpgrade('invincible_star', 35) || hasAchievement ('achievements', 43)},          // Returns a bool for if this layer's node should be visible in the tree.

    passiveGeneration(){return hasMilestone('super_leaf', 5) || hasAchievement('achievements', 64)},
    autoUpgrade() {return hasUpgrade('cape_feather', 13) || hasAchievement('achievements', 83)},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
                if(hasMilestone('super_leaf', 7)) {
                kept.push("milestones")
                }
                if(hasMilestone('master_sword', 14)) {
                    kept.push("upgrades")
                    }

        layerDataReset(this.layer, kept)
        }
    },
    hotkeys: [
        {key: "b", description: "B: Reset for Bouncy Ball Flowers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    update(multBB) {     
        multBB = new Decimal(0.5)
        multBB = multBB.add(buyableEffect('bouncy_ball_flower', 11))
        multBB = multBB.times(buyableEffect('bouncy_ball_flower', 12))
        multBB = multBB.times(buyableEffect('bouncy_ball_flower', 13))
		if (hasMilestone('invincible_star', 4)) multBB = multBB.times(1e20)
        if (hasUpgrade('super_leaf', 24)) multBB = multBB.times("1.797e308")
        if (hasUpgrade('bouncy_ball_flower', 32) || hasAchievement('achievements', 62)) player.bouncy_ball_flower.bouncy_ball = player.bouncy_ball_flower.bouncy_ball.add(multBB)     
    },
    upgrades: {
        11: {
            title: "The first bounce",
            description: "Unlock Bouncy Ball subtab.",
            cost: new Decimal(1),
            unlocked() {return true},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        12: {
            title: "Two kinds of flowers",
            description: "Passive gain 100% Fire Flower per second.",
            cost: new Decimal(3),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 11)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        13: {
            title: "Auto bouncy shots",
            description: "Autobuy 1st Bouncy Ball Flower buyable and buy max.",
            cost: new Decimal(15),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 12)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        // Look in the upgrades docs to see what goes here!
        14: {
            title: "Don't let it go to off-screen!",
            description: "Multiply Bouncy Ball Flower gain based on Bouncy Ball.",
            cost: new Decimal(49),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 13)},
            effect() {
            return player.bouncy_ball_flower.bouncy_ball.max(0).add(10).log(10).div(45).add(1)
                },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        15: {
            title: "Bouncy Ball can't farm lives",
            description: "Unlock two 1UP Mushroom challenges.",
            cost: new Decimal(125),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 14)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        21: {
            title: "Grayish-yellow style",
            description: "Double Bouncy Ball Flowers gain.",
            cost: new Decimal(2496),
            unlocked() {return hasChallenge("oneup_mushroom", 12)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        22: {
            title: "Mario's gray hat",
            description: "Triple Bouncy Ball Flowers gain.",
            cost: new Decimal(4992),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 21)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        23: {
            title: "Luigi's gray hat",
            description: "Quadruple Bouncy Ball Flowers gain.",
            cost: new Decimal(14976),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 22)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        24: {
            title: "Toad's gray head",
            description: "Quintuple Bouncy Ball Flowers gain.",
            cost: new Decimal(69904),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 23)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        25: {
            title: "Toadette's gray braids",
            description: "Sextuple Bouncy Ball Flowers gain.",
            cost: new Decimal(510541),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 24)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        31: {
            title: "Like reflection of light",
            description: "One BBF upgrade you bought, BBF gain x1.5.",
            cost: new Decimal(4200000),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 25)},
            effect() {
                return Decimal.pow(1.5, player.bouncy_ball_flower.upgrade_bought)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        32: {
            title: "Get the key beside the corner",
            description: "Generate 1000% Bouncy Ball per second.",
            cost: new Decimal(300000000),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 31)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        33: {
            title: "Defeat the boom-boom on the top of the screen",
            description: "Autobuy BBF buyables 2 and 3.",
            cost: new Decimal(410000000),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 32)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        34: {
            title: "Is there a new kind of flowers?",
            description: "x510541 1UP Mushroom gain.",
            cost: new Decimal(600000000),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 33)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        35: {
            title: "Yes. But it's too early for now",
            description: "Unlock a new layer.",
            cost: new Decimal(1e9),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 34)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
},
    clickables: {
        11: {
            title: "Bounce to touch everything",
            display() {
                let clickBB = new Decimal(1)
                clickBB = clickBB.add(buyableEffect('bouncy_ball_flower', 11))
                clickBB = clickBB.times(buyableEffect('bouncy_ball_flower', 12))
                clickBB = clickBB.times(buyableEffect('bouncy_ball_flower', 13))
                if (hasMilestone('invincible_star', 4)) clickBB = clickBB.times(1e20)
                return "Click this botton to gain " + format(clickBB) + " Bouncy Balls"},
            canClick() {return true},
            onClick() {
                let clickBB = new Decimal(1)
                clickBB = clickBB.add(buyableEffect('bouncy_ball_flower', 11))
                clickBB = clickBB.times(buyableEffect('bouncy_ball_flower', 12))
                clickBB = clickBB.times(buyableEffect('bouncy_ball_flower', 13))
                if (hasMilestone('invincible_star', 4)) clickBB = clickBB.times(1e20)
                return  player.bouncy_ball_flower.bouncy_ball = player.bouncy_ball_flower.bouncy_ball.add(clickBB)
            },
            style: {'background-color':'#e4e4b2'},
        },
    },
    buyables: {
        11: {
            title: "Bounce to touch coins",
            cost(x) { return new Decimal(20).times(Decimal.pow(x, 1.05).add(1)) },
            display() { if(player.bouncy_ball_flower.buyables[11].gte(1e30)) return` Get more Bouncy Balls clicking the button above. <br>
                Effect: +${format(this.effect())} (softcapped)<br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Bouncy Balls`
                else return` Get more Bouncy Balls clicking the button above. <br>
                Effect: +${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Bouncy Balls`}, 
            canAfford() { return player[this.layer].bouncy_ball.gte(this.cost()) },
            buy() {
                player[this.layer].bouncy_ball = player[this.layer].bouncy_ball.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                BBFB1effect = x
                BBFB1softcap = new Decimal(0.9)
                if (hasUpgrade('super_leaf', 231)) BBFB1softcap = new Decimal(0.7)
                if (hasUpgrade('cape_feather', 22)) BBFB1softcap = new Decimal(0.3)
                if (player.bouncy_ball_flower.buyables[11].gte(1e30)) BBFB1effect = BBFB1effect.div(Decimal.pow(BBFB1effect.div(1e30), BBFB1softcap))
                return BBFB1effect},
            unlocked() {return true},
        },
        12: {
            title: "Bounce to touch keys",
            cost(x) { return new Decimal(10).pow(Decimal.pow(x, 1.05).add(1)) },
            display() { return ` Get more Bouncy Balls clicking the button above with a strong effect. <br>
                Effect: x${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Bouncy Balls`}, 
            canAfford() { return player[this.layer].bouncy_ball.gte(this.cost()) },
            buy() {
                player[this.layer].bouncy_ball = player[this.layer].bouncy_ball.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {return new Decimal(2).pow(x).max(1)},
            unlocked() {return hasMilestone('bouncy_ball_flower', 0)},
        },
        13: {
            title: "Bounce to touch P switches",
            cost(x) { return new Decimal(10).pow(Decimal.pow(x, 1.24).add(1)) },
            display() { return ` Get more Bouncy Balls clicking the button above with a stronger effect. <br>
                Effect: x${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Bouncy Balls`}, 
            canAfford() { return player[this.layer].bouncy_ball.gte(this.cost()) },
            buy() {
                player[this.layer].bouncy_ball = player[this.layer].bouncy_ball.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {return new Decimal(20).pow(x).max(1)},
            unlocked() {return hasMilestone('bouncy_ball_flower', 1)},
        },
    },
    milestones: {
        0: {
            requirementDescription: "Get 300 Bouncy Balls",
            effectDescription: "Unlock 2nd Bouncy Ball Flower buyable.",
            done() { return player.bouncy_ball_flower.bouncy_ball.gte(300) },
        },
        1: {
            requirementDescription: "Get 8888 Bouncy Balls",
            effectDescription: "Unlock 3rd Bouncy Ball Flower buyable.",
            done() { return player.bouncy_ball_flower.bouncy_ball.gte(8888) },
        },
        2: {
            requirementDescription: "Get 1e30 Bouncy Balls",
            effectDescription: "Unlock 2nd Bouncy Ball Flower upgrade.",
            done() { return player.bouncy_ball_flower.bouncy_ball.gte(1e30) },
        },
    },
    automate(){
        if (player.bouncy_ball_flower.bouncy_ball.lte(0)) return
        if (hasUpgrade('bouncy_ball_flower', 13) || hasMilestone('super_leaf', 2) || hasAchievement('achievements', 63)
        ) {
            if (player.bouncy_ball_flower.bouncy_ball) {
                hasUpgrade("bouncy_ball_flower", 13) || hasMilestone('super_leaf', 2) || hasAchievement('achievements', 63) ? setBuyableAmount("bouncy_ball_flower",11,tmp.bouncy_ball_flower.buyables[11].canAfford?player.bouncy_ball_flower.bouncy_ball.div(20).subtract(1).pow(1/1.05).floor().add(1):getBuyableAmount("bouncy_ball_flower",11)) : buyBuyable("bouncy_ball_flower",11)
            }
        }
        if (hasUpgrade('bouncy_ball_flower', 33)) {
            if (player.bouncy_ball_flower.bouncy_ball) {
                hasUpgrade("bouncy_ball_flower", 33) || hasMilestone('super_leaf', 2) || hasAchievement('achievements', 63) ? setBuyableAmount("bouncy_ball_flower",12,tmp.bouncy_ball_flower.buyables[12].canAfford?player.bouncy_ball_flower.bouncy_ball.log(10).subtract(1).pow(1/1.05).floor().add(1):getBuyableAmount("bouncy_ball_flower",12)) : buyBuyable("bouncy_ball_flower",12)
                hasUpgrade("bouncy_ball_flower", 33) || hasMilestone('super_leaf', 2) || hasAchievement('achievements', 63)? setBuyableAmount("bouncy_ball_flower",13,tmp.bouncy_ball_flower.buyables[13].canAfford?player.bouncy_ball_flower.bouncy_ball.log(10).subtract(1).pow(1/1.24).floor().add(1):getBuyableAmount("bouncy_ball_flower",13)) : buyBuyable("bouncy_ball_flower",13)
            }
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Bouncy Ball Flower is from Super Mario Land (1989). The characters will be gray when they get this power-up. <br> It's in SMM2, not in SMM1.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
                
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones",
                ]    
            },
            "Bouncy Ball": {
                unlocked() {return hasUpgrade('bouncy_ball_flower', 11)},
                content: [
                    ["blank", "15px"],
                    ["display-text", () => "You have <h2 style='color: #e4e4b2; text-shadow: 0 0 10px #e4e4b2'>" + format(player.bouncy_ball_flower.bouncy_ball) + "</h2> Bouncy Balls, multiplying Super Mushroom gain by <h2 style='color: #e4e4b2; text-shadow: 0 0 10px #e4e4b2'> <br>" + format(player.bouncy_ball_flower.bouncy_ball.max(1).pow(2.35)) + "x</h2>. (Before the exponentional calculation)"],
                    "clickables",
                    "buyables",
                ]    
            },
        },
    },
})
// 第七层：大蘑菇
addLayer("big_mushroom", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),
        broken_brick: new Decimal(0), 
        broken_hard_brick: new Decimal(0), 
        broken_ice_block: new Decimal(0),  
        clickBrBfactor2: new Decimal(3),           // "points" is the internal name for the main resource of the layer.
    }},

    color: "#F7431D",                       // The color for this layer, which affects many elements.
    resource: "Big Mushrooms",            // The name of this layer's main prestige resource.
    row: 2, 
    position: 3,  
    symbol: "BM",
                                  // The row this layer is on (0 is the first row).
    branches: ["fire_flower"],
    baseResource: "Fire Flowers",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.fire_flower.points },  // A function to return the current amount of baseResource.

    requires: new Decimal('3e507'),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.004,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1)              // Factor in any bonuses multiplying gain here.
        mult = mult.times(clickableEffect('big_mushroom', 12))
        if (hasUpgrade('big_mushroom', 14)) mult = mult.times(10)
        if (hasUpgrade('big_mushroom', 24)) mult = mult.times(25)
        if (hasMilestone('super_leaf', 4)) mult = mult.times(10)
        if (hasUpgrade('cape_feather', 11)) mult = mult.times(upgradeEffect('cape_feather', 11))
        if (hasMilestone('propeller_mushroom', 0)) mult = mult.times(1e50)
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        exp = new Decimal(1)
        if (hasUpgrade('big_mushroom', 34)) exp = exp.times(2)
        return exp
    },
    passiveGeneration(){return hasMilestone('super_leaf', 5) || hasAchievement('achievements', 64)},
    layerShown() { return hasUpgrade('bouncy_ball_flower', 35) || hasAchievement('achievements', 52) },          // Returns a bool for if this layer's node should be visible in the tree.

    autoUpgrade() {return hasUpgrade('cape_feather', 32) || hasAchievement('achievements', 83)},

    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
                if(hasMilestone('super_leaf', 7)) {
                kept.push("milestones")
                }
                if(hasMilestone('master_sword', 15)) {
                    kept.push("upgrades")
                    }

        layerDataReset(this.layer, kept)
        }
    },

    hotkeys: [
        {key: "B", description: "Shift+B: Reset for Big Mushrooms", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades: {
        11: {
            title: "Jump onto it",
            description: "Unlock Destruction subtab.",
            cost: new Decimal(1),
            unlocked() {return true},
        },
        12: {
            title: "Faster breaking",
            description: "Multiply Broken Bricks based on Big Mushrooms.",
            cost: new Decimal(6),
            unlocked() {return hasMilestone('big_mushroom', 0)},
            effect() {
                return player.big_mushroom.points.max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "Light jump onto bricks",
            description: "Auto click 1st BM clickable 100 times/sec.",
            cost: new Decimal(9),
            unlocked() {return hasUpgrade('big_mushroom', 12)},
            effect() {
                let BMclickpersec = new Decimal(100)
                if (hasMilestone('big_mushroom', 1)) BMclickpersec = BMclickpersec.times(2019)
                if (hasUpgrade('big_mushroom', 32)) BMclickpersec = BMclickpersec.times(upgradeEffect('big_mushroom', 32))
                return BMclickpersec
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+" times/sec" },
        },
        14: {
            title: "Giants",
            description: "x10 Big Mushroom gain",
            cost: new Decimal(15),
            unlocked() {return hasUpgrade('big_mushroom', 13)},
        },
        15: {
            title: "1.5-block wide",
            description: "Start to generate 1 Broken Hard Block every second.",
            cost: new Decimal(223),
            unlocked() {return hasUpgrade('big_mushroom', 14)},
        },
        21: {
            title: "Stronger jumps",
            description: "1st BM clickable also affects Broken Hard Bricks.",
            cost: new Decimal(777),
            unlocked() {return hasMilestone('big_mushroom', 2)},
        },
        22: {
            title: "Mushroom affects mushroom",
            description: "Multiply 1UP Mushroom based on Big Mushroom.",
            cost: new Decimal(1000),
            unlocked() {return hasUpgrade('big_mushroom', 21)},
            effect() {
                return player.big_mushroom.points.pow(0.6).max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        23: {
            title: "Stronger jumps",
            description: "Multiply Bouncy Ball Flower based on Big Mushroom.",
            cost: new Decimal(3125),
            unlocked() {return hasUpgrade('big_mushroom', 22)},
            effect() {
                return player.big_mushroom.points.pow(0.8).max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        24: {
            title: "Super giants",
            description: "x25 Big Mushroom gain",
            cost: new Decimal(4000),
            unlocked() {return hasUpgrade('big_mushroom', 23)},
        },
        25: {
            title: "Frozen breaking",
            description: "Start to generate 1 Broken Ice Block every second.",
            cost: new Decimal(201906),
            unlocked() {return hasUpgrade('big_mushroom', 24)},
        },
        31: {
            title: "Powerful jumps",
            description: "1st BM clickable also affects Broken Ice Blocks.",
            cost: new Decimal(1666390),
            unlocked() {return hasMilestone('big_mushroom', 3)},
        },
        32: {
            title: "Don't break the question block!",
            description: "Multiply the click speed on 1st BM clickable based on BBF.",
            cost: new Decimal(6952965),
            unlocked() {return hasUpgrade('big_mushroom', 31)},
            effect() {
                return player.bouncy_ball_flower.points.pow(3)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        33: {
            title: "Buffer jump onto bricks",
            description: "Passive gain 1000% Broken Bricks like clicking.",
            cost: new Decimal(30303030),
            unlocked() {return hasUpgrade('big_mushroom', 32)},
        },
        34: {
            title: "Land on on-off switch",
            description: "Square Big Mushroom gain",
            cost: new Decimal(77788999),
            unlocked() {return hasUpgrade('big_mushroom', 33)},
        },
        35: {
            title: "Don't create a softlock",
            description: "Unlock 12th 1UP Mushroom upgrade.",
            cost: new Decimal(5e17),
            unlocked() {return hasUpgrade('big_mushroom', 34)},
        },
    },
        // Look in the upgrades docs to see what goes here!
    clickables: {
        11: {
            title: "Destroy more!",
            display() {if (hasMilestone('super_bell', 0))
                return "Click to increase Broken Bricks gain multiplier. <br> Currently: " + format(player.big_mushroom.clickBrBfactor2.log(3).pow(72535)) +"x"
                else return "Click to increase Broken Bricks gain multiplier. <br> Currently: " + format(player.big_mushroom.clickBrBfactor2.log(3)) +"x"},
            canClick() {return true},
            onClick() {
                let clickBrBfactor = new Decimal(3)
                player.big_mushroom.clickBrBfactor2 = player.big_mushroom.clickBrBfactor2.add(3)
                return player.big_mushroom.clickBrBfactor2
            },
            effect() {
                if (hasMilestone('super_bell', 0)) return player.big_mushroom.clickBrBfactor2.log(3).pow(72535)
                else return player.big_mushroom.clickBrBfactor2.log(3)
            }
        },
        12: {
            title: "Break the bricks",
            display() {
                let clickBrB = new Decimal(1)
                let BMBHBeff = player.big_mushroom.broken_hard_brick.max(1).pow(1.75)
                clickBrB = clickBrB.times(BMBHBeff)
                clickBrB = clickBrB.times(clickableEffect('big_mushroom', 11))
                if (hasUpgrade('big_mushroom', 12)) clickBrB = clickBrB.times(upgradeEffect('big_mushroom', 12))
                return "Click this botton to gain " + format(clickBrB) + " Broken Bricks"},
            canClick() {return true},
            onClick() {
                let clickBrB = new Decimal(1)
                let BMBHBeff = player.big_mushroom.broken_hard_brick.max(1).pow(1.75)
                clickBrB = clickBrB.times(BMBHBeff)
                clickBrB = clickBrB.times(clickableEffect('big_mushroom', 11))
                if (hasUpgrade('big_mushroom', 12)) clickBrB = clickBrB.times(upgradeEffect('big_mushroom', 12))
                return  player.big_mushroom.broken_brick = player.big_mushroom.broken_brick.add(clickBrB)
            },
            effect() {
                return player.big_mushroom.broken_brick.max(1).pow(0.1)
            }
        },
    },
    milestones: {
        0: {
            requirementDescription: "Get 510 Broken Bricks",
            effectDescription: "Unlock 2nd Big Mushroom upgrade.",
            done() { return player.big_mushroom.broken_brick.gte(510) },
        },
        1: {
            requirementDescription: "Get 201906 Broken Bricks",
            effectDescription: "Auto click 1st BM clickable 2019x faster.",
            done() { return player.big_mushroom.broken_brick.gte(201906) },
        },
        2: {
            requirementDescription: "Get 114 Broken Hard Bricks",
            effectDescription: "Unlock 6th Big Mushroom upgrade.",
            done() { return player.big_mushroom.broken_hard_brick.gte(114) },
        },
        3: {
            requirementDescription: "Get 136 Broken Ice Blocks",
            effectDescription: "Unlock 11th Big Mushroom upgrade.",
            done() { return player.big_mushroom.broken_ice_block.gte(136) },
        },
    },
    update(BMBHB) {    
        BMBB = new Decimal(0.05)
        let BMBHBeff = player.big_mushroom.broken_hard_brick.max(1).pow(1.75)
        BMBB = BMBB.times(BMBHBeff)
        BMBB = BMBB.times(clickableEffect('big_mushroom', 11)) 
        if (hasUpgrade('big_mushroom', 12)) BMBB = BMBB.times(upgradeEffect('big_mushroom', 12))
        if (hasUpgrade('super_leaf', 11)) BMBB = BMBB.times(20)
        if (hasUpgrade('super_leaf', 13)) BMBB = BMBB.times(20).pow(1.25).times(0.05)
        if (hasMilestone('cape_feather', 0)) BMBB = BMBB.times(1e200)
        if (hasUpgrade('big_mushroom', 33) || hasAchievement('achievements', 62)) player.big_mushroom.broken_brick = player.big_mushroom.broken_brick.add(BMBB.times(10))
        BMBHB = new Decimal(0.05)
        if (hasUpgrade('big_mushroom', 21)) BMBHB = BMBHB.times(clickableEffect('big_mushroom', 11))
		let BMBICeff = player.big_mushroom.broken_ice_block.max(1).pow(2.75)
        BMBHB = BMBHB.times(BMBICeff)
        if (hasMilestone('super_leaf', 2)) BMBHB = BMBHB.times(10)
        if (hasUpgrade('super_leaf', 11)) BMBHB = BMBHB.times(20)
        if (hasUpgrade('big_mushroom', 15)) player.big_mushroom.broken_hard_brick = player.big_mushroom.broken_hard_brick.add(BMBHB)  
        BMBIC = new Decimal(0.05)
        if (hasUpgrade('big_mushroom', 31)) BMBIC = BMBIC.times(clickableEffect('big_mushroom', 11))
        if (hasMilestone('super_leaf', 2)) BMBIC = BMBIC.times(10)
        if (hasUpgrade('super_leaf', 11)) BMBIC = BMBIC.times(20)
        if (hasUpgrade('super_leaf', 22)) BMBIC = BMBIC.times(489040)
        if (hasUpgrade('cape_feather', 25)) BMBIC = BMBIC.times(upgradeEffect('cape_feather', 25))
		if (hasUpgrade('big_mushroom', 25)) player.big_mushroom.broken_ice_block = player.big_mushroom.broken_ice_block.add(BMBIC)
        clickBrBfactor2 = new Decimal(15)
        if (hasMilestone('big_mushroom', 1)) clickBrBfactor2 = clickBrBfactor2.times(2019)
        if (hasUpgrade('big_mushroom', 32)) clickBrBfactor2 = clickBrBfactor2.times(upgradeEffect('big_mushroom', 32))
		if (hasUpgrade('big_mushroom', 13)) player.big_mushroom.clickBrBfactor2 = player.big_mushroom.clickBrBfactor2.add(clickBrBfactor2)     
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Big Mushroom is from Super Mario Maker (2015). <br> Characters can be so big, and they are able to destroy bricks when they jump onto them.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
                
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones",
                ]    
            },
            "Destruction": {
                unlocked() {return hasUpgrade('big_mushroom', 11)},
                content: [
                    ["blank", "15px"],
                    ["display-text", () => "You have <h2 style='color: #a05911; text-shadow: 0 0 10px #a05911'>" + format(player.big_mushroom.broken_brick) + "</h2> Broken Bricks, multiplying Big Mushroom gain by <h2 style='color: #a05911; text-shadow: 0 0 10px #a05911'> <br>" + format(player.big_mushroom.broken_brick.max(1).pow(0.1)) + "x</h2>. <br>You have <h2 style='color: #ffff80; text-shadow: 0 0 10px #ffff80'>" + format(player.big_mushroom.broken_hard_brick) + "</h2> Broken Hard Bricks, multiplying Broken Brick gain by <h2 style='color: #ffff80; text-shadow: 0 0 10px #ffff80'> <br>" + format(player.big_mushroom.broken_hard_brick.max(1).pow(1.75)) + "x</h2>. <br>You have <h2 style='color: #55dff8; text-shadow: 0 0 10px #55dff8'>" + format(player.big_mushroom.broken_ice_block) + "</h2> Broken Ice Blocks, multiplying Broken Hard Brick gain by <h2 style='color: #55dff8; text-shadow: 0 0 10px #55dff8'> <br>" + format(player.big_mushroom.broken_ice_block.max(1).pow(2.75)) + "x</h2>."],
                    "clickables",
                    "buyables",
                ]    
            },
        },
    },
})
// 第八层：超级叶子
addLayer("super_leaf", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
        slsp: new Decimal(0),
    }},
    effect(){
        return Decimal.add(player[this.layer].points.times('1e1250')).times(player[this.layer].points.pow(20)).max(1)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
    },
    effectDescription(){
        return "multiplying Cleared Courses gain by " + format(tmp[this.layer].effect)
        /*
        use format(num) whenever displaying a number
        */
    },
    color: "#F83A11",                       // The color for this layer, which affects many elements.
    resource: "Super Leaves",            // The name of this layer's main prestige resource.
    row: 3, 
    position: 0,  
    symbol: "SL",
                                  // The row this layer is on (0 is the first row).
    branches: ["oneup_mushroom"],
    baseResource: "1UP Mushrooms",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.oneup_mushroom.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(1e37),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.01,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1)
        if (hasUpgrade('super_leaf', 12)) mult = mult.times(5)               // Factor in any bonuses multiplying gain here.
        if (hasUpgrade('super_leaf', 14)) mult = mult.times(5)
        if (hasUpgrade('super_leaf', 21)) mult = mult.times(10)
        if (hasUpgrade('super_leaf', 31)) mult = mult.times(upgradeEffect('super_leaf', 31))
        if (hasUpgrade('super_leaf', 32)) mult = mult.times(7.77)
        if (hasUpgrade('super_leaf', 33)) mult = mult.times(10.21)
        if (hasUpgrade('super_leaf', 222)) mult = mult.times(3)
        if (hasUpgrade('super_leaf', 271)) mult = mult.times(upgradeEffect('super_leaf', 271))
        if (hasUpgrade('super_leaf', 302)) mult = mult.times(100021)
        if (player.propeller_mushroom.best.gte(1)) mult = mult.times(tmp.propeller_mushroom.effect)
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return hasUpgrade('oneup_mushroom', 35) || hasAchievement('achievements', 55)},          // Returns a bool for if this layer's node should be visible in the tree.

    update(multSLSP) {
        multSLSP = new Decimal(0.05)
        if (hasUpgrade('super_leaf', 34)) multSLSP = multSLSP.times(upgradeEffect('super_leaf', 34))
        if (hasUpgrade('super_leaf', 211)) multSLSP = multSLSP.times(10)
        if (hasUpgrade('super_leaf', 212)) multSLSP = multSLSP.times(upgradeEffect('super_leaf', 212))
        if (hasUpgrade('super_leaf', 241)) multSLSP = multSLSP.times(upgradeEffect('super_leaf', 241))
        if (hasUpgrade('super_leaf', 242)) multSLSP = multSLSP.times(upgradeEffect('super_leaf', 242))
        if (hasUpgrade('super_leaf', 272)) multSLSP = multSLSP.times(248)
        if (hasUpgrade('super_leaf', 273)) multSLSP = multSLSP.times(51200)
        if (hasUpgrade('super_leaf', 301)) multSLSP = multSLSP.times(1e15)
        if (hasUpgrade('super_leaf', 303)) multSLSP = multSLSP.times(1e20)
        if (hasMilestone('propeller_mushroom', 4)) multSLSP = multSLSP.times(100)
        if (hasUpgrade('super_leaf', 201)) player.super_leaf.slsp = player.super_leaf.slsp.add(multSLSP)
    },
    
    autoUpgrade() {return hasMilestone('propeller_mushroom', 2)},
    passiveGeneration() {return hasMilestone('propeller_mushroom', 2)},

    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
                if(hasMilestone('propeller_mushroom', 1)) {
                kept.push("milestones", 7)
                    }
                if(hasMilestone('propeller_mushroom', 5)) {
                kept.push("milestones")
                    }
                    if(hasMilestone('master_sword', 16)) {
                        kept.push("upgrades")
                        }

        layerDataReset(this.layer, kept)
        }
    },

    hotkeys: [
        {key: "l", description: "L: Reset for Super Leaves", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades: {
        11: {
            title: "Be a raccoon",
            description: "x20 all the resource except BM in BM layer.",
            cost: new Decimal(6.9999999999),
            unlocked() {return true},
        },
        12: {
            title: "Accelerate first",
            description: "Quintuple Super Leaf gain.",
            cost: new Decimal(7.9999999999),
            unlocked() {return hasUpgrade('super_leaf', 11)},
        },
        13: {
            title: "To the max speed",
            description: "^1.25 Broken Brick gain.",
            cost: new Decimal(20),
            unlocked() {return hasUpgrade('super_leaf', 12)},
        },
        14: {
            title: "Then fly!",
            description: "Quintuple Super Leaf gain, again.",
            cost: new Decimal(24),
            unlocked() {return hasUpgrade('super_leaf', 13)},
        },
        15: {
            title: "The tail attack",
            description: "Unlock SL Skill Tree.",
            cost: new Decimal(114),
            unlocked() {return hasUpgrade('super_leaf', 14)},
        },
        21: {
            title: "How about Raccoon Mario kaizo?",
            description: "x10 Super Leaf gain.<br>*This upgrade will disappear when you respec the SLST.",
            cost: new Decimal(114514),
            unlocked() {return hasUpgrade('super_leaf', 291)},
        },
        22: {
            title: "The powerful tail",
            description: "x489040 Broken Ice Block gain",
            cost: new Decimal(497000),
            unlocked() {return hasUpgrade('super_leaf', 21)},
        },
        23: {
            title: "The powerful tail",
            description: "Multiply 1UP Mushroom based on Big Mushroom",
            cost: new Decimal(697000),
            unlocked() {return hasUpgrade('super_leaf', 22)},
            effect() {
                return player.big_mushroom.points.sqrt().max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        24: {
            title: "Reclaim with tail",
            description: "1.797e308x Bouncy Ball gain.",
            cost: new Decimal(4194304),
            unlocked() {return hasUpgrade('super_leaf', 23)},
        },
        25: {
            title: "Boss fight and fly",
            description: "Remove Bob-omb challenge effect hardcap and get a softcap.",
            cost: new Decimal(5120000),
            unlocked() {return hasUpgrade('super_leaf', 24)},
        },
        31: {
            title: "Flying limit",
            description: "Multiply Super Leaf gain based on time spend on this SL reset.",
            cost: new Decimal(12413170),
            unlocked() {return hasUpgrade('super_leaf', 25)},
            effect() {
                let SLRT = player.super_leaf.resetTime
                return Decimal.pow(SLRT, 1).times(2).max(1).min(100)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x<br>Hardcap at x100 after 50s" },
        },
        32: {
            title: "Fly, land, fly",
            description: "x7.77 Super Leaf gain.",
            cost: new Decimal(400000000),
            unlocked() {return hasUpgrade('super_leaf', 31)},
        },
        33: {
            title: "Precision mid-air",
            description: "x10.21 Super Leaf gain.",
            cost: new Decimal(2.88e9),
            unlocked() {return hasUpgrade('super_leaf', 32)},
        },
        34: {
            title: "Hit ? block on the floor",
            description: "Multiply SL Skill Point gain based on Invincible Stars.",
            cost: new Decimal(3.14e10),
            unlocked() {return hasUpgrade('super_leaf', 33)},
            effect() { return player.invincible_star.points.pow(2).max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        35: {
            title: "Speedrun mid-air",
            description: "Extend the SL Skill Tree.",
            cost: new Decimal(3.76e10),
            unlocked() {return hasUpgrade('super_leaf', 34)},
        },
        41: {
            title: "They can fly",
            description: "You can both buy SLST 11,1 11,2 11,3.",
            cost: new Decimal(1e37),
            unlocked() {return hasUpgrade('cape_feather', 12)},
        },
        42: {
            title: "Fly to a secret reward room",
            description: "Unlock 15th Cape Feather upgrade.",
            cost: new Decimal(2e205),
            unlocked() {return hasUpgrade('cape_feather', 34) && inChallenge('oneup_mushroom', 11) || hasAchievement('achievements', 81)},
        },
        43: {
            title: "Free fly",
            description: "Get 1000 Super Leaves for free.",
            cost: new Decimal(-1000),
            unlocked() {return hasMilestone('propeller_mushroom', 1)},
        },
        // Look in the upgrades docs to see what goes here!
        // 超级叶子普通升级与树升级的分界
        201: {
            title: "Infinite flying?",
            description: "Generate 1 SL Skill Point per second.",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(0),
            unlocked() {return hasUpgrade('super_leaf', 15)},
        },
        211: {
            title: "Jump on enemies to continue flying",
            description: "10x SL Skill Point gain.<br>Lock 2,2",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(20),
            unlocked() {return hasUpgrade('super_leaf', 201)},
            canAfford() {
                if (hasUpgrade('super_leaf', 251) || hasMilestone('propeller_mushroom', 1)) return true
                else if (hasUpgrade('super_leaf', 212)) return false
                else return true
            }
        },
        212: {
            title: "Trampoline boost and fly",
            description: "Multiply SL Skill point gain based on Super Leaf.<br>Lock 2,1",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(424),
            unlocked() {return hasUpgrade('super_leaf', 201)},
            canAfford() {
                if (hasUpgrade('super_leaf', 251) || hasMilestone('propeller_mushroom', 1)) return true
                else if (hasUpgrade('super_leaf', 211)) return false
                else return true
            },
            effect() {
                return player.super_leaf.points.max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        221: {
            title: "Jump on enemies to continue flying",
            description: "4.89e166x Fire Flower gain.<br>Lock 3,2",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(20240),
            unlocked() {return hasUpgrade('super_leaf', 211) || hasUpgrade('super_leaf', 212)},
            canAfford() {
                if (hasUpgrade('super_leaf', 261) || hasMilestone('propeller_mushroom', 1)) return true
                else if (hasUpgrade('super_leaf', 222)) return false
                else return true
            }
        },
        222: {
            title: "Fly outside the screen",
            description: "^1.5 1UP Mushroom gain and triple Super-Leaf gain.<br>Lock 3,1",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(20240),
            unlocked() {return hasUpgrade('super_leaf', 211) || hasUpgrade('super_leaf', 212)},
            canAfford() {
                if (hasUpgrade('super_leaf', 261) || hasMilestone('propeller_mushroom', 1)) return true
                else if (hasUpgrade('super_leaf', 221)) return false
                else return true
            }
        },
        231: {
            title: "Fly while ducking",
            description: "The softcap of 1st BBF buyable is weaker.",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(202403),
            unlocked() {return hasUpgrade('super_leaf', 221) || hasUpgrade('super_leaf', 222)},
        },
        241: {
            title: "The highest fly",
            description: "Multiply SL Skill Points based on Bouncy Ball.<br>Lock 5,2",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(489040),
            unlocked() {return hasUpgrade('super_leaf', 231)},
            canAfford() {
                if (hasUpgrade('super_leaf', 281) || hasMilestone('propeller_mushroom', 1)) return true
                else if (hasUpgrade('super_leaf', 242)) return false
                else return true
            },
            effect() {
                return player.bouncy_ball_flower.bouncy_ball.max(1).log(10).pow(5).div(2e10).max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        242: {
            title: "Fly over the lava",
            description: "Multiply SL Skill Points based on Pink Key Coin.<br>Lock 5,1",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(324000000),
            unlocked() {return hasUpgrade('super_leaf', 231)},
            canAfford() {
                if (hasUpgrade('super_leaf', 281) || hasMilestone('propeller_mushroom', 1)) return true
                else if (hasUpgrade('super_leaf', 241)) return false
                else return true
            },
            effect() {
                return player.coin.pink_key_coin.max(1).log(10).pow(4).div(1e11).max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        251: {
            title: "Balanced flying",
            description: "You can both buy SLST 2,1 and 2,2",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(6.92e9),
            unlocked() {return hasUpgrade('super_leaf', 241) || hasUpgrade('super_leaf', 242)},
        },
        261: {
            title: "Keep flying! Hold Y!",
            description: "You can both buy SLST 3,1 and 3,2",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(5.01e10),
            unlocked() {return hasUpgrade('super_leaf', 251)},
        },
        271: {
            title: "The swinging animation",
            description: "Multiply Super Leaves based on Cleared Courses.<br>Lock 8,2 and 8,3",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(1.66e13),
            unlocked() {return hasUpgrade('super_leaf', 261)},
            canAfford() {
                if (hasUpgrade('super_leaf', 311) || hasMilestone('propeller_mushroom', 1)) return true
                else if (hasUpgrade('super_leaf', 272)) return false
                else if (hasUpgrade('super_leaf', 273)) return false
                else return true
            },
            effect() {
                return player.points.max(1).log(10).div(1000).max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        272: {
            title: "The anti-gravity at night",
            description: "x248 SL Skill Points gain.<br>Lock 8,1 and 8,3",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(1e11),
            unlocked() {return hasUpgrade('super_leaf', 261)},
            canAfford() {
                if (hasUpgrade('super_leaf', 311) || hasMilestone('propeller_mushroom', 1)) return true
                else if (hasUpgrade('super_leaf', 271)) return false
                else if (hasUpgrade('super_leaf', 273)) return false
                else return true
            },
        },
        273: {
            title: "It looks light!",
            description: "x51200 SL Skill Points gain.<br>Lock 8,1 and 8,2",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(7.88e14),
            unlocked() {return hasUpgrade('super_leaf', 261)},
            canAfford() {
                if (hasUpgrade('super_leaf', 311) || hasMilestone('propeller_mushroom', 1)) return true
                else if (hasUpgrade('super_leaf', 271)) return false
                else if (hasUpgrade('super_leaf', 272)) return false
                else return true
            },
        },
        281: {
            title: "Fly together!",
            description: "You can both buy SLST 5,1 and 5,2",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(8.99e16),
            unlocked() {return hasUpgrade('super_leaf', 271) || hasUpgrade('super_leaf', 272) || hasUpgrade('super_leaf', 273)},
        },
        291: {
            title: "Look like a pilot",
            description: "Unlock 6th Super Leaf upgrade.",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(1.14e20),
            unlocked() {return hasUpgrade('super_leaf', 281)},
        },
        301: {
            title: "Still flying?",
            description: "x1e15 SL Skill Points gain.<br>Lock 11,2 and 11,3",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(2e34),
            unlocked() {return hasUpgrade('super_leaf', 35) && hasUpgrade('super_leaf', 291)},
            canAfford() {
                if (hasUpgrade('super_leaf', 41) || hasMilestone('propeller_mushroom', 1)) return true
                else if (hasUpgrade('super_leaf', 302)) return false
                else if (hasUpgrade('super_leaf', 303)) return false
                else return true
            },
        },
        302: {
            title: "Fly 200-block high",
            description: "x100021 Super Leaf gain.<br>Lock 11,1 and 11,3",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(8.88e48),
            unlocked() {return hasUpgrade('super_leaf', 35) && hasUpgrade('super_leaf', 291)},
            canAfford() {
                if (hasUpgrade('super_leaf', 41) || hasMilestone('propeller_mushroom', 1)) return true
                else if (hasUpgrade('super_leaf', 301)) return false
                else if (hasUpgrade('super_leaf', 303)) return false
                else return true
            },
        },
        303: {
            title: "Fly in space",
            description: "x1e20 SL Skill Points gain.<br>Lock 11,1 and 11,2",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(8.88e53),
            unlocked() {return hasUpgrade('super_leaf', 35) && hasUpgrade('super_leaf', 291)},
            canAfford() {
                if (hasUpgrade('super_leaf', 41) || hasMilestone('propeller_mushroom', 1)) return true
                else if (hasUpgrade('super_leaf', 301)) return false
                else if (hasUpgrade('super_leaf', 302)) return false
                else return true
            },
        },
        311: {
            title: "One hit, 100 enemies",
            description: "You can both buy SLST 8,1 8,2 and 8,3.",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(1.25e59),
            unlocked() {return hasUpgrade('super_leaf', 301) || hasUpgrade('super_leaf', 302) || hasUpgrade('super_leaf', 303)},
        },
        321: {
            title: "Different flying",
            description: "Unlock a new layer.",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(3e61),
            unlocked() {return hasUpgrade('super_leaf', 311)},
        },
        331: {
            title: "Back to fly",
            description: "Unlock 3rd Cape Feather upgrade.",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(1e100),
            unlocked() {return hasUpgrade('super_leaf', 41) && hasUpgrade('super_leaf', 311)},
        },
    },
    clickables: {
        11: {
            display() {
                return "Respec SL Skill Tree, but you won't get your SL Skill Points back. And it'll cause a Super Leaf reset. You can click this while you can reset to gain SL."
            },
            unlocked() {
                return hasUpgrade("super_leaf", 15)
            },
            canClick() {
                return canReset(this.layer)
            },
            onClick() {
                player.super_leaf.upgrades.length
                for(let i = 0; i < player.super_leaf.upgrades.length; i++) { 
                    if (+player.super_leaf.upgrades[i] > 196) { 
                        player.super_leaf.upgrades.splice(i, 1); 
                        i--; 
                    }
                }
                if (canReset(this.layer)) doReset(this.layer)
            },
            style: {'min-height':'30px',
                    'width':'480px',
                    'border-radius':'5%'},
        },
    },
    milestones: {
        0: {
            requirementDescription: "Get 1 Super Leaf",
            effectDescription: "Autobuy Super Mushroom, Fire Flower and Invincible Star upgrades. Passive gain 100% Fire Flowers per second. Autobuy Invincible Stars and buy max.",
            done() { return player.super_leaf.points.gte(1) },
        },
        1: {
            requirementDescription: "Get 2 Super Leaves",
            effectDescription: "Passive gain 1000% Bouncy Ball and Broken Brick per second forever.",
            done() { return player.super_leaf.points.gte(2) },
        },
        2: {
            requirementDescription: "Get 3 Super Leaves",
            effectDescription: "Autobuy BBF buyables forever. 10x Broken Hard Brick and Broken Ice Block gain.",
            done() { return player.super_leaf.points.gte(3) },
        },
        3: {
            requirementDescription: "Get 4 Super Leaves",
            effectDescription: "Autobuy Invincible Star upgrades, auto complete IS and 1UP challenges, forever.",
            done() { return player.super_leaf.points.gte(4) },
        },
        4: {
            requirementDescription: "Get 5 Super Leaves",
            effectDescription: "x10 1UP Mushroom, Bouncy ball Flower and Big Mushroom.",
            done() { return player.super_leaf.points.gte(5) },
        },
        5: {
            requirementDescription: "Get 6 Super Leaves",
            effectDescription: "Passive gain 100% 1UP Mushroom, Bouncy ball Flower and Big Mushroom per second forever.",
            done() { return player.super_leaf.points.gte(5.999999) },
        },
        6: {
            requirementDescription: "Get 3000 Super Leaves",
            effectDescription: "Autobuy 1UP Mushroom upgrades.",
            done() { return player.super_leaf.points.gte(3000) },
        },
        7: {
            requirementDescription: "Get 9402011 Super Leaves",
            effectDescription: "Keep row 3 milestones on row 4 reset.",
            done() { return player.super_leaf.points.gte(9402011) },
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Super Leaf is from Super Mario Bros. 3. (1988) <br> The main ability of this kind of power-up is flying.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]]
                ]
                
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones",
                ]    
            },
            "SL Skill Tree": {
                unlocked() {return hasUpgrade('super_leaf', 15)},
                content: [
                    ["blank", "15px"],
                    ["display-text", () => "You have <h2 style='color: #f83a11; text-shadow: 0 0 10px #f83a11'>" + format(player.super_leaf.slsp) + "</h2> SL Skill Points."],
                    "clickables",
                    ["upgrades", [20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]]
                ]    
            },
        },
    },
})
// 第九层：斗篷羽毛
addLayer("cape_feather", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
        ce: new Decimal(0)
    }},

    color: "#FCBF02",                       // The color for this layer, which affects many elements.
    resource: "Cape Feathers",            // The name of this layer's main prestige resource.
    row: 3,                                 // The row this layer is on (0 is the first row).
    position: 1,
    branches: ["big_mushroom"],
    symbol: "CF",
    baseResource: "Big Mushrooms",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.big_mushroom.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(1e86),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "static",                         // Determines the formula used for calculating prestige currency.
    exponent: 5,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    hotkeys: [
        {key: "C", description: "Shift+C: Reset for Cape Feathers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],

    layerShown() { return hasAchievement('achievements', 72) },          // Returns a bool for if this layer's node should be visible in the tree.

    canBuyMax() { return hasUpgrade("cape_feather", 33)},

    autoUpgrade() {return hasMilestone('propeller_mushroom', 3)},
    autoPrestige() {return hasMilestone('propeller_mushroom', 3)},
    resetsNothing() {return hasMilestone('propeller_mushroom', 3)},

    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if(hasMilestone('propeller_mushroom', 7)) {
            kept.push("milestones")
            }
            if(hasMilestone('master_sword', 17)) {
                kept.push("upgrades")
                }

        layerDataReset(this.layer, kept)
        }
    },

    automate(){
        if (player.cape_feather.ce.lte(0)) return
        if (hasMilestone('propeller_mushroom', 3)
        ) {
            if (player.cape_feather.ce) {
                hasMilestone('propeller_mushroom', 3) ? setBuyableAmount("cape_feather",11,tmp.cape_feather.buyables[11].canAfford?player.cape_feather.ce.log(2.75).floor().add(1):getBuyableAmount("cape_feather",11)) : buyBuyable("cape_feather",11)
                hasMilestone('propeller_mushroom', 3) ? setBuyableAmount("cape_feather",12,tmp.cape_feather.buyables[12].canAfford?player.cape_feather.ce.log(6.75).pow(1/1.15).floor().add(1):getBuyableAmount("cape_feather",12)) : buyBuyable("cape_feather",12)
            }
        }
    },
    update(multCE) {
        multCE = new Decimal(0.05)
        if (hasUpgrade('cape_feather', 15)) multCE = multCE.times(player.cape_feather.points)
        if (hasUpgrade('cape_feather', 21)) multCE = multCE.times(upgradeEffect('cape_feather', 21))
        if (hasUpgrade('cape_feather', 23)) multCE = multCE.times(upgradeEffect('cape_feather', 23))
        if (hasUpgrade('cape_feather', 24)) multCE = multCE.times(buyableEffect('cape_feather', 12))
        if (hasMilestone('cape_feather', 2)) multCE = multCE.times(1e10)
        if (hasMilestone('propeller_mushroom', 0)) multCE = multCE.times(100)
        if (hasUpgrade('propeller_mushroom', 12)) multCE = multCE.times(player.yoshi_egg.red_yoshi.max(1).pow(0.75))
        if (hasUpgrade('propeller_mushroom', 12) && inChallenge('super_hammer', 11)) multCE = multCE.div(player.yoshi_egg.red_yoshi.max(1).pow(0.75))
        if (inChallenge('propeller_mushroom', 11)) multCE = multCE.times(0)
        if (hasUpgrade('cape_feather', 15)) player.cape_feather.ce = player.cape_feather.ce.add(multCE)
    },

    upgrades: {
        11: {
            title: "Useful cape",
            description: "Multiply Big Mushroom gain based on Cape Feather.<br>Formula: 1e50^x (Hardcap at 1e2000)",
            cost: new Decimal(4),
            unlocked() {return hasMilestone('cape_feather', 1)},
            effect() {
                let CFU1base = new Decimal(1)
                let CFU1hardcap = new Decimal("1e2000")
                if (hasUpgrade('cape_feather', 15)) CFU1base = CFU1base.times(buyableEffect('cape_feather', 11))
                else CFU1base = CFU1base.times(1e50) 
                if (hasUpgrade('cape_feather', 31)) CFU1hardcap = new Decimal("1e5000")
                if (hasUpgrade('propeller_mushroom', 13)) CFU1hardcap = new Decimal("1e30000")
                if (hasUpgrade('propeller_mushroom', 23)) CFU1hardcap = new Decimal("e1.25e10")
                return Decimal.pow(CFU1base, player.cape_feather.points).min(CFU1hardcap)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            title: "Gliding",
            description: "Unlock 16th Super Leaf upgrade.",
            cost: new Decimal(6),
            unlocked() {return hasUpgrade('cape_feather', 11)},
        },
        13: {
            title: "So high!",
            description: "Autobuy Bouncy Ball Flower upgrades.",
            cost: new Decimal(6),
            unlocked() {return hasUpgrade('super_leaf', 331)},
        },
        14: {
            title: "Spin gliding",
            description: "Make the IS effect better.",
            currencyDisplayName: "Coins",
            currencyInternalName: "points",
            currencyLayer: "coin",
            cost: new Decimal("1e1281000"),
            unlocked() {return hasUpgrade('cape_feather', 13)},
        },
        15: {
            title: "Accelerate to max again",
            description: "Unlock a new subtab.",
            currencyDisplayName: "Invincible Stars",
            currencyInternalName: "points",
            currencyLayer: "invincible_star",
            cost: new Decimal(116),
            unlocked() {return hasUpgrade('cape_feather', 14)},
        },
        21: {
            title: "Accelerate to max again",
            description: "Multiply Cape Essence based on Invincible Star.",
            currencyDisplayName: "Super Mushrooms",
            currencyInternalName: "points",
            currencyLayer: "super_mushroom",
            cost: new Decimal("1e691250"),
            unlocked() {return hasUpgrade('cape_feather', 15)},
            effect() {
                return player.invincible_star.points.times(500).max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22: {
            title: "Different animation",
            description: "Make the softcap of 1st Bouncy Ball buyable weaker again.",
            currencyDisplayName: "Fire Flowers",
            currencyInternalName: "points",
            currencyLayer: "fire_flower",
            cost: new Decimal("1e68888"),
            unlocked() {return hasUpgrade('cape_feather', 21)},
        },
        23: {
            title: "Fast fly in space",
            description: "Multiply Cape Essence by OoMs of Cleared Courses.",
            cost: new Decimal(7),
            unlocked() {return hasUpgrade('cape_feather', 22)},
            effect() {
                return player.points.max(1).log(10).max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        24: {
            title: "Higher than max",
            description: "Unlock 2nd Cape Feather buyable.",
            currencyDisplayName: "1UP Mushrooms",
            currencyInternalName: "points",
            currencyLayer: "oneup_mushroom",
            cost: new Decimal("1e6737"),
            unlocked() {return hasUpgrade('cape_feather', 23)},
        },
        25: {
            title: "Invincible ability",
            description: "Multiply Broken Ice Blocks based on Cape Essence.",
            currencyDisplayName: "Invincible Stars",
            currencyInternalName: "points",
            currencyLayer: "invincible_star",
            cost: new Decimal(234),
            unlocked() {return hasUpgrade('cape_feather', 24)},
            effect() {
                return player.cape_feather.ce.pow(25).max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        31: {
            title: "When flying",
            description: "Remove 1st hardcap of 1st Cape Feather upgrade. 2nd hardcap at x1e5000",
            cost: new Decimal(9),
            unlocked() {return hasUpgrade('cape_feather', 25)},
        },
        32: {
            title: "But still will take any damage",
            description: "Autobuy Big Mushroom upgrades.",
            cost: new Decimal(9),
            unlocked() {return hasUpgrade('cape_feather', 31)},
        },
        33: {
            title: "Drop to ground",
            description: "You can buy max Cape Feathers.",
            cost: new Decimal(9),
            unlocked() {return hasUpgrade('cape_feather', 32)},
        },
        34: {
            title: "Like groundpound!",
            description: "You will find a secret upgrade while you are in the 1st 1UP Mushroom challenge.",
            cost: new Decimal(9),
            unlocked() {return hasUpgrade('cape_feather', 33)},
        },
        35: {
            title: "Best friends forever",
            description: "Unlock the last layer of the 4th row.",
            cost: new Decimal(9),
            unlocked() {return hasUpgrade('super_leaf', 42)},
        },
        // Look in the upgrades docs to see what goes here!
    },
    milestones: {
        0: {
            requirementDescription: "Get 2 Cape Feathers",
            effectDescription: "x1e200 Broken Brick gain.",
            done() { return player.cape_feather.points.gte(2) },
        },
        1: {
            requirementDescription: "Get 4 Cape Feathers",
            effectDescription: "Unlock 1st Cape Feather upgrade.",
            done() { return player.cape_feather.points.gte(4) },
        },
        2: {
            requirementDescription: "Get 8 Cape Feathers",
            effectDescription: "x1e10 Cape Essence gain.",
            done() { return player.cape_feather.points.gte(8) },
        },
    },
    buyables: {
        11: {
            title: "More powerful flying",
            cost(x) { return new Decimal(2.75).pow(x) },
            display() { return` Make 1st Cape Feather formula better. <br>
                Formula: ${format(this.effect())}^x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Cape Essence`
            },
            canAfford() { return player[this.layer].ce.gte(this.cost()) },
            buy() {
                player[this.layer].ce = player[this.layer].ce.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
               return new Decimal(1e50).times(Decimal.pow(Decimal.sqrt(100000), x))
            },
            unlocked() {return hasUpgrade('cape_feather', 15)}
        },
        12: {
            title: "A powerful drop",
            cost(x) { return new Decimal(6.75).pow(x.max(1).pow(1.15)) },
            display() { return` Get more Cape Essence. <br>
                Effect: x${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Cape Essence`
            },
            canAfford() { return player[this.layer].ce.gte(this.cost()) },
            buy() {
                player[this.layer].ce = player[this.layer].ce.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
               if (hasUpgrade('propeller_mushroom', 24)) return Decimal.pow(3.75, x).pow(2)
               else return Decimal.pow(3.75, x)
            },
            unlocked() {return hasUpgrade('cape_feather', 24)}
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Cape Feather is a kind of power-ups in Super Mario World (1991). <br> Players can fly with capes, and with wounderful abilities.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
                
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones",
                ]    
            },
            "Cape Essence": {
                unlocked() {return hasUpgrade('cape_feather', 15)},
                content: [
                    ["blank", "15px"],
                    ["display-text", () =>"You have <h2 style='color: #fcbf02; text-shadow: 0 0 10px #fcbf02'>" + format(player.cape_feather.ce) + "</h2> Cape Essence.<br>You gain Cape Essence per second based on amount of Cape Feathers."],
                    "buyables",
                ]    
            },
        },
    },
})
// 第十层：耀西蛋
addLayer("yoshi_egg", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
        yoshi: new Decimal(0),
        red_yoshi: new Decimal(0),
    }},
    symbol: "YE",
    color: "#00D800",                       // The color for this layer, which affects many elements.
    resource: "Yoshi Eggs",            // The name of this layer's main prestige resource.
    row: 3,                                 // The row this layer is on (0 is the first row).
    position: 2,
    baseResource: "Bouncy Ball Flowers",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.bouncy_ball_flower.points },  // A function to return the current amount of baseResource.

    requires: new Decimal("1e11341"),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.
    softcap: new Decimal("1e60000000"),
    softcapPower: new Decimal(0.25),

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 2.5e-4,                          // "normal" prestige gain is (currency^exponent).
    branches: ["bouncy_ball_flower"],
    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1)               // Factor in any bonuses multiplying gain here.
        if (hasUpgrade('yoshi_egg', 11)) mult = mult.times(5)
        if (hasMilestone('yoshi_egg', 0)) mult = mult.times(player.yoshi_egg.yoshi.max(4).log(4))
        if (hasUpgrade('yoshi_egg', 13)) mult = mult.times(5)
        if (hasUpgrade('yoshi_egg', 15)) mult = mult.times(upgradeEffect('yoshi_egg', 15))
        if (hasUpgrade('yoshi_egg', 21)) mult = mult.times(upgradeEffect('yoshi_egg', 21))
        if (hasUpgrade('yoshi_egg', 22)) mult = mult.times(upgradeEffect('yoshi_egg', 22))
        if (hasUpgrade('yoshi_egg', 24)) mult = mult.times(100)
        if (hasUpgrade('yoshi_egg', 33)) mult = mult.times(upgradeEffect('yoshi_egg', 33))
        if (hasChallenge('propeller_mushroom', 11)) mult = mult.times(challengeEffect('propeller_mushroom', 11))
        if (hasUpgrade('propeller_mushroom', 22)) mult = mult.times(1e100)
        if (player.propeller_mushroom.best.gte(1)) mult = mult.times(tmp.propeller_mushroom.effect)
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return hasAchievement('achievements', 81) },          // Returns a bool for if this layer's node should be visible in the tree.
    passiveGeneration() {return hasMilestone('propeller_mushroom', 5)},
    autoUpgrade() {return hasMilestone('propeller_mushroom', 6)},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if(hasMilestone('propeller_mushroom', 7)) {
            kept.push("milestones")
            }
            if(hasMilestone('master_sword', 18)) {
                kept.push("upgrades")
                }

        layerDataReset(this.layer, kept)
        }
    },
    hotkeys: [
        {key: "y", description: "Y: Reset for Yoshi Eggs", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    update(multY) {
        multY = new Decimal(0.05)
        if (hasUpgrade('yoshi_egg', 34)) multY = multY.times(player.yoshi_egg.points)
        if (hasUpgrade('yoshi_egg', 34)) player.yoshi_egg.yoshi = player.yoshi_egg.yoshi.add(multY)
        if (hasUpgrade('yoshi_egg', 34)) player.yoshi_egg.red_yoshi = player.yoshi_egg.red_yoshi.add(multY)
    },
    upgrades: {
        11: {
            title: "A dragon?",
            description: "Quintuple Yoshi Egg gain.",
            cost: new Decimal(5),
            unlocked() {return true},
        },
        12: {
            title: "Or a turtle?",
            description: "Unlock 2 buttons that you can incubate 10 Yoshi Eggs by clicking once.",
            cost: new Decimal(85),
            unlocked() {return hasUpgrade('yoshi_egg', 11)},
        },
        13: {
            title: "Shape of its nose",
            description: "Quintuple Yoshi Egg gain, again",
            cost: new Decimal(236),
            unlocked() {return hasUpgrade('yoshi_egg', 12)},
        },
        14: {
            title: "Like a ball",
            description: "Unlock 4 buttons that you can incubate 50% or 100% of your Yoshi Eggs by clicking once.",
            cost: new Decimal(1234),
            unlocked() {return hasUpgrade('yoshi_egg', 13)},
        },
        15: {
            title: "Shell on its back",
            description: "Multiply Yoshi Egg based on Big Mushroom",
            currencyDisplayName: "Fire Flowers",
            currencyInternalName: "points",
            currencyLayer: "fire_flower",
            cost: new Decimal("1e450000"),
            unlocked() {return hasUpgrade('yoshi_egg', 14)},
            effect() {
                return player.big_mushroom.points.max(10).log(10).max(10).log(10).pow(2.5)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        21: {
            title: "The next generation",
            description: "Make the first Yoshi's effect better.",
            cost: new Decimal(256000),
            unlocked() {return hasUpgrade('yoshi_egg', 15)},
            effect() {
                return player.yoshi_egg.yoshi.max(10).log(10)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22: {
            title: "The next generation, but yoshis are red",
            description: "Multiply Yoshi Egg based on Red Yoshi",
            cost: new Decimal(4890400),
            unlocked() {return hasUpgrade('yoshi_egg', 21)},
            effect() {
                return player.yoshi_egg.red_yoshi.max(5).log(5)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        23: {
            title: "The next generation, but yoshis are red",
            description: "Unlock the second Yoshi's effect.",
            cost: new Decimal(150000000),
            unlocked() {return hasUpgrade('yoshi_egg', 22)},
        },
        24: {
            title: "Cape feather flying affacts yoshi",
            description: "x100 Yoshi Egg gain.",
            cost: new Decimal(7.77e9),
            unlocked() {return hasUpgrade('yoshi_egg', 23)},
        },
        25: {
            title: "How to fly straight?",
            description: "Unlock a new layer at layer 5.",
            cost: new Decimal(1e14),
            unlocked() {return hasUpgrade('yoshi_egg', 24)},
        },
        31: {
            title: "Two-yoshi limit",
            description: "Unlock a Propeller Mushroom challenge.",
            cost: new Decimal(1e116),
            unlocked() {return hasUpgrade('propeller_mushroom', 15)},
        },
        32: {
            title: "Red Yoshi+Fire Flower",
            description: "Remove 1st IS challenge effect hardcap.",
            cost: new Decimal(1e138),
            unlocked() {return hasUpgrade('yoshi_egg', 31)},
        },
        33: {
            title: "Yoshi's skills",
            description: "Multiply Yoshi gain based on SL Skill Points.",
            cost: new Decimal(1e157),
            unlocked() {return hasUpgrade('yoshi_egg', 32)},
            effect() {
                return player.super_leaf.slsp.max(1).log(10).max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        34: {
            title: "Condition of",
            description: "Passive gain Yoshi and Red Yoshi per second.",
            cost: new Decimal("1e497"),
            unlocked() {return hasUpgrade('yoshi_egg', 33)},
        },
        35: {
            title: "Riding Yoshi",
            description: "x1e10 Propeller Mushroom gain.",
            cost: new Decimal("1e500"),
            unlocked() {return hasUpgrade('yoshi_egg', 34)},
        },
        // Look in the upgrades docs to see what goes here!
    },
    milestones: {
        0: {
            requirementDescription: "Get 3 Yoshi Eggs",
            effectDescription: "Unlock the subtab 'Yoshi'.",
            done() { return player.yoshi_egg.points.gte(3) },
        },
    },
    clickables: {
        11: {
            title: "Stick out tongues",
            display() {
                return "Incubate 1 Yoshi Egg to get 1 Yoshi."},
            canClick() {return player.yoshi_egg.points.gte(1)},
            onClick() {
                return player.yoshi_egg.points = player.yoshi_egg.points.sub(1),
                       player.yoshi_egg.yoshi = player.yoshi_egg.yoshi.add(1)
            },
        },
        12: {
            title: "Fire from its mouth?",
            display() {
                return "Incubate 1 Yoshi Egg to get 1 Red Yoshi."},
            canClick() {return player.yoshi_egg.points.gte(1)},
            onClick() {
                return player.yoshi_egg.points = player.yoshi_egg.points.sub(1),
                       player.yoshi_egg.red_yoshi = player.yoshi_egg.red_yoshi.add(1)
            },
            style() {if (player.yoshi_egg.points.gte(1)) return {'background-color':'#f70000'}},
        },
        21: {
            title: "Lick the key",
            display() {
                return "Incubate 10 Yoshi Eggs to get 10 Yoshis."},
            canClick() {return player.yoshi_egg.points.gte(10)},
            onClick() {
                return player.yoshi_egg.points = player.yoshi_egg.points.sub(10),
                       player.yoshi_egg.yoshi = player.yoshi_egg.yoshi.add(10)
            },
            unlocked() {return hasUpgrade('yoshi_egg', 12)},
        },
        22: {
            title: "Triple fire attack",
            display() {
                return "Incubate 10 Yoshis Egg to get 10 Red Yoshis."},
            canClick() {return player.yoshi_egg.points.gte(10)},
            onClick() {
                return player.yoshi_egg.points = player.yoshi_egg.points.sub(10),
                       player.yoshi_egg.red_yoshi = player.yoshi_egg.red_yoshi.add(10)
            },
            unlocked() {return hasUpgrade('yoshi_egg', 12)},
            style() {if (player.yoshi_egg.points.gte(1)) return {'background-color':'#f70000'}},
        },
        31: {
            title: "Longest tongue",
            display() {
                return "Incubate 50% of Yoshi Eggs to get Yoshis."},
            canClick() {return player.yoshi_egg.points.gte(1)},
            onClick() {
                return player.yoshi_egg.yoshi = player.yoshi_egg.yoshi.add(player.yoshi_egg.points.div(2).floor()),
                player.yoshi_egg.points = player.yoshi_egg.points.div(2).ceil()
            },
            unlocked() {return hasUpgrade('yoshi_egg', 14)},
        },
        32: {
            title: "Flying fire",
            display() {
                return "Incubate 50% of Yoshi Eggs to get Red Yoshis."},
            canClick() {return player.yoshi_egg.points.gte(1)},
            onClick() {
                return player.yoshi_egg.red_yoshi = player.yoshi_egg.red_yoshi.add(player.yoshi_egg.points.div(2).floor()),
                player.yoshi_egg.points = player.yoshi_egg.points.div(2).ceil()
            },
            unlocked() {return hasUpgrade('yoshi_egg', 14)},
            style() {if (player.yoshi_egg.points.gte(1)) return {'background-color':'#f70000'}},
        },
        41: {
            title: "Licking through walls",
            display() {
                return "Incubate 100% of Yoshi Eggs to get Yoshis."},
            canClick() {return player.yoshi_egg.points.gte(1)},
            onClick() {
                return player.yoshi_egg.yoshi = player.yoshi_egg.yoshi.add(player.yoshi_egg.points),
                player.yoshi_egg.points = new Decimal(0)
            },
            unlocked() {return hasUpgrade('yoshi_egg', 14)},
        },
        42: {
            title: "Floating jumps",
            display() {
                return "Incubate 100% of Yoshi Eggs to get Red Yoshis."},
            canClick() {return player.yoshi_egg.points.gte(1)},
            onClick() {
                return player.yoshi_egg.red_yoshi = player.yoshi_egg.red_yoshi.add(player.yoshi_egg.points),
                player.yoshi_egg.points = new Decimal(0)
            },
            unlocked() {return hasUpgrade('yoshi_egg', 14)},
            style() {if (player.yoshi_egg.points.gte(1)) return {'background-color':'#f70000'}},
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["display-text", () => "Softcap starts at 1e60,000,000 Yoshi Eggs"],
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Yoshi is from Super Mario World (1991). <br>Different color Yoshis have different abilities.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones",
                ]    
            },
            "Yoshi": {
                unlocked() {return hasMilestone('yoshi_egg', 0)},
                content: [
                    ["blank", "15px"],
                    ["display-text", () => "You have <h2 style='color: #00f800; text-shadow: 0 0 10px #00f800'>" 
                    + format(player.yoshi_egg.yoshi) 
                    + "</h2> Yoshis.<br>You have <h2 style='color: #f80000; text-shadow: 0 0 10px #f80000'>" 
                    + format(player.yoshi_egg.red_yoshi) 
                    + "</h2> Red Yoshis."],
                    "clickables",
                    "buyables",
                ] 
            },   
            "Yoshi Effect": {
                unlocked() {return hasMilestone('yoshi_egg', 0)},
                content: [
                    ["blank", "15px"],
                    ["display-text", () => "You have <h2 style='color: #00f800; text-shadow: 0 0 10px #00f800'>" 
                    + format(player.yoshi_egg.yoshi) 
                    + "</h2> Yoshis."
                    + "<br>You gain <h2 style='color: #00f800; text-shadow: 0 0 10px #00f800'>" 
                    + format(player.yoshi_egg.yoshi.max(4).log(4).times(upgradeEffect('yoshi_egg', 21))) 
                    + "x</h2> Yoshi Eggs. (Effect starts at 5 Yoshis)<br>You gain <h2 style='color: #00f800; text-shadow: 0 0 10px #00f800'>"
                    + format(Decimal.pow(1.1, player.yoshi_egg.yoshi.min(player.yoshi_egg.yoshi.max(100000000).log(100).sub(3).times(100000000)).max(1))) 
                    + "x</h2> Coins (Effect unlocked on buying YE upgrade 8 and softcap at 100,000,000 Yoshis)" ],
                    ["display-text", () => "You have <h2 style='color: #f80000; text-shadow: 0 0 10px #f80000'>" 
                    + format(player.yoshi_egg.red_yoshi) 
                    + "</h2> Red Yoshis."
                    + "<br>You gain <h2 style='color: #f80000; text-shadow: 0 0 10px #f80000'>" 
                    + format(Decimal.pow(1e35, player.yoshi_egg.red_yoshi.min(player.yoshi_egg.red_yoshi.max(1000).log(10).sub(2).times(1000)).max(1)))
                    + "x </h2>Fire Flowers. (Before the exponential caculation, softcap at 1000 Red Yoshis)<br>You gain <h2 style='color: #f80000; text-shadow: 0 0 10px #f80000'>"
                    + format(player.yoshi_egg.red_yoshi.max(1).pow(0.75))
                    + "x </h2>Cape Essence. (Unlock at an upgrade in next layer.)"
                    ],
                ],   
             },
        },
    },
})
// 第十一层：螺旋桨蘑菇
addLayer("propeller_mushroom", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#F45B00",                       // The color for this layer, which affects many elements.
    resource: "Propeller Mushrooms",            // The name of this layer's main prestige resource.
    row: 4,                                 // The row this layer is on (0 is the first row).
    position: 0,
    baseResource: "Super Leaves",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.super_leaf.points },  // A function to return the current amount of baseResource.
    branches: ["super_leaf"],
    symbol: "PM",

    requires: new Decimal("1e474"),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    effect(){
        return player[this.layer].best.times(10).times(player[this.layer].best.add(1).pow(5)).max(1)
        /*
        you should use this.layer instead of <layerID>
        Decimal.pow(num1, num2) is an easier way to do
        num1.pow(num2)
        */
    },
        effectDescription(){
        return "multiplying Super Leaves and Yoshi Eggs gain by " + format(tmp[this.layer].effect)
        /*
        use format(num) whenever displaying a number
        */
    },

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.0025,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1)               // Factor in any bonuses multiplying gain here.
        if (hasUpgrade('propeller_mushroom', 11)) mult = mult.times(25)
        if (hasUpgrade('propeller_mushroom', 14)) mult = mult.times(upgradeEffect('propeller_mushroom', 14))
        if (hasUpgrade('yoshi_egg', 35)) mult = mult.times(1e10)
        if (hasUpgrade('super_bell', 14)) mult = mult.times(upgradeEffect('super_bell', 14))
        if (hasMilestone('master_sword', 0)) mult = mult.times("1e1000")
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        exp = new Decimal(1)
        if (hasUpgrade('propeller_mushroom', 32)) exp = exp.times(1.05)
        if (hasUpgrade('propeller_mushroom', 33)) exp = exp.times(1.05)
        if (hasUpgrade('propeller_mushroom', 34)) exp = exp.times(1.05)
        if (hasMilestone('super_hammer', 0)) exp = exp.times(1.1)
        return exp
    },
    directMult() {
        mult = new Decimal(1)
        if (hasUpgrade('super_hammer', 11)) mult = mult.times(upgradeEffect('super_hammer', 11))
        return mult
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if(hasMilestone('master_sword', 0)) {
            kept.push("milestones")
            }
            if(hasMilestone('master_sword', 1)) {
                kept.push("challenges")
                }
        layerDataReset(this.layer, kept)
        }
    },

    layerShown() { return hasUpgrade('yoshi_egg', 25) || hasAchievement('achievements', 83) },          // Returns a bool for if this layer's node should be visible in the tree.

    passiveGeneration() { return hasUpgrade('super_hammer', 31) || hasMilestone('master_sword', 2) },
    autoUpgrade() { return hasMilestone('master_sword', 4) },
    upgrades: {
        11: {
            title: "Orange helmet",
            description: "x25 Propeller Mushroom gain. (Pretty strong, right?)",
            cost: new Decimal(26),
            unlocked() {return hasMilestone('propeller_mushroom', 4)},
        },
        12: {
            title: "Fast landing",
            description: "Unlock Red Yoshi's 2nd effect.",
            cost: new Decimal(41888),
            unlocked() {return hasUpgrade('propeller_mushroom', 11)},
        },
        13: {
            title: "Fast raising",
            description: "Increase 1st CF upgrade's hardcap to 1e30000",
            cost: new Decimal(554433),
            unlocked() {return hasUpgrade('propeller_mushroom', 12)},
        },
        14: {
            title: "Drilling",
            description: "Multiply Propeller Mushroom gain based on OoM^2s of points.",
            cost: new Decimal(25000000),
            unlocked() {return hasUpgrade('propeller_mushroom', 13)},
            effect() {
                return player.points.max(1).log(10).max(1).log(10).max(1).pow(2)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        15: {
            title: "Propeller+Spike hat?",
            description: "Unlock 11th Yoshi upgrade.",
            cost: new Decimal(1.11e10),
            unlocked() {return hasUpgrade('propeller_mushroom', 14)},
        },
        21: {
            title: "Fly after wall kick",
            description: "x1e10,000,000 Fire Flower gain",
            cost: new Decimal(5e12),
            unlocked() {return hasUpgrade('propeller_mushroom', 15)},
        },
        22: {
            title: "Fly, spin",
            description: "x1e100 Yoshi Egg gain",
            cost: new Decimal(3e43),
            unlocked() {return hasUpgrade('propeller_mushroom', 21)},
        },
        23: {
            title: "Slow pownd in",
            description: "Delay 1st CF upgrade's hardcap to e1.25e10.",
            cost: new Decimal(2.22e49),
            unlocked() {return hasUpgrade('propeller_mushroom', 22)},
        },
        24: {
            title: "Low gravity",
            description: "Square 2nd Cape Feather buyable's effect.",
            cost: new Decimal(1e69),
            unlocked() {return hasUpgrade('propeller_mushroom', 23)},
        },
        25: {
            title: "Meow!",
            description: "Unlock a new layer.",
            cost: new Decimal(1e100),
            unlocked() {return hasUpgrade('propeller_mushroom', 24)},
        },
        31: {
            title: "Kamek turn bricks to Propeller Mushrooms and Coins",
            description: "Cube Coin gain. (You'll reach coin softcap)",
            cost: new Decimal("1e593"),
            unlocked() {return hasUpgrade('super_bell', 25)},
        },
        32: {
            title: "Driller",
            description: "^1.05 Propeller Mushroom gain.",
            cost: new Decimal("1e5396"),
            unlocked() {return hasUpgrade('propeller_mushroom', 31)},
        },
        33: {
            title: "Don't let it fly away!",
            description: "^1.05 Propeller Mushroom gain again.",
            cost: new Decimal("1e5717"),
            unlocked() {return hasUpgrade('propeller_mushroom', 32)},
        },
        34: {
            title: "Best power-up for PVP in NSMBU",
            description: "^1.05 Propeller Mushroom gain again^2.",
            cost: new Decimal("1e6055"),
            unlocked() {return hasUpgrade('propeller_mushroom', 33)},
        },
        35: {
            title: "1000 tons",
            description: "Unlock the last layer at row 5.",
            cost: new Decimal("1e6440"),
            unlocked() {return hasUpgrade('propeller_mushroom', 34)},
        },
        // Look in the upgrades docs to see what goes here!
    },
    hotkeys: [
        {key: "p", description: "P: Reset for Propeller Mushrooms", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    milestones: {
        0: {
            requirementDescription: "Get 1 Propeller Mushroom",
            effectDescription: "Keep all automations in row 3 and 8th SL milestone, x1e50 Big Mushroom and x100 Cape Essence gain.",
            done() { return player.propeller_mushroom.points.gte(1) },
        },
        1: {
            requirementDescription: "Get 3 Propeller Mushrooms",
            effectDescription: "Unlock 18th Super Leaf upgrade and you can always buy every SLST upgrades.<br>Hint: You can get 2 Propeller Mushrooms on 2nd PM reset.",
            done() { return player.propeller_mushroom.points.gte(3) },
        },
        2: {
            requirementDescription: "Get 6 Propeller Mushrooms",
            effectDescription: "Autobuy Super Leaf upgrades and SLST. Passive gain 100% Super Leaf per second.",
            done() { return player.propeller_mushroom.points.gte(6) },
        },
        3: {
            requirementDescription: "Get 10 Propeller Mushrooms",
            effectDescription: "Autobuy Cape Feather and buyables, upgrades in CF layer.",
            done() { return player.propeller_mushroom.points.gte(10) },
        },
        4: {
            requirementDescription: "Get 16 Propeller Mushrooms",
            effectDescription: "x100 SL Skill Point gain and unlock 1st PM upgrade.",
            done() { return player.propeller_mushroom.points.gte(16) },
        },
        5: {
            requirementDescription: "Get 1528 Propeller Mushrooms",
            effectDescription: "Passive gain 100% Yoshi Egg per second. Keep Super Leaf milestones on row 5 reset.",
            done() { return player.propeller_mushroom.points.gte(1528) },
        },
        6: {
            requirementDescription: "Get 1e43 Propeller Mushrooms",
            effectDescription: "Autobuy Yoshi Egg upgrades.",
            done() { return player.propeller_mushroom.points.gte(1e43) },
        },
        7: {
            requirementDescription: "Get 1e90 Propeller Mushrooms",
            effectDescription: "Keep Cape Feather and Yoshi Egg milestones on row 5 resets.",
            done() { return player.propeller_mushroom.points.gte(1e90) },
        },
    },
    challenges: {
        11: {
            name: "Monty moles",
            challengeDescription: "No Cape Essence gain.",
            goalDescription: "Get 1e2060000·1e10000000^x Cleared Courses (x is the completions of this challenge)",
            completionLimit() {
                let PMCCL = new Decimal(10)
                if (hasUpgrade('super_bell', 24)) PMCCL = new Decimal(50)
                return PMCCL},
            canComplete: function() {
                return player.points.gte(Decimal.pow("1e10000000", (challengeCompletions('propeller_mushroom', 11))).times("1e2060000"))
                },
            rewardDescription: "x1e15 Yoshi Eggs gain per each completion.",
            rewardEffect() {
                let PMC1C = player.propeller_mushroom.challenges[11]
                if (hasUpgrade('super_bell', 11)) return Decimal.pow(1e50, PMC1C)
                else return Decimal.pow(1e15, PMC1C)
            },
            rewardDisplay() { let PMC1C = player.propeller_mushroom.challenges[11]
                if (hasUpgrade('super_bell', 24))
                return format(challengeEffect(this.layer, this.id))+"x<br>Completions: "
                + format(PMC1C)
                + "/50<br>Current Goal: "
                + format(Decimal.pow("1e10000000", PMC1C).times("1e2060000"))
                else return format(challengeEffect(this.layer, this.id))+"x<br>Completions: "
                + format(PMC1C)
                + "/10<br>Current Goal: "
                + format(Decimal.pow("1e10000000", PMC1C).times("1e2060000"))},
            unlocked() {return hasAchievement('achievements', 85)},
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["display-text", () => `Your best amount of Propeller Mushrooms is ` +format(player.propeller_mushroom.best)],
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">You can find Propeller Mushroom in NSMBU style. <br>It's good when you're in a battle in Multiplayer VS mode.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones",
                ]    
            },   
            "Challenges": {
                unlocked() {return hasAchievement('achievements', 85)},
                content: [
                    ["blank", "15px"],
                    "challenges",
                ]    
            },   
        },
    },
})
// 第十二层：超级铃铛
addLayer("super_bell", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
        dimone: new Decimal(0),
        dimtwo: new Decimal(0),
        dimthree: new Decimal(0),
        dimfour: new Decimal(0),
        dimfive: new Decimal(0),
        dimsix: new Decimal(0),
        dimseven: new Decimal(0),
        dimeight: new Decimal(0),
    }},

    color: "#B6A017",                       // The color for this layer, which affects many elements.
    resource: "Super Bells",            // The name of this layer's main prestige resource.
    row: 4,                                 // The row this layer is on (0 is the first row).
    position: 1,
    branches: ['yoshi_egg'],
    symbol: "SB",

    baseResource: "Yoshi Eggs",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.yoshi_egg.points },  // A function to return the current amount of baseResource.

    requires: new Decimal("3e1351"),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.0018,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1)               // Factor in any bonuses multiplying gain here.
        if (hasUpgrade('super_bell', 12)) mult = mult.times(upgradeEffect('super_bell', 12))
        if (hasUpgrade('super_bell', 15)) mult = mult.times(player.super_bell.dimone.pow(0.5).max(1))
        if (hasUpgrade('super_bell', 23)) mult = mult.times(1e15)
        if (hasUpgrade('super_hammer', 12)) mult = mult.times(upgradeEffect('super_hammer', 12))
        if (hasMilestone('master_sword', 0)) mult = mult.times(1e100)
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return hasAchievement('achievements', 91) },          // Returns a bool for if this layer's node should be visible in the tree.
    passiveGeneration() { return hasUpgrade('super_hammer', 32)  || hasMilestone('master_sword', 2)},
    autoUpgrade() { return hasMilestone('master_sword', 4) },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if(hasMilestone('master_sword', 3)) {
                kept.push("milestones")
                }
        layerDataReset(this.layer, kept)
        }
    },
    hotkeys: [
        {key: "s", description: "S: Reset for Super Bells", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades: {
        11: {
            title: "Meow meow!",
            description: "Monty moles' base is raised to 1e50.",
            cost: new Decimal(50176),
            unlocked() {return true},
        },
        12: {
            title: "Cat suit",
            description: "Multiply Super Bell gain based on Propeller Mushroom.",
            cost: new Decimal(1666390),
            unlocked() {return hasUpgrade('super_bell', 11)},
            effect() {
                return player.propeller_mushroom.points.max(10).log(10)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "Is the bell made of gold?",
            description: "If Cleared Courses are less than e1e11, square Coin gain.",
            cost: new Decimal(796666667),
            unlocked() {return hasUpgrade('super_bell', 12)},
        },
        14: {
            title: "Not for Christmas",
            description: "Multiply Propeller Mushroom based on Super Bell.",
            cost: new Decimal(6.66e11),
            unlocked() {return hasUpgrade('super_bell', 13)},
            effect() {
                return player.super_bell.points.pow(2).max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        15: {
            title: "Scratch attack",
            description: "Unlock Super Bell Dimensions.",
            cost: new Decimal(1.66e12),
            unlocked() {return hasUpgrade('super_bell', 14)},
        },
        21: {
            title: "A 2-block wide cat",
            description: "Unlock Super Bell Dimension shift.",
            cost: new Decimal(3e20),
            unlocked() {return hasUpgrade('super_bell', 15)},
        },
        22: {
            title: "Pounce attack",
            description: "Multiply 8th Super Bell Dimension gain based on Super Bell.",
            cost: new Decimal(1.23e24),
            unlocked() {return hasUpgrade('super_bell', 21)},
            effect() {
                return player.super_bell.points.max(10).log(10).pow(10)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        23: {
            title: "Better in PVP battles",
            description: "x1e15 Super Bell gain.",
            cost: new Decimal(2.5e37),
            unlocked() {return hasUpgrade('super_bell', 22)},
        },
        24: {
            title: "Climb the wall",
            description: "Monty moles' completion limit is raised to 50.",
            cost: new Decimal(3e56),
            unlocked() {return hasUpgrade('super_bell', 23)},
        },
        25: {
            title: "Climb the tree",
            description: "Unlock 11th Propeller Mushroom upgrade.",
            cost: new Decimal(1e65),
            unlocked() {return hasUpgrade('super_bell', 24)},
        },
        31: {
            title: "Climb the semi-hitbox platform",
            description: "Increase Super Hammer gain.",
            cost: new Decimal("1e10000"),
            unlocked() {return hasUpgrade('super_hammer', 15)},
            effect() {
                let SBU11eff = new Decimal(3)
                if (hasUpgrade('super_bell', 34)) SBU11eff = SBU11eff.pow(upgradeEffect('super_bell', 34))
                return SBU11eff
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        32: {
            title: "Climb the tree faster",
            description: "Autobuy Super Bell buyables.",
            cost: new Decimal("1e11451"),
            unlocked() {return hasUpgrade('super_bell', 31)},
        },
        33: {
            title: "Scratch cancel",
            description: "Raise 2nd Super Bell buyable's sffect base to 4.17.",
            cost: new Decimal("1e11520"),
            unlocked() {return hasUpgrade('super_bell', 32)},
        },
        34: {
            title: "Scratch cancel with groundpounding",
            description: "Make 11th Super Bell upgrade's effect based on 1st SBD.",
            cost: new Decimal("1e11920"),
            unlocked() {return hasUpgrade('super_bell', 33)},
            effect() {
                return player.super_bell.dimone.max(10).log(10).div(40).max(1)
                    },
            effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id)) },
        },
        35: {
            title: "Scratch + long jump",
            description: "Unlock a Super Hammer challenge.",
            cost: new Decimal("7.77e30000"),
            unlocked() {return hasUpgrade('super_bell', 34)},
        },
        // Look in the upgrades docs to see what goes here!
    },
    milestones: {
        0: {
            requirementDescription: "Get 5 Super Bell",
            effectDescription: "Extremely raise 1st Big Mushroom clickable's effect to ^72535",
            done() { return player.super_bell.points.gte(5) },
        },
    },
    buyables: {
        11: {
            title: "8th Super Bell Dimension",
            cost(x) { return new Decimal(2).pow(x) },
            display() { return` Get 8th Super Bell Dimensions. <br>
                8th SBD get: ${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Super Bells`
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let SBDmult8 = new Decimal(1)
                if (hasUpgrade('super_bell', 22)) SBDmult8 = SBDmult8.times(upgradeEffect('super_bell', 22))
                if (hasChallenge('super_hammer', 11)) SBDmult8 = SBDmult8.times(1e100)
                return x.times(SBDmult8)
            },
            unlocked() {return hasUpgrade('super_bell', 15)}
        },
        12: {
            title: "Super Bell Dimension shift",
            cost(x) { return new Decimal(100000).pow(x.add(1)) },
            display() { 
                let SBB2base = new Decimal(2)
                if (hasUpgrade('super_bell', 33)) SBB2base = new Decimal(4.17)
                return` Multiply each SB Dimension production by ${format(SBB2base)} per every level. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} 1st Super Bell Dimensions`
            },
            canAfford() { return player[this.layer].dimone.gte(this.cost()) },
            buy() {
                player[this.layer].dimone = player[this.layer].dimone.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let base = new Decimal(2)
                if (hasUpgrade('super_bell', 33)) base = new Decimal(4.17)
                return Decimal.pow(base, x).min("1e1000")
            },
            unlocked() {return hasUpgrade('super_bell', 21)}
        },
    },
    automate(){
        if (player.super_bell.points.lte(0)) return
        if (hasUpgrade('super_bell', 32)
        ) {
            if (player.super_bell.points) {
                hasUpgrade('super_bell', 32) ? setBuyableAmount("super_bell",11,tmp.super_bell.buyables[11].canAfford?player.super_bell.points.log(2).floor().add(1):getBuyableAmount("super_bell",11)) : buyBuyable("super_bell",11)
            }
            if (player.super_bell.dimone) {
                hasUpgrade('super_bell', 32) ? setBuyableAmount("super_bell",12,tmp.super_bell.buyables[12].canAfford?player.super_bell.dimone.log(100000).floor():getBuyableAmount("super_bell",12)) : buyBuyable("super_bell",12)
            }
        }
    },
    update(multSBD) {
        multSBD = new Decimal(0.05)
        if (hasUpgrade('super_bell', 21)) multSBD = multSBD.times(buyableEffect('super_bell', 12))
        player.super_bell.dimone = player.super_bell.dimone.add(player.super_bell.dimtwo.times(multSBD))
        player.super_bell.dimtwo = player.super_bell.dimtwo.add(player.super_bell.dimthree.times(multSBD))
        player.super_bell.dimthree = player.super_bell.dimthree.add(player.super_bell.dimfour.times(multSBD))
        player.super_bell.dimfour = player.super_bell.dimfour.add(player.super_bell.dimfive.times(multSBD))
        player.super_bell.dimfive = player.super_bell.dimfive.add(player.super_bell.dimsix.times(multSBD))
        player.super_bell.dimsix = player.super_bell.dimsix.add(player.super_bell.dimseven.times(multSBD))
        player.super_bell.dimseven = player.super_bell.dimseven.add(player.super_bell.dimeight.times(multSBD))
        player.super_bell.dimeight = buyableEffect('super_bell', 11)
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["display-text", () => `Your best amount of Super Bells is ` +format(player.super_bell.best)],
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Super Bell is from Super Mario 3D World (2013). <br>Who dosen't like a character becomes a cat?`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones",
                ]    
            },   
            "Super Bell Dimensions": {
                unlocked() {return hasUpgrade('super_bell', 15)},
                content: [
                    ["blank", "15px"],
                    ["display-text", () => "You have " + format(player.super_bell.dimone) + " 1st Super Bell Dimensions, multiply Super Bell gain by " + format(player.super_bell.dimone.pow(0.5).max(1))
                    + "<br> You have " + format(player.super_bell.dimtwo) + " 2nd Super Bell Dimensions"
                    + "<br> You have " + format(player.super_bell.dimthree) + " 3rd Super Bell Dimensions"
                    + "<br> You have " + format(player.super_bell.dimfour) + " 4th Super Bell Dimensions"
                    + "<br> You have " + format(player.super_bell.dimfive) + " 5th Super Bell Dimensions"
                    + "<br> You have " + format(player.super_bell.dimsix) + " 6th Super Bell Dimensions"
                    + "<br> You have " + format(player.super_bell.dimseven) + " 7th Super Bell Dimensions"
                    + "<br> You have " + format(player.super_bell.dimeight) + " 8th Super Bell Dimensions<br><br><br>"],
                    "buyables",
                ]    
            },   
        },
    },
})
// 第十三层：超级锤子
addLayer("super_hammer", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
        characters_box: new Decimal(0),
    }},

    color: "#403739",                       // The color for this layer, which affects many elements.
    resource: "Super Hammers",            // The name of this layer's main prestige resource.
    row: 4,                                 // The row this layer is on (0 is the first row).
    position: 2,
    symbol: "SH",
    branches: ["super_leaf"],
    baseResource: "Super Leaves",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.super_leaf.points },  // A function to return the current amount of baseResource.

    requires: new Decimal("1e2039000"),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.                         // "normal" prestige gain is (currency^exponent).
    exponent: 0,
    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1)               // Factor in any bonuses multiplying gain here.
        let SL = player.super_leaf.points
        if (hasMilestone('super_hammer', 0)) mult = mult.times(SL.div("1e2039000").max(1).log(1e100).max(1).floor())
        if (hasMilestone('super_hammer', 2)) mult = mult.times(2)
        if (hasUpgrade('super_bell', 31)) mult = mult.times(upgradeEffect('super_bell', 31))
        if (hasMilestone('master_sword', 0)) mult = mult.times(1e10)
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        exp = new Decimal(1)
        if (hasUpgrade('super_hammer', 22)) exp = exp.times(upgradeEffect('super_hammer', 13))
        if (hasUpgrade('frog_suit', 32)) exp = exp.times(5)
        if (hasUpgrade('super_acorn', 23)) exp = exp.times(22)
        return exp
    },
    directMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1)               // Factor in any bonuses multiplying gain here.
        if (hasChallenge('super_hammer'), 12) mult = mult.times(challengeEffect('super_hammer', 12))
        if (hasUpgrade('super_hammer', 34)) mult = mult.times(upgradeEffect('super_hammer', 34))
        if (hasUpgrade('usa_mushroom', 11)) mult = mult.times(7000)
        if (hasUpgrade('usa_mushroom', 12)) mult = mult.times(upgradeEffect('usa_mushroom', 12))
        return mult
    },

    layerShown() { return hasAchievement('achievements', 94) },          // Returns a bool for if this layer's node should be visible in the tree.

    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if(hasMilestone('master_sword', 1)) {
                kept.push("challenges")
                }
            if(hasMilestone('master_sword', 3)) {
                kept.push("milestones")
            }
            if(hasMilestone('master_sword', 4)) {
                kept.push("buyables")
        }
        layerDataReset(this.layer, kept)
        }
    },
    autoUpgrade() { return hasMilestone('master_sword', 5) },
    passiveGeneration() { return hasMilestone('master_sword', 6) },
    hotkeys: [
        {key: "h", description: "H: Reset for Super Hammers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    
    upgrades: {
        11: {
            title: "40 40",
            description: "Super Hammer affacts Propeller Mushroom.",
            cost: new Decimal(4500),
            unlocked() {return hasMilestone('super_hammer', 1)},
            effect() {
                return player.super_hammer.points.pow(450).max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            title: "80 80",
            description: "Super Hammer affacts Super Bell.",
            currencyDisplayName: "Propeller Mushrooms",
            currencyInternalName: "points",
            currencyLayer: "propeller_mushroom",
            cost: new Decimal("1e9636"),
            unlocked() {return hasUpgrade('super_hammer', 11)},
            effect() {
                return player.super_hammer.points.pow(40).max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "Unlike hammer bros",
            description: "Power Cleared Courses baesd on Super Hammer.<br>Formula: slog10(x)",
            cost: new Decimal(28888),
            unlocked() {return hasUpgrade('super_hammer', 12)},
            effect() {
                return player.super_hammer.points.slog(10)
            },
            effectDisplay() { return "^" + format(upgradeEffect(this.layer, this.id)) },
        },
        14: {
            title: "Characters' symbol",
            description: "Delay Coin's softcap to Decipicillion Coins. (e3e13 Coins)",
            cost: new Decimal(1666390),
            unlocked() {return hasUpgrade('super_hammer', 13)},
        },
        15: {
            title: "On their hammers",
            description: "Unlock 11th Super Bell upgrade.",
            cost: new Decimal(12413170),
            unlocked() {return hasUpgrade('super_hammer', 14)},
        },
        21: {
            title: "Icicle breaker",
            description: "Unlock a buyable for Characters' Box.",
            currencyDisplayName: "Characters' Boxes",
            currencyInternalName: "characters_box",
            currencyLayer: "super_hammer",
            cost: new Decimal(84600),
            unlocked() {return hasChallenge('super_hammer', 11)},
        },
        22: {
            title: "5 boxes",
            description: "3rd Super Hammer upgrade also affacts Super Hammer.",
            currencyDisplayName: "Characters' Boxes",
            currencyInternalName: "characters_box",
            currencyLayer: "super_hammer",
            cost: new Decimal(200000000),
            unlocked() {return hasUpgrade('super_hammer', 21)},
        },
        23: {
            title: "5 different colors of boxes",
            description: "+1 to 'Box Generator' base.",
            cost: new Decimal(4e54),
            unlocked() {return hasUpgrade('super_hammer', 22)},
        },
        24: {
            title: "Put on a platform",
            description: "If you get 5e11 Cleared Courses in 'Buzzy beetles', multiply CB gain based on CF.",
            currencyDisplayName: "Characters' Boxes",
            currencyInternalName: "characters_box",
            currencyLayer: "super_hammer",
            cost: new Decimal(5e12),
            unlocked() {return hasUpgrade('super_hammer', 23)},
            effect() {
                return player.cape_feather.points.pow(2).max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
        },
        25: {
            title: "Cover a passage",
            description: "+2 to 'Box generator' base.",
            currencyDisplayName: "Characters' Boxes",
            currencyInternalName: "characters_box",
            currencyLayer: "super_hammer",
            cost: new Decimal(9.99e17),
            unlocked() {return hasUpgrade('super_hammer', 24)},
        },
        31: {
            title: "Clear pipe cycling",
            description: "Passively gain 100% Propeller Mushroom every second.",
            currencyDisplayName: "Characters' Boxes",
            currencyInternalName: "characters_box",
            currencyLayer: "super_hammer",
            cost: new Decimal(1.66e28),
            unlocked() {return hasUpgrade('super_hammer', 25)},
        },
        32: {
            title: "Block a pipe?",
            description: "Passive gain 100% Super Bell every second.",
            cost: new Decimal(5.55e55),
            unlocked() {return hasUpgrade('super_hammer', 31)},
        },
        33: {
            title: "It can only block yourself",
            description: "Unlock another challenge in this layer.",
            currencyDisplayName: "Characters' Boxes",
            currencyInternalName: "characters_box",
            currencyLayer: "super_hammer",
            cost: new Decimal(4.89e28),
            unlocked() {return hasUpgrade('super_hammer', 32)},
        },
        34: {
            title: "Box drop",
            description: "Multiply Super Hammer gain based on Characters' Box. (After the exponential calculation)",
            cost: new Decimal(2.22e66),
            unlocked() {return hasUpgrade('super_hammer', 33)},
            effect() {
                return player.super_hammer.characters_box.max(1).log(10).pow(5).max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
        },
        35: {
            title: "The hardcore LINKage",
            description: "Unlock a new layer on row 6.",
            cost: new Decimal(2.88e74),
            unlocked() {return hasUpgrade('super_hammer', 34)},
        },
        41: {
            title: "Better hammer",
            description: "If you are in challenge 'Buzzy beetle', x100 Cleared Courses gain.",
            currencyDisplayName: "Characters' Boxes",
            currencyInternalName: "characters_box",
            currencyLayer: "super_hammer",
            cost: new Decimal(1e38),
            unlocked() {return hasUpgrade('super_hammer', 35)},
        },
        // Look in the upgrades docs to see what goes here!
    },
    milestones: {
        0: {
            requirementDescription: "Get 10 Super Hammers",
            effectDescription: "You are able to gain multiple of Super Hammers with one SH reset. Gain ^1.1 Propeller Mushroom.",
            done() { return player.super_hammer.points.gte(10) },
        },
        1: {
            requirementDescription: "Get 3500 Super Hammers",
            effectDescription: "Unlock 1st Super Hammer upgrade.",
            done() { return player.super_hammer.points.gte(3500) },
        },
        2: {
            requirementDescription: "Get 501761 Super Hammers",
            effectDescription: "Double Super Hammer gain.",
            done() { return player.super_hammer.points.gte(501761) },
        },
    },
    challenges: {
        11: {
            name: "Buzzy beetles",
            challengeDescription: "log 10 Cleared Courses gain and disable effect in subtab Yoshi except 1st Yoshi effect.",
            goalDescription: "Get 1.66e12 Cleared Courses",
            canComplete: function() {
                return player.points.gte(1.66e12)
                },
            rewardDescription: "Boost 8th SBD gain.",
            rewardEffect() {
                let SHC1eff = new Decimal(1e100)
                return SHC1eff
            },
            rewardDisplay() { return format(challengeEffect(this.layer, this.id))+"x" },
            unlocked() {return hasUpgrade('super_bell', 35)},
        },
        12: {
            name: "Magikoopas",
            challengeDescription: "Nothing changed.",
            completionLimit: new Decimal (10),
            goalDescription() {
            return "Get 10^10^(17+x) Cleared Courses"
            },
            canComplete: function() {
                return player.points.gte(Decimal.pow("e1e17", Decimal.pow(10, challengeCompletions('super_hammer', 12))))
                },
            rewardDescription: "x1e10 Super Hammer per every completion.",
            rewardEffect() {
                let base = new Decimal(1e10)
                return base.pow(challengeCompletions('super_hammer', 12)).max(1)
            },
            rewardDisplay() { 
                return format(challengeEffect(this.layer, this.id))+"x<br>Completions: " 
                + format(challengeCompletions('super_hammer', 12))
                + "/10<br>Current Goal: "
                + format(Decimal.pow("e1e17", Decimal.pow(10, challengeCompletions('super_hammer', 12))))},
            unlocked() {return hasUpgrade('super_hammer', 33)},
        },
    },
    buyables: {
        11: {
            title: "Box generator",
            cost(x) { return new Decimal(2).pow(Decimal.pow(x, 1.35).add(1)) },
            display() { let SHB1base = new Decimal(2)
                if (hasUpgrade('super_hammer', 23)) SHB1base = SHB1base.add(1)
                if (hasUpgrade('super_hammer', 25)) SHB1base = SHB1base.add(2)
                if (hasUpgrade('master_sword', 11)) SHB1base = SHB1base.add(buyableEffect('super_hammer', 12))
                if (hasAchievement('achievements', 121)) SHB1base = SHB1base.times(tmp.power_balloon.effect)
                if (hasUpgrade('power_balloon', 33)) SHB1base = SHB1base.pow(buyableEffect('super_hammer', 13))
                return ` Multiply Characters' Box gain by ${format(SHB1base)} per every level. (After the exponential calculation) <br>
                Effect: x${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Characters' Boxes`}, 
            canAfford() { return player[this.layer].characters_box.gte(this.cost()) },
            buy() {
                player[this.layer].characters_box = player[this.layer].characters_box.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let SHB1base = new Decimal(2)
                if (hasUpgrade('super_hammer', 23)) SHB1base = SHB1base.add(1)
                if (hasUpgrade('super_hammer', 25)) SHB1base = SHB1base.add(2)
                if (hasUpgrade('master_sword', 11)) SHB1base = SHB1base.add(buyableEffect('super_hammer', 12))
                if (hasAchievement('achievements', 121)) SHB1base = SHB1base.times(tmp.power_balloon.effect)
                if (hasUpgrade('power_balloon', 33)) SHB1base = SHB1base.pow(buyableEffect('super_hammer', 13))
                return new Decimal(SHB1base).pow(x)},
            unlocked() {return hasUpgrade('super_hammer', 21)}
        },
        12: {
            title: "Box accelerator",
            cost(x) { return new Decimal(5).pow(Decimal.pow(x, 1.75).add(1)).times(3.3333e33) },
            display() { let SHB2base = new Decimal(0.5)
                if (hasUpgrade('master_sword', 14)) SHB2base = SHB2base.add(0.25)
                if (hasUpgrade('master_sword', 24)) SHB2base = SHB2base.add(upgradeEffect('master_sword', 24))
                if (hasUpgrade('master_sword', 54) && player.master_sword.links_bomb_random == 2 || 
                    hasUpgrade('master_sword', 54) && player.master_sword.links_bomb_random == 4 ||
                    hasUpgrade('master_sword', 54) && player.master_sword.links_bomb_random == 6 ||
                    hasUpgrade('master_sword', 54) && player.master_sword.links_bomb_random == 8 ||
                    hasMilestone('usa_mushroom', 0)) SHB2base = SHB2base.add(15)
                if (hasUpgrade('master_sword', 61)) SHB2base = SHB2base.add(upgradeEffect('master_sword', 61))
                if (hasUpgrade('frog_suit', 45)) SHB2base = SHB2base.pow(1.5)
                return `Increase "Box generator" base by +${format(SHB2base)} per every level.<br>
                Effect: +${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Characters' Boxes`}, 
            canAfford() { return player[this.layer].characters_box.gte(this.cost()) },
            buy() {
                player[this.layer].characters_box = player[this.layer].characters_box.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let SHB2base = new Decimal(0.5)
                if (hasUpgrade('master_sword', 14)) SHB2base = SHB2base.add(0.25)
                if (hasUpgrade('master_sword', 24)) SHB2base = SHB2base.add(upgradeEffect('master_sword', 24))
                if (hasUpgrade('master_sword', 54) && player.master_sword.links_bomb_random == 2 || 
                    hasUpgrade('master_sword', 54) && player.master_sword.links_bomb_random == 4 ||
                    hasUpgrade('master_sword', 54) && player.master_sword.links_bomb_random == 6 ||
                    hasUpgrade('master_sword', 54) && player.master_sword.links_bomb_random == 8 ) SHB2base = SHB2base.add(15)
                if (hasUpgrade('master_sword', 61)) SHB2base = SHB2base.add(upgradeEffect('master_sword', 61))
                if (hasUpgrade('frog_suit', 45)) SHB2base = SHB2base.pow(1.5)
                return new Decimal(SHB2base).times(x)},
            unlocked() {return hasUpgrade('master_sword', 11)}
        },
        13: {
            title: "Box transcender",
            cost(x) { return new Decimal("1e10000").pow(Decimal.pow(x, 1.5).add(1)) },
            display() { let SHB3base = new Decimal(0.05)
                return ` Power 'Box generator' base by +^${format(SHB3base)} per every level.<br>
                Effect: ^${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Characters' Boxes`}, 
            canAfford() { return player[this.layer].characters_box.gte(this.cost()) },
            buy() {
                player[this.layer].characters_box = player[this.layer].characters_box.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                limit = new Decimal(75)
                if (hasUpgrade('super_acorn', 14)) limit = limit.add(upgradeEffect('super_acorn', 14))
                return limit},
            effect(x) {
                let SHB3base = new Decimal(0.05)
                return new Decimal(1).add(SHB3base.times(x))},
            unlocked() {return hasUpgrade('power_balloon', 33)}
        },
    },
    automate(){
        if (player.super_hammer.characters_box.lte(0)) return
        if (hasMilestone('master_sword', 6)
        ) {
            if (player.super_hammer.characters_box) {
                (hasMilestone('master_sword', 6)) ? setBuyableAmount("super_hammer",11,tmp.super_hammer.buyables[11].canAfford?player.super_hammer.characters_box.log(2).sub(1).root(1.35).floor().add(1):getBuyableAmount("super_hammer",11)) : buyBuyable("super_hammer",11)
            }
            if (player.super_hammer.characters_box) {
                (hasMilestone('master_sword', 6)) ? setBuyableAmount("super_hammer",12,tmp.super_hammer.buyables[12].canAfford?player.super_hammer.characters_box.div(3.3333e33).log(5).sub(1).root(1.75).floor().add(1):getBuyableAmount("super_hammer",12)) : buyBuyable("super_hammer",12)
            }
        }
    },
    update(multCB) {
        multCB = new Decimal(0.05)
        if (hasUpgrade('super_hammer', 21)) multCB = multCB.times(buyableEffect('super_hammer', 11))
        if (hasUpgrade('super_hammer', 24) && inChallenge('super_hammer', 11) && player.points.gte(5e11)) multCB = multCB.times(upgradeEffect("super_hammer", 24))
        if (hasMilestone('master_sword', 2)) multCB = multCB.times(100000)
        if (hasUpgrade('master_sword', 12)) multCB = multCB.times(upgradeEffect('master_sword', 12))
        if (hasUpgrade('usa_mushroom', 14)) multCB = multCB.times(upgradeEffect('usa_mushroom', 14))
        if (inChallenge('super_hammer', 11) && hasChallenge('super_hammer', 11) || hasMilestone('master_sword', 7) && hasChallenge('super_hammer', 11)) player.super_hammer.characters_box = player.super_hammer.characters_box.add(player.invincible_star.points.times(multCB))
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["display-text", () => `Your have ` +format(player.super_leaf.points) + ` Super Leaves`],
        ["display-text", () => `Reset for Super Hammers gain's formula is 1e2039000·1e100^x`],
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Cats and hammers are both able to destroy bricks. <br>But only Super Hammers can destroy hard bricks in SM3DW style.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones",
                ]    
            },   
            "Characters' Box": {
                unlocked() {return hasAchievement('achievements', 101)},
                content: [
                    ["blank", "15px"],
                    ["display-text",  function () {
                        let CBeffmult = new Decimal(1)
                        if (hasUpgrade('master_sword', 21)) CBeffmult = CBeffmult.times(2)
                        if (hasUpgrade('master_sword', 25)) CBeffmult = CBeffmult.times(player.super_hammer.characters_box.max(1).log(1e10).add(1).times(CBeffmult))
                        return "You have <h2 style='color: #a0733c; text-shadow: 0 0 10px #a0733c'>" + format(player.super_hammer.characters_box) + "</h2> Characters' Boxes, delaying 2nd Coin upgrade effect's softcap by <h2 style='color: #a0733c; text-shadow: 0 0 10px #a0733c'> ^" + format(player.super_hammer.characters_box.max(1).log(1e10).add(1).times(CBeffmult)) + "</h2>"
                    }],
                    ["display-text", () => "You can gain Characters' Boxes based on IS in challenge Buzzy beetles."],
                    ["display-text", function () {
                        let CBeffmult = new Decimal(1)
                        if (hasUpgrade('master_sword', 21)) CBeffmult = CBeffmult.times(2)
                        if (hasUpgrade('master_sword', 25)) CBeffmult = CBeffmult.times(player.super_hammer.characters_box.max(1).log(1e10).add(1).times(CBeffmult))
                        if (hasUpgrade('power_balloon', 45)) return "2nd Coin upgrade's softcap is at " + format(Decimal.pow("e5e15", player.super_hammer.characters_box.max(1).log(1e10).add(1)).pow(CBeffmult).pow(upgradeEffect('master_sword', 72)).pow(25)) + "x"
                        else if (hasUpgrade('master_sword', 72)) return "2nd Coin upgrade's softcap is at " + format(Decimal.pow("e5e15", player.super_hammer.characters_box.max(1).log(1e10).add(1)).pow(CBeffmult).pow(upgradeEffect('master_sword', 72))) + "x"
                        else return "2nd Coin upgrade's softcap is at " + format(Decimal.pow("e5e15", player.super_hammer.characters_box.max(1).log(1e10).add(1)).pow(CBeffmult)) + "x"
                        
                    }],
                    "challenges",
                    "buyables",
                ]    
            },   
        },
    },
})
// 第十四层：大师之剑
addLayer("master_sword", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
        links_bomb: new Decimal(0),         // 林克炸弹
        links_bomb_clicks: new Decimal(9),   //林克炸弹可点击数
        links_bomb_random: new Decimal(1),  //林克炸弹随机数
        defeats_by_explosion: new Decimal(0), //炸死敌人数
        hyrule_shield: new Decimal(0),      //海拉鲁盾
        links_bow: new Decimal(0),          //林克弓
        ranged_kills: new Decimal(0),       //远程击杀数
        ranged_kills_mult: new Decimal(1),  //远程击杀动态倍数
        array: new Decimal(0),              //箭
        container_of_heart: new Decimal(0), //心之容器
        container_of_energy: new Decimal(0), //精力容器
        container_total: new Decimal(0),    //容器总数
        container_assignable: new Decimal(0),    //容器可分配数
        rupee: new Decimal(0),              //卢比
        array_status: new Decimal(0),        //箭的消耗状态
    }},

    color: "#2730B8",                       // The color for this layer, which affects many elements.
    resource: "Master Swords",            // The name of this layer's main prestige resource.
    row: 5,                                 // The row this layer is on (0 is the first row).
    position: 0,
    symbol: "MS",
    branches: ["super_bell"],


    baseResource: "Super Bells",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.super_bell.points },  // A function to return the current amount of baseResource.

    requires() {
        base = new Decimal("1e300000")
        if (hasUpgrade('master_sword', 13)) base = new Decimal("1e615000")
        return base},              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "static",                         // Determines the formula used for calculating prestige currency.
    exponent: 15,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },
    directMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1)               // Factor in any bonuses multiplying gain here.
        if (hasUpgrade('master_sword', 15)) mult = mult.times(player.master_sword.defeats_by_explosion.add(2).log(2).root(4).max(1))
        if (hasMilestone('power_balloon', 1)) mult = mult.times(1.25)
        if (hasUpgrade('frog_suit', 44)) mult = mult.times(1.05)
        return mult
    },

    canBuyMax() {
        return (hasMilestone('master_sword', 12))
    },

    layerShown() { return hasAchievement('achievements', 102) },          // Returns a bool for if this layer's node should be visible in the tree.

    hotkeys: [
        {key: "M", description: "Shift+M: Reset for Master Swords", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if(hasMilestone('power_balloon', 0)) {
            kept.push("milestones")
                }
            if(hasMilestone('super_acorn', 0)) {
                kept.push("upgrades")
                }
        layerDataReset(this.layer, kept)
        }
    },

    autoPrestige() {return hasMilestone('power_balloon', 4)},

    upgrades: {
        11: {
            title: "Get the sword!",
            description: "Unlock 2nd buyable for Characters' Box.",
            cost: new Decimal(3),
            unlocked() {return true},
        },
        12: {
            title: "Link's adventure",
            description: "Multiply Characters' Box based on Invincible Star and Master Sword.",
            currencyDisplayName: "Characters' Boxes",
            currencyInternalName: "characters_box",
            currencyLayer: "super_hammer",
            cost: new Decimal(4e65),
            unlocked() {return hasUpgrade('master_sword', 11)},
            effect() {
                return player.invincible_star.points.max(1).pow(player.master_sword.points).max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x"},
        },
        13: {
            title: "Green hat symbol",
            description: "Multiply Cleared Courses based on best Master Sword, but MS gain formula base is raised to 1e615000.",
            currencyDisplayName: "Characters' Boxes",
            currencyInternalName: "characters_box",
            currencyLayer: "super_hammer",
            cost: new Decimal(9.99e109),
            unlocked() {return hasUpgrade('master_sword', 12)},
            effect() {
                if (inChallenge('master_sword', 11)) return new Decimal(1)
                else return Decimal.pow("e2e17", player.master_sword.best)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x"},
        },
        14: {
            title: "Awakening",
            description: "+0.25 to 'Box accelerator' base.",
            cost: new Decimal(4),
            unlocked() {return hasUpgrade('master_sword', 13)},
        },
        15: {
            title: "Link's battle",
            description: "Unlock subtab Link's Bomb.",
            currencyDisplayName: "Characters' Boxes",
            currencyInternalName: "characters_box",
            currencyLayer: "super_hammer",
            cost: new Decimal(1.11e171),
            unlocked() {return hasUpgrade('master_sword', 14)},
        },
        21: {
            title: "Bomb skills",
            description: "Double Characters' Box effect.",
            cost: new Decimal(6),
            unlocked() {return hasUpgrade('master_sword', 15)},
        },
        22: {
            title: "Auto bombs",
            description: "Passive gain Link's Bomb based on current amount of Master Sword.",
            cost: new Decimal(6),
            unlocked() {return hasUpgrade('master_sword', 21)},
            effect() {
                let multLB = player.master_sword.points.div(10)
                if (hasUpgrade('master_sword', 44)) multLB = multLB.times(upgradeEffect('master_sword', 44))
                if (hasUpgrade('power_balloon', 12)) multLB = multLB.times(100)
                return multLB
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "/sec"},
        },
        23: {
            title: "Denser enemy",
            description: "Square Explosion Defeats gain.",
            currencyDisplayName: "Link's Bombs",
            currencyInternalName: "links_bomb",
            currencyLayer: "master_sword",
            cost: new Decimal(150),
            unlocked() {return hasUpgrade('master_sword', 22)},
        },
        24: {
            title: "Throw, explode!",
            description: "Increase 'Box accelerator' base based on Master Sword.",
            cost: new Decimal(7),
            unlocked() {return hasUpgrade('master_sword', 23)},
            effect() {
                return player.master_sword.points.times(0.07)
            },
            effectDisplay() { return "+" + format(upgradeEffect(this.layer, this.id))},
        },
        25: {
            title: "Huge explode",
            description: "Square Characters' Box effect.",
            currencyDisplayName: "Characters' Boxes",
            currencyInternalName: "characters_box",
            currencyLayer: "super_hammer",
            cost: new Decimal("5e338"),
            unlocked() {return hasUpgrade('master_sword', 24)},
        },
        31: {
            title: "Denser enemy, farm lives",
            description: "Multiply Explosion Defeats based on Master Sword. (Before exp. cal.)",
            cost: new Decimal(8),
            unlocked() {return hasUpgrade('master_sword', 25)},
            effect() {
                return player.master_sword.points.add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x"},
        },
        32: {
            title: "Denser enemy, deatroy all",
            description: "Multiply Explosion Defeats based on Link's Bomb. (After exp. cal.)",
            cost: new Decimal(9),
            unlocked() {return hasUpgrade('master_sword', 31)},
            effect() {
                return player.master_sword.links_bomb.add(1).sqrt()
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x"},
        },
        33: {
            title: "Master challenge",
            description: "Unlock a new subtab Temples with a challenge.",
            cost: new Decimal(10),
            unlocked() {return hasUpgrade('master_sword', 32)},
        },
        34: {
            title: "Make it better",
            description: "Unlock a buyable for Rupee.",
            currencyDisplayName: "Rupee",
            currencyInternalName: "rupee",
            currencyLayer: "master_sword",
            cost: new Decimal(24000),
            unlocked() {return hasUpgrade('master_sword', 33)},
        },
        35: {
            title: "Instantaneous explode",
            description: "Unlock a new buyable to increase Explotion Defeats.",
            currencyDisplayName: "Rupee",
            currencyInternalName: "rupee",
            currencyLayer: "master_sword",
            cost: new Decimal(374501761),
            unlocked() {return hasUpgrade('master_sword', 34)},
        },
        41: {
            title: "Defense is necessary",
            description: "Unlock a new subtab Hyrule Shield.",
            cost: new Decimal(12),
            unlocked() {return hasUpgrade('master_sword', 35)},
            effect() {
                return player.master_sword.hyrule_shield.max(1).log(5).max(1)
            },
        },
        42: {
            title: "Block it!",
            description: "Multiply Hyrule Shield gain based on Characters' Box",
            currencyDisplayName: "Hyrule Shields",
            currencyInternalName: "hyrule_shield",
            currencyLayer: "master_sword",
            cost: new Decimal(1000),
            unlocked() {return hasUpgrade('master_sword', 41)},
            effect() {
                return player.super_hammer.characters_box.max(1).log(10).max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x"},
        },
        43: {
            title: "Block a spike ball",
            description: "Hyrule Shield also affacts 'Rupee efficiency'.",
            cost: new Decimal(13),
            unlocked() {return hasUpgrade('master_sword', 42)},
        },
        44: {
            title: "Block a bomb",
            description: "Multiply Link's Bomb based on Hyrule Shield.",
            cost: new Decimal(14),
            unlocked() {return hasUpgrade('master_sword', 43)},
            effect() {
                return player.master_sword.hyrule_shield.max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x"},
        },
        45: {
            title: "Better environment",
            description: "^1e-9 Cleared Courses gain in Temple of Meckakoopas, not ^1e-10.",
            currencyDisplayName: "Explosion Defeats",
            currencyInternalName: "defeats_by_explosion",
            currencyLayer: "master_sword",
            cost: new Decimal(1e23),
            unlocked() {return hasUpgrade('master_sword', 44)},
        },
        51: {
            title: "Block the Bowser's fire",
            description: "Cube Hyrule Shields gain.",
            cost: new Decimal(15),
            unlocked() {return hasUpgrade('master_sword', 45)},
        },
        52: {
            title: "Rotten mushrooms",
            description: "Unlock a buyable for hyrule Shield.",
            cost: new Decimal(16),
            unlocked() {return hasUpgrade('master_sword', 51)},
        },
        53: {
            title: "Link's drop delay",
            description: "If you aim the corners (1,3,7,9) of explosion area, x1e20 Rupee gain.",
            cost: new Decimal(19),
            unlocked() {return hasUpgrade('master_sword', 52)},
        },
        54: {
            title: "Rush attack",
            description: "If you aim the sides (2,4,6,8) of explosion area, +15 'Box accelerator' base.",
            currencyDisplayName: "Rupee",
            currencyInternalName: "rupee",
            currencyLayer: "master_sword",
            cost: new Decimal(5e89),
            unlocked() {return hasUpgrade('master_sword', 53)},
        },
        55: {
            title: "Down strike",
            description: "If you aim the center (5) of explosion area, auto gain 1000% Hyrule Shields per second.",
            currencyDisplayName: "Super Hammers",
            currencyInternalName: "points",
            currencyLayer: "super_hammer",
            cost: new Decimal(3.33e183),
            unlocked() {return hasUpgrade('master_sword', 54)},
        },
        61: {
            title: "An archer",
            description: "Unlock a new subtab Link's Bow.",
            currencyDisplayName: "Hyrule Shields",
            currencyInternalName: "hyrule_shield",
            currencyLayer: "master_sword",
            cost: new Decimal(1e62),
            unlocked() {return hasUpgrade('master_sword', 55)},
            effect() {
                return player.master_sword.links_bow.max(1).log(15).max(0)
            },
        },
        62: {
            title: "Use the arrays",
            description: "Auto craft arrays per second (Based on Master Sword).",
            currencyDisplayName: "Link's Bows",
            currencyInternalName: "links_bow",
            currencyLayer: "master_sword",
            cost: new Decimal(50),
            unlocked() {return hasUpgrade('master_sword', 61)},
            effect() {
                let Arrmult = new Decimal(1)
                Arrmult = Arrmult.times(player.master_sword.points)
                if (player.master_sword.array_status.gte(0.5)) Arrmult = new Decimal(0)
                return Arrmult
            },
            effectDisplay() { 
                let main = format(upgradeEffect(this.layer, this.id)) + "/sec"
                if (player.master_sword.array_status.gte(0.5)) main = main + "<br>('Snipe' current active)"
                return main},
        },
        63: {
            title: "Ranged attack!",
            description: "Unlock a button that can spend arrays to get boost for Link's Bow.",
            currencyDisplayName: "Arrays",
            currencyInternalName: "array",
            currencyLayer: "master_sword",
            cost: new Decimal(1000),
            unlocked() {return hasUpgrade('master_sword', 62)},
            effect() {
                return player.master_sword.ranged_kills.max(1).pow(2)
            },
        },
        64: {
            title: "Up, middle, down",
            description: "Unlock a buyable for arrays.",
            currencyDisplayName: "Ranged Kills",
            currencyInternalName: "ranged_kills",
            currencyLayer: "master_sword",
            cost: new Decimal(10000),
            unlocked() {return hasUpgrade('master_sword', 63)},
        },
        65: {
            title: "Element arrays",
            description: "Increase 'Meckakoopa' Cleared Courses base to ^1e-7.",
            cost: new Decimal(29),
            unlocked() {return hasUpgrade('master_sword', 64)},
        },
        71: {
            title: "Best ways",
            description: "'Snipe' efficiency is 20x faster.",
            cost: new Decimal(30),
            unlocked() {return hasUpgrade('master_sword', 65)},
        },
        72: {
            title: "Better health and power",
            description: "Unlock the last subtab 'container' this layer.",
            currencyDisplayName: "Ranged Kills",
            currencyInternalName: "ranged_kills",
            currencyLayer: "master_sword",
            cost: new Decimal(1e18),
            unlocked() {return hasUpgrade('master_sword', 71)},
            effect() {
                if (hasUpgrade('frog_suit', 13)) return player.master_sword.container_of_heart.add(1).pow(7.2).max(1)
                else return player.master_sword.container_of_heart.add(1).pow(4.8).max(1)
            },
        },
        73: {
            title: "More energy, more power",
            description: "Unlock Containers of Energy.",
            cost: new Decimal(80),
            unlocked() {return hasAchievement('achievements', 105) && hasUpgrade('master_sword', 72)},
            effect() {
                return player.master_sword.container_of_energy.add(1).pow(1.5).max(1)
            },
        },
        74: {
            title: "The bettle God",
            description: "'Snipe' efficiency is 5x faster.",
            cost: new Decimal(120),
            unlocked() {return hasUpgrade('master_sword', 73)},
        },
        75: {
            title: "American mushroom",
            description: "Unlock a new layer.",
            currencyDisplayName: "Rupee",
            currencyInternalName: "rupee",
            currencyLayer: "master_sword",
            cost: new Decimal(1e187),
            unlocked() {return hasUpgrade('master_sword', 74)},
        },
        81: {
            title: "Spike ball jump",
            description: "Total Containers provides a boost to Grabbing Enemies.",
            cost: new Decimal(212),
            unlocked() {return hasUpgrade('usa_mushroom', 31)},
            effect() {
                return Decimal.pow(10, player.master_sword.container_total)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x"},
        },
        82: {
            title: "Longest snipe",
            description: "Passive gain 100% Ranged Kills every second and disable 'Snipe'.",
            cost: new Decimal(237),
            unlocked() {return hasUpgrade('master_sword', 81)},
            effect() {
                return player.master_sword.array
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "/sec"},
        },
        83: {
            title: "Rupee tycoon",
            description: "You can gain Rupee out of the temple.",
            cost: new Decimal(238),
            unlocked() {return hasUpgrade('master_sword', 82)},
        },
        84: {
            title: "Auto explotion",
            description: "Passive gain 100% of Explotion Defeats in corner area (1,3,7,9) every second.",
            cost: new Decimal(238),
            unlocked() {return hasUpgrade('master_sword', 83)},
        },
        85: {
            title: "The 40th MS upgrade",
            description: "Unlock 12th SMB2 Mushroom upgrade. That's closer to next layer!",
            cost: new Decimal(238),
            unlocked() {return hasUpgrade('master_sword', 84)},
        },
        // Look in the upgrades docs to see what goes here!
    },
    milestones: {
        0: {
            requirementDescription: "Get 1 Master Sword",
            effectDescription: "x1e1000 Propeller Mushroom, x1e100 Super Bell and x1e10 Super Hammer gain. Keep Propeller Mushroom milestones on row 6 reset.",
            done() { return player.master_sword.points.gte(1) },
        },
        1: {
            requirementDescription: "Get 2 Master Swords",
            effectDescription: "Keep row 5 challenges on row 6 resets.",
            done() { return player.master_sword.points.gte(2) },
        },
        2: {
            requirementDescription: "Get 3 Master Swords",
            effectDescription: "x100000 Characters' Box gain and passive gain 100% Propeller Mushroom and Super Bells every second.",
            done() { return player.master_sword.points.gte(3) },
        },
        3: {
            requirementDescription: "Get 4 Master Swords",
            effectDescription: "Keep Super Bell and Super Hammer milestones on row 6 resets.",
            done() { return player.master_sword.points.gte(4) },
        },
        4: {
            requirementDescription: "Get 5 Master Swords",
            effectDescription: "Autobuy Propeller Mushroom and Super Bell upgrades and keep Super Hammer buyables on row 6 reset.",
            done() { return player.master_sword.points.gte(5) },
        },
        5: {
            requirementDescription: "Get 6 Master Swords",
            effectDescription: "Autobuy Super Hammer buyables.",
            done() { return player.master_sword.points.gte(6) },
        },
        6: {
            requirementDescription: "Get 9 Master Swords",
            effectDescription: "Passive gain 100% Super Hammer every second and autobuy Super Hammer buyables.",
            done() { return player.master_sword.points.gte(9) },
        },
        7: {
            requirementDescription: "Get 11 Master Swords",
            effectDescription: "You can gain Characters' Box out of the challenge 'Buzzy beetles'.",
            done() { return player.master_sword.points.gte(11) },
        },
        8: {
            requirementDescription: "Get 14 Master Swords",
            effectDescription: "Keep Coin upgrades on reset.",
            done() { return player.master_sword.points.gte(14) },
        },
        9: {
            requirementDescription: "Get 19 Master Swords",
            effectDescription: "Keep Super Mushroom upgrades on reset.",
            done() { return player.master_sword.points.gte(19) },
        },
        10: {
            requirementDescription: "Get 23 Master Swords",
            effectDescription: "Keep Fire Flower upgrades on reset.",
            done() { return player.master_sword.points.gte(23) },
        },
        11: {
            requirementDescription: "Get 28 Master Swords",
            effectDescription: "Keep Invincible Star upgrades on reset.",
            done() { return player.master_sword.points.gte(28) },
        },
        12: {
            requirementDescription: "Get 7 Containers of Heart",
            effectDescription: "You can buy max Master Swords.",
            done() { return player.master_sword.container_of_heart.gte(7) },
        },
        13: {
            requirementDescription: "Get 40 Master Swords",
            effectDescription: "Keep 1UP Mushroom upgrades on reset.",
            done() { return player.master_sword.points.gte(40) },
        },
        14: {
            requirementDescription: "Get 52 Master Swords",
            effectDescription: "Keep Bouncy Ball Flower upgrades on reset.",
            done() { return player.master_sword.points.gte(52) },
        },
        15: {
            requirementDescription: "Get 65 Master Swords",
            effectDescription: "Keep Big Mushroom upgrades on reset.",
            done() { return player.master_sword.points.gte(65) },
        },
        16: {
            requirementDescription: "Get 77 Master Swords",
            effectDescription: "Keep Super Leaf upgrades and SLST on reset.",
            done() { return player.master_sword.points.gte(77) },
        },
        17: {
            requirementDescription: "Get 95 Master Swords",
            effectDescription: "Keep Cape Feather upgrades on reset.",
            done() { return player.master_sword.points.gte(95) },
        },
        18: {
            requirementDescription: "Get 101 Master Swords",
            effectDescription: "Keep Yoshi Egg upgrades on reset.",
            done() { return player.master_sword.points.gte(101) },
        },
    },
    clickables: {
        11: {
            title: "Create a bomb",
            display() {
                return "Spend a Master Sword to create a Link's Bomb."},
            canClick() {return player.master_sword.points.gte(1)},
            onClick() {
                return player.master_sword.points = player.master_sword.points.sub(1),
                       player.master_sword.links_bomb = player.master_sword.links_bomb.add(1)
            },
            unlocked() {return hasUpgrade('master_sword', 15)},
        },
        21: {
            title: "Detonate a bomb (top left)",
            display() {
                let DE = new Decimal(1)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return "Defeat " + format(DE) + " enemy by explosion."},            
            canClick() {return player.master_sword.links_bomb.gte(1) && player.master_sword.links_bomb_random == 1},
            onClick() {
                let DE = new Decimal(1)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return player.master_sword.links_bomb = player.master_sword.links_bomb.sub(1),
                       player.master_sword.defeats_by_explosion = player.master_sword.defeats_by_explosion.add(DE),
                       player.master_sword.links_bomb_random = new Decimal(Math.random()).times(player.master_sword.links_bomb_clicks).floor().add(1)
            },
            unlocked() {return hasUpgrade('master_sword', 15)},
        },
        22: {
            title: "Detonate a bomb (top)",
            display() {
                let DE = new Decimal(3)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return "Defeat " + format(DE) + " enemy by explosion."},
            canClick() {return player.master_sword.links_bomb.gte(1) && player.master_sword.links_bomb_random == 2},
            onClick() {
                let DE = new Decimal(3)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return player.master_sword.links_bomb = player.master_sword.links_bomb.sub(1),
                       player.master_sword.defeats_by_explosion = player.master_sword.defeats_by_explosion.add(DE),
                       player.master_sword.links_bomb_random = new Decimal(Math.random()).times(player.master_sword.links_bomb_clicks).floor().add(1)
            },
            unlocked() {return hasUpgrade('master_sword', 15)},
        },
        23: {
            title: "Detonate a bomb (top right)",
            display() {
                let DE = new Decimal(1)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return "Defeat " + format(DE) + " enemy by explosion."},
            canClick() {return player.master_sword.links_bomb.gte(1) && player.master_sword.links_bomb_random == 3},
            onClick() {
                let DE = new Decimal(1)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return player.master_sword.links_bomb = player.master_sword.links_bomb.sub(1),
                       player.master_sword.defeats_by_explosion = player.master_sword.defeats_by_explosion.add(DE),
                       player.master_sword.links_bomb_random = new Decimal(Math.random()).times(player.master_sword.links_bomb_clicks).floor().add(1)
            },
            unlocked() {return hasUpgrade('master_sword', 15)},
        },
        31: {
            title: "Detonate a bomb (left)",
            display() {
                let DE = new Decimal(3)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return "Defeat " + format(DE) + " enemies by explosion."},
            canClick() {return player.master_sword.links_bomb.gte(1) && player.master_sword.links_bomb_random == 4},
            onClick() {
                let DE = new Decimal(3)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return player.master_sword.links_bomb = player.master_sword.links_bomb.sub(1),
                       player.master_sword.defeats_by_explosion = player.master_sword.defeats_by_explosion.add(DE),
                       player.master_sword.links_bomb_random = new Decimal(Math.random()).times(player.master_sword.links_bomb_clicks).floor().add(1)
            },
            unlocked() {return hasUpgrade('master_sword', 15)},
        },
        32: {
            title: "Detonate a bomb (center)",
            display() {
                let DE = new Decimal(9)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return "Defeat " + format(DE) + " enemies by explosion."},
            canClick() {return player.master_sword.links_bomb.gte(1) && player.master_sword.links_bomb_random == 5},
            onClick() {
                let DE = new Decimal(9)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return player.master_sword.links_bomb = player.master_sword.links_bomb.sub(1),
                       player.master_sword.defeats_by_explosion = player.master_sword.defeats_by_explosion.add(DE),
                       player.master_sword.links_bomb_random = new Decimal(Math.random()).times(player.master_sword.links_bomb_clicks).floor().add(1)
            },
            unlocked() {return hasUpgrade('master_sword', 15)},
        },
        33: {
            title: "Detonate a bomb (right)",
            display() {
                let DE = new Decimal(3)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return "Defeat " + format(DE) + " enemies by explosion."},
            canClick() {return player.master_sword.links_bomb.gte(1) && player.master_sword.links_bomb_random == 6},
            onClick() {
                let DE = new Decimal(3)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return player.master_sword.links_bomb = player.master_sword.links_bomb.sub(1),
                       player.master_sword.defeats_by_explosion = player.master_sword.defeats_by_explosion.add(DE),
                       player.master_sword.links_bomb_random = new Decimal(Math.random()).times(player.master_sword.links_bomb_clicks).floor().add(1)
            },
            unlocked() {return hasUpgrade('master_sword', 15)},
        },
        41: {
            title: "Detonate a bomb (bottom left)",
            display() {
                let DE = new Decimal(1)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return "Defeat " + format(DE) + " enemy by explosion."},
            canClick() {return player.master_sword.links_bomb.gte(1) && player.master_sword.links_bomb_random == 7},
            onClick() {
                let DE = new Decimal(1)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return player.master_sword.links_bomb = player.master_sword.links_bomb.sub(1),
                       player.master_sword.defeats_by_explosion = player.master_sword.defeats_by_explosion.add(DE),
                       player.master_sword.links_bomb_random = new Decimal(Math.random()).times(player.master_sword.links_bomb_clicks).floor().add(1)
            },
            unlocked() {return hasUpgrade('master_sword', 15)},
        },
        42: {
            title: "Detonate a bomb (bottom)",
            display() {
                let DE = new Decimal(3)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return "Defeat " + format(DE) + " enemies by explosion."},
            canClick() {return player.master_sword.links_bomb.gte(1) && player.master_sword.links_bomb_random == 8},
            onClick() {
                let DE = new Decimal(3)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return player.master_sword.links_bomb = player.master_sword.links_bomb.sub(1),
                       player.master_sword.defeats_by_explosion = player.master_sword.defeats_by_explosion.add(DE),
                       player.master_sword.links_bomb_random = new Decimal(Math.random()).times(player.master_sword.links_bomb_clicks).floor().add(1)
            },
            unlocked() {return hasUpgrade('master_sword', 15)},
        },
        43: {
            title: "Detonate a bomb (bottom right)",
            display() {
                let DE = new Decimal(1)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return "Defeat " + format(DE) + " enemy by explosion."},
            canClick() {return player.master_sword.links_bomb.gte(1) && player.master_sword.links_bomb_random == 9},
            onClick() {
                let DE = new Decimal(1)
                if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
                if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
                if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
                if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
                if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
                return player.master_sword.links_bomb = player.master_sword.links_bomb.sub(1),
                       player.master_sword.defeats_by_explosion = player.master_sword.defeats_by_explosion.add(DE),
                       player.master_sword.links_bomb_random = new Decimal(Math.random()).times(player.master_sword.links_bomb_clicks).floor().add(1)
            },
            unlocked() {return hasUpgrade('master_sword', 15)},
        },
        51: {
            title: "Equip the shield",
            display() {
                let HSmult = new Decimal(1)
                HSmult = HSmult.times(player.master_sword.points.max(1))
                if (hasUpgrade('master_sword', 73)) HSmult = HSmult.pow(upgradeEffect('master_sword', 73))
                if (hasUpgrade('master_sword', 42)) HSmult = HSmult.times(upgradeEffect('master_sword', 42))
                if (hasUpgrade('master_sword', 51)) HSmult = HSmult.pow(3)
                if (hasUpgrade('master_sword', 52)) HSmult = HSmult.times(buyableEffect('master_sword', 13))
                return "Block enemies' attack, you need more shields. Click to gain " + format(HSmult) + " Hyrule Shields."},
            canClick() {return player.master_sword.points.gte(1)},
            onClick() {
                let HSmult = new Decimal(1)
                HSmult = HSmult.times(player.master_sword.points.max(1))
                if (hasUpgrade('master_sword', 73)) HSmult = HSmult.pow(upgradeEffect('master_sword', 73))
                if (hasUpgrade('master_sword', 42)) HSmult = HSmult.times(upgradeEffect('master_sword', 42))
                if (hasUpgrade('master_sword', 51)) HSmult = HSmult.pow(3)
                if (hasUpgrade('master_sword', 52)) HSmult = HSmult.times(buyableEffect('master_sword', 13))
                return player.master_sword.hyrule_shield = player.master_sword.hyrule_shield.add(HSmult)
            },
            unlocked() {return hasUpgrade('master_sword', 41)},
        },
        61: {
            title: "Ranged",
            display() {
                let LBowmult = new Decimal(1)
                if (hasUpgrade('master_sword', 63)) LBowmult = LBowmult.times(upgradeEffect('master_sword', 63))
                if (hasUpgrade('power_balloon', 12)) LBowmult = LBowmult.times(100)
                return "Ranged attack is a necessary ability for Link. Click to gain " + format(LBowmult) + " Link's Bows."},
            canClick() {return player.master_sword.points.gte(1)},
            onClick() {
                let LBowmult = new Decimal(1)
                if (hasUpgrade('master_sword', 63)) LBowmult = LBowmult.times(upgradeEffect('master_sword', 63))
                if (hasUpgrade('power_balloon', 12)) LBowmult = LBowmult.times(100)
                return player.master_sword.links_bow = player.master_sword.links_bow.add(LBowmult)
            },
            unlocked() {return hasUpgrade('master_sword', 61)},
        },
        62: {
            title: "Snipe",
            display() {
                let ArDivpsec = new Decimal(1.1)
                return "Pause gaining arrays, start to divide Arrays by " + format(ArDivpsec) + " per second.<br>If your Arrays are decreased to 1, resume gaining arrays, stop dividing Arrays.<br>You'll gain Ranged Kills when this button activated."},
            canClick() {
                if (hasUpgrade("master_sword", 82)) return false
                else if (player.master_sword.array.gte(1) && player.master_sword.array_status.lte(0.5))
                return true},
            onClick() {
                return player.master_sword.array_status = new Decimal(1)
            },
            unlocked() {return hasUpgrade('master_sword', 63)},
            effect() {
            if (player.master_sword.array.lte(1)) player.master_sword.array_status = new Decimal(0)
            },
        },
    },
    challenges: {
        11: {
            name: "Temple of Meckakoopas",
            challengeDescription: "Disable 3rd Master Sword upgrade's effect, ^1e-10 Cleared Courses gain.",
            goalDescription: "Get Cleared Courses as more as you can.",
            canComplete: function() {
                return player.points.gte(0)
                },
            rewardDescription: "You can get Rupee in this temple.",
            rewardEffect() {
                return player.points.max(1).log(10).pow(player.points.max(10).slog(10).max(1))
            },
            rewardDisplay() { return format(challengeEffect(this.layer, this.id)) + " base Rupee" },
            unlocked() {return hasUpgrade('master_sword', 33)},
        },
    },
    buyables: {
        11: {
            title: "Rupee efficiency",
            cost(x) { return new Decimal(5).pow(x.pow(1.4)).times(10) },
            display() { 
                let MSB1base = new Decimal(5)
                if (hasUpgrade('master_sword', 41)) MSB1base = MSB1base.add(upgradeEffect('master_sword', 41))
                return` Multiply Rupee gain by ${format(MSB1base)} per every level. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Rupee`
            },
            canAfford() { return player[this.layer].rupee.gte(this.cost()) },
            buy() {
                player[this.layer].rupee = player[this.layer].rupee.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let MSB1base = new Decimal(5)
                if (hasUpgrade('master_sword', 41)) MSB1base = MSB1base.add(upgradeEffect('master_sword', 41))
                return Decimal.pow(MSB1base,x)
            },
            unlocked() {return hasUpgrade('master_sword', 34)}
        },
        12: {
            title: "Precise bomb",
            cost(x) { return new Decimal(3).pow(x.pow(1.3)).times(1000) },
            display() { 
                let MSB2base = new Decimal(7.5)
                if (hasUpgrade('master_sword', 41)) MSB2base = MSB2base.add(upgradeEffect('master_sword', 41))
                return` Multiply Explotion Defeats by ${format(MSB2base)} per every level. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Rupee`
            },
            canAfford() { return player[this.layer].rupee.gte(this.cost()) },
            buy() {
                player[this.layer].rupee = player[this.layer].rupee.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let MSB2base = new Decimal(7.5)
                if (hasUpgrade('master_sword', 41)) MSB2base = MSB2base.add(upgradeEffect('master_sword', 41))
                return Decimal.pow(MSB2base,x)
            },
            unlocked() {return hasUpgrade('master_sword', 34)}
        },
        13: {
            title: "Zonau alloy shield",
            cost(x) { return new Decimal(6.66).pow(x.pow(1.33)).times(1000) },
            display() { 
                let MSB3base = new Decimal(20)
                return` Multiply Hyrule Shields by ${format(MSB3base)} per every level. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Rupee`
            },
            canAfford() { return player[this.layer].rupee.gte(this.cost()) },
            buy() {
                player[this.layer].rupee = player[this.layer].rupee.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let MSB3base = new Decimal(20)
                return Decimal.pow(MSB3base,x)
            },
            unlocked() {return hasUpgrade('master_sword', 52)}
        },
        21: {
            title: "Array rain",
            cost(x) { return new Decimal(5).pow(x.pow(1.4)).times(1e33) },
            display() { 
                let MSB4base = new Decimal(3.1415926535)
                return` Multiply Array by ${format(MSB4base)}(π) per every level. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Rupee`
            },
            canAfford() { return player[this.layer].rupee.gte(this.cost()) },
            buy() {
                player[this.layer].rupee = player[this.layer].rupee.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let MSB4base = new Decimal(3.1415926535)
                return Decimal.pow(MSB4base,x)
            },
            unlocked() {return hasUpgrade('master_sword', 64)}
        },
        31: {
            title: "Increase the maximum HP limit",
            cost(x) { return Decimal.pow(x.add(1), 1.5).floor().max(1) },
            display() { 
                return` Spend Master Swords to buy Containers of Heart <br>
                Containers of Heart Bought: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Master Swords`
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                return x
            },
            unlocked() {return hasUpgrade('master_sword', 72)}
        },
        32: {
            title: "Increase the maximum Energy limit",
            cost(x) { return Decimal.pow(x.add(1), 1.75).floor().max(1) },
            display() { 
                return` Spend Master Swords to buy Containers of Energy <br>
                Containers of Energy Bought: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Master Swords`
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                return x
            },
            unlocked() {return hasUpgrade('master_sword', 72)}
        },
    },
    automate(){
    },
    update(multLB) {
        //常规资源
        tick = new Decimal(0.05)
        if (hasUpgrade('master_sword', 22)) player.master_sword.links_bomb = player.master_sword.links_bomb.add(upgradeEffect('master_sword', 22).times(tick))
        let multRup = new Decimal(1)
        if (hasUpgrade('master_sword', 34)) multRup = multRup.times(buyableEffect('master_sword', 11))
        if (hasUpgrade('master_sword', 53) && player.master_sword.links_bomb_random == 1 || 
            hasUpgrade('master_sword', 53) && player.master_sword.links_bomb_random == 3 ||
            hasUpgrade('master_sword', 53) && player.master_sword.links_bomb_random == 7 ||
            hasUpgrade('master_sword', 53) && player.master_sword.links_bomb_random == 9 ||
            hasMilestone('usa_mushroom', 0) ) multRup = multRup.times(1e20)
        if (hasMilestone('usa_mushroom', 1)) multRup = multRup.times(player.usa_mushroom.points.add(1).pow(7.5))
        if (inChallenge('master_sword', 11) || hasUpgrade('master_sword', 83) || hasUpgrade('power_balloon', 14)) player.master_sword.rupee = challengeEffect('master_sword', 11).times(multRup)
        let HSmult = new Decimal(1)
        HSmult = HSmult.times(player.master_sword.points.max(1))
        if (hasUpgrade('master_sword', 73)) HSmult = HSmult.pow(upgradeEffect('master_sword', 73))
        if (hasUpgrade('master_sword', 42)) HSmult = HSmult.times(upgradeEffect('master_sword', 42))
        if (hasUpgrade('master_sword', 51)) HSmult = HSmult.pow(3)
        if (hasUpgrade('master_sword', 52)) HSmult = HSmult.times(buyableEffect('master_sword', 13))
        if (hasUpgrade('master_sword', 55) && player.master_sword.links_bomb_random == 5 || hasMilestone('usa_mushroom', 0)) player.master_sword.hyrule_shield = player.master_sword.hyrule_shield.add(HSmult.times(0.5))
        let Armult = upgradeEffect('master_sword', 62).times(0.05)
        if (hasUpgrade('master_sword', 64)) Armult = Armult.times(buyableEffect('master_sword', 21))
        if (hasUpgrade('master_sword', 62)) player.master_sword.array = player.master_sword.array.add(Armult)  
        let multRK = new Decimal(1)
        multRK = multRK.times(1.1)
        if (hasUpgrade('master_sword', 71)) multRK = multRK.pow(20)
        if (hasUpgrade('master_sword', 74)) multRK = multRK.pow(5)
        if (player.master_sword.array_status.gte(0.5)) player.master_sword.ranged_kills_mult = player.master_sword.ranged_kills_mult.times(multRK.root(20))
        if (player.master_sword.array_status.gte(0.5)) player.master_sword.ranged_kills = player.master_sword.ranged_kills.add(player.master_sword.ranged_kills_mult.times(0.05))
        if (player.master_sword.array_status.gte(0.5)) player.master_sword.array = player.master_sword.array.div(multRK.root(20))
        if (player.master_sword.array_status.lte(0.5)) player.master_sword.ranged_kills_mult = new Decimal(1)
        if (hasUpgrade('master_sword', 72)) player.master_sword.container_of_heart = player.master_sword.buyables[31]
        if (hasUpgrade('master_sword', 72)) player.master_sword.container_total = player.master_sword.container_of_heart.add(player.master_sword.container_of_energy)
        if (hasUpgrade('master_sword', 73)) player.master_sword.container_of_energy = player.master_sword.buyables[32]
        if (hasUpgrade('master_sword', 82) || hasMilestone('power_balloon', 2))player.master_sword.ranged_kills = player.master_sword.ranged_kills.add(player.master_sword.array.times(0.05))
        let DE = new Decimal(1)
        if (hasUpgrade('master_sword', 31)) DE = DE.times(upgradeEffect('master_sword', 31))
        if (hasUpgrade('master_sword', 23)) DE = DE.pow(2)
        if (hasUpgrade('master_sword', 32)) DE = DE.times(upgradeEffect('master_sword', 32))
        if (hasUpgrade('master_sword', 35)) DE = DE.times(buyableEffect('master_sword', 12))
        if (hasUpgrade('power_balloon', 12)) DE = DE.times(100)
        if (hasUpgrade('master_sword', 84) || hasMilestone('power_balloon', 2)) player.master_sword.defeats_by_explosion = player.master_sword.defeats_by_explosion.add(DE.times(0.05))
        let LBowmult = new Decimal(1)
        if (hasUpgrade('master_sword', 63)) LBowmult = LBowmult.times(upgradeEffect('master_sword', 63))
        if (hasUpgrade('power_balloon', 12)) LBowmult = LBowmult.times(100)
        if (hasMilestone('frog_suit', 2)) player.master_sword.links_bow = player.master_sword.links_bow.add(LBowmult.div(2))
        //购买项自动化
        if (hasMilestone('frog_suit', 0) && player.master_sword.rupee.gte(new Decimal(5).pow(player.master_sword.buyables[11].pow(1.4)).times(10))) player.master_sword.buyables[11]=player.master_sword.rupee.div(10).log(5).root(1.4).floor().add(1)
        if (hasMilestone('frog_suit', 0) && player.master_sword.rupee.gte(new Decimal(3).pow(player.master_sword.buyables[12].pow(1.3)).times(1000))) player.master_sword.buyables[12]=player.master_sword.rupee.div(1000).log(3).root(1.3).floor().add(1)
        if (hasMilestone('frog_suit', 0) && player.master_sword.rupee.gte(new Decimal(6.66).pow(player.master_sword.buyables[13].pow(1.33)).times(1000))) player.master_sword.buyables[13]=player.master_sword.rupee.div(1000).log(6.66).root(1.33).floor().add(1)
        if (hasMilestone('frog_suit', 0) && player.master_sword.rupee.gte(new Decimal(5).pow(player.master_sword.buyables[21].pow(1.4)).times(1e33))) player.master_sword.buyables[21]=player.master_sword.rupee.div(1e33).log(5).root(1.4).floor().add(1)
        if (hasMilestone('frog_suit', 0) && player.master_sword.points.gte(Decimal.pow(player.master_sword.buyables[31].add(1),1.5).floor().max(1))) player.master_sword.buyables[31]=player.master_sword.points.root(1.5).sub(1).floor().add(1).max(0)
        if (hasMilestone('frog_suit', 0) && player.master_sword.points.gte(Decimal.pow(player.master_sword.buyables[32].add(1),1.75).floor().max(1))) player.master_sword.buyables[32]=player.master_sword.points.root(1.75).sub(1).floor().add(1).max(0)
    },
    resetsNothing() {
        return (hasUpgrade('usa_mushroom', 15) || hasMilestone('power_balloon', 3))
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["display-text", () => "Your best amount of Master Sword is " + format(player.master_sword.best)],
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Master Sword is from The Legend of Zelda (1986). <br>It's available in course editor after SMM2 v2.0.0 update. `],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones",
                ]    
            },  
            "Link's Bomb": {
                unlocked() {return hasUpgrade('master_sword', 15)},
                content: [
                    ["blank", "15px"],
                    ["display-text", function() {
                        return "You have <h2 style='color: #2730b8; text-shadow: 0 0 10px #2730b8'>" + format(player.master_sword.links_bomb) + "</h2> Link's Bombs."
                    }],
                    ["display-text", function() {
                        return "You have defeated <h2 style='color: #2730b8; text-shadow: 0 0 10px #2730b8'>" + format(player.master_sword.defeats_by_explosion) + "</h2> Enemies by Explosion, multiply Master Sword gain by <h2 style='color: #2730b8; text-shadow: 0 0 10px #2730b8'>" + format(player.master_sword.defeats_by_explosion.add(2).log(2).root(4).max(1)) + "x</h2>"
                    }],
                    ["display-text", function() {
                        return "You can detonate your bomb on Area " + format(player.master_sword.links_bomb_random)
                    }],
                    ["clickables", [1,2,3,4]]
                ]    
            },    
            "Temples": {
                unlocked() {return hasUpgrade('master_sword', 33)},
                content: [
                    ["blank", "15px"],
                    ["display-text", function() {
                        return "You have <h2 style='color: #107010; text-shadow: 0 0 10px #107010'>" + format(player.master_sword.rupee) + "</h2> Rupee."
                    }],
                    "challenges",
                    ["buyables", [1,2]],
                ]    
            },  
            "Hyrule Shield": {
                unlocked() {return hasUpgrade('master_sword', 41)},
                content: [
                    ["blank", "15px"],
                    ["display-text", function() {
                        return "You have <h2 style='color: #2730b8; text-shadow: 0 0 10px #2730b8'>" + format(player.master_sword.hyrule_shield) + "</h2> Hyrule Shields, increase 'Precise bomb' base by <h2 style='color: #2730b8; text-shadow: 0 0 10px #2730b8'>+" + format(upgradeEffect('master_sword', 41) + "</h2>")
                    }],
                    ["clickables", [5]],
                ]    
            },   
            "Link's Bow": {
                unlocked() {return hasUpgrade('master_sword', 61)},
                content: [
                    ["blank", "15px"],
                    ["display-text", function() {
                        return "You have <h2 style='color: #2730b8; text-shadow: 0 0 10px #2730b8'>" + format(player.master_sword.links_bow) + "</h2> Link's Bows, increase 'Box accelerator' base by <h2 style='color: #2730b8; text-shadow: 0 0 10px #2730b8'>+" + format(upgradeEffect('master_sword', 61) + "</h2>")
                    }],
                    ["display-text", function() {
                        return "You have <h2 style='color: #42b2fa; text-shadow: 0 0 10px #42b2fa'>" + format(player.master_sword.array) + "</h2> Arrays"
                    }],
                    ["display-text", function() {
                        return "You have <h2 style='color: #2730b8; text-shadow: 0 0 10px #2730b8'>" + format(player.master_sword.ranged_kills) + "</h2> Ranged Kills, multiply Link's Bow gain by <h2 style='color: #2730b8; text-shadow: 0 0 10px #2730b8'>" + format(upgradeEffect('master_sword', 63)) + "x</h2>"
                    }],
                    ["clickables", [6]],
                ]    
            },   
            "Container": {
                unlocked() {return hasUpgrade('master_sword', 72)},
                content: [
                    ["blank", "15px"],
                    ["display-text", function() {
                        return "You have <h2 style='color: #2730b8; text-shadow: 0 0 10px #2730b8'>" + format(player.master_sword.container_total) + "</h2> Total Containers"
                    }],
                    ["display-text", function() {
                        return "You have <h2 style='color: #ff2a32; text-shadow: 0 0 10px #ff2a32'>" + format(player.master_sword.container_of_heart) + "</h2> Containers of Heart, delay 2nd Coin upgrade effect's softcap again by <h2 style='color: #ff2a32; text-shadow: 0 0 10px #ff2a32'>^" + format(upgradeEffect('master_sword', 72))
                    }],
                    ["display-text", function() {
                        if (hasUpgrade('master_sword', 73))
                        return "You have <h2 style='color: #00dd00; text-shadow: 0 0 10px #00dd00'>" + format(player.master_sword.container_of_energy) + "</h2> Containers of Energy, power base Hyrule Shield gain by <h2 style='color: #00dd00; text-shadow: 0 0 10px #00dd00'>^" + format(upgradeEffect('master_sword', 73))
                    }],
                    ["clickables", [7,8]],
                    ["buyables", [3,4]],
                ]    
            }, 
        },
    },
})
// 第十五层：马力欧USA的蘑菇
addLayer("usa_mushroom", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
        grabs: new Decimal(0),
    }},

    color: "#F93414",                       // The color for this layer, which affects many elements.
    resource: "SMB2 Mushrooms",            // The name of this layer's main prestige resource.
    row: 5,                                 // The row this layer is on (0 is the first row).
    position: 1,
    symbol: "SM2",
    baseResource: "Super Hammers",                 // The name of the resource your prestige gain is based on.
    branches: ["super_hammer"],
    
    
    baseAmount() { return player.super_hammer.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(1e264),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.005,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1)               // Factor in any bonuses multiplying gain here.
        if (hasUpgrade('usa_mushroom', 32)) mult = mult.times(1000)
        if (hasUpgrade('frog_suit', 14)) mult = mult.times(upgradeEffect('frog_suit', 14))
        if (hasUpgrade('power_balloon', 12)) mult = mult.times(100)
        if (hasAchievement('achievements', 122)) mult = mult.times(tmp.super_acorn.effect)
        if (hasUpgrade('super_acorn', 15)) mult = mult.times(upgradeEffect('super_acorn', 15))
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return hasAchievement('achievements', 111) },          // Returns a bool for if this layer's node should be visible in the tree.

    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if(hasMilestone('power_balloon', 2)) {
            kept.push("milestones")
            }
            if(hasMilestone('power_balloon', 5)) {
            kept.push("upgrades")
            }
        layerDataReset(this.layer, kept)
        }
    },

    update(multGE){
        multGE = new Decimal(1)
        multGE = multGE.times(player.usa_mushroom.points.max(0))
        multGE = multGE.times(buyableEffect('usa_mushroom', 11))
        multGE = multGE.times(buyableEffect('usa_mushroom', 12))
        multGE = multGE.times(buyableEffect('usa_mushroom', 13))
        multGE = multGE.times(buyableEffect('usa_mushroom', 21))
        multGE = multGE.times(buyableEffect('usa_mushroom', 22))
        multGE = multGE.times(buyableEffect('usa_mushroom', 23))
        multGE = multGE.times(buyableEffect('usa_mushroom', 32))
        multGE = multGE.times(buyableEffect('usa_mushroom', 33))
        multGE = multGE.times(buyableEffect('usa_mushroom', 41))
        multGE = multGE.times(buyableEffect('usa_mushroom', 42))
        multGE = multGE.times(buyableEffect('usa_mushroom', 43))
        if (hasUpgrade('usa_mushroom', 21)) multGE = multGE.times(upgradeEffect('usa_mushroom', 21))
        if (hasUpgrade('usa_mushroom', 25)) multGE = multGE.times(upgradeEffect('usa_mushroom', 25))
        if (hasUpgrade('master_sword', 81)) multGE = multGE.times(upgradeEffect('master_sword', 81))
        if (hasUpgrade('usa_mushroom', 32)) multGE = multGE.times(1e25)
        if (hasUpgrade('usa_mushroom', 34)) multGE = multGE.times(upgradeEffect('usa_mushroom', 34))
        if (hasUpgrade('frog_suit', 34)) multGE = multGE.pow(upgradeEffect('frog_suit', 34))
        if (hasUpgrade('power_balloon', 42)) multGE = multGE.times(upgradeEffect('power_balloon', 42))
        if (hasUpgrade('usa_mushroom', 12)) player.usa_mushroom.grabs = player.usa_mushroom.grabs.add(multGE.times(0.05)) 
        if (hasUpgrade('power_balloon', 11)) player.usa_mushroom.buyables[11] = player.usa_mushroom.grabs.times(buyableEffect('usa_mushroom', 31)).max(1).log(5.55).floor()
        if (hasUpgrade('power_balloon', 11)) player.usa_mushroom.buyables[12] = player.usa_mushroom.grabs.times(buyableEffect('usa_mushroom', 31)).max(1).log(12).floor()
        if (hasUpgrade('power_balloon', 11)) player.usa_mushroom.buyables[13] = player.usa_mushroom.grabs.times(buyableEffect('usa_mushroom', 31)).max(1).log(25.6).floor()
        if (hasUpgrade('power_balloon', 11)) player.usa_mushroom.buyables[21] = player.usa_mushroom.grabs.times(buyableEffect('usa_mushroom', 31)).div(10000000).max(1).log(77.77).floor().add(1)
        if (hasUpgrade('power_balloon', 11)) player.usa_mushroom.buyables[22] = player.usa_mushroom.grabs.times(buyableEffect('usa_mushroom', 31)).div(1e9).max(1).log(145.14).floor().add(1)
        if (hasUpgrade('power_balloon', 11)) player.usa_mushroom.buyables[23] = player.usa_mushroom.grabs.times(buyableEffect('usa_mushroom', 31)).div(1e17).max(1).log(514.114).floor().add(1)
        if (hasUpgrade('power_balloon', 11)) player.usa_mushroom.buyables[31] = player.usa_mushroom.grabs.times(buyableEffect('usa_mushroom', 31)).div(5e25).max(1).log(1e10).root(1.35).floor().add(1)
        if (hasUpgrade('power_balloon', 11)) player.usa_mushroom.buyables[32] = player.usa_mushroom.grabs.times(buyableEffect('usa_mushroom', 31)).div(1e20).max(1).log(1e10).root(1.25).floor().add(1)
        if (hasUpgrade('power_balloon', 11)) player.usa_mushroom.buyables[33] = player.usa_mushroom.grabs.times(buyableEffect('usa_mushroom', 31)).div(1e25).max(1).log(1e15).root(1.25).floor().add(1)
        if (hasUpgrade('power_balloon', 11)) player.usa_mushroom.buyables[41] = player.usa_mushroom.grabs.times(buyableEffect('usa_mushroom', 31)).div("1e360").max(1).log(1e13).root(1.5).floor().add(1)
        if (hasUpgrade('power_balloon', 11)) player.usa_mushroom.buyables[42] = player.usa_mushroom.grabs.times(buyableEffect('usa_mushroom', 31)).div("1e425").max(1).log(1e30).root(1.6).floor().add(1)
        if (hasUpgrade('power_balloon', 11)) player.usa_mushroom.buyables[43] = player.usa_mushroom.grabs.times(buyableEffect('usa_mushroom', 31)).div("1e917").max(1).log(1e100).root(3).floor().add(1)
    },

    passiveGeneration() {return hasMilestone('super_acorn', 2)},

    hotkeys: [
        {key: "2", description: "2: Reset for SMB2 Mushrooms", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades: {
        11: {
            title: "Standing",
            description: "7000x Super Hammer gain.",
            cost: new Decimal(3),
            unlocked() {return true},
        },
        12: {
            title: "On enemies",
            description: "Unlock subtab 'Grabbing'.",
            cost: new Decimal(5),
            unlocked() {return hasUpgrade('usa_mushroom', 11)},
            effect() {
                return player.usa_mushroom.grabs.max(1).pow(5).times(1e-10).max(1)
            }
        },
        13: {
            title: "Grab more",
            description: "Unlock 3 more buyables in 'Grabbing'.",
            currencyDisplayName: "Grabbing Enemies",
            currencyInternalName: "grabs",
            currencyLayer: "usa_mushroom",
            cost: new Decimal(10000000),
            unlocked() {return hasUpgrade('usa_mushroom', 12)},
        },
        14: {
            title: "Snowballs",
            description: "Multiply Characters' Box based on Super Hammer.",
            currencyDisplayName: "Grabbing Enemies",
            currencyInternalName: "grabs",
            currencyLayer: "usa_mushroom",
            cost: new Decimal(24000000),
            unlocked() {return hasUpgrade('usa_mushroom', 13)},
            effect() {
                return player.super_hammer.points.max(1).pow(33.33)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        15: {
            title: "Then throw",
            description: "Master Sword resets nothing.",
            currencyDisplayName: "Master Swords",
            currencyInternalName: "points",
            currencyLayer: "master_sword",
            cost: new Decimal(153),
            unlocked() {return hasUpgrade('usa_mushroom', 14)},
        },
        21: {
            title: "Then throw",
            description: "Multiply Grabbing Enemies based on Master Sword.",
            currencyDisplayName: "Master Swords",
            currencyInternalName: "points",
            currencyLayer: "master_sword",
            cost: new Decimal(178),
            unlocked() {return hasUpgrade('usa_mushroom', 15)},
            effect() {
                return player.master_sword.points.max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22: {
            title: "On bullet bills",
            description: "Unlock a new buyables in 'Grabbing'.",
            currencyDisplayName: "Grabbing Enemies",
            currencyInternalName: "grabs",
            currencyLayer: "usa_mushroom",
            cost: new Decimal(1e25),
            unlocked() {return hasUpgrade('usa_mushroom', 21)},
        },
        23: {
            title: "On shells",
            description: "Unlock a new buyables in 'Grabbing'.",
            currencyDisplayName: "Grabbing Enemies",
            currencyInternalName: "grabs",
            currencyLayer: "usa_mushroom",
            cost: new Decimal(1e30),
            unlocked() {return hasUpgrade('usa_mushroom', 22)},
        },
        24: {
            title: "On magikoopas",
            description: "Unlock a new buyables in 'Grabbing'.",
            currencyDisplayName: "Grabbing Enemies",
            currencyInternalName: "grabs",
            currencyLayer: "usa_mushroom",
            cost: new Decimal(1e39),
            unlocked() {return hasUpgrade('usa_mushroom', 23)},
        },
        25: {
            title: "Grab a big enemy",
            description: "Multiply Grabbing Enemies based on itself. (Hardcap at 1.79e308x)",
            currencyDisplayName: "Grabbing Enemies",
            currencyInternalName: "grabs",
            currencyLayer: "usa_mushroom",
            cost: new Decimal(1e50),
            unlocked() {return hasUpgrade('usa_mushroom', 24)},
            effect() {
                return player.usa_mushroom.grabs.max(1).pow(0.5).min("1.79e308")
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        31: {
            title: "6-block jump",
            description: "Unlock 36th Master Sword upgrade.",
            currencyDisplayName: "Grabbing Enemies",
            currencyInternalName: "grabs",
            currencyLayer: "usa_mushroom",
            cost: new Decimal(1e142),
            unlocked() {return hasUpgrade('usa_mushroom', 25)},
            
        },
        32: {
            title: "Chain hit goomba",
            description: "1000x SMB2 Mushroom, 1e25x Grabbing Enemies.",
            cost: new Decimal(234567890),
            unlocked() {return hasUpgrade('master_sword', 85)},           
        },
        33: {
            title: "Chain hit koopa",
            description: "Unlock the last 3 buyables in 'Grabbing'.",
            cost: new Decimal(1.66e13),
            unlocked() {return hasUpgrade('usa_mushroom', 32)},           
        },
        34: {
            title: "Chain hit monty mole",
            description: "Multiply Grabbing Enemies based on itself, but weaker.",
            currencyDisplayName: "Grabbing Enemies",
            currencyInternalName: "grabs",
            currencyLayer: "usa_mushroom",
            cost: new Decimal("3.33e686"),
            unlocked() {return hasUpgrade('usa_mushroom', 33)},      
            effect() {
                return player.usa_mushroom.grabs.max(1).log(10).pow(10).max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },     
        },
        35: {
            title: "Mushroom's dark side",
            description: "Unlock a new subtab in 1UP Mushroom layer.",
            currencyDisplayName: "Grabbing Enemies",
            currencyInternalName: "grabs",
            currencyLayer: "usa_mushroom",
            cost: new Decimal("5.1e747"),
            unlocked() {return hasUpgrade('usa_mushroom', 34)},      
        },
        // Look in the upgrades docs to see what goes here!
    },
    milestones: {
        0: {
            requirementDescription: "Get 1 SMB2 Mushroom",
            effectDescription: "23rd, 24th and 25th Master Sword upgrsdes' effects are always activated.",
            done() { return player.usa_mushroom.points.gte(1) },
        },
        1: {
            requirementDescription: "Get 2 SMB2 Mushrooms",
            effectDescription(){ return "Multiply Rupee gain based on SMB2 Mushrooms. <br>Currently: " + format(player.usa_mushroom.points.add(1).pow(7.5)) + "x"},
            done() { return player.usa_mushroom.points.gte(2) },
        },
    },
    buyables: {
        11: {
            title: "Normal Grabbing",
            cost(x) { return new Decimal(5.55).pow(x.add(1)).div(buyableEffect('usa_mushroom', 31)) },
            display() { return` Multiply Grabbing Enemies gain. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Grabbing Enemies`
            },
            canAfford() { return player[this.layer].grabs.gte(this.cost()) },
            buy() {
                player[this.layer].grabs = player[this.layer].grabs.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                return x.add(1).max(1)
            },
            unlocked() {return true}
        },
        12: {
            title: "Kilo Grabbing",
            cost(x) { return new Decimal(12).pow(x.add(1)).div(buyableEffect('usa_mushroom', 31)) },
            display() { return` Multiply Grabbing Enemies gain. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Grabbing Enemies`
            },
            canAfford() { return player[this.layer].grabs.gte(this.cost()) },
            buy() {
                player[this.layer].grabs = player[this.layer].grabs.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                return x.pow(2).add(1).max(1)
            },
            unlocked() {return true}
        },
        13: {
            title: "Mega Grabbing",
            cost(x) { return new Decimal(25.6).pow(x.add(1)).div(buyableEffect('usa_mushroom', 31)) },
            display() { return` Multiply Grabbing Enemies gain. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Grabbing Enemies`
            },
            canAfford() { return player[this.layer].grabs.gte(this.cost()) },
            buy() {
                player[this.layer].grabs = player[this.layer].grabs.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                return x.pow(3).add(1).max(1)
            },
            unlocked() {return true}
        },
        21: {
            title: "Giga Grabbing",
            cost(x) { return new Decimal(77.77).pow(x).times(10000000).div(buyableEffect('usa_mushroom', 31)) },
            display() { return` Multiply Grabbing Enemies gain. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Grabbing Enemies`
            },
            canAfford() { return player[this.layer].grabs.gte(this.cost()) },
            buy() {
                player[this.layer].grabs = player[this.layer].grabs.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                return x.pow(4).add(1).max(1)
            },
            unlocked() {return hasUpgrade('usa_mushroom', 13)}
        },
        22: {
            title: "Tera Grabbing",
            cost(x) { return new Decimal(145.14).pow(x).times(1e9).div(buyableEffect('usa_mushroom', 31)) },
            display() { return` Multiply Grabbing Enemies gain. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Grabbing Enemies`
            },
            canAfford() { return player[this.layer].grabs.gte(this.cost()) },
            buy() {
                player[this.layer].grabs = player[this.layer].grabs.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                return x.pow(5).add(1).max(1)
            },
            unlocked() {return hasUpgrade('usa_mushroom', 13)}
        },
        23: {
            title: "Peta Grabbing",
            cost(x) { return new Decimal(514.114).pow(x).times(1e17).div(buyableEffect('usa_mushroom', 31)) },
            display() { return` Multiply Grabbing Enemies gain. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Grabbing Enemies`
            },
            canAfford() { return player[this.layer].grabs.gte(this.cost()) },
            buy() {
                player[this.layer].grabs = player[this.layer].grabs.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                return x.pow(6).add(1).max(1)
            },
            unlocked() {return hasUpgrade('usa_mushroom', 13)}
        },
        31: {
            title: "Exa Grabbing",
            cost(x) { return new Decimal(1e10).pow(x.pow(1.35)).times(5e25) },
            display() { return` Divide 1~6 SMB2 buyables' cost. <br>
                Effect: /${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Grabbing Enemies`
            },
            canAfford() { return player[this.layer].grabs.gte(this.cost()) },
            buy() {
                player[this.layer].grabs = player[this.layer].grabs.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                return Decimal.pow(100000, x).max(1)
            },
            unlocked() {return hasUpgrade('usa_mushroom', 22)}
        },
        32: {
            title: "Zetta Grabbing",
            cost(x) { return new Decimal(1e10).pow(x.pow(1.25)).times(1e20) },
            display() { return` Multiply Grabbing Enemies gain, but stronger. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Grabbing Enemies`
            },
            canAfford() { return player[this.layer].grabs.gte(this.cost()) },
            buy() {
                player[this.layer].grabs = player[this.layer].grabs.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                return x.add(1).pow(10).max(1)
            },
            unlocked() {return hasUpgrade('usa_mushroom', 23)}
        },
        33: {
            title: "Yotta Grabbing",
            cost(x) { return new Decimal(1e15).pow(x.pow(1.25)).times(1e25) },
            display() { return` Multiply Grabbing Enemies gain, but stronger. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Grabbing Enemies`
            },
            canAfford() { return player[this.layer].grabs.gte(this.cost()) },
            buy() {
                player[this.layer].grabs = player[this.layer].grabs.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                return x.add(1).pow(15).max(1)
            },
            unlocked() {return hasUpgrade('usa_mushroom', 24)}
        },
        41: {
            title: "Ronna Grabbing",
            cost(x) { return new Decimal("1e360").times(Decimal.pow(1e13,x.pow(1.5))) },
            display() { return` Multiply Grabbing Enemies gain, but much stronger. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Grabbing Enemies`
            },
            canAfford() { return player[this.layer].grabs.gte(this.cost()) },
            buy() {
                player[this.layer].grabs = player[this.layer].grabs.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                return Decimal.pow(1e10,x).max(1)
            },
            unlocked() {return hasUpgrade('usa_mushroom', 33)}
        },
        42: {
            title: "Quetta Grabbing",
            cost(x) { return new Decimal("1e425").times(Decimal.pow(1e30,x.pow(1.6))) },
            display() { return` Multiply Grabbing Enemies gain, but super stronger. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Grabbing Enemies`
            },
            canAfford() { return player[this.layer].grabs.gte(this.cost()) },
            buy() {
                player[this.layer].grabs = player[this.layer].grabs.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                return Decimal.pow(1e20,x).max(1)
            },
            unlocked() {return hasUpgrade('usa_mushroom', 33)}
        },
        43: {
            title: "Henda Grabbing",
            cost(x) { return new Decimal("1e917").times(Decimal.pow(1e100,x.pow(3))) },
            display() { return` Multiply Grabbing Enemies gain, but insanely stronger. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Grabbing Enemies`
            },
            canAfford() { return player[this.layer].grabs.gte(this.cost()) },
            buy() {
                player[this.layer].grabs = player[this.layer].grabs.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                return Decimal.pow(1e100,x).max(1)
            },
            unlocked() {return hasUpgrade('usa_mushroom', 33)}
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["display-text", () => `You have ` +format(player.super_hammer.points) + ` Super Hammers`],
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">With SMB2 Mushroom, you can stand on enemies, even grab and throw them.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones",
                ]    
            },  
            "Grabbing": {
                unlocked() {return hasUpgrade('usa_mushroom', 12)},
                content: [
                    ["blank", "15px"],
                    ["display-text", function() {
                        return "You are grabbing <h2 style='color: #f93414; text-shadow: 0 0 10px #f93414'>" + format(player.usa_mushroom.grabs) + "</h2> Enemies, multiply Super Hammer gain by <h2 style='color: #f93414; text-shadow: 0 0 10px #f93414'>" + format(upgradeEffect('usa_mushroom', 12)) + "x</h2><br>Base Grabbing Enemy gain is based on SMB2 Mushroom. If your SMB2 Mushroom is 0, you can't gain any Grabbing Enemies."
                    }],
                    "buyables",
                ]    
            }, 
        },
    },
})
// 第十六层：青蛙装
addLayer("frog_suit", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
        swim_speed: new Decimal(0),
        swim_calculations: new Decimal(0),
        swim_calculations_max: new Decimal(5),
    }},

    color: "#24AA0C",                       // The color for this layer, which affects many elements.
    resource: "Frog Suits",            // The name of this layer's main prestige resource.
    row: 5,                                 // The row this layer is on (0 is the first row).
    position: 2,
    branches: ["propeller_mushroom"],
    symbol: "FS",

    baseResource: "Invincible Stars",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.invincible_star.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(1.35e13),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.7,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1)               // Factor in any bonuses multiplying gain here.
        if (hasUpgrade('frog_suit', 11)) mult = mult.times(3)
        if (hasUpgrade('frog_suit', 12)) mult = mult.times(upgradeEffect('frog_suit', 12))
        if (hasUpgrade('frog_suit', 15)) mult = mult.times(upgradeEffect('frog_suit', 15))
        if (hasMilestone('frog_suit', 1)) mult = mult.times(player.achievements.points.max(1).log(10).max(1).log(10).max(1))
        if (hasUpgrade('power_balloon', 13)) mult = mult.times(100)
        if (hasUpgrade('frog_suit', 41)) mult = mult.times(upgradeEffect('frog_suit', 41))
        if (hasUpgrade('power_balloon', 44)) mult = mult.times(upgradeEffect('power_balloon', 44))
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return hasMilestone('oneup_mushroom', 2) || hasAchievement('achievements', 114) },          // Returns a bool for if this layer's node should be visible in the tree.

    hotkeys: [
        {key: "q", description: "Q: Reset for Frog Suits", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],

    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if(hasMilestone('power_balloon', 2)) {
            kept.push("milestones")
            }
            if(hasMilestone('power_balloon', 5)) {
                kept.push("upgrades")
            }
            if(hasUpgrade('super_acorn', 22)) {
                kept.push("buyables"),
                kept.push("swim_calculations"),
                kept.push("swim_calculations_max")
            }
        layerDataReset(this.layer, kept)
        }
    },

    passiveGeneration() {return hasMilestone('power_balloon', 6)},

    upgrades: {
        11: {
            title: "Why Mario has a green suit?",
            description: "Triple Frog Suit gain",
            cost: new Decimal(5),
            unlocked() {return true},
        },
        12: {
            title: "He actually has a red one",
            description: "Rotten Mushroom boosts Frog Suit gain (Hardcap at 1000000x)",
            cost: new Decimal(25),
            unlocked() {return hasUpgrade('frog_suit', 11)},
            effect() {
                return player.oneup_mushroom.rotten_mushroom.max(1).root(4).min(1000000)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "But only in multiplayer mode",
            description: "^1.5 Container of Heart effect.",
            cost: new Decimal(236),
            unlocked() {return hasUpgrade('frog_suit', 12)},
        },
        14: {
            title: "Walk? Jump?",
            description: "Multiply SMB2 Mushroom gain based on Frog Suit. (Hardcap at 1e100x)",
            cost: new Decimal(24000),
            unlocked() {return hasUpgrade('frog_suit', 13)},
            effect() {
                return player.frog_suit.points.max(1).pow(5).min(1e100)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        15: {
            title: "Free swim",
            description: "Unlock a subtab 'Swimming'.",
            cost: new Decimal(32000),
            unlocked() {return hasUpgrade('frog_suit', 14)},
            effect() {
                dilateexp = new Decimal(0.5)
                if (hasUpgrade('frog_suit', 43)) dilateexp = new Decimal(0.25)                
                swimfact = player.frog_suit.swim_speed
                if (hasUpgrade('power_balloon', 24)) swimfact = player.power_balloon.SSbest
                rootfact = player.frog_suit.swim_speed.log(10).max(1).pow(dilateexp)
                if (hasUpgrade('power_balloon', 24)) rootfact = player.power_balloon.SSbest.log(10).max(1).pow(dilateexp)
                return swimfact.root(rootfact).max(1)
            },
        },
        21: {
            title: "Best solution",
            description: "Unlock accelerator 3.<br>*Cost is 6.75 Swim speed actually",
            currencyDisplayName: "Swimming speed",
            currencyInternalName: "swim_speed",
            currencyLayer: "frog_suit",
            cost: new Decimal(6.75),
            unlocked() {return hasUpgrade('frog_suit', 15)},
        },
        22: {
            title: "Frog precision",
            description: "You can click accelerators max 10 times.",
            cost: new Decimal(3250000),
            unlocked() {return hasUpgrade('frog_suit', 21)},
        },
        23: {
            title: "Jump on water",
            description: "Unlock 3 new buyables for 3 accelerators.",
            cost: new Decimal(9402011),
            unlocked() {return hasUpgrade('frog_suit', 22)},
        },
        24: {
            title: "1f frog jump",
            description: "Frog Suit powers Rotten Mushroom gain.",
            cost: new Decimal(124131700),
            unlocked() {return hasUpgrade('frog_suit', 23)},
            effect() {
                return player.frog_suit.points.max(1).log(2.5).root(2.5)
            },
            effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id)) },
        },
        25: {
            title: "Frog's shell jump",
            description: "'Tradaka swimming' gives free level to 'Doka swimming'.",
            cost: new Decimal(3e9),
            unlocked() {return hasUpgrade('frog_suit', 24)},
            effect() {
                return player.frog_suit.buyables[12]
            },
            effectDisplay() { return "+"+format(upgradeEffect(this.layer, this.id))+" free levels" },
        },
        31: {
            title: "Water, donut and frog",
            description: "Unlock a new buyables for accelerator click counts.",
            cost: new Decimal(5e9),
            unlocked() {return hasUpgrade('frog_suit', 25)},
        },
        32: {
            title: "Harder door entering",
            description: "^5 base Super Hammer gain.",
            cost: new Decimal(5e11),
            unlocked() {return hasUpgrade('frog_suit', 31)},
        },
        33: {
            title: "Limited running",
            description: "Accelerator 3's exponential base is raised to 0.8.",
            cost: new Decimal(6e11),
            unlocked() {return hasUpgrade('frog_suit', 32)},
        },
        34: {
            title: "In the night of the castle",
            description: "Power Grabbing Enemies based on unspent accelerator clicks",
            cost: new Decimal(2.33e12),
            unlocked() {return hasUpgrade('frog_suit', 33)},
            effect() {
                return player.frog_suit.swim_calculations.div(100).add(1)
            },
            effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id)) },
        },
        35: {
            title: "P fly",
            description: "Unlock a new layer on row 7.",
            currencyDisplayName: "Grabbing Enemies",
            currencyInternalName: "grabs",
            currencyLayer: "usa_mushroom",
            cost: new Decimal("2.22e2077"),
            unlocked() {return hasUpgrade('frog_suit', 34)},
        },
        41: {
            title: "Expand the frog ocean",
            description: "Boost Frog Suit gain based on Balloon Space but weaker.",
            cost: new Decimal(3e14),
            unlocked() {return hasUpgrade('power_balloon', 22)},
            effect() {
                return upgradeEffect('power_balloon', 21).root(2).max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        42: {
            title: "Frog swimming race",
            description: "Unlock accelerator 4.",
            cost: new Decimal(2e15),
            unlocked() {return hasUpgrade('frog_suit', 41)},
        },
        43: {
            title: "5-block jump",
            description: "Make swimming speed effect stronger.",
            cost: new Decimal(2e18),
            unlocked() {return hasUpgrade('frog_suit', 42)},
        },
        44: {
            title: "SMM1 mystery mushroom",
            description: "1.05x Master Sword gain.",
            cost: new Decimal(1e36),
            unlocked() {return hasUpgrade('frog_suit', 43)},
        },
        45: {
            title: "No frog challenge",
            description: "^1.5 'Box accelerator' base.",
            cost: new Decimal(1e39),
            unlocked() {return hasUpgrade('frog_suit', 44)},
        },
        // Look in the upgrades docs to see what goes here!
    },
    milestones: {
        0: {
            requirementDescription: "Get 5 Frog Suits",
            effectDescription: "Automate buyables in Master Sword layer.",
            done() { return player.frog_suit.points.gte(5) },
        },
        1: {
            requirementDescription: "11.69m/s Frog Mario's swimming speed",
            effectDescription() {
                return "Frog Suit gain is boosted based on OoM^2s of AP. (Finally it affacts something T_T) <br>Currently: " + format(player.achievements.points.max(1).log(10).max(1).log(10).max(1)) + "x"},
            done() { return player.frog_suit.swim_speed.gte(11.69) },
        },
        2: {
            requirementDescription(){return "Get " + format(new Decimal(1e18)) + " Frog Suits"},
            effectDescription() {
                return "Passive gain 1000% Link's Bow every second."},
            done() { return player.frog_suit.points.gte(1e18) },
        },
    },
    clickables: {
        11: {
            title: "Speed reset",
            display() {
                return "Reset Frog Mario's swimming speed to 0m/s. And you'll regain all your accelerator click counts."
                },
            canClick() {return true},
            onClick() {
                return player.frog_suit.swim_speed = new Decimal(0),
                player.frog_suit.swim_calculations = player.frog_suit.swim_calculations_max
            },
            unlocked() {return hasUpgrade('frog_suit', 15)}
        },
        21: {
            title: "Accelerator 1",
            display() {
                let acc1 = new Decimal(1)
                if (hasUpgrade('frog_suit', 23)) acc1 = acc1.add(buyableEffect('frog_suit', 11))
                return "Swim Speed +" + format(acc1) + "<br>Formula: x+" + format(acc1)
                },
            canClick() {return player.frog_suit.swim_calculations.gte(0.5)},
            onClick() {
                let acc1 = new Decimal(1)
                if (hasUpgrade('frog_suit', 23)) acc1 = acc1.add(buyableEffect('frog_suit', 11))
                return player.frog_suit.swim_calculations = player.frog_suit.swim_calculations.sub(1),
                player.frog_suit.swim_speed = player.frog_suit.swim_speed.add(acc1)
            },
            unlocked() {return hasUpgrade('frog_suit', 15)}
        },
        22: {
            title: "Accelerator 2",
            display() {
                let acc2 = new Decimal(1.5)
                if (hasUpgrade('frog_suit', 23)) acc2 = acc2.add(buyableEffect('frog_suit', 12))
                return format(acc2) + "x Swim speed<br>Formula: " + format(acc2) + "x"
                },
            canClick() {return player.frog_suit.swim_calculations.gte(0.5)},
            onClick() {
                let acc2 = new Decimal(1.5)
                if (hasUpgrade('frog_suit', 23)) acc2 = acc2.add(buyableEffect('frog_suit', 12))
                return player.frog_suit.swim_calculations = player.frog_suit.swim_calculations.sub(1),
                player.frog_suit.swim_speed = player.frog_suit.swim_speed.times(acc2)
            },
            unlocked() {return hasUpgrade('frog_suit', 15)}
        },
        23: {
            title: "Accelerator 3",
            display() {
                let acc3a = new Decimal(0.5)
                let acc3b = new Decimal(3)
                if (hasUpgrade('frog_suit', 23)) acc3b = acc3b.add(buyableEffect('frog_suit', 13))
                if (hasUpgrade('super_acorn', 11)) acc3a = new Decimal(0.95)
                else if (hasUpgrade('frog_suit', 33)) acc3a = new Decimal(0.8)
                return "Swim Speed ^" + format(acc3a) + " then x" + format(acc3b) + "<br>Formula: (x^" + format(acc3a) + ")·" + format(acc3b)
                },
            canClick() {return player.frog_suit.swim_calculations.gte(0.5)},
            onClick() {
                let acc3a = new Decimal(0.5)
                let acc3b = new Decimal(3)
                if (hasUpgrade('frog_suit', 23)) acc3b = acc3b.add(buyableEffect('frog_suit', 13))
                if (hasUpgrade('super_acorn', 11)) acc3a = new Decimal(0.95)
                else if (hasUpgrade('frog_suit', 33)) acc3a = new Decimal(0.8)
                return player.frog_suit.swim_calculations = player.frog_suit.swim_calculations.sub(1),
                player.frog_suit.swim_speed = player.frog_suit.swim_speed.pow(acc3a).times(acc3b)
            },
            unlocked() {return hasUpgrade('frog_suit', 15)}
        },
        24: {
            title: "Accelerator 4",
            display() {
                let acc4 = new Decimal(2)
                if (hasUpgrade('power_balloon', 41)) acc4 = acc4.add(upgradeEffect('power_balloon', 41))
                return "Swim Speed ^" + format(acc4) + "<br>Formula: x^" + format(acc4) + "<br>You can only click this accelerator once. (Set click count to 0)"
                },
            canClick() {return player.frog_suit.swim_calculations.gte(0.5)},
            onClick() {
                let acc4 = new Decimal(2)
                if (hasUpgrade('power_balloon', 41)) acc4 = acc4.add(upgradeEffect('power_balloon', 41))
                return player.frog_suit.swim_calculations = new Decimal(0),
                player.frog_suit.swim_speed = player.frog_suit.swim_speed.pow(acc4)
            },
            unlocked() {return hasUpgrade('frog_suit', 42)}
        },
    },
    buyables: {
        11: {
            title: "Doka swimming",
            cost(x) { return new Decimal(10).pow(Decimal.pow(x, 1.35).add(1)) },
            display() { let FRB1base = new Decimal(1)
                let FRB1free = upgradeEffect('frog_suit', 25)
                if (hasUpgrade('super_acorn', 21)) FRB1base = FRB1base.times(upgradeEffect('super_acorn', 22))
                let display = ` Increase accelerator 1's base by ${format(FRB1base)} per every level. <br>
                Effect: +${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Frog Suits`
                if (hasUpgrade('frog_suit', 25)) display = ` Increase accelerator 1's base by ${format(FRB1base)} per every level. <br>
                Effect: +${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id]) + "+" + format(FRB1free)}<br>
                Cost: ${format(this.cost())} Frog Suits`
                return display}, 
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let FRB1base = new Decimal(1)
                let effect = new Decimal(x.times(FRB1base))
                let FRB1free = upgradeEffect('frog_suit', 25)
                if (hasUpgrade('super_acorn', 21)) FRB1base = FRB1base.times(upgradeEffect('super_acorn', 22))
                if (hasUpgrade('frog_suit', 25)) effect = new Decimal(x.add(FRB1free)).times(FRB1base)
                return effect},
            unlocked() {return hasUpgrade('frog_suit', 23)}
        },
        12: {
            title: "Tradaka swimming",
            cost(x) { return new Decimal(10).pow(Decimal.pow(x, 1.45).add(1)) },
            display() { let FRB2base = new Decimal(0.5)
                return ` Increase accelerator 2's base by ${format(FRB2base)} per every level. <br>
                Effect: +${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Frog Suits`}, 
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let FRB2base = new Decimal(0.5)
                return new Decimal(x.times(FRB2base))},
            unlocked() {return hasUpgrade('frog_suit', 23)}
        },
        13: {
            title: "Tedaka swimming",
            cost(x) { return new Decimal(10).pow(Decimal.pow(x, 1.6).add(1)) },
            display() { let FRB3base = new Decimal(3)
                if (hasUpgrade('power_balloon', 32)) FRB3base = FRB3base.add(upgradeEffect('power_balloon', 32))
                return ` Increase accelerator 3's multiplication base by ${format(FRB3base)} per every level. <br>
                Effect: +${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Frog Suits`}, 
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let FRB3base = new Decimal(3)
                if (hasUpgrade('power_balloon', 32)) FRB3base = FRB3base.add(upgradeEffect('power_balloon', 32))
                return new Decimal(x.times(FRB3base))},
            unlocked() {return hasUpgrade('frog_suit', 23)}
        },
        21: {
            title: "Pedaka swimming",
            cost(x) { return new Decimal(1.8).tetrate(x) },
            display() { let FRB4base = new Decimal(1.2)
                return ` Multiply max accelerator clicks by ${format(FRB4base)} per every level. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Frog Suits`}, 
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let FRB4base = new Decimal(1.2)
                return new Decimal.pow(FRB4base,x)},
            unlocked() {return hasUpgrade('frog_suit', 31)}
        },
    },
    update(Frog){
        if (hasUpgrade("frog_suit", 22)) player.frog_suit.swim_calculations_max = new Decimal(10)
        if (hasUpgrade("frog_suit", 31)) player.frog_suit.swim_calculations_max = new Decimal(10).times(buyableEffect("frog_suit", 21)).floor()
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["display-text", () => `You have ` +format(player.invincible_star.points) + ` Invincible Stars`],
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Frog Mario can swim faster, walk like a real frog, even run on the water.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones",
                ]                
            },  
            "Swimming": {
                unlocked() {return hasUpgrade('frog_suit', 15)},
                content: [
                    ["blank", "15px"],
                    ["display-text", function() {
                        dis = "Frog Mario's swimming speed is <h2 style='color: #24aa0c; text-shadow: 0 0 10px #24aa0c'>" + format(player.frog_suit.swim_speed) + "m/s</h2>. It multiplies Frog Suit gain by <h2 style='color: #24aa0c; text-shadow: 0 0 10px #24aa0c'>" + format(upgradeEffect('frog_suit', 15)) + "x</h2>"
                        if (hasUpgrade('power_balloon', 24)) dis = "Frog Mario's swimming speed is <h2 style='color: #24aa0c; text-shadow: 0 0 10px #24aa0c'>" + format(player.frog_suit.swim_speed) + "m/s</h2>."
                        return dis
                    }],
                    ["display-text", function() {
                        if (hasUpgrade('power_balloon', 24))
                        return "Your best Frog Mario's swimming speed is <h2 style='color: #24aa0c; text-shadow: 0 0 10px #24aa0c'>" + format(player.power_balloon.SSbest) + "m/s</h2>. It multiplies Frog Suit gain by <h2 style='color: #24aa0c; text-shadow: 0 0 10px #24aa0c'>" + format(upgradeEffect('frog_suit', 15)) + "x</h2> (You bought 9th Power Balloon upgrade!)"
                    }],
                    ["display-text", function() {
                        return "You can click the accelerator " + format(player.frog_suit.swim_calculations) + "/" + format(player.frog_suit.swim_calculations_max) + " times"
                    }],
                    "clickables",
                    "buyables",
                ]    
            }, 
        },
    },
})
// 第十七层：力量气球
addLayer("power_balloon", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
        resistance: new Decimal(1000000),
        space: new Decimal(1),
        space_hardcap: new Decimal(0),
        expansion_a: new Decimal(0),
        expansion_b: new Decimal(0),
        expansion_c: new Decimal(0),
        expbs: new Decimal(0),
        MSbest: new Decimal(0),
        SSbest: new Decimal(0),
    }},
    effect(){
        eff = player[this.layer].best.add(1).log(2).add(1)
        if (hasUpgrade('power_balloon', 14)) eff = eff.pow(2)
        return eff
        /*
        you should use this.layer instead of <layerID>
        Decimal.pow(num1, num2) is an easier way to do
        num1.pow(num2)
        */
    },
        effectDescription(){
        return "multiplying 'Box generator' base by x" + format(tmp[this.layer].effect)
        /*
        use format(num) whenever displaying a number
        */
    },
    color: "#FFFF6E",                       // The color for this layer, which affects many elements.
    resource: "Power Balloons",            // The name of this layer's main prestige resource.
    row: 6,                                 // The row this layer is on (0 is the first row).
    position: 0,
    branches: ["usa_mushroom"],
    symbol: "PB",

    baseResource: "SMB2 Mushrooms",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.usa_mushroom.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(1e125),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.04,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1)               // Factor in any bonuses multiplying gain here.
        if (hasUpgrade('power_balloon', 11)) mult = mult.times(2)
        if (hasUpgrade('power_balloon', 21)) mult = mult.times(upgradeEffect('power_balloon', 21))
        if (hasUpgrade('power_balloon', 43)) mult = mult.times(upgradeEffect('power_balloon', 43))
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return hasAchievement("achievements", 121) },          // Returns a bool for if this layer's node should be visible in the tree.

    hotkeys: [
        {key: "P", description: "Shift+P: Reset for Power Balloons", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],

    upgrades: {
        11: {
            title: "UFO",
            description: "Autobuy SMB2 Mushroom buyables and double Power Balloon gain.",
            cost: new Decimal(2),
            unlocked() {return hasMilestone('power_balloon', 1)},
        },
        12: {
            title: "Helium balloon?",
            description: "100x Link's Bombs, Explosion Defeats, Link's Bow and SMB2 Mushroom gain.",
            cost: new Decimal(4),
            unlocked() {return hasUpgrade('power_balloon', 11)},
        },
        13: {
            title: "Infinite gas?",
            description: "100x Frog Suit gain.",
            cost: new Decimal(4),
            unlocked() {return hasUpgrade('power_balloon', 12)},
        },
        14: {
            title: "The night sky",
            description: "Square Power Balloon effect and keep 38th MS upgrade effect.",
            cost: new Decimal(12),
            unlocked() {return hasUpgrade('power_balloon', 13)},
        },
        15: {
            title: "Be a squirrel",
            description: "Unlock a new layer on row 7.",
            cost: new Decimal(12),
            unlocked() {return hasUpgrade('power_balloon', 14)},
        },
        21: {
            title: "Balloon Expansion",
            description: "Unlock a subtab in this layer.",
            cost: new Decimal(60),
            unlocked() {return hasUpgrade('power_balloon', 15)},
            effect() {
                space = player.power_balloon.space
                eff = space.max(1).log(10).root(1.25)
                if (hasUpgrade('power_balloon', 31)) eff = Decimal.pow(10, space.max(1).log(10).pow(0.5)).max(1).root(5)
                return eff
            }
        },
        22: {
            title: "Same speed",
            description: "Unlock 16th Frog Suit upgrade.",
            cost: new Decimal(1775),
            unlocked() {return hasUpgrade('power_balloon', 21)},
            effect() {
                resistance = player.power_balloon.resistance
                eff = new Decimal(1).div(resistance).times(1000000).add(1).pow(1024)
                return eff
            }
        },
        23: {
            title: "Ring shaped flying",
            description: "Decrease Explosion Resistance based on best Master Sword. (It won't reset on row 7 reset)",
            cost: new Decimal(1825600),
            unlocked() {return hasUpgrade('power_balloon', 22)},
            effect() {
                return player.power_balloon.MSbest.max(1).log(10).max(1)
            },
            effectDisplay() { return "/"+format(upgradeEffect(this.layer, this.id)) },
        },
        24: {
            title: "You need this!",
            description: "You can keep your best swimming speed. And the effect is now based on best swimming speed instead of your current one.",
            currencyDisplayName: "Balloon Space",
            currencyInternalName: "space",
            currencyLayer: "power_balloon",
            cost: new Decimal("1e660"),
            unlocked() {return hasUpgrade('power_balloon', 23)},
        },
        25: {
            title: "Gas gas gas (Power balloon race)",
            description: "Unlock a buyable for increasing expansion speed.",
            cost: new Decimal(10000000),
            unlocked() {return hasUpgrade('power_balloon', 24)},
        },
        31: {
            title: "Two ballons' collision",
            description: "Balloon Space is stronger.",
            cost: new Decimal(12413170),
            unlocked() {return hasUpgrade('power_balloon', 25)},
        },
        32: {
            title: "Luigi ballon",
            description: "'Tedaka swimming' base is increased based on Power Balloon.",
            cost: new Decimal(1e15),
            unlocked() {return hasUpgrade('power_balloon', 31)},
            effect() {
                return player.power_balloon.points.max(10000).log(10000)
            },
            effectDisplay() { return "+"+format(upgradeEffect(this.layer, this.id)) },
        },
        33: {
            title: "Toad ballon",
            description: "Unlock a stronger buyable in SH layer.",
            cost: new Decimal(3e15),
            unlocked() {return hasUpgrade('power_balloon', 32)},
        },
        34: {
            title: "Toadette ballon",
            description: "Divide Expansion Resistance based on OoM^2's of coins.",
            cost: new Decimal(1e17),
            unlocked() {return hasUpgrade('power_balloon', 33)},
            effect() {
                return player.coin.points.max(1e10).log(10).log(10)
            },
            effectDisplay() { return "/"+format(upgradeEffect(this.layer, this.id)) },
        },
        35: {
            title: "Thunder balloon running",
            description: "'Zedaka expanding' gives free levels to 'Exdaka expanding'.",
            cost: new Decimal(4.8e19),
            unlocked() {return hasUpgrade('power_balloon', 34)},
            effect() {
                return player.power_balloon.buyables[12].times(2)
            },
            effectDisplay() { return "+" +format(upgradeEffect(this.layer, this.id))+ " free levels" },
        },
        41: {
            title: "Mario Kart?",
            description: "Increase FS accelerator 4's base based on Balloon Space.",
            cost: new Decimal(7.77e26),
            unlocked() {return hasUpgrade('power_balloon', 35)},
            effect() {
                return player.power_balloon.space.max(1).log(10).max(1).log(10).div(2.33).max(0)
            },
            effectDisplay() { return "+" +format(upgradeEffect(this.layer, this.id))},
        },
        42: {
            title: "No blue shell here",
            description: "Multiply Grabbing Enemies based on Power Balloons.",
            cost: new Decimal(1e43),
            unlocked() {return hasUpgrade('power_balloon', 41)},
            effect() {
                return player.power_balloon.points.max(1).pow(33.33)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x"},
        },
        43: {
            title: "Cheesable balloon",
            description: "Multiply Power Balloon and Super Acorn gain based on expansion resistance.",
            cost: new Decimal(1e47),
            unlocked() {return hasUpgrade('power_balloon', 42)},
            effect() {
                return new Decimal(0).sub(player.power_balloon.resistance.log(10)).max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x"},
        },
        44: {
            title: "Resistance to motivation",
            description: "Multiply Frog Suit gain by reciporcal of expansion resistance.",
            cost: new Decimal(1e49),
            unlocked() {return hasUpgrade('power_balloon', 43)},
            effect() {
                return new Decimal(1).div(player.power_balloon.resistance).max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x"},
        },
        45: {
            title: "Overpowered balloon",
            description: "Make 1st Coin milestone overpowered. (Check the effect on that milestone)",
            cost: new Decimal(5e61),
            unlocked() {return hasUpgrade('power_balloon', 44)},
        },
        51: {
            title: "Back to the oak forest",
            description: "Unlock 14th Super Acorn upgrade.",
            cost: new Decimal(5e63),
            unlocked() {return hasUpgrade('power_balloon', 45)},
        },
        // Look in the upgrades docs to see what goes here!
    },
    milestones: {
        0: {
            requirementDescription: "Get 1 Power Balloon",
            effectDescription: "Keep Master Sword milestones on row 7 reset.",
            done() { return player.power_balloon.points.gte(1) },
        },
        1: {
            requirementDescription: "Get 2 Power Balloons",
            effectDescription: "1.25x Master Sword gain, unlock 1st Power Balloon upgrade.",
            done() { return player.power_balloon.points.gte(2) },
        },
        2: {
            requirementDescription: "Get 4 Power Balloons",
            effectDescription: "Keep SMB2 Mushroom and Frog Suit milestones on row 7 reset and 37th and 39th MS upgrade's effects are always activated.",
            done() { return player.power_balloon.points.gte(4) },
        },
        3: {
            requirementDescription: "Get 40 Power Balloons",
            effectDescription: "5th SMB2 Mushroom upgrade's effect is always activated.",
            done() { return player.power_balloon.points.gte(40) },
        },
        4: {
            requirementDescription: "Get 2024 Power Balloons",
            effectDescription: "You can autobuy Master Swords.",
            done() { return player.power_balloon.points.gte(2024) },
        },
        5: {
            requirementDescription: "Get 2000000 Power Balloons",
            effectDescription: "Keep SMB2 Mushroom and Frog Suit upgrades.",
            done() { return player.power_balloon.points.gte(2000000) },
        },
        6: {
            requirementDescription() {return "Get "+format(new Decimal(1e20))+" Power Balloons"},
            effectDescription: "Passive gain 100% Frog Suits every second.",
            done() { return player.power_balloon.points.gte(1e20) },
        },
    },
    buyables: {
        11: {
            title: "Exdaka expanding",
            cost(x) { return new Decimal(19.9).pow(Decimal.pow(x, 1.05).add(1)) },
            display() { let PBB1base = new Decimal(2.65)
                let display = ` Multiply expanding speed by ${format(PBB1base)} per every level. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Power Balloons`
                if (hasUpgrade("power_balloon", 35)) 
                display = ` Multiply expanding speed by ${format(PBB1base)} per every level. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}+${format(upgradeEffect('power_balloon', 35))}<br>
                Cost: ${format(this.cost())} Power Balloons`
                return display}, 
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let PBB1base = new Decimal(2.65)
                let free = upgradeEffect('power_balloon', 35)
                effect = Decimal.pow(PBB1base,x).max(1)
                if (hasUpgrade("power_balloon", 35)) effect = Decimal.pow(PBB1base,x.add(free)).max(1)
                return effect},
            unlocked() {return hasUpgrade('power_balloon', 25)}
        },
        12: {
            title: "Zedaka expanding",
            cost(x) { return new Decimal(11.45).pow(Decimal.pow(x, 1.05).add(1)) },
            display() { let PBB2base = new Decimal(1.414213562373)
                if (hasUpgrade('super_acorn', 21)) PBB2base = PBB2base.add(upgradeEffect('super_acorn', 23))
                let display = ` Divide Explosion Resistance by ${format(PBB2base)} per every level. <br>
                Effect: /${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Power Balloons`
                return display}, 
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let PBB2base = new Decimal(1.414213562373)
                if (hasUpgrade('super_acorn', 21)) PBB2base = PBB2base.add(upgradeEffect('super_acorn', 23))
                effect = Decimal.pow(PBB2base,x).max(1)
                return effect},
            unlocked() {return hasUpgrade('power_balloon', 25)}
        },
    },
    update(expBS){
        tick = new Decimal(0.05)
        expBS = new Decimal(10)
        if (hasUpgrade('power_balloon', 25)) expBS = expBS.times(buyableEffect('power_balloon', 11))
        if (hasUpgrade('power_balloon', 21)) player.power_balloon.expbs = expBS
        if (hasUpgrade('power_balloon', 21)) player.power_balloon.space_hardcap = upgradeEffect('power_balloon', 22)
        if (player.power_balloon.space.lte(1)) player.power_balloon.space = new Decimal(1)
        if (hasUpgrade('power_balloon', 21) && player.power_balloon.space.lte(player.power_balloon.space_hardcap.div(1.001))) player.power_balloon.space = player.power_balloon.space.times(expBS.pow(tick))
        else if (player.power_balloon.space.gte(player.power_balloon.space_hardcap)) player.power_balloon.space = player.power_balloon.space_hardcap
        resist = new Decimal(1000000)
        if (hasUpgrade('power_balloon', 23)) resist = resist.div(upgradeEffect('power_balloon', 23))
        if (hasUpgrade('power_balloon', 25)) resist = resist.div(buyableEffect('power_balloon', 12))
        if (hasUpgrade('power_balloon', 34)) resist = resist.div(upgradeEffect('power_balloon', 34))
        if (player.power_balloon.MSbest.lte(player.master_sword.best)) player.power_balloon.MSbest = player.master_sword.best
        if (player.power_balloon.SSbest.lte(player.frog_suit.swim_speed)) player.power_balloon.SSbest = player.frog_suit.swim_speed
        player.power_balloon.resistance = resist
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["display-text", () => `You have ` +format(player.usa_mushroom.points) + ` SMB2 Mushrooms`],
        ["display-text", () => `Your best amount of Power Balloon is ` +format(player.power_balloon.best)],
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Power Balloon is added in v3.0.0 update. Let's fly infinitely!`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones",
                ]                
            },  
            "Balloon Expansion": {
                unlocked() {return hasUpgrade('power_balloon', 21)},
                content: [
                    ["blank", "15px"],
                    ["display-text", function() {
                        return "You have <h2 style='color: #ffff6e; text-shadow: 0 0 10px #ffff6e'>" + format(player.power_balloon.space) + "</h2> Balloon Space. Multipliying Power Balloon gain by <h2 style='color: #ffff6e; text-shadow: 0 0 10px #ffff6e'>" + format(upgradeEffect('power_balloon', 21)) + "x</h2>"
                    }],
                    ["display-text", function() {
                        return "You gain Ballon Space <h2 style='color: #ffff6e; text-shadow: 0 0 10px #ffff6e'>" + format(player.power_balloon.expbs) + "x </h2> per second"
                    }],
                    ["display-text", function() {
                        return "Your expansion resistance is <h2 style='color: #ffff6e; text-shadow: 0 0 10px #ffff6e'>" + format(player.power_balloon.resistance) + "</h2>, the hardcap of Balloon Space is <h2 style='color: #ffff6e; text-shadow: 0 0 10px #ffff6e'>" + format(upgradeEffect('power_balloon', 22)) + "</h2>"
                    }],
                    "clickables",
                    "buyables",
                ]    
            }, 
        },
    },
})
// 第十八层：超级橡栗
addLayer("super_acorn", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
        strength: new Decimal(0),
        SMBsan: new Decimal(0),
        SMWorld: new Decimal(0),
        NSMBrosU: new Decimal(0),
    }},

    effect(){
        softcap = new Decimal(1e100)
        if (hasUpgrade('super_acorn', 25)) softcap = new Decimal("1e1000")
        eff1 = player[this.layer].best.add(1).pow(10)
        eff2 = eff1.div(softcap).max(1).pow(0.2).times(softcap) //超级橡栗效果软上限
        eff = eff1
        if (eff1.gte(softcap)) eff = eff2
        return eff
        /*
        you should use this.layer instead of <layerID>
        Decimal.pow(num1, num2) is an easier way to do
        num1.pow(num2)
        */
    },
        effectDescription(){
        softcap = new Decimal(1e100)
        if (hasUpgrade('super_acorn', 25)) softcap = new Decimal("1e1000")
        dis = "multiplying SMB2 Mushroom gain by x" + format(tmp[this.layer].effect)
        if (tmp[this.layer].effect.gte(softcap)) dis = dis + "(softcapped)"
        return dis
        /*
        use format(num) whenever displaying a number
        */
    },

    color: "#D74A19",                       // The color for this layer, which affects many elements.
    resource: "Super Acorns",            // The name of this layer's main prestige resource.
    row: 6,                                 // The row this layer is on (0 is the first row).
    position: 1,
    symbol: "SA",
    branches: ["frog_suit"],


    baseResource: "Frog Suits",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.frog_suit.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(1e15),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 1/3,                          // "normal" prestige gain is (currency^exponent).

    softcap() {
        return new Decimal(200000)
    },

    softcapPower() {
        power = new Decimal(0.4)
        if (hasUpgrade('super_acorn', 24)) power = new Decimal(0.8)
        else if (hasUpgrade('super_acorn', 13)) power = new Decimal(0.6)
        return power
    },

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1)               // Factor in any bonuses multiplying gain here.
        if (hasUpgrade('super_acorn', 21)) mult = mult.times(upgradeEffect('super_acorn', 21))
        if (hasUpgrade('power_balloon', 43)) mult = mult.times(upgradeEffect('power_balloon', 43))
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        exp = new Decimal(1)
        return exp
    },
    directMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1)               // Factor in any bonuses multiplying gain here.
        return mult
    },

    layerShown() { return hasAchievement('achievements', 122) },          // Returns a bool for if this layer's node should be visible in the tree.

    hotkeys: [
        {key: "a", description: "A: Reset for Super Acorns", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],

    upgrades: {
        11: {
            title: "Air slide",
            description: "Raise FS accelerator 3's exponential base to 0.95.",
            cost: new Decimal(2),
            unlocked() {return true},
        },
        12: {
            title: "6-block spin jump",
            description() {return format(new Decimal("e3e36")) + "x Cleared Courses gain. (Resets will be faster!)"},
            cost: new Decimal(20),
            unlocked() {return hasUpgrade('super_acorn', 11)},
        },
        13: {
            title: "Toad's different head",
            description() {return "Weaken Super Acorn softcap: softcap power from 0.4 to 0.6."},
            cost: new Decimal(50176100),
            unlocked() {return hasUpgrade('super_acorn', 12)},
        },
        14: {
            title: "From dots to lines",
            description: "Power Balloon can increase 'Box transcender' max level",
            cost: new Decimal(1e9),
            unlocked() {return hasUpgrade('super_acorn', 13)},
            effect() {
                return player.power_balloon.points.max(1).log(10).div(5).round()
            },
            effectDisplay() { return "+"+format(upgradeEffect(this.layer, this.id)) },
        },
        15: {
            title: "Adorable",
            description: "Power Balloon boosts SMB2 Mushroom gain. (Hardcap at 1.79e308)",
            cost: new Decimal(1.5e9),
            unlocked() {return hasUpgrade('super_acorn', 14)},
            effect() {
                return player.power_balloon.points.pow(4).max(1).min("1.79e308")
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        21: {
            title: "Flying all-stars",
            description: "Unlock a new subtab and buyables this layer.",
            cost: new Decimal(2.233e12),
            unlocked() {return hasUpgrade('super_acorn', 15)},
            effect() {
                return Decimal.pow(10, player.super_acorn.strength.max(1).log(10).pow(0.75)).max(1)
            },
        },
        22: {
            title: "Which is best?",
            description: "Keep buyables, click counts in FS layer.",
            cost: new Decimal(7e16),
            unlocked() {return hasUpgrade('super_acorn', 21)},
            effect() {
                return player.super_acorn.SMBsan.max(1).root(3)
            },
        },
        23: {
            title: "Faster!",
            description: "^22 base Super Hammer gain, bind resources better.",
            cost: new Decimal(1e21),
            unlocked() {return hasUpgrade('super_acorn', 22)},
            effect() {
                return player.super_acorn.SMWorld.max(1).log(10).pow(0.66).div(5).max(0)
            },
        },
        24: {
            title: "Acorn boost I",
            description: "Weaken Super Acorn's softcap again. (Power from 0.6 to 0.8)",
            cost: new Decimal(2.888e23),
            unlocked() {return hasUpgrade('power_balloon', 51)},
            effect() {
                return player.super_acorn.NSMBrosU.max(1).root(5)
            },
        },
        25: {
            title: "Acorn boost II",
            description: "Delay Super Acorn effect's softcap. (From 1e100 to 1e1000)",
            cost: new Decimal(7.777e29),
            unlocked() {return hasUpgrade('super_acorn', 24)},
        },
        31: {
            title: "The overpwered",
            description: "Unlock a new subtab for overpowering more milestones.",
            cost: new Decimal(1e32),
            unlocked() {return hasUpgrade('super_acorn', 25)},
        },
        32: {
            title: "The last power-up",
            description: "Unlock a new layer on row 8.",
            cost: new Decimal(1.5e33),
            unlocked() {return hasUpgrade('super_acorn', 31)},
        },
        101: {
            title: "SA-OPU1",
            tooltip: "Overpower 2nd Coin milestone",
            currencyDisplayName: "Coins",
            currencyInternalName: "points",
            currencyLayer:"coin",
            cost: new Decimal("e6.7e55"),
            unlocked() {return hasUpgrade('super_acorn', 31)},
            style(){style = {'min-height':'180px',
                            'width':'180px',
                            'font-size':'18px',
                            'border-radius':'0%'}
                    if (hasUpgrade(this.layer, 101)) 
                    style = {'min-height':'180px',
                    'width':'180px','font-size':'18px',
                    'border-radius':'0%',
                    'background-color':'#feb252'}
                return style}
        },
        // Look in the upgrades docs to see what goes here!
    },
    update(multFlS){
        tick = new Decimal(0.05)
        multFlS = new Decimal(1)
        multSMB3 = new Decimal(1)
        multSMW = new Decimal(1)
        multNSMBU = new Decimal(1)
        if (hasUpgrade('super_acorn', 21)) multSMB3 = multSMB3.times(buyableEffect('super_acorn', 11)),
        multSMW = multSMW.times(buyableEffect('super_acorn', 21)).times(buyableEffect('super_acorn', 22)),
        multNSMBU = multNSMBU.times(buyableEffect('super_acorn', 31)).times(buyableEffect('super_acorn', 32)),
        multFlS = multFlS.times(upgradeEffect('super_acorn', 24)),
        player.super_acorn.SMBsan = player.super_acorn.SMBsan.add(multSMB3.times(tick)),
        player.super_acorn.SMWorld = player.super_acorn.SMWorld.add(multSMW.times(tick)),
        player.super_acorn.NSMBrosU = player.super_acorn.NSMBrosU.add(multNSMBU.times(tick)),
        player.super_acorn.strength = player.super_acorn.strength.add(multFlS.times(tick))
    },
    milestones: {
        0: {
            requirementDescription: "Get 1 Super Acorn",
            effectDescription: "Keep Master Sword upgrades on reset.",
            done() { return player.super_acorn.points.gte(1) },
        },
        1: {
            requirementDescription: "Get 200,000 Super Acorns",
            effectDescription: "Auto sacrifice 1UP Mushrooms to gain Rotten Mushrooms.",
            done() { return player.super_acorn.points.gte(200000) },
        },
        2: {
            requirementDescription: "Get 9,402,011 Super Acorns",
            effectDescription: "Passive gain SMB2 Mushroom every second.",
            done() { return player.super_acorn.points.gte(9402011) },
        },
    },
    buyables: {
        11: {
            title: "SMB3 power: Tail Mario",
            cost(x) { return new Decimal("ee30").pow(Decimal.pow(15, x).add(1)) },
            display() { let SAB1base = new Decimal(5)
                let display = ` Multiply SMB3 flying power by ${format(SAB1base)} per every level. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Super Leaves`
                return display}, 
            canAfford() { return player.super_leaf.points.gte(this.cost()) },
            buy() {
                player.super_leaf.points = player.super_leaf.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let SAB1base = new Decimal(5)
                effect = Decimal.pow(SAB1base,x).max(1)
                return effect},
            unlocked() {return hasUpgrade('super_acorn', 21)},
            style(){if (canBuyBuyable('super_acorn', 11) == true) return {"background-color":"#f83c11"}}
        },
        21: {
            title: "SMW power: Cape Mario",
            cost(x) { return new Decimal(1000000).times(Decimal.pow(1.35,x)) },
            display() { let SAB2base = new Decimal(3)
                let display = ` Multiply SMW flying power by ${format(SAB2base)} per every level. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Cape Feathers`
                return display}, 
            canAfford() { return player.cape_feather.points.gte(this.cost()) },
            buy() {
                player.cape_feather.points = player.cape_feather.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let SAB2base = new Decimal(3)
                effect = Decimal.pow(SAB2base,x).max(1)
                return effect},
            unlocked() {return hasUpgrade('super_acorn', 21)},
            style(){if (canBuyBuyable('super_acorn', 21) == true) return {"background-color":"#fcbf02"}}
        },
        22: {
            title: "SMW power: Balloon Mario",
            cost(x) { return new Decimal(100).pow(Decimal.pow(x,1.3)) },
            display() { let SAB3base = new Decimal(3.5)
                let display = ` Multiply SMW flying power by ${format(SAB3base)} per every level. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Power Balloons`
                return display}, 
            canAfford() { return player.power_balloon.points.gte(this.cost()) },
            buy() {
                player.power_balloon.points = player.power_balloon.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let SAB3base = new Decimal(3.5)
                effect = Decimal.pow(SAB3base,x).max(1)
                return effect},
            unlocked() {return hasUpgrade('super_acorn', 21)},
            style(){if (canBuyBuyable('super_acorn', 22) == true) return {"background-color":"#ffff6e"}}
        },
        31: {
            title: "NSMBU power: Propeller Mario",
            cost(x) { return new Decimal("ee28").pow(Decimal.pow(14,x)) },
            display() { let SAB4base = new Decimal(3)
                let display = ` Multiply SMW flying power by ${format(SAB4base)} per every level. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Propeller Mushrooms`
                return display}, 
            canAfford() { return player.propeller_mushroom.points.gte(this.cost()) },
            buy() {
                player.propeller_mushroom.points = player.propeller_mushroom.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let SAB4base = new Decimal(3)
                effect = Decimal.pow(SAB4base,x).max(1)
                return effect},
            unlocked() {return hasUpgrade('super_acorn', 21)},
            style(){if (canBuyBuyable('super_acorn', 31) == true) return {"background-color":"#f45b00"}}
        },
        32: {
            title: "NSMBU power: Squirrel Mario",
            cost(x) { return new Decimal(1000).pow(Decimal.pow(x,1.3)) },
            display() { let SAB5base = new Decimal(3.5)
                let display = ` Multiply SMW flying power by ${format(SAB5base)} per every level. <br>
                Effect: ${format(this.effect())}x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Super Acorns`
                return display}, 
            canAfford() { return player.super_acorn.points.gte(this.cost()) },
            buy() {
                player.super_acorn.points = player.super_acorn.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let SAB5base = new Decimal(3.5)
                effect = Decimal.pow(SAB5base,x).max(1)
                return effect},
            unlocked() {return hasUpgrade('super_acorn', 21)},
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["display-text", () => `You have ` +format(player.frog_suit.points) + ` Frog Suits`],
        ["display-text", () => `Your best amount of Super Acorn is ` +format(player.super_acorn.best)],
        ["display-text", () => `Super Acorn softcap starts at 200,000`],
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Super Acorn is added in v3.0.0 update. It's in NSMBU style. Squirrel Mario is so cute!`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones",
                ]                
            },  
            "SMM2 Fly All-stars": {
                unlocked() {return hasUpgrade('super_acorn', 21)},
                content: [
                    ["blank", "15px"],
                    ["display-text", function() {
                        return "You have is <h2 style='color: #d74a19; text-shadow: 0 0 10px #d74a19'>" + format(player.super_acorn.strength) + "</h2> Flying Strength, which boosting Super Acorn gain by <h2 style='color: #d74a19; text-shadow: 0 0 10px #d74a19'>" + format(upgradeEffect('super_acorn', 21)) + "x</h2>"
                    }],
                    ["display-text", function() {
                        return "You have is <h2 style='color: #d74a19; text-shadow: 0 0 10px #d74a19'>" + format(player.super_acorn.SMBsan) + "</h2> SMB3 Flying Power, which boosting 'Doka swimming' base by <h2 style='color: #d74a19; text-shadow: 0 0 10px #d74a19'>" + format(upgradeEffect('super_acorn', 22)) + "x</h2>"
                    }],
                    ["display-text", function() {
                        return "You have is <h2 style='color: #d74a19; text-shadow: 0 0 10px #d74a19'>" + format(player.super_acorn.SMWorld) + "</h2> SMW Flying Power, which increasing 'Zedaka expanding base' by <h2 style='color: #d74a19; text-shadow: 0 0 10px #d74a19'>+" + format(upgradeEffect('super_acorn', 23)) + "</h2>"
                    }],
                    ["display-text", function() {
                        return "You have is <h2 style='color: #d74a19; text-shadow: 0 0 10px #d74a19'>" + format(player.super_acorn.NSMBrosU) + "</h2> NSMBU Flying Power, which boosting Flying Strength gain by <h2 style='color: #d74a19; text-shadow: 0 0 10px #d74a19'>" + format(upgradeEffect('super_acorn', 24)) + "x</h2>"
                    }],
                    "buyables",
                ]                
            }, 
            "SA Overpowers": {
                unlocked() {return hasUpgrade('super_acorn', 31)},
                content: [
                    ["blank", "15px"],
                    ["upgrades", [10,11,12]]
                ]
            }, 
        },
    },
})
// 第十九层：回旋镖之花
addLayer("boomerang_flower", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#0097EF",                       // The color for this layer, which affects many elements.
    resource: "Boomerang Flowers",            // The name of this layer's main prestige resource.
    row: 7,                                 // The row this layer is on (0 is the first row).
    position: 0,
    branches: ["power_balloon"],
    symbol: "BF",


    baseResource: "Power Balloons",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.power_balloon.points },  // A function to return the current amount of baseResource.

    requires: new Decimal("ee56"),              // The amount of the base needed to  gain 1 of the prestige currency.
    //v0.8版本改成4.5e79
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.166666667,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return hasAchievement('achievements', 125) },          // Returns a bool for if this layer's node should be visible in the tree.

    hotkeys: [
        {key: "x", description: "X: Reset for Boomerang Flowers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],

    upgrades: {
        // Look in the upgrades docs to see what goes here!
    },
})
//剧透警告！！！SPOILER ALERT!!!
//剧透警告！！！SPOILER ALERT!!!
//剧透警告！！！SPOILER ALERT!!!
//剧透警告！！！SPOILER ALERT!!!
//剧透警告！！！SPOILER ALERT!!!
//剧透警告！！！SPOILER ALERT!!!
//剧透警告！！！SPOILER ALERT!!!
//剧透警告！！！SPOILER ALERT!!!
//剧透警告！！！SPOILER ALERT!!!
//剧透警告！！！SPOILER ALERT!!!
//剧透警告！！！SPOILER ALERT!!!
//剧透警告！！！SPOILER ALERT!!!
//剧透警告！！！SPOILER ALERT!!!
//剧透警告！！！SPOILER ALERT!!!

















// 第二十层：马力欧
// 第二十一层：路易吉
// 第二十二层：奇诺比奥
// 第二十三层：奇诺比珂
// 第二十四层：简单耐力挑战
// 第二十五层：普通耐力挑战
// 第二十六层：困难耐力挑战
// 第二十七层：超难耐力挑战
// 第二十八层：多人过关
// 第二十九层：多人对战
// 第三十层：标准风格关卡
// 第三十一层：跑酷关卡
// 第三十二层：微操关卡
// 第三十三层：Kaizo关卡
// 第三十四层：时间杀关卡
// 第三十五层：解谜关卡
// 第三十六层：工艺关卡
// 第三十七层：热垃圾关卡
// 第三十八层：Maker Teams
// 第三十九层：马造速通活动
// 第四十层：谁是多人闸总王
// 第四十一层：The End?
