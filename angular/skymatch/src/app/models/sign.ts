export class Sign {
    id: Number;
    name: String;
    description: String;
    element: String;
    dateRange = {
        startDate: Date,
        endDate: Date
    }
    bestMatches: Sign[];
    worstMatches: Sign[];
}