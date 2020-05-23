export interface Calendar {
    id: string;
    accessRole: string;
    backgroundColor: string;
    colorId: string;
    foregroundColor: string;
    primary?: boolean;
    summary: string;
    checked: boolean;
}

export interface CalEvent {
    id: string;
    creator: CalUser;
    created: string;
    end: CalDate;
    htmlLink: string;
    organizer: CalUser;
    sequence: number;
    start: CalDate;
    status: string;
    summary: string;
    updated: string;
    colorId: string;
}

export interface CalUser {
    id: string;
    email: string;
    displayName: string;
    self: boolean;
}


export interface CalDate {
    date: string;
    dateTime: string;
    timeZone: string;
}
