import { Message } from '@models//message';
import { User } from '@models//user';

export class Chat {
    id: number;
    createChatUser: User;
    startDate: Date;
    endDate: Date;
    users: User[];
    messages: Message[];
    isDisabled: boolean;
}