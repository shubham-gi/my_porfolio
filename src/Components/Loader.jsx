import {useProgress,Html} from '@react-three/drei'

const Loader = () => {
  const {progress}=useProgress()
  return (
    <Html>
      <p className='text-[14px] font-bold  '>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader