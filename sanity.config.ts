import {defineConfig} from 'sanity';
import {structureTool} from "sanity/structure";
import schemas from '@/sanity/schemas';

const config = defineConfig({
    projectId: 'qyql4ize',
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2023-05-03',
    basePath: '/admin',
    plugins: [structureTool()],
    schema: {types: schemas},
});

export default config;