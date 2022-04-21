import { Chat } from '@models//chat';

export class Match {
    userId: Number;
    userMatchDate: Date;
    partnerId: Number;
    partnerMatchDate: Date;
    sinastryScore: Number;
    compatibilityScore: Number;
    finalScore: Number;
    chats: Chat[];
}