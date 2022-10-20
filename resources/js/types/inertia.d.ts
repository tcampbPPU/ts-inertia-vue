import { PageProps } from '@inertiajs/inertia'

export {}
declare global {
    export namespace inertia {
        export interface Props extends PageProps {
            user: {
                id: number
                name: string
                email: string
                created_at: Date
                updated_at: Date
            }
            jetstream: {
                [key: string]: boolean
            }
            errorBags: unknown
            errors: unknown
        }
    }
}
