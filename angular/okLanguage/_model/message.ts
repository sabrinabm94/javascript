import { User } from './user';
import { Chat } from './chat';

export class Message {
    id: string;
    sender: User;
    receiver: User;
    active: boolean;
    createDate: Date;
    content: string;
    chat: Chat;
}