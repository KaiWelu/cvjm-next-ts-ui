'use client'
import SampleCarousel from '@/components/carousels/SampleCarousel'

const page = () => {
    return (
        <main className="mt-5 flex w-full justify-center p-5">
            <div className="prose-md prose max-w-none md:prose-lg prose-headings:text-primary-2 lg:w-3/4">
                <section id="ratzeburg" className="scroll-padding">
                    <h1>Ratzeburg</h1>
                    <p className="lead">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eius perspiciatis dolore impedit explicabo porro,
                        minus non, doloribus harum, nihil deleniti animi ullam
                        itaque cumque atque consectetur accusamus dolores quia
                        officiis.
                    </p>
                    <p className="lead">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eius perspiciatis dolore impedit explicabo porro,
                        minus non, doloribus harum, nihil deleniti animi ullam
                        itaque cumque atque consectetur accusamus dolores quia
                        officiis.
                    </p>
                </section>
                <section className="no-prose">
                    <SampleCarousel />
                </section>
                <section id="umland" className="scroll-padding">
                    <h2>Umland</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eius perspiciatis dolore impedit explicabo porro,
                        minus non, doloribus harum, nihil deleniti animi ullam
                        itaque cumque atque consectetur accusamus dolores quia
                        officiis.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eius perspiciatis dolore impedit explicabo porro,
                        minus non, doloribus harum, nihil deleniti animi ullam
                        itaque cumque atque consectetur accusamus dolores quia
                        officiis.
                    </p>
                </section>
                <section id="molln" className="scroll-padding">
                    <h2>Mölln</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eius perspiciatis dolore impedit explicabo porro,
                        minus non, doloribus harum, nihil deleniti animi ullam
                        itaque cumque atque consectetur accusamus dolores quia
                        officiis.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eius perspiciatis dolore impedit explicabo porro,
                        minus non, doloribus harum, nihil deleniti animi ullam
                        itaque cumque atque consectetur accusamus dolores quia
                        officiis.
                    </p>
                </section>
                <section id="lubeck" className="scroll-padding">
                    <h2>Lübeck</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eius perspiciatis dolore impedit explicabo porro,
                        minus non, doloribus harum, nihil deleniti animi ullam
                        itaque cumque atque consectetur accusamus dolores quia
                        officiis.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eius perspiciatis dolore impedit explicabo porro,
                        minus non, doloribus harum, nihil deleniti animi ullam
                        itaque cumque atque consectetur accusamus dolores quia
                        officiis.
                    </p>
                </section>
            </div>
        </main>
    )
}

export default page
