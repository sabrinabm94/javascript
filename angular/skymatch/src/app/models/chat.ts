import { Message } from '@models//message';
import { User } from '@models//user';

export class Chat {
    id: Number;
    createChatUser: User;
    startDate: Date;
    endDate: Date;
    users: User[];
    messages: Message[];
    isDisabled: Boolean;
}