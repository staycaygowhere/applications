import type { RequestHandler } from './$types';
import { open } from 'node:fs/promises';


export const GET: RequestHandler = async () => {

    let ecs_container_metadata = '';
    let fileHandle;

    if (process.env.ECS_CONTAINER_METADATA_FILE) {

        try {
            fileHandle = await open(process.env.ECS_CONTAINER_METADATA_FILE, 'r');
            ecs_container_metadata = (await fileHandle.readFile()).toString();

        } finally {

            await fileHandle?.close();
        }
    }

    const responseBody = {
        data: {
            uptime: process.uptime(),
            version: process.version,
            memoryUsage: process.memoryUsage(),
            ecs_container_metadata
        },
        message: 'Success',
        sentAt: new Date().toISOString(),
    };

    return new Response(JSON.stringify(responseBody));
};
