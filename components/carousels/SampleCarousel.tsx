import Image from 'next/image'
// if you import local images nextjs will autofill the ratio and w+h
import waterPic from '@/public/static/img/water/cvjm_impression_1.jpg'
import { Splide, SplideSlide } from '@splidejs/react-splide'
// or only core styles
import '@splidejs/react-splide/css/core'
// Default theme
import '@splidejs/react-splide/css'

const SampleCarousel = () => {
    return (
        <Splide aria-label="My Favorite Images">
            <SplideSlide className="flex justify-center">
                <Image alt="sailing" src={waterPic} />
            </SplideSlide>
            <SplideSlide className="flex justify-center">
                <Image alt="sailing" src={waterPic} />
            </SplideSlide>
            <SplideSlide className="flex justify-center">
                <Image alt="sailing" src={waterPic} />
            </SplideSlide>
            <SplideSlide className="flex justify-center">
                <Image alt="sailing" src={waterPic} />
            </SplideSlide>
            <SplideSlide className="flex justify-center">
                <Image alt="sailing" src={waterPic} />
            </SplideSlide>
        </Splide>
    )
}

export default SampleCarousel
