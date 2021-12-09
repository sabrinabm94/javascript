import { User } from './user';
import { Message } from './message';

export class Chat {
    id: string;
    sender: User;
    receiver: User;
    active: boolean;
    createDate: Date;
    messages: Message[];
}