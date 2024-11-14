export type Genre = {
    _id: string;
    name: string;
    slug: string;
  };
  
export type GenreResponse = {
    status: string;
    message: string;
    data: {
      items: Genre[];
    };
  };

  

  