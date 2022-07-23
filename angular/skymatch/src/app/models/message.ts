import { User } from "./user";

export class Message {
    id: Number;
    chatId: Number;
    sender: User;
    receiver: User;
    sendDate: Date;
    receiptDate: Date;
    readingDate: Date;
    content: String;
}
