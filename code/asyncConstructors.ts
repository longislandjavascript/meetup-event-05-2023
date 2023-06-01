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
  private db: Promise<any>;
  constructor(
    private hostname: string,
    private port: number,
    private username: string,
    private password: string
  ) {
    this.db = makeConnectionPool(hostname, port, username, password).catch(
      (err) => {
        console.log(err);
      }
    );
  }

  async query(sql: string) {
    const db = await this.db;
    const response = await db.query(sql);
    return response;
  }
}

export const connection = new DataAccessor(
  "localhost",
  5432,
  "postgres",
  "postgres"
);
