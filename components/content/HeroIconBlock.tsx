import Image from 'next/image'
import sailingPic from '/public/static/img/icons/heropage/icons8-ship-96.png'
import peoplePic from '/public/static/img/icons/heropage/icons8-glyph-96.png'
import foodPic from '/public/static/img/icons/heropage/icons8-canteen-96.png'
import captainPic from '/public/static/img/icons/heropage/icons8-helm-96.png'
import sunsetPic from '/public/static/img/icons/heropage/icons8-sunset-96.png'

const HeroIconBlock = () => {
    return (
        <div className="not-prose flex flex-col gap-4">
            <div className="flex flex-row items-center gap-4">
                <Image
                    src={sailingPic}
                    width={56}
                    height={56}
                    alt="sailing ship"
                    /*  style={{ margin: 0 }} */
                />
                <p className="text-2xl font-light">Segeln und Kanu fahren</p>
            </div>
            <div className="flex flex-row items-center gap-4">
                <Image
                    src={foodPic}
                    width={56}
                    height={56}
                    alt="sailing ship"
                />
                <p className="text-2xl font-light">Übernachten und Essen</p>
            </div>
            <div className="flex flex-row items-center gap-4">
                <Image
                    src={peoplePic}
                    width={56}
                    height={56}
                    alt="sailing ship"
                />
                <p className="text-2xl font-light">Tagungen veranstalten</p>
            </div>
            <div className="flex flex-row items-center gap-4">
                <Image
                    src={captainPic}
                    width={56}
                    height={56}
                    alt="sailing ship"
                />
                <p className="text-2xl font-light">Kurse besuchen</p>
            </div>
            <div className="flex flex-row items-center gap-4">
                <Image
                    src={sunsetPic}
                    width={56}
                    height={56}
                    alt="sailing ship"
                />
                <p className="text-2xl font-light">Sich erholen</p>
            </div>
        </div>
    )
}

export default HeroIconBlock
