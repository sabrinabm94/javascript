import { NotificationType } from "./enums/NotificationType";
import { User } from "./user";

export class Notification {
    id: Number;
    type: NotificationType;
    receiver: User;
    receiptDate: Date;
    readingDate: Date;
    message: String;
}
