import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '../../apis/products'
import { Link } from 'react-router-dom'

export default function NavbarProduct() {
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery(['products'], () => getAllProducts())

  if (isError) {
    return <div>Error occured while getting Products</div>
  }

  if (isLoading) {
    return <div>Products are loading...</div>
  }

  return (
    <div className="bg-white font-sans font-bold py-6 px-4 m-auto">
      {/* <div className="flex-row w-1/2 m-auto items-center text-center justify-center object-contain"> */}
      {products.slice(0, 3).map((product) => (
        <div key={product.id} className="w-1/3 h-1/3 bg-white p-5 inline-block">
          <Link to={'/'}>
            <div className="group p-3">
              <p className="group-hover:-translate-y-3 transform transition-transform">
                {product.name}
              </p>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-80 m-auto mt-2 group-hover:scale-110 transform transition-transform"
              />
            </div>
          </Link>
        </div>
      ))}
      {/* </div> */}
    </div>
  )
}
