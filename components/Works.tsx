import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Works = () => {
  return (
    <section id="works" className="py-16 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">WORKS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardHeader>
                <CardTitle>Project {item}</CardTitle>
                <CardDescription>Description of Project {item}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Details about the project...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works

