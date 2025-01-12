import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Service = () => {
  return (
    <section id="service" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">SERVICE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Web Development', 'UI/UX Design', 'Mobile App Development'].map((service) => (
            <Card key={service}>
              <CardHeader>
                <CardTitle>{service}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Description of {service} service...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service

