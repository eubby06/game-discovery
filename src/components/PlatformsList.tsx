import React from 'react';
import { FaLaptop, FaXbox, FaPlaystation, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';

export interface Platform {
    name: string;
    slug: string;
}

interface Props {
    platforms: {platform: Platform}[];
}

interface IconProps {
  className?: string;
}

type AllowedPlatforms = 'pc' | 'playstation3' | 'xbox360' | 'nintendo' | 'ios' | 'android' | 'linux';

const iconMap: Record<AllowedPlatforms, React.ComponentType<IconProps>> = {
    'pc': FaLaptop,
    'xbox360': FaXbox,
    'playstation3': FaPlaystation,
    'nintendo': FaLaptop,
    'ios': FaApple,
    'android': FaAndroid,
    'linux': FaLinux
}

const PlatformsList = ({ platforms }: { platforms: any[]}) => {
  return (
    <>
        <div className="flex flex-row gap-2 items-center py-4">
            {platforms.map((platform) => {
                const IconComponent = iconMap[platform.platform.slug as keyof typeof iconMap]

                if (!IconComponent) return null

                return <IconComponent key={platform.platform.slug} className="w-5 h-5 text-gray-600" />
            })}
        </div>
    </>
  )
}

export default PlatformsList