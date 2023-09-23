import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return(
    <div className=" w-full min-h-screen max-h-full flex flex-col background items-center lg:h-full">
      <div className=" w-[85%] shadow-lg text-center rounded-lg my-9 py-2 bg-white">
      <h1 className=" text-2xl font-bold">Random GIF</h1></div>
      <div className=" w-full flex flex-col items-center gap-12 ">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
