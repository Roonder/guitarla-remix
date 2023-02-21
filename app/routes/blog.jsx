import { Outlet} from '@remix-run/react';
import styles from '~/styles/blog.css'


export function meta() {
    return {
        title: 'GuitarLA - Nuestro Blog',
        description: 'GuitarLA, Blog de Musica y Venta de Guitarras'
    }
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

const Blog = () => {
    return (
    <>
        <main className="contenedor">
            <Outlet/>
        </main>
    </>
    );
}
 
export default Blog;