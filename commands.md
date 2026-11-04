The migration command is:

```powershell
npx prisma migrate dev --name init
```

It won't work yet. Three things have to be in place first:

1. **A database URL.** Create a `.env` file in the project root pointing at your PostgreSQL database:
   ```
   DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/shopco?schema=public"
   ```
2. **`prisma.config.ts`.** Prisma 7 reads the database URL from this file rather than from the schema. I haven't created it yet, because I'm waiting for the install to finish so I can check the exact format against the installed version.
3. **Prisma's setup scripts.** The install is still running, but its output shows npm blocked Prisma's install scripts: `@prisma/engines` (postinstall) and `prisma` (preinstall). The postinstall script downloads the migration engine, which `migrate` needs. This npm version blocks install scripts until you approve them, so that's your decision:
   ```powershell
   npm install-scripts approve prisma @prisma/engines
   npm rebuild prisma @prisma/engines
   ```

Once the database exists and those three are done:

| Command | What it does |
|---|---|
| `npx prisma migrate dev --name init` | Creates `prisma/migrations/…/migration.sql`, applies it to your database, and generates the client |
| `npx prisma generate` | Regenerates the typed client after a schema change, without touching the database |
| `npx prisma migrate deploy` | Applies existing migrations in production, without creating new ones |
| `npx prisma studio` | Opens a browser UI to view and edit the data |

When the install finishes, I'll add `prisma.config.ts`, a `.env.example`, and a `lib/prisma.ts` client. Tell me if you want me to approve the install scripts for you.