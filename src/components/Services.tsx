"use client";

import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: 'Académica de Alta Gastronomía',
      description: 'Masters y especializaciones',
      imageSrc: "/image/chef.jpg",
      imageAlt: 'Persona cocinando en clase de cocina',
    },
    {
      title: 'Eventos Gastronómicos',
      description: 'Experiencias culinarias para todo tipo de eventos.',
      imageSrc: '/image/salon-fiesta2.jpg',
      imageAlt: 'Evento gastronómico con mesas y comida',
    },
    {
      title: 'Asesoramiento Personalizado',
      description: 'Consultoría para proyectos gastronómicos y emprendimientos.',
      imageSrc: '/image/massi-aperol.png',
      imageAlt: 'Persona asesorando en proyecto gastronómico',
    },
  ]

  return (
    <section
      id="services"
      className="
        py-16 bg-linear-to-t
        from-sky-400 to-sky-50 
        dark:from-teal-950 dark:to-yellow-900
        px-6  md:px-20 
        text-sky-950 
        dark:text-yellow-500 /* texto claro y oscuro */
        transition-colors duration-300 /* animación suave al cambiar tema */
      "
      aria-label="Sección de servicios"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Servicios</h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {services.map(({ title, description, imageSrc, imageAlt }) => (
          <article
            key={title}
            className="
              bg-sky-200 
              dark:bg-teal-900    /* card fondo claro/oscuro */
              rounded-lg shadow-lg overflow-hidden
              hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer
              flex flex-col
            "
            role="region"
            aria-labelledby={`${title}-title`}
          >
            <div className="relative w-full h-48 md:h-56">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 id={`${title}-title`} className="text-2xl font-semibold mb-2">
                {title}
              </h3>
              <p className="text-sky-900 dark:text-yellow-400 flex-grow">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
