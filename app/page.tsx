import Header from '@/components/Header' // ヘッダーコンポーネントをインポート
import Works from '@/components/Works' // 作品紹介コンポーネントをインポート
import AboutUs from '@/components/AboutUs' // 会社紹介コンポーネントをインポート
import Blog from '@/components/Blog' // ブログコンポーネントをインポート
import Service from '@/components/Service' // サービス紹介コンポーネントをインポート
import Contact from '@/components/Contact' // お問い合わせコンポーネントをインポート

// ホームページのメインコンポーネント
export default function Home() {
  return (
    <main>
      {/* 各セクションを表示 */}
      <Header />
      <Works />
      <AboutUs />
      <Blog />
      <Service />
      <Contact />
    </main>
  )
}
