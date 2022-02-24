import { Chat } from '@models//chat';

export class Match {
    userId: number;
    userMatchDate: Date;
    partnerId: number;
    partnerMatchDate: Date;
    matchScore: number;
    sinastryScore: number;
    chats: Chat[];
}