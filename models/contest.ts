export interface Contest {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  topicIngredient: {
    id: number;
    name: string;
    image: string;
  };
}
