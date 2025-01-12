import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">BLOG</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item}>
              <CardHeader>
                <CardTitle>Blog Post {item}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Summary of blog post {item}...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

