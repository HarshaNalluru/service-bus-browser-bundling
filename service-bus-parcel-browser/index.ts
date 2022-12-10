

import { ServiceBusClient } from "@azure/service-bus";

const connString = "<connection-string>";
const queueName = "newqueue-397";

async function main() {
    const client = new ServiceBusClient(connString);
    const sender = client.createSender(queueName);
    await sender.sendMessages({ body: "ABCD" });
    console.log("sent message...");

    const receiver = client.createReceiver(queueName);
    const messages = await receiver.receiveMessages(1);
    console.log("received message...")
    console.log(messages[0])
    console.log("closing client...");
    await client.close();
}

main().catch(err => console.log(err))