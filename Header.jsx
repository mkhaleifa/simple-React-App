export default function Header(){
    return (
    <header>
        <img src="/components/fish.jpg" alt="my photo" className="img-photo"/>
        <h1>Mohamed Khalifa</h1>
        <p className='my-job'>Frontend Developer</p>
        <p className='text-website'>Mohamed.website</p>
        <div className='btn-div'>
            <button className='btn-email btn '>Email</button>
            <button className='btn-linkedin btn'>Linkedin</button>
        </div>
    </header>
    )
}