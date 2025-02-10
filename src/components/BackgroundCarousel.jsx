import { useEffect, useState } from 'react'
import imageGraduationStage from '../assets/images/graduation-stage.webp'
import imageGraduationStudents from '../assets/images/graduation-students.webp'
import imageGraduationWalk from '../assets/images/graduation-walk-2.jpeg'
import imageParadeMarch from '../assets/images/parade-3.webp'
import imageParadeMarchBlurred from '../assets/images/parade.webp'

const images = [
    `url(${imageParadeMarchBlurred.src})`,
    `url(${imageParadeMarch.src})`,
    `url(${imageGraduationStage.src})`,
    `url(${imageGraduationStudents.src})`,
    `url(${imageGraduationWalk.src})`,
]

export function BackgroundCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % images.length
                return nextIndex
            })
        }, 3000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            {images.map((imageSrc, index) => (
                <div
                    key={imageSrc}
                    style={{ backgroundImage: imageSrc }}
                    className={`fixed left-0 top-0 -z-10 size-full bg-cover transition-opacity duration-300 ease-in-out [animation:zoomInEffect_30s_infinite] ${
                        currentImageIndex == index
                            ? 'opacity-100'
                            : 'opacity-0 delay-300'
                    }`}></div>
            ))}
        </>
    )
}
