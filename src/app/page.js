import Image from 'next/image'
import ImagesGallery from "@/components/ImagesGallery";

export default function Home() {
  return (
      <main className='flex flex-col justify-between items-center p-8 min-h-screen bg-white'>
        <div className='w-[500px] self-end max-sm:w-full aspect-[4/3]'>
          <ImagesGallery/>
        </div>
      </main>
  )
}
