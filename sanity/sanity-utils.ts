import {createClient, groq} from "next-sanity";
import {Project} from "@/types/Project";
import clientConfig from "@/sanity/config/client-config";

// @ts-ignore
export async function getProjects(): Promise<Project[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        {},
        {
            cache: "no-store"
        }
    )
}

// @ts-ignore
export async function getProject(slug: string): Promise<Project> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        {slug},
        {
            cache: "no-store",
            next: {
                tags: [slug]
            }
        }
    )
}

// @ts-ignore
export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current
        }`,
        {},
        {
            cache: "no-store"
        }
    )
}

// @ts-ignore
export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
        {slug},
        {
            cache: "no-store",
            next: {
                tags: [slug]
            }
        }
    )
}