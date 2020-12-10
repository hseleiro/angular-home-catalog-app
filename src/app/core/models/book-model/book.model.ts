export interface BookModel {
    _id: string;
    title: string;
    earnings: number;
    description?: string;
}

export type BookRequiredProps = Pick<BookModel, "title" | "earnings">;

export function calculateBooksGrossEarnings(books: BookModel[]) {
    return books.reduce((total, book) => {
        return total + parseInt(`${book.earnings}`, 10) || 0;
    }, 0);
}
