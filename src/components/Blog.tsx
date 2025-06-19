type Post = {
  id: number
  title: string
  excerpt: string
  date: string
  url: string
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Cucinarte en alianza con SOMM inaugura nueva sede en Palermo',
    excerpt: 'Conoce todos los detalles de nuestra inauguración y las actividades planificadas.',
    date: '2025-06-10',
    url: 'https://sommresto.com/',
  },
  {
    id: 2,
    title: 'Talleres de verano: aprende cocina internacional',
    excerpt: 'Inscribite en nuestros talleres exclusivos para esta temporada.',
    date: '2025-05-25',
    url: '#',
  },
  {
    id: 3,
    title: 'Entrevista con el chef principal de Cucinarte',
    excerpt: 'Descubre la filosofía culinaria detrás de nuestro equipo.',
    date: '2025-05-15',
    url: '#',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-16 px-6 md:px-20 bg-linear-to-t from-sky-50 to-sky-400 text-sky-900 dark:from-sky-950 dark:to-teal-950 dark:text-yellow-400">
      <h2 className="text-4xl font-bold mb-12 text-center">Prensa</h2>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {posts.map(({ id, title, excerpt, date, url }) => (
          <article key={id} className="bg-sky-100 dark:bg-sky-900 rounded-lg p-6 shadow hover:shadow-lg transition cursor-pointer">
            <a href={url} target="_blank" rel="noopener noreferrer" className="block">
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-sky-900 dark:text-yellow-500 mb-3">{excerpt}</p>
              <time dateTime={date} className="text-sm text-sky-600 dark:text-yellow-500">
                {new Date(date).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
