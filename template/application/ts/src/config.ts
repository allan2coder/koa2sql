export interface Config {
    port: number;
    debugLogging: boolean;
    dbsslconn: boolean;
    jwtSecret: string;
    databaseUrl: string;
    dbEntitiesPath: string[];
    cronJobExpression: string;
    username: string;
    password: string;
    synchronize: boolean;
    database: string;
    serverPort: number;
}

const isDevMode = process.env.NODE_ENV == "development";

const config: Config = {
    port: +(process.env.PORT || 3000),
    debugLogging: isDevMode,
    dbsslconn: !isDevMode,
    jwtSecret: process.env.JWT_SECRET || "your-secret-whatever",
    databaseUrl: process.env.DATABASE_URL || "postgres://user:pass@localhost:5432/apidb",
    dbEntitiesPath: [
      ... isDevMode ? ["src/entity/**/*.ts"] : ["dist/entity/**/*.js"],
    ],
    username: 'test',
    password: 'test',
    database: 'test',
    synchronize: false,
    cronJobExpression: "0 * * * *",
    serverPort: 3000,
};

export { config };