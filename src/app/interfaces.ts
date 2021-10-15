export interface IUser {
    id: number;
    nombre?: string;
    password?: string;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    
}

export interface IResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUser[];
}