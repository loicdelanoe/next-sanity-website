import {PortableTextBlock} from "sanity";

export type Project = {
    _id: string;
    // @ts-ignore
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
}