
const mockUrls = [
  'https://utfs.io/f/330ae8d7-332f-46ca-95d5-3ed9f1834e1b-b18pi0.36.19.jpeg',
  'https://utfs.io/f/d4fcb8b9-557e-4165-ab33-385c7ba42000-pia5h.png',
  'https://utfs.io/f/a3792746-9c2d-4b4b-8fd3-30ff9a241733-39nvvj.jpeg'
]
const mockImages = mockUrls.map((url,index)=>({
  id:index,
  url,
}))
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4 ">
        {[...mockImages,...mockImages,...mockImages].map((image)=>(
          <div key={image.id} className="w-48">
            <img src={image.url}></img>

          </div>
        ))}
      </div>
      
    </main>
  );
}
