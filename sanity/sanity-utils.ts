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
        }`
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
        {slug}
    )
}

// @ts-ignore
export async function getPages(): Promise<Page[]> {
    const revalidate = 10;
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current
        }`, {next: revalidate}
    )
}

// @ts-ignore
export async function getPage(slug: string): Promise<Page> {
    const revalidate = 10;
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
        {slug, next: revalidate}
    )
}