export interface DashboardPageData {
    terms: Topic[];
  
    topics: {
      topicName: string;
      id: string;
      articles: {
        title: string;
        slug: string;
        id: string;
      }[];
    }[];
    top_hero: {
      heading: string;
      image: string;
    };
    two_columns_first_heading: {
      heading: string;
    };
    two_columns_first: {
      column_one: {
        title: string;
        content: string;
        image: string;
      };
      column_two: {
        title: string;
        content: string;
        image: string;
      };
    };
  
    middle_banner: {
      title: string;
      content: string;
      image: string;
    };
  
    two_columns_last: {
      image: string;
      slides: {
        title: string;
        description: string;
        link: string;
      }[];
    };
  }
  
  export interface Topic {
    topic: string;
    topic_id: string;
    articles: any;
    item_count: number;
    icon: string;
    slug: string;
  }
  