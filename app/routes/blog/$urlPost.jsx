import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/post.server";
import { formatearFecha } from "~/utils/helpers";

export function meta({data}) {

    if(!data) {
        return{
            title: 'GuitarLA - Entrada No Encontrada',
            description: 'Guitarras, Blog de guitarras, Entrada no encontrada'
        }
    }

    return {
        title: `GuitarraLA - ${data.data[0].attributes.titulo}`,
        description: `Guitarras, Blog de Guitarras: ${data.data[0].attributes.titulo}`
    }
}

export async function loader({params}) {
    const {urlPost} = params;

    const post = await getPost(urlPost);
    console.log(post);

    if(post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Entrada No Encontrada'
        });
    }

    return post
}

const Post = () => {
    const post = useLoaderData().data[0].attributes;

    const {titulo, contenido, imagen, publishedAt} = post;


    return (
    <>
        <article className="post mt-3">
        <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`Articulo de ${titulo}`}/>
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className='fecha'>{formatearFecha(publishedAt)}</p>
                <p className="texto">{contenido}</p>
            </div>
        </article>
    </>
    );
}
 
export default Post;