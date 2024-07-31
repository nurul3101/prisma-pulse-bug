import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function updateRecord() {
  try {
    const recordId = 1; // specify the id of the record you want to update

    const updatedRecord = await prisma.trigger.update({
      where: { id: recordId },
      data: {
        content: `Updated Content - ${Math.random()}`,
      },
    });

    console.log("Record updated:", updatedRecord);
  } catch (error) {
    console.error("Error updating record:", error);
  }
}

setInterval(updateRecord, 500);
