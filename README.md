## Steps to reproduce

### 1. Configure environment variables

Create a `.env` in the root of the project directory:

```bash
touch .env
```

Now, open the `.env` file and update the `DATABASE_URL` and `PULSE_API_KEY` environment variables with the values of your connection string and your Pulse API key:

```bash
# .env
DATABASE_URL="__YOUR_DATABASE_CONNECTION_STRING__"
PULSE_API_KEY="__YOUR_PULSE_API_KEY__"
```

Note that `__YOUR_DATABASE_CONNECTION_STRING__` and `__YOUR_PULSE_API_KEY__` are placeholder values that you need to replace with the values of your connection string and your Pulse API key.

### 2. Run a database migration to create the `User` table

The Prisma schema file contains a single `User` model. You can map this model to the database and create the corresponding `User` table using the following command:

```bash
npx prisma migrate dev --name init
```

You now have an empty `User` table in your database.

### 3. Start the Pulse stream

Run the [script](./index.ts) that contains the code to stream database events:

```bash
npm run dev
```

### 4. You should see the following error:

```txt
/Users/nurulsundarani/Documents/Prisma/prisma-pulse/pulse_starter/node_modules/@prisma/extension-pulse/dist/cjs/serializer.js:105
            serialized[field] = this.#serializeField(field, fields[field]);
                                     ^
TypeError: Cannot read properties of undefined (reading 'PulseSubscriptionFilterSerializer')
    at #serializeFields (/Users/nurulsundarani/Documents/Prisma/prisma-pulse/pulse_starter/node_modules/@prisma/extension-pulse/dist/cjs/serializer.js:105:38)
    at Array.map (<anonymous>)
    at PulseSubscriptionFilterSerializer.#serializeFields (/Users/nurulsundarani/Documents/Prisma/prisma-pulse/pulse_starter/node_modules/@prisma/extension-pulse/dist/cjs/serializer.js:102:51)
    at PulseSubscriptionFilterSerializer.serialize (/Users/nurulsundarani/Documents/Prisma/prisma-pulse/pulse_starter/node_modules/@prisma/extension-pulse/dist/cjs/serializer.js:79:54)
    at establishSubscription (/Users/nurulsundarani/Documents/Prisma/prisma-pulse/pulse_starter/node_modules/@prisma/extension-pulse/dist/cjs/entry.node.js:70:27)
    at Proxy.subscribe (/Users/nurulsundarani/Documents/Prisma/prisma-pulse/pulse_starter/node_modules/@prisma/extension-pulse/dist/cjs/entry.node.js:50:32)
    at /Users/nurulsundarani/Documents/Prisma/prisma-pulse/pulse_starter/index.ts:13:36
    at Generator.next (<anonymous>)
    at /Users/nurulsundarani/Documents/Prisma/prisma-pulse/pulse_starter/index.ts:8:71
    at new Promise (<anonymous>)
```
