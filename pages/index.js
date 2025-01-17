import Header from '../components/Header'
import Hero from '../components/Hero'
import BlogPreview from '../components/BlogPreview'
import Footer from '../components/Footer'
import WorkExperience from '../components/WorkExperience'

export default function Home() {
    return (
      <div className="bg-gray-50">
        <Header />
        <Hero />
        <WorkExperience />  {/* Add the WorkExperience section */}
        <section id="blog" className="py-12">
          <BlogPreview />
        </section>
        <Footer />
      </div>
    )
  }