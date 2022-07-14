import { GridCars} from 'components/Organisms/GridCars/GridCars'
import GridCategories from 'components/Organisms/GridCategories/GridCategories'
import ProductGrid from 'components/Organisms/ProductGrid/ProductGrid'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import motor from 'public/assets/motor.png'
import inyector from 'public/assets/inyector-chevrolet-aveo-lt-ls.jpg'
import empacadura from 'public/assets/empacadura-camara-nissan-sentra-b13-b14.jpg'
import bomba from 'public/assets/bomba-de-aceite-chery-arauca-x1.jpg'
import amortiguador from 'public/assets/base-amortiguador-delantera-optra.jpg'
import { Product } from 'types'

interface HomeProps {
  productList: Product[]
}

const Home = ({ productList } : InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <GridCars />
      <GridCategories />
      <ProductGrid productList={productList} space_top />
    </>
  )
}

export default Home

export const getStaticProps : GetStaticProps<HomeProps> = async () => {
  const productList : Product[] = [
    {
      id: 1,
      price: 850,
      slug: 'motor-2009-2010-chev-aveo',
      title: 'Motor 7/8 2009 2010 Chev Aveo',
      image: motor,
      description: 'Motor 7/8 2009 2010 Chev Aveo 1.6l Usado Importado De Usa en venta en Maracaibo Zulia por sólo U$S 950.00'
    },
    {
      id: 2,
      price: 30,
      slug: 'inyector-chevrolet-aveo-lt-ls',
      title: 'Inyector Chevrolet Aveo LT LS',
      image: inyector,
      description: 'Inyector Chevrolet Aveo LT LS'
    },
    {
      id: 3,
      price: 5,
      slug: 'empacadura-camara-nissan-sentra-b13-b14',
      title: 'Empacadura Camara Nissan Sentra B13 B14',
      image: empacadura,
      description: 'Articulo EMPACADURA DE CAMARA Modelo SENTRA B13 B14'
    },
    {
      id: 4,
      price: 45,
      slug: 'bomba-de-aceite-chery-arauca-x1',
      title: 'Bomba De Aceite Chery Arauca X1',
      image: bomba,
      description: 'Bomba De Aceite Chery Arauca X1 Modelo ARAUCA X1'
    },
    {
      id: 5,
      price: 9,
      slug: 'base-de-amortiguador-delantera-chevrolet',
      title: 'Base de Amortiguador Delantera Chevrolet',
      image: amortiguador,
      description: 'Base de Amortiguador Delantera Chevrolet Optra'
    },
    {
      id: 6,
      price: 850,
      slug: 'motor-2009-2010-chev-aveo',
      title: 'Motor 7/8 2009 2010 Chev Aveo',
      image: motor,
      description: 'Motor 7/8 2009 2010 Chev Aveo 1.6l Usado Importado De Usa en venta en Maracaibo Zulia por sólo U$S 950.00'
    },
    {
      id: 7,
      price: 30,
      slug: 'inyector-chevrolet-aveo-lt-ls',
      title: 'Inyector Chevrolet Aveo LT LS',
      image: inyector,
      description: 'Inyector Chevrolet Aveo LT LS'
    },
    {
      id: 8,
      price: 5,
      slug: 'empacadura-camara-nissan-sentra-b13-b14',
      title: 'Empacadura Camara Nissan Sentra B13 B14',
      image: empacadura,
      description: 'Articulo EMPACADURA DE CAMARA Modelo SENTRA B13 B14'
    },
    {
      id: 9,
      price: 45,
      slug: 'bomba-de-aceite-chery-arauca-x1',
      title: 'Bomba De Aceite Chery Arauca X1',
      image: bomba,
      description: 'Bomba De Aceite Chery Arauca X1 Modelo ARAUCA X1'
    },
    {
      id: 10,
      price: 9,
      slug: 'base-de-amortiguador-delantera-chevrolet',
      title: 'Base de Amortiguador Delantera Chevrolet',
      image: amortiguador,
      description: 'Base de Amortiguador Delantera Chevrolet Optra'
    }
  ]

  return {
    props: {
      productList
    }
  }
}