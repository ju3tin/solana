import dynamic from 'next/dynamic'
// import OpenStreetMap from '../component/OpenStreetMap'
const OpenStreetMap = dynamic(() => import('../components/OpenStreetMap'), {
  ssr: false,
})
const map1 = () => {
  return (
    <>
      <h1 className='text-center'>OpenStreetMap</h1>
      <OpenStreetMap />
    </>
  )
}
export default map1