ServerEvents.tags('block', event => {
  event.remove('minecraft:needs_stone_tool', [
    'minecraft:copper_ore',
    'minecraft:deepslate_copper_ore' 
  ])
  event.add('minecraft:needs_wooden_tool', [
    'minecraft:copper_ore',
    'minecraft:deepslate_copper_ore'
  ])
})                                                                                                                                                                                                //made by blueversal

EntityEvents.spawned(event => {
  let entity = event.entity

  if(entity.type=="caverns_and_chasms:copper_golem"){
    let coppergolem = event.level.createEntity("friendsandfoes:copper_golem");
    coppergolem.setPosition(entity.x, entity.y, entity.z)
    coppergolem.spawn();
    event.cancel();
  }
})