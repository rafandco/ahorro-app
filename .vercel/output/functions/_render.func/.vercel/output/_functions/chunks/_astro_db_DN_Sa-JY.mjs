import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, "https://db.services.astro.build");
const User = asDrizzleTable("User", { "columns": { "id": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "id", "collection": "User", "primaryKey": true } }, "username": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "username", "collection": "User", "primaryKey": false, "optional": false } }, "email": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "email", "collection": "User", "primaryKey": false, "optional": false } }, "firstName": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "firstName", "collection": "User", "primaryKey": false, "optional": false } }, "lastName": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "lastName", "collection": "User", "primaryKey": false, "optional": false } }, "password": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "password", "collection": "User", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);
const Session = asDrizzleTable("Session", { "columns": { "id": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "id", "collection": "Session", "primaryKey": false, "optional": false } }, "userId": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "userId", "collection": "Session", "primaryKey": false, "optional": false, "references": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "id", "collection": "User", "primaryKey": true } } } }, "expiresAt": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "expiresAt", "collection": "Session", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);
const Entry = asDrizzleTable("Entry", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Entry", "primaryKey": true } }, "initialAmount": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "initialAmount", "collection": "Entry", "primaryKey": false, "optional": false } }, "finalAmount": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "finalAmount", "collection": "Entry", "primaryKey": false, "optional": false } }, "createdAt": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "createdAt", "collection": "Entry", "default": { "__serializedSQL": true, "sql": "CURRENT_TIMESTAMP" } } }, "userId": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "userId", "collection": "Entry", "primaryKey": false, "optional": false, "references": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "id", "collection": "User", "primaryKey": true } } } } }, "deprecated": false, "indexes": {} }, false);

export { Entry as E, Session as S, User as U, db as d };