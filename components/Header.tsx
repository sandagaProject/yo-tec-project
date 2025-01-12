import Link from 'next/link' // Next.jsのリンクコンポーネントをインポート
import { Button } from "@/components/ui/button" // カスタムボタンコンポーネントをインポート

const Header = () => {
  return (
    <header className="w-full py-6 px-4 bg-background"> {/* ヘッダーのスタイルを設定 */}
      <nav className="container mx-auto flex justify-between items-center"> {/* ナビゲーションバーのスタイルを設定 */}
        <Link href="/" className="text-2xl font-bold"> {/* ホームページへのリンク */}
         YO.Tec
        </Link>
        <div className="space-x-4"> {/* ボタン間のスペースを設定 */}
          <Button variant="ghost" asChild>
            <Link href="#works">WORKS</Link> {/* 作品紹介セクションへのリンク */}
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#about">ABOUT US</Link> {/* 会社紹介セクションへのリンク */}
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#blog">BLOG</Link> {/* ブログセクションへのリンク */}
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#service">SERVICE</Link> {/* サービス紹介セクションへのリンク */}
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact">CONTACT</Link> {/* お問い合わせセクションへのリンク */}
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header
