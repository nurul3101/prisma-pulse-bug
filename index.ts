import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { withPulse } from "@prisma/extension-pulse";

process.on("SIGINT", () => {
  process.exit(0);
});

const apiKey: string = process.env.PULSE_API_KEY ?? "";
const prisma = new PrismaClient().$extends(withPulse({ apiKey: apiKey }));

async function main() {
  const stream = await prisma.trigger.stream({
    name: "all-triggers",
  });

  process.on("exit", (code) => {
    stream.stop();
  });
  console.log("WAITING");
  for await (const event of stream) {
    console.log("just received an event:", event);
  }
  console.log("OVER");
}

main();
