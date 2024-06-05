import './App.css';
import DrawerAppBar from './Components/Appbar';
import MediaCard from './Components/Cards';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BasicModal from './Components/BasicModal';
import { useSearchParams } from 'react-router-dom';
import { Category } from '@mui/icons-material';


function Home() {
  const [open, setOpen] = useState(false)
  const [detail, setDetail] = useState({})
  const [product, setProduct] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  const [productDetail, setProductDetail] = useState()






  useEffect(() => {
    const category = searchParams.get('category')
    if (!category || category === 'all') {
      axios('https://fakestoreapi.com/products')
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err))
    }
  }, [searchParams])

  useEffect(() => {
    const category = searchParams.get('category')
    if (category && category !== 'all') {
      axios(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err))
    }
    console.log(searchParams.get('category'));
  }, [searchParams])


  // const viewDetails = (id) => {
  //   axios(`https://fakestoreapi.com/products/${id}`)
  //     .then((res) => {
  //       setDetail(res.data)
  //       setOpen(true)
  //     })
  //     .catch((err) => console.log(err))
  // }
  const viewDetails = (product) => {
    setDetail(product)
    setOpen(true)
  }


  return (
    <div>
      <DrawerAppBar />
      <BasicModal detail={detail} setDetail={setDetail} open={open} handleClose={() => { setOpen(false) }} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap'
        }}>
        {product.map((v, i) => {
          return <MediaCard viewDetails={viewDetails} product={v} key={i}
          />
        })}
      </div>
    </div>
  );
}

export default Home;
