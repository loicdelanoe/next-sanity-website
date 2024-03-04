import 'server-only'

import {createClient, type QueryParams} from 'next-sanity'
import ClientConfig from "@/sanity/config/client-config";

export async function sanityFetch<QueryResponse>({
                                                     query,
                                                     params = {},
                                                     tags,
                                                 }: {
    query: string
    params?: QueryParams
    tags?: string[]
}) {
    return createClient(ClientConfig).fetch<QueryResponse>(query, params, {
        next: {
            //revalidate: 30, // for simple, time-based revalidation
            tags, // for tag-based revalidation
        },
    })
}
