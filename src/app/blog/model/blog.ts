export interface Blog {
    id: string;
    title: string;
    description: string;
    published_timestamp: string;
    tag_list?: string[];
    cover_image?: string;
    url: string;
  }