import { User } from "./user";

export class Message {
    id: number;
    chatId: number;
    sender: User;
    receiver: User;
    sendDate: Date;
    receiptDate: Date;
    readingDate: Date;
    content: string;
}