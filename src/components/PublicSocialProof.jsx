

const PublicSocialProof = () => {

    const testimonials = [
        {
          name: "John Doe",
          title: "CEO, Company A",
          comment: "This product has transformed our business and increased our revenue significantly.",
        },
        {
          name: "Jane Smith",
          title: "Founder, Company B",
          comment: "We are amazed at the results. Our team's productivity has soared since we started using this solution.",
        },
        {
          name: "David Johnson",
          title: "CTO, Company C",
          comment: "The outstanding support and amazing features have made this product a game-changer for us.",
        },
      ];

  return (
    <section className="bg-zinc-850 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold  mb-6">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-zinc-900 p-6 rounded-lg shadow">
              <div className="text-gray-400 mb-4">
                "{testimonial.comment}"
              </div>
              <div className="text-gray-600 font-semibold">
                - {testimonial.name}, {testimonial.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PublicSocialProof
