import { Icon } from "@iconify/react"
import classnames from "classnames"
import { motion } from "framer-motion"
import Image from "next/image"
import type { FC } from "react"

interface AddressTitleProps {
  address: string[]
  className?: string
}

const AddressTitle: FC<AddressTitleProps> = ({ address, className = "" }) => {
  return (
    <div
      className={classnames("flex flex-col space-y-1 font-medium", className)}
    >
      <Icon className="h-[26px] w-[26px]" icon="ph:house-line-light" />
      <motion.h3 whileHover={{ letterSpacing: "0.8px" }} className="leading-4">
        {address[0]}
      </motion.h3>
      <h3 className="leading-4">{address[1]}</h3>
    </div>
  )
}

interface ImageColumnProps {
  basePath: string
  size: number
}

const ImageColumn: FC<ImageColumnProps> = ({ basePath, size }) => {
  return (
    <div className="mt-10 space-y-8">
      {[...Array(size)].map((_v, i) => {
        return (
          <div key={`pic-${basePath}-${i}`} className="relative">
            <Image
              fill={true}
              className="object-cover object-center"
              alt={`pic-${basePath}-${i}`}
              src={`${basePath}${i + 1}.jpg`}
              placeholder="blur"
              blurDataURL={`${basePath}${i + 1}.jpg`}
            />
            <Image
              className="opacity-0"
              alt={`pic-${basePath}-${i}`}
              src={`/images/placeholder.jpg`}
              width={617}
              height={429}
            />
          </div>
        )
      })}
    </div>
  )
}

const Index = () => {
  return (
    <div className="mt-20 flex space-x-1">
      <div className="flex w-1/2 flex-col">
        <AddressTitle address={["Meguro", "Tokyo, Japan"]} />
        <ImageColumn basePath="/images/meguro/" size={30} />
      </div>
      <div className="flex w-1/2 flex-col items-end">
        <AddressTitle
          className="items-end"
          address={["Bo-Yang", "Songkhla, Thailand"]}
        />
        <ImageColumn basePath="/images/songkhla/" size={30} />
      </div>
    </div>
  )
}

export default Index
