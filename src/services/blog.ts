export class Blog {

  async getPosts() {
    const response = await fetch('https://content.ivanstanojevic.me/forestandclimate/blog?_format=json');
    return await response.json();
  };
}

export const BlogService = new Blog();
