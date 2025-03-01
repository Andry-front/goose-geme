import { User } from "../types/types.ts";

const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await fetch('/api/users');
        if (!response.ok) {
            throw new Error(`Ошибка HTTP ${response.status}`);
        }

        const data: User[] = await response.json();

        return data;
    } catch (error) {
        console.error('Ошибка загрузки пользователей', error);
        return [];
    }
}

export { fetchUsers };