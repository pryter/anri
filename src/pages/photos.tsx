import Image from "next/image"
import type { FC } from "react"

interface ImageColumnProps {
  basePath: string
  size: number
}

const ImageColumn: FC<ImageColumnProps> = ({ basePath, size }) => {
  return (
    <>
      {[...Array(size)].map((v, i) => {
        return (
          <div key={`pic-${basePath}-${i}`} className="relative mr-2 mb-2">
            <Image
              fill={true}
              className="object-cover object-center"
              alt={`pic-${basePath}-${i}`}
              src={`${basePath}${i + 31}.jpg`}
              placeholder="blur"
              blurDataURL={`${basePath}${i + 31}.jpg`}
            />
            <Image
              className="opacity-0"
              alt={`pic-${basePath}-${i}`}
              src={`/images/smallph.jpg`}
              width={400}
              height={280}
            />
          </div>
        )
      })}
    </>
  )
}

const Concept = () => {
  return (
    <div>
      <div className="mt-20 flex space-x-1">
        <div className="flex w-full flex-wrap">
          <ImageColumn basePath="/images/more/" size={12} />
          <ImageColumn basePath="/images/more2/" size={12} />
        </div>
      </div>
    </div>
  )
}

export default Concept
