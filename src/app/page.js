import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
    return (
        <main>
            <article>
                <div>

                </div>
                <div class="article-intro-section">
                    <h1>Hi, I'm Daniel!</h1>
                    <p>Only seen in NYC. Find food, travels, and more.</p>
                </div>
                <div class="article-right-section">
                    <h1>Dog</h1>
                    <img className="mercy-style" src="./mercy-crazy.jpg" alt="Dansite" />
                </div>
                <div>

                </div>
            </article>
        </main>
    )
}
