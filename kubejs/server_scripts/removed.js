// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal
ServerEvents.recipes(event => {
  // Remove original recipes for iron and gold tools, armor, horse armor
  const itemsToRemove = [
    // Armor
    'minecraft:iron_helmet', 'minecraft:iron_chestplate', 'minecraft:iron_leggings', 'minecraft:iron_boots',
    'minecraft:golden_helmet', 'minecraft:golden_chestplate', 'minecraft:golden_leggings', 'minecraft:golden_boots',
    'minecraft:diamond_helmet', 'minecraft:diamond_chestplate', 'minecraft:diamond_leggings', 'minecraft:diamond_boots',
    // Horse Armor
    'minecraft:iron_horse_armor', 'minecraft:golden_horse_armor',
    // other
];

itemsToRemove.forEach(item => {
    event.remove({ id: item });
});
});

LootJS.modifiers((event) => {
  event.addLootTableModifier("biomemakeover:entities/pillager_additional").removeLoot("biomemakeover:cladded_boots")
  event.addLootTableModifier("biomemakeover:entities/pillager_additional").removeLoot("biomemakeover:cladded_leggings")
  event.addLootTableModifier("biomemakeover:entities/pillager_additional").removeLoot("biomemakeover:cladded_chestplate")
  event.addLootTableModifier("biomemakeover:entities/pillager_leader_additional").removeLoot("biomemakeover:cladding_upgrade_smithing_template")
  event.addLootTableModifier("biomemakeover:entities/pillager_leader_additional").removeLoot("biomemakeover:cladded_boots")
  event.addLootTableModifier("biomemakeover:entities/pillager_leader_additional").removeLoot("biomemakeover:cladded_leggings")
  event.addLootTableModifier("biomemakeover:entities/pillager_leader_additional").removeLoot("biomemakeover:cladded_chestplate")
  event.addLootTableModifier("born_in_chaos_v1:entities/krampus").removeLoot("born_in_chaos_v1:krampuss_bag")
});

let tickCounter = 0;

ServerEvents.tick(event => {
  tickCounter++;
  if (tickCounter === 34800) {
    event.server.tell('[ClearLag] Warning: Dropped items will be cleared in 1 minute!');
  }
  if (tickCounter >= 36000) {
    tickCounter = 0;

    event.server.runCommandSilent('kill @e[type=minecraft:item]');
    event.server.tell('[ClearLag] Removed all dropped items.');
  }
});