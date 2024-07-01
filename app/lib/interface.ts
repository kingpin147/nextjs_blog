import { TypedObject } from "sanity";

export interface simpleBlogCard{
   title: string;
    smalldescription: string;
    currentslug: string;
    titleImage: any;
};

export interface fullBlog{
    title: string;
    currentslug: string;
    content: any;
    titleImage: any;
};