import { QueryResult } from 'pg';


export interface Monster {
  id?: number,
  name?: string,
  tags?: string[],
  attack?: string,
  damage?: string,
  hp?: number,
  armor?: number,
  attackTags?: string[],
  qualities?: string[],
  description?: string,
  instinct?: string,
  actions?: string[],
  setting?: string
}

export interface MonsterDetail {
  id?: number,
  name?: string,
  description?: string
}

export interface RequestError {
  status: number,
  message: string
}

export type MonsterResponse = Promise<Monster | RequestError>;
export type MonsterArrayResponse = Promise<Monster[] | RequestError>;
export type MonsterQueryResult = QueryResult<Monster>;
export type MonsterDetailResponse = Promise<MonsterDetail | RequestError>;
export type MonsterDetailArrayResponse = Promise<MonsterDetail[] | RequestError>;
export type MonsterDetailQueryResult = QueryResult<MonsterDetail>;
