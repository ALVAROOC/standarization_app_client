
const PublicFeatures = () => {

  const features = [
    {
      title: "Full Automation",
      description: "Simplify Device Configuration in Minutes",
    },
    {
      title: "Multi-Site Mngt.",
      description: "Unify Your Global Networks Automation in One Place.",
    },
    {
      title: "Compliance and Security",
      description: "Ensure Compliance and Protection.",
    },
    {
      title: "User-Friendly",
      description: "Intuitive User Interface.",
    },
    {
      title: "User-Friendly",
      description: "Intuitive User Interface.",
    },
    {
      title: "User-Friendly",
      description: "Intuitive User Interface.",
    },
    {
      title: "User-Friendly",
      description: "Intuitive User Interface.",
    },
    {
      title: "User-Friendly",
      description: "Intuitive User Interface.",
    },
  ];
  return (
    <>
    <section className="bg-zinc-850 py-12 min-h-screen">
      <div className="container mx-auto text-center mt-10">
        <h2 className="text-3xl font-bold  mb-6">Key Features</h2>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 mt-20">
          {features.map((feature, index) => (
            <div key={index} className="cursor-pointer mt-20 p-6 rounded-lg border border-gray-600 shadow-lg hover:shadow-lg hover:shadow-[#49d196]">
              <h3 className="text-2xl font-semibold text-gray-200  mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="max-h-2 mt-20 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg max-w-sm justify-center mx-auto"> </div>
      </div>
    </section>
    </>
  )
}

export default PublicFeatures
