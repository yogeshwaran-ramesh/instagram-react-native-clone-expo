export interface PostFeed {
  name: string;
  index: number;
  likes: number;
  description: string;
  images: string[];
  comments: any[];
}

export interface StoriesType {
  name: string;
  id: number;
}

export interface NavigationListProps {
  name: string;
  component: React.ReactNode | undefined;
  iconUrl: string;
}

export interface IconTypeProps {
  name?: string;
  url: string;
  style?: object;
}
