'use client'
import SampleCarousel from '@/components/carousels/SampleCarousel'
import HeroIconBlock from '@/components/content/HeroIconBlock'

export default function Home() {
    return (
        <main className="mt-5 flex w-full justify-center p-5">
            <div className="prose-md prose max-w-none md:prose-lg prose-headings:text-primary-2 lg:w-3/4">
                <div className="flex flex-col gap-4 md:flex-row">
                    <section className="scroll-padding">
                        <h1>Willkommen beim Segelzentrum Ratzeburg!</h1>
                        <p className="lead">
                            Das ist alles nur ein Platzhalter hier. Ein
                            endgültiges Design wird erst erstellt wenn es
                            Klarheit über den Inhalt gibt und Assets
                            bereitstehen. Das endgültige Layout für die
                            Startseite wird komplett anders aussehen.
                        </p>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iure accusantium saepe, consectetur, optio
                            itaque blanditiis possimus obcaecati aut aperiam
                            alias voluptas nesciunt praesentium voluptatibus
                            voluptate voluptatem! Enim numquam ad neque?
                        </p>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iure accusantium saepe, consectetur, optio
                            itaque blanditiis possimus obcaecati aut aperiam
                            alias voluptas nesciunt praesentium voluptatibus
                            voluptate voluptatem! Enim numquam ad neque?
                        </p>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iure accusantium saepe, consectetur, optio
                            itaque blanditiis possimus obcaecati aut aperiam
                            alias voluptas nesciunt praesentium voluptatibus
                            voluptate voluptatem! Enim numquam ad neque?
                        </p>
                    </section>
                    <section className="scroll-padding w-full">
                        <h1>Bei uns kann man...</h1>
                        <HeroIconBlock />
                    </section>
                </div>
                <SampleCarousel />
                <section className="scroll-padding">
                    <h2>
                        Hier könnte man z.B. auch was über Partner hinpacken
                    </h2>
                    <p>
                        Allgemein ist es immer gut für eine Heropage z.b. eine
                        Bildergallerie mit Textaufforderungen zu haben. So kann
                        man sofort einen Eindruck vom Inhalt gewinnen und wird
                        an die richtigen Stellen verwiesen. Gutes Beispiel wäre
                        die Seite vom Deutschen Segelverband.
                    </p>{' '}
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure accusantium saepe, consectetur, optio itaque
                        blanditiis possimus obcaecati aut aperiam alias voluptas
                        nesciunt praesentium voluptatibus voluptate voluptatem!
                        Enim numquam ad neque?
                    </p>{' '}
                </section>
            </div>
        </main>
    )
}
