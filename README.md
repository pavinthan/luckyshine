# LuckyShine

## Description

LuckyShine is a game where users can collect treasures in a given latitude and longitude. Every treasure that is collected will have points based on the monetary value. A treasure may have more than one money value, it depends on the user’s luck. Lucky users may get the highest money from the treasure that has been collected.

## Build

```bash
$ docker-compose build
```

## Installation

```bash
$ docker-compose up -d
```

## Run Database Migration with Prisma ORM

Before this, make sure you set up a mysql database on your machine and create environment variable named 'DATABASE_URL' with the connection url. Then the following command will automatically create the relevant tables in the database

```bash
$ docker-compose exec app yarn migrate
```

## Run Database Seed with Prisma ORM

Before this, make sure you set up a mysql database on your machine and create environment variable named 'DATABASE_URL' with the connection url. Then the following command will automatically create the relevant tables in the database

```bash
$ docker-compose exec app yarn seed
```

## Run automated tests

Note that by design, the first time you run the tests, a couple of the tests will fail because the database will only be populated on this first run. But on subsequent run, all tests will pass.

```bash
$ yarn run test
```
