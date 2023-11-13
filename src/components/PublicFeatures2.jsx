import features from '../config/features';

const PublicFeatures2 = () => {

         
  return (
    <div className=" py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-base font-semibold leading-7 text-gray-200">Standarize faster</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">One click away from standardization</p>
      <p className="mt-6 text-lg leading-8 text-gray-200">Welcome to a new era of network management. Our cutting-edge application is designed to revolutionize the way you standardize network equipment in your sites. Explore a world of efficiency, automation, and security with our powerful features. Take a closer look below:</p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        {features.map((feature, index) => (
            <div className="relative pl-16 mt-10 hover:scale-105 cursor-pointer" key={index} >
            <dt className="text-base font-semibold leading-7 text-white">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#49d196] shadow-md shadow-zinc-900">
                {feature.icon}
              </div>
              {feature.title}
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
          </div>
          ))}
        
      </dl>
    </div>
  </div>
</div>
  )
}

export default PublicFeatures2
