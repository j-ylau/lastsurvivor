import kaboom from "kaboom";

const k = kaboom({
  background: [79, 92, 66],
});

k.camScale(1);

//player
k.loadSprite("bean", "sprites/bean.png");

//bullets
k.loadSprite("egg", "sprites/egg.png");
k.loadSprite("meat", "sprites/meat.png");
k.loadSprite("lightening", "sprites/lightening.png");
k.loadSprite("pineapple", "sprites/pineapple.png");
k.loadSprite("mushroom", "sprites/mushroom.png");
k.loadSprite("apple", "sprites/apple.png");
k.loadSprite("k", "sprites/k.png");
k.loadSprite("egg_crack", "sprites/egg_crack.png");
k.loadSprite("grape", "sprites/grape.png");
k.loadSprite("watermelon", "sprites/watermelon.png");
k.loadSprite("egg_crack", "sprites/egg_crack.png");
k.loadSprite("moon", "sprites/moon.png");
k.loadSprite("portal", "sprites/portal.png");
k.loadSprite("heart", "sprites/heart.png");
k.loadSprite("sun", "sprites/sun.png");

//obstacles
k.loadSprite("steel", "sprites/steel.png");

//enemies
k.loadSprite("ghosty", "sprites/ghosty.png"); // easiest enemy, slow speed
k.loadSprite("gigagantrum", "sprites/gigagantrum.png"); // heavy armor enemy, slow speed
k.loadSprite("bag", "sprites/bag.png"); // light armor enemy, medium speed
k.loadSprite("bobo", "sprites/bobo.png"); // medium armor enemy, medium speed
k.loadSprite("dino", "sprites/dino.png"); // medium armor enemy, high speed
k.loadSprite("btfly", "sprites/btfly.png"); // light armor enemy, very fast speed
k.loadSprite("mark", "sprites/mark.png"); // heavy armor, medium speed, high hp
k.loadSprite("sword", "sprites/sword.png"); // melee enemy, fast speed, onCollide should be used with a delay to inflict damage

// k.loadSprite("32greenbush", "./sprites/environment/32greenbush.png");
// k.loadSprite("32box", "./sprites/environment/32box.png");
// k.loadSprite("32orangebush", "./sprites/environment/32orangebush.png");
// k.loadSprite("32stone", "./sprites/environment/32stone.png");
// k.loadSprite(
//   "64lightgreenmediumsmalltree",
//   "./sprites/environment/64lightgreenmediumsmalltree.png"
// );
// k.loadSprite(
//   "96lightgreenmediumtree",
//   "./sprites/environment/96lightgreenmediumtree.png"
// );
// k.loadSprite(
//   "96lightorangemediumtree",
//   "./sprites/environment/96lightorangemediumtree.png"
// );
// k.loadSprite(
//   "128darkgreenbigtree",
//   "./sprites/environment/128darkgreenbigtree.png"
// );

// k.loadSprite("brokentree1", "./sprites/environment/Broken_tree1.png");
// k.loadSprite("brokentree2", "./sprites/environment/Broken_tree2.png");
// k.loadSprite("brokentree3", "./sprites/environment/Broken_tree3.png");
// k.loadSprite("brokentree4", "./sprites/environment/Broken_tree4.png");
// k.loadSprite("brokentree5", "./sprites/environment/Broken_tree5.png");
// k.loadSprite("brokentree6", "./sprites/environment/Broken_tree6.png");
// k.loadSprite("brokentree7", "./sprites/environment/Broken_tree7.png");

// guns
k.loadSprite("gun", "sprites/gun.png");
k.loadSprite("AK47", "./sprites/guns/AK47.png");
k.loadSprite("Blunderbuss", "./sprites/guns/Blunderbuss.png");
k.loadSprite("Derringer", "./sprites/guns/Derringer.png");
k.loadSprite("DoubleBarrel", "./sprites/guns/DoubleBarrel.png");
k.loadSprite("FNScar", "./sprites/guns/FNScar.png");
k.loadSprite("M1Garand", "./sprites/guns/M1Garand.png");
k.loadSprite("MP40", "./sprites/guns/MP40.png");
k.loadSprite("RocketLauncher", "./sprites/guns/RocketLauncher.png");
k.loadSprite("Uzi", "./sprites/guns/Uzi.png");
k.loadSprite("LMG", "./sprites/guns/LMG.png");
k.loadSprite("AA12", "./sprites/guns/AA12.png");
k.loadSprite("A205", "./sprites/guns/S-A205.png");

//drops
k.loadSprite("health", "./sprites/drops/health-red.png"); // heals to full
k.loadSprite("jumpy", "./sprites/drops/jumpy.png"); // stamina to full
k.loadSprite("ammo", "./sprites/drops/ammo.png"); // sreload currentgun to full ammo

//sounds
k.loadSound("pistol", "./sounds/pistol.mp3");
k.loadSound("a205", "./sounds/a205.mp3");
k.loadSound("aa12", "./sounds/aa12.mp3");
k.loadSound("ak47", "./sounds/ak47.mp3");
k.loadSound("doublebarrel", "./sounds/doublebarrel.mp3");
k.loadSound("lmg", "./sounds/lmg.mp3");
k.loadSound("m1garand", "./sounds/m1garand.mp3");
k.loadSound("mp40", "./sounds/mp40.mp3");
k.loadSound("rpg", "./sounds/rpg.mp3");

//sounds roading
k.loadSound("regularreload", "./sounds/regularreload.mp3");
k.loadSound("shotgunreload", "./sounds/shotgunreload.mp3"); // for dobule barrel and aa12

//music
k.loadSound("music", "./music/music.mp3");
k.loadSound("fisher", "./music/fisher.mp3");
k.loadSound("domdolla", "./music/domdolla.mp3");
k.loadSound("porter", "./music/porter.mp3");
k.loadSound("basstripper", "./music/basstripper.mp3");
k.loadSound("shelter", "./music/shelter.mp3");
k.loadSound("sadmachine", "./music/sadmachine.mp3");
k.loadSound("somethingcomforting", "./music/somethingcomforting.mp3");

const musicTracks =  ["somethingcomforting", "sadmachine", "porter", "shelter"];


//player
const PLAYER_SPEED = 320;
let BULLET_SPEED = 800;
//gun
const GUN_PICKUP_RANGE = 100;
const GUN_PICKUP_TIME = 5;
//sprint
let sprintEnergy = 100;
const SPRINT_DEPLETION_RATE = 30;
const SPRINT_REPLENISH_RATE = 20;
//enemies
const ENEMY_SPAWN_RATE = 1;
const INITIAL_ENEMIES = 10;
const HEALTH_PACK_CHANCE = 0.01;
const STAMINA_PACK_CHANCE = 0.05;
const AMMO_DROP_CHANCE = 0.1;

//MUSIC_VOLUME
const MUSIC_VOLUME = 0.03;

//sound
const GUN_SOUND_VOLUME = 0.2

// let MUSIC_VOLUME = document.getElementById('musicVolume').value;
// let GUN_SOUND_VOLUME = document.getElementById('gunSoundVolume').value;

// document.getElementById('musicVolume').addEventListener('input', function() {
//   updateMusicVolume(parseFloat(this.value));
// });


// document.getElementById('gunSoundVolume').addEventListener('input', function() {
//     GUN_SOUND_VOLUME = this.value;
// });

// function updateMusicVolume(newVolume) {
//   MUSIC_VOLUME = newVolume;
//   if (currentMusic) {
//       currentMusic.volume(MUSIC_VOLUME);
//   }
// }

//enemies
const ENEMY_HEALTH = {
  ghosty: 6, // Easiest enemy, suggesting lowest health
  bag: 8, // Light armor enemy, medium speed, moderate health
  bobo: 10, // Medium armor enemy, medium speed, higher health
  dino: 10, // Medium armor enemy, high speed, higher health
  btfly: 7, // Light armor enemy, very fast speed, lower health
  sword: 9, // Melee enemy, suggesting moderate health due to direct engagement
  gigagantrum: 13, // Heavy armor enemy, slow speed, high health
  mark: 15, // Heavy armor, medium speed, high hp, suggesting the highest health
};

const ENEMY_SPEED = {
  ghosty: 100, // Easiest enemy, slow speed
  bag: 200, // Light armor enemy, medium speed
  bobo: 200, // Medium armor enemy, medium speed
  dino: 300, // Medium armor enemy, high speed
  btfly: 500, // Light armor enemy, very fast speed
  sword: 250, // Melee enemy, fast speed
  gigagantrum: 80, // Heavy armor enemy, slow speed
  mark: 150, // Heavy armor, medium speed
};

const ENEMY_SPAWN_CHANCES = {
  ghosty: 0.8, // Easiest enemy, suggesting higher spawn chance
  bag: 0.3, // Light armor enemy, medium spawn chance
  bobo: 0.25, // Medium armor enemy, medium spawn chance
  dino: 0.2, // Medium armor enemy, lower spawn chance due to high speed
  btfly: 0.5, // Light armor enemy, very fast speed, higher spawn chance
  sword: 0.4, // Melee enemy, moderate spawn chance
  gigagantrum: 0.1, // Heavy armor enemy, low spawn chance
  mark: 0.05, // Heavy armor, medium speed, high hp, lowest spawn chance due to difficulty
};

const ENEMY_ATTACK_SPEED = {
  ghosty: 1, // Easiest enemy, suggesting slower attack speed
  bag: 1.2, // Light armor enemy, medium attack speed
  bobo: 1.4, // Medium armor enemy, medium attack speed
  dino: 1.6, // Medium armor enemy, high attack speed
  btfly: 2.5, // Light armor enemy, very fast speed, highest attack speed
  sword: 1.0, // Melee enemy, suggesting attack speed is moderate due to need for delay in collision damage
  gigagantrum: 0.8, // Heavy armor enemy, slow speed, slower attack speed
  mark: 1.2, // Heavy armor, medium speed, suggesting a moderate attack speed despite high health
};

const enemyTypes = [
  "ghosty",
  "gigagantrum",
  "bag",
  "bobo",
  "dino",
  "btfly",
  "mark",
  "sword",
];
const enemyBullets = [
  "egg",
  "meat",
  "lightening",
  "pineapple",
  "mushroom",
  "apple",
  "k",
  "egg_crack",
  "grape",
  "watermelon",
  "moon",
  "portal",
  "heart",
  "sun",
];

const player = k.add([
  k.pos(120, 80),
  k.sprite("bean"),
  k.area(),
  k.anchor("center"),
  k.health(100),
  k.body(),
]);

// enemies

// ghosty: easiest enemy, slow speed;
// bag: heavy armor enemy, slow speed
// bobo: light armor enemy, medium speed
// dino: medium armor enemy, medium speed
// btfly: medium armor enemy, high speed
// sword: light armor enemy, very fast speed
// gigantrum: heavy armor, medium speed, high hp
// mark: melee enemy, fast speed, onCollide should be used with a delay to inflict damage

const roundEnemies = {
  // 1: ["ghosty", "bag", "bobo", "dino", "btfly", "sword", "gigagantrum", "mark"],
  1: ["ghosty"],
  2: ["ghosty"],
  3: ["ghosty", "bag"],
  4: ["ghosty", "bag"],
  5: ["ghosty", "bag", "bobo"],
  6: ["ghosty", "bag", "bobo"],
  7: ["ghosty", "bag", "bobo"],
  8: ["bag", "bobo", "gigagantrum"],
  9: ["bag", "bobo", "gigagantrum"],
  10: ["bag", "bobo", "dino"],
  11: ["bag", "bobo", "dino"],
  12: ["bag", "bobo", "dino"],
  13: ["sword"],
  14: ["sword", "ghosty", "bag"],
  15: ["btfly", "bag", "bobo"],
  16: ["mark", "btfly", "sword"],
  17: ["sword", "btfly", "ghosty"],
  18: ["mark", "btfly", "sword"],
  19: ["mark", "btfly", "sword", "ghosty", "bag"],
  20: ["mark", "btfly", "sword", "ghosty", "bag"],
};

const roundDifficulty = {
  1: { spawnRate: 1, initialEnemies: 10, monstersToKill: 10, spawnDivider:2 },
  2: { spawnRate: 1, initialEnemies: 12, monstersToKill: 20, spawnDivider:2 },
  3: { spawnRate: 1, initialEnemies: 14, monstersToKill: 30, spawnDivider:2 },
  4: { spawnRate: 1, initialEnemies: 16, monstersToKill: 40, spawnDivider:2 },
  5: { spawnRate: 1, initialEnemies: 18, monstersToKill: 50, spawnDivider:2 },
  6: { spawnRate: 1, initialEnemies: 20, monstersToKill: 60, spawnDivider:2 },
  7: { spawnRate: 1., initialEnemies: 22, monstersToKill: 70, spawnDivider:2 },
  8: { spawnRate: 0.8, initialEnemies: 24, monstersToKill: 80, spawnDivider:2 },
  9: { spawnRate: 0.8, initialEnemies: 26, monstersToKill: 90, spawnDivider:3 },
  10: { spawnRate: 0.6, initialEnemies: 28, monstersToKill: 100, spawnDivider:4 },
  11: { spawnRate: 0.6, initialEnemies: 30, monstersToKill: 110, spawnDivider:4 },
  12: { spawnRate: 0.6, initialEnemies: 32, monstersToKill: 120, spawnDivider:4 },
  13: { spawnRate: 0.4, initialEnemies: 34, monstersToKill: 130, spawnDivider:4 },
  14: { spawnRate: 0.2, initialEnemies: 36, monstersToKill: 140, spawnDivider:4 },
  15: { spawnRate: 0.2, initialEnemies: 38, monstersToKill: 150, spawnDivider:5 },
  16: { spawnRate: 0.2, initialEnemies: 40, monstersToKill: 160, spawnDivider:5 },
  17: { spawnRate: 0.2, initialEnemies: 42, monstersToKill: 170, spawnDivider:6 },
  18: { spawnRate: 0.2, initialEnemies: 44, monstersToKill: 180, spawnDivider:6 },
  19: { spawnRate: 0.2, initialEnemies: 46, monstersToKill: 190, spawnDivider:6 },
  20: { spawnRate: 0.2, initialEnemies: 48, monstersToKill: 200, spawnDivider:6 },
};

let monstersKilled = 0;
let currentRound = 1;
let isRoundInProgress = false;
let enemySpawnLoop;
let isSprinting = false;
let hasGun = true;
let gunPickupText = null;
let gunSprite = null;
let gunPickupTimer = null;
let playerCoins = 0;
let isShooting = false;
let isSpacebarShooting = false;
let fireTimer = 0;
let isGameStarted = false;
let enemySpawnLoopRunning = false;
let isCountdownStarted = false;
let isTransitioningToNextRound = false;
let isReloading = false;
let currentMusic;
let lastLMGSoundTime = 0;
let lastAK47SoundTime = 0;
const soundDelay = 100; // milliseconds


const guns = {
  pistol: {
    name: "Pistol",
    damage: 1,
    fireRate: 0.5,
    bulletSprite: "meat",
    cost: 0,
    magSize: 10,
    totalAmmo: 3000,
    reloadTime: 1.5,
    sound: "pistol", 
  },
  A205: {
    name: "S-A205",
    damage: 2,
    fireRate: 0.5,
    bulletSprite: "meat",
    cost: 50,
    magSize: 20,
    totalAmmo: 200,
    reloadTime: 2,
    sound: "a205", 
  },
  MP40: {
    name: "MP40",
    damage: 2,
    fireRate: 0.3,
    bulletSprite: "meat",
    cost: 70,
    magSize: 30,
    totalAmmo: 210,
    reloadTime: 2,
    sound: "mp40", 
  },
  M1Garand: {
    name: "M1 Garand",
    damage: 10,
    fireRate: 0.5,
    bulletSprite: "meat",
    cost: 100,
    magSize: 8,
    totalAmmo: 80,
    reloadTime: 2,
    sound: "m1garand", 
  },
  DoubleBarrel: {
    name: "Double Barrel",
    damage: 6,
    fireRate: 0.3,
    bulletSpread: 4,
    bulletSprite: "meat",
    cost: 150,
    magSize: 2,
    totalAmmo: 60,
    reloadTime: 1,
    sound: "doublebarrel", 
  },
  RocketLauncher: {
    name: "Rocket Launcher",
    damage: 10,
    fireRate: 1.5,
    bulletSprite: "kaboom",
    cost: 200,
    sound: "rpg", 
    magSize: 1,
    totalAmmo: 10,
    reloadTime: 5,
    special: () => {
      const dir = k.mousePos().sub(player.pos).unit();
      const BULLET_SPEED = 600;
      const rocket = k.add([
        k.pos(player.pos),
        k.move(dir, BULLET_SPEED),
        k.sprite("meat"),
        k.area(),
        k.scale(3),
        k.offscreen({ destroy: true }),
        k.anchor("center"),
        "playerBullet",
        {
          damage: 50,
          explode: () => {
            k.destroy(rocket);
            k.addKaboom(rocket.pos);
            // k.play("rpg", {
            //   volume: 0.5,
            //   detune: -1200,
            // });
            const enemies = k.get("enemy");
            enemies.forEach((enemy) => {
              if (enemy.pos.dist(rocket.pos) <= 300) {
                enemy.hurt(50);
              }
            });
          },
        },
      ]);

      rocket.onCollide("enemy", (enemy) => {
        rocket.explode();
      });
    },
  },

  // Uzi: {
  //   name: "Uzi",
  //   damage: 2,
  //   fireRate: 0.05,
  //   bulletSprite: "meat",
  //   cost: 60,
  //   magSize: 30,
  //   totalAmmo: 300,
  //   reloadTime: 2,w
  // },
  // FNScar: {
  //   name: "FN SCAR",
  //   damage: 4,
  //   fireRate: 0.2,
  //   bulletSprite: "meat",
  //   cost: 50,
  //   magSize: 20,
  //   totalAmmo: 200,
  //   reloadTime: 2,
  // },
  // Derringer: {
  //   name: "Derringer",
  //   damage: 8,
  //   fireRate: 1,
  //   bulletSprite: "meat",
  //   cost: 25,
  //   magSize: 2,
  //   totalAmmo: 20,
  //   reloadTime: 1,
  // },
  // Blunderbuss: {
  //   name: "Blunderbuss",
  //   damage: 4,
  //   fireRate: 0.4,
  //   bulletSpread: 5,
  //   bulletSprite: "meat",
  //   cost: 35,
  //   magSize: 1,
  //   totalAmmo: 10,
  //   reloadTime: 2,
  // },
  AK47: {
    name: "AK-47",
    damage: 4,
    fireRate: 0.15,
    bulletSprite: "meat",
    cost: 250,
    magSize: 30,
    totalAmmo: 300,
    reloadTime: 2,
    sound: "ak47", 
  },
  LMG: {
    name: "Light Machine Gun",
    damage: 3,
    fireRate: 0.05,
    bulletSprite: "meat",
    cost: 400,
    magSize: 100,
    totalAmmo: 600,
    reloadTime: 2,
    sound: "lmg", 
  },
  AA12: {
    name: "AA-12",
    damage: 2,
    sound: "aa12", 
    fireRate: 0.2,
    bulletSprite: "meat",
    cost: 400,
    magSize: 10,
    totalAmmo: 100,
    reloadTime: 2,
    bulletSpread: 8,
    special: () => {
      const dir = k.mousePos().sub(player.pos).unit();
      const CONE_ANGLE = Math.PI / 4;
      for (let i = 0; i < 8; i++) {
        const angle = CONE_ANGLE * (i / 7) - CONE_ANGLE / 2; 
        const spreadX = Math.cos(angle);
        const spreadY = Math.sin(angle);
        const spreadDir = k.vec2(
          dir.x * spreadX - dir.y * spreadY,
          dir.x * spreadY + dir.y * spreadX
        );

        k.add([
          k.pos(player.pos),
          k.move(spreadDir, BULLET_SPEED),
          k.sprite("meat"),
          k.area(),
          k.offscreen({ destroy: true }),
          k.anchor("center"),
          "playerBullet",
          { damage: 2 }, 
        ]);
      }
    },
  },
};




let currentGun = guns.pistol
let currentMag = currentGun.magSize;
let currentTotalAmmo = currentGun.totalAmmo;


const coinText = k.add([
  k.text(`Coins: ${playerCoins}`),
  k.pos(20, k.height() - 220),
  k.color(255, 255, 255),
  k.scale(0.5),
]);

const healthBar = k.add([
  k.rect(200, 20),
  k.pos(20, k.height() - 100),
  k.color(255, 0, 0),
  k.outline(2, 255, 255, 255),
]);

const healthText = k.add([
  k.text("Health"),
  k.pos(20, k.height() - 150),
  k.color(255, 255, 255),
]);

const sprintBar = k.add([
  k.rect(200, 10),
  k.pos(20, k.height() - 30),
  k.color(0, 0, 255),
  k.outline(2, 255, 255, 255),
]);

const sprintText = k.add([
  k.text("Stamina"),
  k.pos(20, k.height() - 70),
  k.color(255, 255, 255),
]);

function getRandomEnemyType() {
  const enemyTypes = roundEnemies[currentRound];
  return k.choose(enemyTypes);
}

function spawnEnemy() {
  let monstersToSpawnDuringRound = roundDifficulty[currentRound].monstersToKill;
  let monstersSpawned = 0;

  // the num of monsters spawned should be up to the monsters to spawn during the round
  if (monstersSpawned < monstersToSpawnDuringRound) {
    if (monstersKilled < monstersToSpawnDuringRound) {
      console.log("Spawning enemy");
      const enemyType = getRandomEnemyType();
      const enemy = k.add([
        k.sprite(enemyType),
        k.pos(k.rand(0, k.width()), k.rand(0, k.height())),
        k.anchor("center"),
        k.area(),
        k.state("move", ["idle", "attack", "move"]),
        k.health(ENEMY_HEALTH[enemyType]),
        "enemy",
        { bulletSprite: k.choose(enemyBullets) },
      ]);

      monstersSpawned++;

      enemy.onStateEnter("idle", async () => {
        if (enemy.exists()) {
          await k.wait(k.rand(0.5, 1.5));
          enemy.enterState("attack");
        }
      });

      enemy.onStateEnter("attack", async () => {
        if (enemy.exists() && player.exists()) {
          const dir = player.pos.sub(enemy.pos).unit();
          k.add([
            k.pos(enemy.pos),
            k.move(dir, BULLET_SPEED),
            k.sprite(enemy.bulletSprite),
            k.area(),
            k.offscreen({ destroy: true }),
            k.anchor("center"),
            "enemyBullet",
          ]);
        }
        if (enemy.exists()) {
          await k.wait(ENEMY_ATTACK_SPEED[enemyType]);
          enemy.enterState("move");
        }
      });

      enemy.onStateEnter("move", async () => {
        if (enemy.exists()) {
          await k.wait(k.rand(1.5, 3));
          enemy.enterState("idle");
        }
      });

      enemy.onStateUpdate("move", () => {
        if (enemy.exists() && player.exists()) {
          const dir = player.pos.sub(enemy.pos).unit();
          enemy.move(dir.scale(ENEMY_SPEED[enemyType]));
        }
      });

      enemy.on("death", () => {
        k.destroy(enemy);
        k.addKaboom(enemy.pos);
        if (k.rand(0, 1) < HEALTH_PACK_CHANCE) {
          spawnHealthPack(enemy.pos);
        }
        if (k.rand(0, 1) < STAMINA_PACK_CHANCE) {
          spawnStaminaPack(enemy.pos);
        }
        if (k.rand(0, 1) < AMMO_DROP_CHANCE) {
          spawnAmmoDrop(enemy.pos);
        }
        const coinGain = Math.floor(k.rand(1, 7));
        playerCoins += coinGain;
        coinText.text = `Coins: ${playerCoins}`;
        const coinUI = k.add([
          k.text(`+${coinGain} coins`),
          k.pos(enemy.pos.x, enemy.pos.y - 20),
          k.anchor("center"),
          k.color(255, 255, 255),
          k.lifespan(1),
        ]);
        monstersKilled++;
        monsterCountText.text = `Monsters killed: ${monstersKilled} / ${roundDifficulty[currentRound].monstersToKill}`;
        if (monstersKilled >= roundDifficulty[currentRound].monstersToKill) {
          checkRoundCompletion();
        }
      });
    }
  }
}

function spawnStaminaPack(pos) {
  const staminaPack = k.add([
    k.sprite("jumpy"),
    k.pos(pos),
    k.anchor("center"),
    "staminaPack",
  ]);

  const staminaPackText = k.add([
    k.text(
      `Press SPACE to pick up the stamina pack (${GUN_PICKUP_TIME.toFixed(
        1
      )}s)`,
      {
        size: 12,
      }
    ),
    k.pos(pos.x, pos.y - 20),
    k.anchor("center"),
    k.color(255, 255, 255),
  ]);

  let timeRemaining = GUN_PICKUP_TIME;
  const staminaPackTimer = k.loop(0.1, () => {
    timeRemaining -= 0.1;
    staminaPackText.text = `Press SPACE to pick up the stamina pack (${timeRemaining.toFixed(
      1
    )}s)`;
    if (timeRemaining <= 0) {
      k.destroy(staminaPack);
      k.destroy(staminaPackText);
      staminaPackTimer.cancel();
    }
  });

  k.onKeyPress("space", () => {
    if (player.pos.dist(staminaPack.pos) <= GUN_PICKUP_RANGE) {
      k.destroy(staminaPack);
      k.destroy(staminaPackText);
      staminaPackTimer.cancel();
      sprintEnergy = 100;
      updateSprintBar();
      const ui = k.add([
        k.text("Your stamina has been restored!"),
        k.pos(k.width() / 2, k.height() - 50),
        k.anchor("center"),
        k.lifespan(2),
      ]);
    }
  });
}

function spawnAmmoDrop(pos) {
  const ammoDrop = k.add([
    k.sprite("ammo"),
    k.pos(pos),
    k.anchor("center"),
    "ammoDrop",
  ]);

  const ammoDropText = k.add([
    k.text(`Press SPACE to pick up ammo (${GUN_PICKUP_TIME.toFixed(1)}s)`, {
      size: 12,
    }),
    k.pos(pos.x, pos.y - 20),
    k.anchor("center"),
    k.color(255, 255, 255),
  ]);

  let timeRemaining = GUN_PICKUP_TIME;
  const ammoDropTimer = k.loop(0.1, () => {
    timeRemaining -= 0.1;
    ammoDropText.text = `Press SPACE to pick up ammo (${timeRemaining.toFixed(
      1
    )}s)`;
    if (timeRemaining <= 0) {
      k.destroy(ammoDrop);
      k.destroy(ammoDropText);
      ammoDropTimer.cancel();
    }
  });

  k.onKeyPress("space", () => {
    if (player.pos.dist(ammoDrop.pos) <= GUN_PICKUP_RANGE) {
      k.destroy(ammoDrop);
      k.destroy(ammoDropText);
      ammoDropTimer.cancel();
      currentTotalAmmo = currentGun.totalAmmo;
      currentMag = currentGun.magSize;
      updateAmmoText();
      const ui = k.add([
        k.text("Ammo refilled!"),
        k.pos(k.width() / 2, k.height() - 50),
        k.anchor("center"),
        k.lifespan(2),
      ]);
    }
  });
}

function spawnHealthPack(pos) {
  const healthPack = k.add([
    k.sprite("health"),
    k.pos(pos),
    k.anchor("center"),
    "healthPack",
  ]);

  const healthPackText = k.add([
    k.text(
      `Press SPACE to pick up the health pack (${GUN_PICKUP_TIME.toFixed(1)}s)`,
      {
        size: 12,
      }
    ),
    k.pos(pos.x, pos.y - 20),
    k.anchor("center"),
    k.color(255, 255, 255),
  ]);

  let timeRemaining = GUN_PICKUP_TIME;
  const healthPackTimer = k.loop(0.1, () => {
    timeRemaining -= 0.1;
    healthPackText.text = `Press SPACE to pick up the health pack (${timeRemaining.toFixed(
      1
    )}s)`;
    if (timeRemaining <= 0) {
      k.destroy(healthPack);
      k.destroy(healthPackText);
      healthPackTimer.cancel();
    }
  });

  k.onKeyPress("space", () => {
    if (player.pos.dist(healthPack.pos) <= GUN_PICKUP_RANGE) {
      k.destroy(healthPack);
      k.destroy(healthPackText);
      healthPackTimer.cancel();
      const healAmount = 100 - player.hp();
      player.heal(healAmount);
      updateHealthBar();
      const ui = k.add([
        k.text("You picked up the health pack!"),
        k.pos(k.width() / 2, k.height() - 50),
        k.anchor("center"),
        k.lifespan(2),
      ]);
    }
  });
}

k.onKeyPress("space", () => {
  isSpacebarShooting = true;
  shoot();
});

k.onKeyRelease("space", () => {
  isSpacebarShooting = false;
});

k.onUpdate(() => {
  if ((isShooting || isSpacebarShooting) && fireTimer <= 0) {
    shoot();
  }

  if (fireTimer > 0) {
    fireTimer -= k.dt();
  }
});

k.onKeyDown("a", () => {
  player.move(-PLAYER_SPEED * (isSprinting ? 1.5 : 1), 0);
});

k.onKeyDown("d", () => {
  player.move(PLAYER_SPEED * (isSprinting ? 1.5 : 1), 0);
});

k.onKeyDown("w", () => {
  player.move(0, -PLAYER_SPEED * (isSprinting ? 1.5 : 1));
});

k.onKeyDown("s", () => {
  player.move(0, PLAYER_SPEED * (isSprinting ? 1.5 : 1));
});

k.onKeyPress("shift", () => {
  if (sprintEnergy > 0) {
    isSprinting = true;
  }
});

k.onKeyRelease("shift", () => {
  isSprinting = false;
});

k.onUpdate(() => {
  if (isSprinting && sprintEnergy > 0) {
    sprintEnergy -= SPRINT_DEPLETION_RATE * k.dt();
    if (sprintEnergy < 0) {
      sprintEnergy = 0;
      isSprinting = false;
    }
  } else if (!isSprinting && sprintEnergy < 100) {
    sprintEnergy += SPRINT_REPLENISH_RATE * k.dt();
    if (sprintEnergy > 100) {
      sprintEnergy = 100;
    }
  }
  updateSprintBar();
});

function updateHealthBar() {
  const hpRatio = player.hp() / 100;
  healthBar.width = 200 * hpRatio;
}

function updateSprintBar() {
  const sprintRatio = sprintEnergy / 100;
  sprintBar.width = 200 * sprintRatio;
  sprintBar.pos.x = 20;
}

function shoot() {
  if (fireTimer <= 0 && !isReloading && currentMag > 0) {
    const dir = k.mousePos().sub(player.pos).unit();
    const currentTime = Date.now();

    if (currentGun.name === "Light Machine Gun" && currentTime - lastLMGSoundTime >= soundDelay) {
      k.play("lmg", { volume: GUN_SOUND_VOLUME });
      lastLMGSoundTime = currentTime;
    } else if (currentGun.name === "AK-47" && currentTime - lastAK47SoundTime >= soundDelay) {
      k.play("ak47", { volume: GUN_SOUND_VOLUME });
      lastAK47SoundTime = currentTime;
    } else if (currentGun.name !== "Light Machine Gun" && currentGun.name !== "AK-47") {
      k.play(currentGun.sound, { volume: GUN_SOUND_VOLUME });
    }


    if (currentGun.special) {
      currentGun.special();
    } else {
      for (let i = 0; i < (currentGun.bulletSpread || 1); i++) {
        const angle =
          (Math.PI / 6) * (i - ((currentGun.bulletSpread || 1) - 1) / 2);
        const spreadX = Math.cos(angle);
        const spreadY = Math.sin(angle);
        const spreadDir = k.vec2(
          dir.x * spreadX - dir.y * spreadY,
          dir.x * spreadY + dir.y * spreadX
        );

        k.add([
          k.pos(player.pos),
          k.move(spreadDir, BULLET_SPEED),
          k.sprite(currentGun.bulletSprite),
          k.area(),
          k.offscreen({ destroy: true }),
          k.anchor("center"),
          "playerBullet",
          { damage: currentGun.damage },
        ]);
      }
    }

    currentMag--;
    updateAmmoText();

    if (currentMag === 0 && currentTotalAmmo > 0) {
      reload();
    }

    fireTimer = currentGun.fireRate;
  }
}

function reload() {
  if (!isReloading && currentTotalAmmo > 0) {
    isReloading = true;
    ammoText.text = `${currentGun.name} Reloading...`;

    if (currentGun === guns.DoubleBarrel || currentGun === guns.AA12) {
      k.play("shotgunreload", {
        volume: 0.5, 
      });
    } else {
      k.play("regularreload", {
        volume: 0.5, 
      });
    }

    k.wait(currentGun.reloadTime, () => {
      const reloadAmount = Math.min(currentGun.magSize, currentTotalAmmo);
      currentMag = reloadAmount;
      currentTotalAmmo -= reloadAmount;
      updateAmmoText();
      isReloading = false;
    });
  }
}

k.onKeyPress("r", () => {
  if (!isReloading && currentMag < currentGun.magSize && currentTotalAmmo > 0) {
    reload();
  }
});

function updateAmmoText() {
  ammoText.text = `${currentGun.name} ${currentMag}/${currentTotalAmmo}`;
}

k.onUpdate(() => {
  ammoText.pos.x = player.pos.x;
  ammoText.pos.y = player.pos.y - 40;
});

k.onMousePress(() => {
  isShooting = true;
  shoot();
});

k.onMouseRelease(() => {
  isShooting = false;
});

k.onUpdate(() => {
  if (isShooting && fireTimer <= 0) {
    shoot();
  }

  if (fireTimer > 0) {
    fireTimer -= k.dt();
  }
});

player.onCollide("enemyBullet", (egg) => {
  k.destroy(egg);
  player.hurt(10);
  updateHealthBar();
  if (player.hp() <= 0) {
    k.destroy(player);
    k.addKaboom(player.pos);
    k.go("gameOver");
  }
});

player.onCollide("gun", (gun) => {
  k.destroy(gun);
  hasGun = true;
  const ui = k.add([
    k.text("You picked up the gun!"),
    k.pos(k.width() / 2, k.height() - 50),
    k.anchor("center"),
    k.lifespan(2),
  ]);
});

k.onCollide("enemy", "playerBullet", (enemy, bullet) => {
  k.destroy(bullet);
  enemy.hurt(bullet.damage);
  if (enemy.hp() <= 0) {
    k.destroy(enemy);
    k.addKaboom(enemy.pos);
  }
  checkRoundCompletion();
});

k.onCollide("enemy", "kaboom", (enemy) => {
  enemy.hurt(50);
  if (enemy.hp() <= 0) {
    k.destroy(enemy);
  }
  checkRoundCompletion();
});

k.scene("gameOver", () => {
  k.add([
    k.text("Game Over"),
    k.pos(k.width() / 2, k.height() / 2),
    k.anchor("center"),
    k.scale(2),
  ]);
  k.onKeyPress("space", () => {
    currentRound = 1;
    isRoundInProgress = false;
    startRound(currentRound);
    k.go("main");
  });
});

const lightMachineGunButton = k.add([
  k.pos(150, 80),
  k.sprite("MP40"),
  k.area(),
  k.scale(3),
  k.anchor("center"),
  "shopButton",
]);

const lightMachineGunText = k.add([
  k.pos(150, 150),
  k.text("10 coins", { size: 16 }),
  k.anchor("center"),
  k.color(0, 0, 0),
]);

const lightMachineGunSubText = k.add([
  k.pos(150, 170),
  k.text("(Increased fire rate)", { size: 12 }),
  k.anchor("center"),
  k.color(0, 0, 0),
]);

const sniperRifleButton = k.add([
  k.pos(400, 80),
  k.sprite("M1Garand"),
  k.area(),
  k.scale(3),
  k.anchor("center"),
  "shopButton",
]);

const sniperRifleText = k.add([
  k.pos(400, 150),
  k.text("20 coins", { size: 16 }),
  k.anchor("center"),
  k.color(0, 0, 0),
]);

const sniperRifleSubText = k.add([
  k.pos(400, 170),
  k.text("(Deals 5 damage)", { size: 12 }),
  k.anchor("center"),
  k.color(0, 0, 0),
]);

const shotgunButton = k.add([
  k.pos(650, 80),
  k.sprite("DoubleBarrel"),
  k.area(),
  k.scale(3),
  k.anchor("center"),
  "shopButton",
]);

const shotgunText = k.add([
  k.pos(650, 150),
  k.text("15 coins", { size: 16 }),
  k.anchor("center"),
  k.color(0, 0, 0),
]);

const shotgunSubText = k.add([
  k.pos(650, 170),
  k.text("(Spread shot)", { size: 12 }),
  k.anchor("center"),
  k.color(0, 0, 0),
]);

const ITEMS_PER_ROW = 5;
const ITEM_BUTTON_SCALE = 3;
const ITEM_BUTTON_SPACING = 200;

const shopContainer = k.add([
  k.pos(0, 20),
  k.rect(k.width(), 230),
  k.color(200, 200, 200),
]);

const itemButtons = [];
const itemTexts = [];
const itemSubTexts = [];

let xOffset = (k.width() - (ITEMS_PER_ROW - 1) * ITEM_BUTTON_SPACING) / 2;
let yOffset = 60;
let rowCount = 0;

const healthPackButton = k.add([
  k.pos(xOffset, yOffset),
  k.sprite("health"),
  k.area(),
  k.scale(ITEM_BUTTON_SCALE),
  k.anchor("center"),
  "shopButton",
]);
itemButtons.push(healthPackButton);

const healthPackText = k.add([
  k.pos(xOffset, yOffset + 40),
  k.text("50 coins", { size: 14 }),
  k.anchor("center"),
  k.color(0, 0, 0),
]);
itemTexts.push(healthPackText);

const healthPackSubText = k.add([
  k.pos(xOffset, yOffset + 60),
  k.text("(Refills health to 100)", { size: 12 }),
  k.anchor("center"),
  k.color(0, 0, 0),
]);
itemSubTexts.push(healthPackSubText);

rowCount++;
xOffset += ITEM_BUTTON_SPACING;

for (const gunName in guns) {
  if (gunName !== "pistol") {
    const gun = guns[gunName];
    const button = k.add([
      k.pos(xOffset, yOffset),
      k.sprite(gunName),
      k.area(),
      k.scale(
        gunName === "LMG"
          ? ITEM_BUTTON_SCALE * 0.2
          : gunName === "A205"
          ? ITEM_BUTTON_SCALE * 0.2
          : gunName === "AA12"
          ? ITEM_BUTTON_SCALE * 0.6
          : ITEM_BUTTON_SCALE
      ),
      k.anchor("center"),
      "shopButton",
    ]);
    itemButtons.push(button);

    const text = k.add([
      k.pos(xOffset, yOffset + 40),
      k.text(`${gun.cost} coins`, { size: 14 }),
      k.anchor("center"),
      k.color(0, 0, 0),
    ]);
    itemTexts.push(text);

    const subText = k.add([
      k.pos(xOffset, yOffset + 60),
      k.text(`(${gunName})`, { size: 12 }),
      k.anchor("center"),
      k.color(0, 0, 0),
    ]);
    itemSubTexts.push(subText);

    rowCount++;
    if (rowCount === ITEMS_PER_ROW) {
      rowCount = 0;
      xOffset = (k.width() - (ITEMS_PER_ROW - 1) * ITEM_BUTTON_SPACING) / 2;
      yOffset += 100;
    } else {
      xOffset += ITEM_BUTTON_SPACING;
    }
  }
}
k.onClick("shopButton", (button) => {
  if (button === healthPackButton) {
    if (playerCoins >= 50) {
      playerCoins -= 50;
      coinText.text = `Coins: ${playerCoins}`;

      const healAmount = Math.min(100 - player.hp(), 100);
      player.heal(healAmount);
      updateHealthBar();

      const purchaseText = k.add([
        k.text("You bought a health pack!"),
        k.pos(k.width() / 2, k.height() - 100),
        k.anchor("center"),
        k.color(255, 255, 255),
        k.lifespan(2),
      ]);
    } else {
      const notEnoughCoinsText = k.add([
        k.text("You don't have enough coins!"),
        k.pos(k.width() / 2, k.height() - 100),
        k.anchor("center"),
        k.color(255, 255, 255),
        k.lifespan(2),
      ]);
    }
  } else {
    const index = itemButtons.indexOf(button);
    if (index !== -1) {
      const gunName = Object.keys(guns)[index];
      const gun = guns[gunName];
      if (playerCoins >= gun.cost) {
        playerCoins -= gun.cost;
        coinText.text = `Coins: ${playerCoins}`;

        if (currentGun === gun) {
          currentTotalAmmo = gun.totalAmmo;
          currentMag = gun.magSize;
          updateAmmoText();
          const refillText = k.add([
            k.text(`Ammo refilled for ${gunName}!`),
            k.pos(k.width() / 2, k.height() - 100),
            k.anchor("center"),
            k.color(255, 255, 255),
            k.lifespan(2),
          ]);
        } else {
          currentGun = gun;
          currentTotalAmmo = gun.totalAmmo;
          currentMag = gun.magSize;
          updateAmmoText();
          const purchaseText = k.add([
            k.text(`You bought the ${gunName}!`),
            k.pos(k.width() / 2, k.height() - 100),
            k.anchor("center"),
            k.color(255, 255, 255),
            k.lifespan(2),
          ]);
        }
      } else {
        const notEnoughCoinsText = k.add([
          k.text("You don't have enough coins!"),
          k.pos(k.width() / 2, k.height() - 100),
          k.anchor("center"),
          k.color(255, 255, 255),
          k.lifespan(2),
        ]);
      }
    }
  }
});

const gunText = k.add([
  k.text(`Current Gun: ${currentGun.name}`),
  k.pos(20, k.height() - 300),
  k.color(255, 255, 255),
  k.scale(0.5),
]);

function updateGunText() {
  gunText.text = `Current Gun: ${
    currentGun === guns.pistol ? "Pistol" : currentGun.name
  }`;
}

const timerText = k.add([
  k.text("Time: 0:00"),
  k.pos(20, k.height() - 350),
  k.color(255, 255, 255),
  k.scale(0.5),
]);

function updateTimer() {
  const elapsedTime = Date.now() - startTime;
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  timerText.text = `Time: ${minutes}:${seconds.toString().padStart(2, "0")}`;
}

k.onUpdate(() => {
  updateTimer();
});

const countdownText = k.add([
  k.text(""),
  k.pos(k.width() / 2, k.height() / 2),
  k.anchor("center"),
  k.color(255, 255, 255),
  k.scale(2),
]);

const roundText = k.add([
  k.text(`Round: ${currentRound}`),
  k.pos(20, k.height() - 400),
  k.color(255, 255, 255),
  k.scale(0.5),
]);

const roundCompletionText = k.add([
  k.text(""),
  k.pos(k.width() / 2, k.height() / 2),
  k.anchor("center"),
  k.color(255, 255, 255),
  k.scale(0.5),
]);

function startCountdown(callback) {
  let count = 5;
  countdownText.text = count;

  const countdownInterval = setInterval(() => {
    count--;
    countdownText.text = count;

    if (count <= 0) {
      clearInterval(countdownInterval);
      countdownText.text = "";
      callback();
    }
  }, 1000);
}

function startRound(round) {
  currentRound = round;
  roundText.text = `Round: ${currentRound}`;
  isRoundInProgress = true;
  monstersKilled = 0;
  monsterCountText.text = `Monsters killed: ${monstersKilled} / ${roundDifficulty[currentRound].monstersToKill}`;

  if (currentRound === 1) {
    startTime = Date.now(); 
  }

  const spawnRateMs = roundDifficulty[round].spawnRate * 1000;

  k.get("enemy").forEach((enemy) => {
    k.destroy(enemy);
  });

  if (isGameStarted) {
    startCountdown(() => {
    
      const totalMonstersToSpawn = roundDifficulty[currentRound].monstersToKill;
      const initialMonstersToSpawn = Math.floor(totalMonstersToSpawn / roundDifficulty[currentRound].spawnDivider);
      for (let i = 0; i < initialMonstersToSpawn; i++) {
        spawnEnemy();
      }


      const remainingMonstersToSpawn = totalMonstersToSpawn - initialMonstersToSpawn;
      for (let i = 0; i < remainingMonstersToSpawn; i++) {
        setTimeout(() => {
          spawnEnemy();
        }, i * spawnRateMs);
      }
    });
  }
}


function checkRoundCompletion() {
  if (isRoundInProgress && monstersKilled >= roundDifficulty[currentRound].monstersToKill) {
    isRoundInProgress = false;
    enemySpawnLoopRunning = false;

    if (enemySpawnLoop && enemySpawnLoop.cancel) {
      enemySpawnLoop.cancel();
    }

    k.get("enemy").forEach((enemy) => {
      k.destroy(enemy);
    });

    const finalRound = Object.keys(roundDifficulty).length;
    if (currentRound < finalRound) {
      if (!isTransitioningToNextRound) {
        isTransitioningToNextRound = true;
        roundCompletionText.text = "All enemies defeated!";
        k.wait(1, () => {
          roundCompletionText.text = "Moving onto the next round";
          let count = 5;
          const countdownInterval = setInterval(() => {
            roundCompletionText.text = `Moving onto the next round`;
            count--;

            if (count < 0) {
              clearInterval(countdownInterval);
              isTransitioningToNextRound = false;
              roundCompletionText.text = "";
              startRound(currentRound + 1);
            }
          }, 1000);
        });
      }
    } else {
      k.scene("Win", () => {
        k.add([
          k.text("Congrats! You beat my game. I didn't even know you could beat it because I didn't have time to play my own because I had finals lol", { width: k.width() - 40 }),
          k.pos(k.width() / 2, k.height() / 2),
          k.anchor("center"),
          k.color(255, 255, 255),
          k.scale(0.5),
        ]);
      });
      k.go("Win");
    }
  }
}


const monsterCountText = k.add([
  k.text("Monsters killed: 0 / 0"),
  k.pos(20, k.height() - 450),
  k.color(255, 255, 255),
  k.scale(0.5),
]);

const instructionsText = k.add([
  k.text(
    "Welcome to Last Survivor:\n\nWASD to move\nSHIFT to sprint\nClick or hold LEFTCLICK or SPACEBAR to shoot\nBuy guns and (and rebuy the same gun to refill your ammo)by CLICKING on the gun\n\nGoal: Be the last one standing."
  ),
  k.pos(k.width() / 2, k.height() / 2 - 100),
  k.anchor("center"),
  k.color(255, 255, 255),
  k.scale(0.5),
]);

const startButton = k.add([
  k.text("Click me to play"),
  k.pos(k.width() / 2, k.height() / 2 + 100),
  k.anchor("center"),
  k.color(255, 255, 255),
  k.scale(2),
  k.area(),
  k.outline(4, 0, 0, 0),
  "startButton",
]);

k.onClick("startButton", () => {
  k.destroy(instructionsText);
  k.destroy(startButton);
  isGameStarted = true;
  startTime = Date.now(); 

  const selectedMusic = k.choose(musicTracks);

  currentMusic = k.play(selectedMusic, {
    loop: true,
    volume: MUSIC_VOLUME, 
  });

  startRound(currentRound);
});
startRound(currentRound);

const ammoText = k.add([
  k.text(`${currentGun.name} ${currentMag}/${currentTotalAmmo}`),
  k.pos(player.pos.x, player.pos.y - 40),
  k.anchor("center"),
  k.color(255, 255, 255),
  k.scale(0.5),
  "ammoText",
]);

// k.onKeyPress("v", () => {
//   currentRound = Object.keys(roundDifficulty).length;
//   monstersKilled = roundDifficulty[currentRound].monstersToKill;
//   checkRoundCompletion();
// });
