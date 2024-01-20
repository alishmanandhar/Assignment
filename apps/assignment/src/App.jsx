import './App.css'
import {Modal} from '../../../packages/assignment-ui/src/Modal';
import {Card} from '../../../packages/assignment-ui/src/card';
import {Skeleton} from '../../../packages/assignment-ui/src/skeleton';
import {
  useQuery,
} from '@tanstack/react-query'

const cardList = (data) => {
  return(
      data?.slice(0, 5)?.map((item,index)=>(
        <Card item={item} index={index}/>
      ))
  )
};

function App() {

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
        res.json(),
      ),
  })

  return (
    <main className='bg-[#fe69a3] h-screen w-screen main'>
      <Modal>
        {
          isPending 
            ? <Skeleton/>
            : cardList(data)
        }
      </Modal>
    </main>
  )
}

export default App