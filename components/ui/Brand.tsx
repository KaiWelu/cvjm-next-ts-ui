import Image from 'next/image'
import Link from 'next/link'

const Brand = () => {
    return (
        <div className="flex flex-row gap-4">
            <Link href="/">
                <Image
                    src="/static/img/logo/logo_transparent_bg.png"
                    alt="CVJM Logo"
                    width={100}
                    height={100}
                />
            </Link>
            <div className="hidden flex-col justify-center xl:flex">
                <p className="text-2xl font-light">CVJM Ratzeburg</p>
                <p className="font-light">Freizeit- und Segelzentrum</p>
            </div>
        </div>
    )
}

export default Brand
