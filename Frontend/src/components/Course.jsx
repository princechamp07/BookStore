import { Link } from "react-router-dom";
import list from "../../public/list.json"
import Cards from "./Cards";
const Course = () => {

  return (
    <>
    
    <div className="max-w-screen-2xl z-50 container mx-auto md:px-20 px-4">
        <div className="mt-[68px] items-center justify-center text-center">
            <h1 className="text-2xl font-semibold md:text-4xl">We're delighted to have you <span className="text-pink-500">Here!</span></h1>
            <p className="mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore quisquam, accusantium impedit repellat, porro quod aut magnam eligendi reiciendis qui assumenda, excepturi modi velit inventore eaque corporis. Doloremque itaque, dolor fuga maiores veritatis ut cum amet ea esse id alias, nam illum similique est temporibus vel optio explicabo cumque?
            </p>
            <Link to="/">
            
            <button  className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200 mt-6">Back</button>
            </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {
        list.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))
        }
        </div>
         </div>
    </>
  )
}

export default Course