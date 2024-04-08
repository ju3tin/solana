import dynamic from 'next/dynamic'

// import OpenStreetMap from '../component/OpenStreetMap'
const OpenStreetMap = dynamic(() => import('../components/OpenStreetMap'), {
  ssr: false,
})

const map = () => {
  return (
    <>
      <OpenStreetMap />
    </>
  )
}

export default map