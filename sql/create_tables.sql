
CREATE TABLE IF NOT EXISTS admins (
  id            SERIAL PRIMARY KEY NOT NULL,
  username      VARCHAR(50) UNIQUE NOT NULL,
  password_hash  VARCHAR(300) NOT NULL
);

CREATE TABLE IF NOT EXISTS monster_settings (
  id          SERIAL PRIMARY KEY NOT NULL,
  name        VARCHAR(100) UNIQUE NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS monsters (
  id            SERIAL PRIMARY KEY NOT NULL,
  name          VARCHAR(100) UNIQUE NOT NULL,
  attack        VARCHAR(100),
  damage        VARCHAR(50),
  piercing      INT,
  hp            INT,
  armor         INT,
  description   TEXT,
  instinct      VARCHAR(50),
  setting_id    INT REFERENCES monster_settings
);

CREATE TABLE IF NOT EXISTS monster_actions (
  id          SERIAL PRIMARY KEY NOT NULL,
  name        VARCHAR(300) NOT NULL,
  monster_id  INT NOT NULL REFERENCES monsters ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS monster_tags (
  id          SERIAL PRIMARY KEY NOT NULL,
  name        VARCHAR(100) UNIQUE NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS monster_attack_tags (
  id          SERIAL PRIMARY KEY NOT NULL,
  name        VARCHAR(100) UNIQUE NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS monster_qualities (
  id          SERIAL PRIMARY KEY NOT NULL,
  name        VARCHAR(100) NOT NULL,
  monster_id  INT NOT NULL REFERENCES monsters ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS monsters_monster_tags (
  monster_id      INT NOT NULL REFERENCES monsters ON UPDATE CASCADE ON DELETE CASCADE,
  monster_tag_id  INT NOT NULL REFERENCES monster_tags ON UPDATE CASCADE ON DELETE CASCADE,
  PRIMARY KEY (monster_id, monster_tag_id)
);

CREATE TABLE IF NOT EXISTS monsters_monster_attack_tags (
  monster_id            INT NOT NULL REFERENCES monsters ON UPDATE CASCADE ON DELETE CASCADE,
  monster_attack_tag_id INT NOT NULL REFERENCES monster_attack_tags ON UPDATE CASCADE ON DELETE CASCADE,
  PRIMARY KEY (monster_id, monster_attack_tag_id)
);
