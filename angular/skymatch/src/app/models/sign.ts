export class Sign {
    id: number;
    name: string;
    description: string;
    element: string;
    dateRange = {
        startDate: Date,
        endDate: Date
    }
    bestMatches: Sign[];
    worstMatches: Sign[];
}