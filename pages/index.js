import Head from 'next/head'
import { add } from '../library2/react-b/utils'
import HelloWorld from '../library2/react-b/components/HelloWorld'
import MyButton from '../library2/react-b/components/MyButton'

export default function Home() {
  console.log(add(5, 9))
  return (
    <div className="container">
      父仓库

      <HelloWorld name="saqing" />
      <MyButton />

    </div>
  )
}
