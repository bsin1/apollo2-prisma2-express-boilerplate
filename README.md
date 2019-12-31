# Apollo2 Prisma2 Boilerplate

This project will get you up and running with Express, Apollo Server, and Primsa2 + Nexus

## How to use

### 1. Clone & install dependencies

Clone the `master` branch of this repository

Install Prisma 2 globally (If you don't want to install globally replace future `prisma2` calls with `npx prisma2`)

```
npm install -g prisma2
```

Install Node dependencies:

```
cd apollo2-prisma2-express-boilerplate
npm install
```

### 2. Configure Prisma datasource & environment variables

Prisma datasources (located in /prisma/schema.prisma) are configured to use the following environment variables:

`POSTGRES_URL` for PostgreSQL Databases
`MYSQL_URL` for MySQL Databases

Uncomment your desired datasource and add a `.env` file to the root of the project to add key value pairs to `process.env` via [DotEnv](https://github.com/motdotla/dotenv).

_.env_

```
POSTGRES_URL=YOUR_POSTGRES_DB_URL
MYSQL_URL=YOUR_MYSQL_DB_URL
```

Note: You can replace the `env(DATABASE_URL)` field inside `/prisma/schema.prisma` with a raw URL string if you do not want to use environment variables. No Environment variables are required when using an SQLite datasource.

### 3. Run Prisma's development mode

<Details><Summary>Learn more about the development mode</Summary>

Prisma's [development mode](https://github.com/prisma/prisma2/blob/master/docs/development-mode.md) watches your [Prisma schema](https://github.com/prisma/prisma2/blob/master/docs/prisma-schema-file.md) on the file system. Whenever there's a change in the schema, the Prisma Framework CLI performs two major tasks in the background:

- map the Prisma schema to your database schema (i.e., perform a schema migration in the database)
- regenerate the Photon.js database client based on the new Prisma schema

It also runs a web server to host [Prisma Studio](https://github.com/prisma/studio), at [`http://localhost:5555`](http://localhost:5555).

</Details>

Start Prisma's development mode with the following command:

```
prisma2 dev
```

You can now open your browser and navigate to [`http://localhost:5555`](http://localhost:5555) to browse the active Database with Prisma Studio.

### 4. Run the server

Start the Apollo server with this command:

```
npm run dev
```

`ts-node-dev` is used in conjunction with the `--respawn` flag to rebuild the server (and generate underlying Nexus SDL models) whenever a file is edited.

You can now open your browser and navigate to [`http://localhost:3000/graphql`](http://localhost:3000/graphql) to view your GraphQL schema with GraphQL Playground.

## Next steps

### 5. Prisma schema persistance

Editing the Prisma schema in development mode generates _development migrations_ that are thrown away once the desired schema has been found. When you have finalized the updates to your schema you must leave development mode and persist the schema using Prisma's Lift commands to take advantage of their migration history.

To persist your schema migration with Lift, run:

```
prisma2 lift save --name 'Changing Schema'
prisma2 lift up
```
