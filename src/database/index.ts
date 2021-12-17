import { Pool, QueryResult } from 'pg';

const pool = new Pool();

export default {
  query: (text: string, params?: any): Promise<QueryResult>  => {
    return pool.query(text, params);
  }
}