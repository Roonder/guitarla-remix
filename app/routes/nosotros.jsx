import imagen from '../../public/img/nosotros.jpg';
import styles from '~/styles/nosotros.css';

export function meta() {
    return {
        title: 'GuitarLA - Sobre Nosotros',
        description: 'Venta de guitarras, blog de musica y mas...'
    }
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

const Nosotros = () => {
    return (
    <>
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>
            <div className="contenido">
                <img src={imagen} alt="Imagen sobre Nosotros" />
                <div>
                    <p>Duis congue fringilla condimentum. Fusce nec vehicula est, eu pellentesque quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed commodo erat odio, at fermentum neque ultricies id. In hac habitasse platea dictumst. Aliquam erat volutpat. Suspendisse auctor consectetur luctus. Morbi ac mi et ex ullamcorper auctor. Mauris vitae convallis purus. Nulla eros lorem, condimentum vel viverra sed, elementum in arcu. Sed a lectus rhoncus, commodo velit id, sagittis eros. Nunc consequat ornare tincidunt. Donec scelerisque tincidunt bibendum. Suspendisse ut purus eu ipsum facilisis tempor. Fusce in enim sit amet purus efficitur tempor a vitae augue.</p>

                    <p>Duis congue fringilla condimentum. Fusce nec vehicula est, eu pellentesque quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed commodo erat odio, at fermentum neque ultricies id. In hac habitasse platea dictumst. Aliquam erat volutpat. Suspendisse auctor consectetur luctus. Morbi ac mi et ex ullamcorper auctor. Mauris vitae convallis purus. Nulla eros lorem, condimentum vel viverra sed, elementum in arcu. Sed a lectus rhoncus, commodo velit id, sagittis eros. Nunc consequat ornare tincidunt. Donec scelerisque tincidunt bibendum. Suspendisse ut purus eu ipsum facilisis tempor. Fusce in enim sit amet purus efficitur tempor a vitae augue.</p>
                </div>
            </div>
        </main>
    </>
    );
}
 
export default Nosotros;