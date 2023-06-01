declare type MakeConnectionPool = (
  hostname: string,
  port: number,
  username: string,
  password: string
) => Promise<any>;

const makeConnectionPool: MakeConnectionPool = (
  hostname: string,
  port: number,
  username: string,
  password: string
) => {
  return new Promise((res) => res);
};

class DataAccessor {
  constructor(private db: any) {}
  async query(sql: string) {
    const response = await this.db.query(sql);
    return response;
  }
}

export const databaseConnectionPoolFactory = async (
  hostname: string,
  port: number,
  username: string,
  password: string
) => {
  const db = await makeConnectionPool(hostname, port, username, password);
  return new DataAccessor(db);
};
