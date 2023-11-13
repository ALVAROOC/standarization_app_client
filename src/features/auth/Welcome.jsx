import { Link } from "react-router-dom";


const Welcome = () => {

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date)

    const content = (
        <section className="m-10">
            <div className="container mx-auto mt-8 p-4 bg-zinc-900 shadow-lg rounded-lg flex justify-center shadow-black">
                <h1>WELCOME MAFREN</h1>
                
            </div>
        </section>
    )
  return content
}

export default Welcome
