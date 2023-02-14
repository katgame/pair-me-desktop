export interface DashBoardCategories {
    topic: string;
    topic_id: string;
    icon: string;
    item_count: any;
    slug: string;
    articles: {
        id: string;
        title: string;
        slug: string;
    }[];
}
