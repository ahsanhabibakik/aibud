declare module '@tryghost/content-api' {
  export interface GhostContentAPIOptions {
    url: string;
    key: string;
    version: string;
  }

  export default class GhostContentAPI {
    constructor(options: GhostContentAPIOptions);

    posts: {
      browse(options?: {
        include?: string;
        limit?: string | number;
        filter?: string;
        order?: string;
      }): Promise<any[]>;

      read(options: {
        slug?: string;
        id?: string;
        include?: string;
      }): Promise<any>;
    };

    pages: {
      browse(options?: {
        include?: string;
        limit?: string | number;
        filter?: string;
        order?: string;
      }): Promise<any[]>;

      read(options: {
        slug?: string;
        id?: string;
        include?: string;
      }): Promise<any>;
    };

    authors: {
      browse(options?: {
        include?: string;
        limit?: string | number;
        filter?: string;
        order?: string;
      }): Promise<any[]>;

      read(options: {
        slug?: string;
        id?: string;
        include?: string;
      }): Promise<any>;
    };

    tags: {
      browse(options?: {
        include?: string;
        limit?: string | number;
        filter?: string;
        order?: string;
      }): Promise<any[]>;

      read(options: {
        slug?: string;
        id?: string;
        include?: string;
      }): Promise<any>;
    };
  }
}
